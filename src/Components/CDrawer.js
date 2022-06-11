import React, { useState } from "react";
import Calendar from "react-calendar";
import {
  Drawer,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import 'react-calendar/dist/Calendar.css';
import { SystemSecurityUpdate } from "@mui/icons-material";
import "./CDrawer.css"

const authmanager = require("../manager/Authmanager").default.getInstance();

/**
 * displays a button to open a drawer which contains a table with dummy data
 * @param data {{
 *     name:string,
 *     credits:number,
 *     art:string,
 *     semester:number
 * }[]}
 * @param style {any}
 * @return {JSX.Element}
 */
const CDrawer = ({ data, style }) => {
    React.useEffect(()=>{
        start();
    },[])

  var Minio = require("minio");
  var minioClient = new Minio.Client({
    endPoint: "141.56.132.18",
    port: 9000,
    useSSL: false,
    accessKey: "admin",
    secretKey: "hgjkrwehg46782h87z",
  });

  function start() {
    console.log("starten wir")
    
    var arr = [];
    var arr2 = [];
    setModuls([]);
    
    minioClient.getObject("status", "data.json", function (err, dataStream) {
      if (err) {
        return console.log(err);
      }
      dataStream.on("data", function (chunk) {
        arr.push(chunk);
      });
      dataStream.on("end", function () {
        //  console.log(arr.toString())
        var u = JSON.parse(arr.toString()).user;
        //   console.log("Redy")

        for (var i = 0; i < u.length; i++) {
            
            if ( `${u[i].id}` === `${authmanager.userID}`) {
                setUserData(u[i]);
                console.log("todo")
            
                if(u[i].todo!==undefined){
                    
                    console.log(u[i].todo)
                    setTodo(u[i].todo)
                }
               
                console.log("ähhh");

            var use = u[i];
            // eslint-disable-next-line no-loop-func
            minioClient.getObject("status","modul.json",function (err, dataStream) {
                if (err) {
                  return console.log(err);
                }
                dataStream.on("data", function (chunk) {
                  arr2.push(chunk);
                });
                dataStream.on("end", function () {
                  var m = JSON.parse(arr2.toString()).module;
                  for (var c = 0; c < m.length; c++) {
                   try{
                    if (use.module.indexOf(m[c].modulId) > -1) {
                      console.log(m[c].modulId + m[c].modulName)
                      var tmp = moduls;
                      tmp.push(m[c]);
                      setModuls(tmp);
                    }}catch{console.log("leeres Modul")}
                  }
                });
              }
            );
          }
        }
      });
    });
  }

  function upload(u) {

    var t = "{\"user\":" + JSON.stringify(u) + "}"
    minioClient.putObject('status', 'data.json', t, t.size, function (err, objInfo) {
        if (err) {
            return console.log(err) // err should be null
        }
        console.log("Success", objInfo)
    })
}

function pushChangedDataToServer(value){
   
    var arr = [];
            minioClient.getObject('status', 'data.json', function (err, dataStream) {
                if (err) {
                    return console.log("Failed to connect to server!")
                }
                dataStream.on('data', function (chunk) {
                    arr.push(chunk)
                })
                dataStream.on('end', function () {

                    var reg = JSON.parse(arr.toString()).user
                    let tochange=null;
                    reg.map((u,i) => {
                        if (`${u.id}` === `${value.id}`) {
                            console.log("changed") 
                            tochange=i; 
                        }
                    })
                    if(tochange!==null){
                        reg[tochange]=value;
                    }
                    upload(reg);
                })
            })
}

  const [userData, setUserData] = React.useState(null);
  const [moduls, setModuls] = React.useState([]);
  const [userId, setUserId] = useState(authmanager.userID);
  const [userNick, setUserNick] = useState(authmanager.user);
  const [kal, setkal] = useState(new Date());

  const [todo,setTodo]=React.useState([]);
  const [drawer, setDrawer] = useState(false);

  function submitTask(){
    var date = String(kal).split(" ");
    console.log(date[3]+"-"+date[1]+"-"+date[2])
        let d=date[3]+"-"+date[1]+"-"+date[2]
        let task=document.getElementById("new-task-input").value
        let zeit=document.getElementById("zeit").value

        var topush={
            "date": d,
            "task":task,
            "time":zeit
        }
        var ud=null
        if(userData.todo===undefined)
        {ud=userData 
            ud.todo=[topush]
            setUserData(ud)
        }else{
             ud=userData 
            ud.todo.push(topush)
            setUserData(ud)	
        }
        let t= todo
        t.push(topush)
        setTodo(t)
        pushChangedDataToServer(ud)
  }

  const liste=todo.map((item) => <ul><label className="TodoLabels">{item.task}-{item.ime}-{item.date}</label></ul>)

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  /**
   * table of courses
   * @return {JSX.Element}
   */
  const drawerContent = () => (
    <Box role={"presentation"} >
      <div className="kalender">
        <div>
          <Calendar onChange={setkal} value={kal} />
        </div>
      </div>
      <div>
        <div id="new-task-form">
          <input
            type="text"
            name="new-task-input"
            id="new-task-input"
            placeholder="Was hast du vor?"
          />
          <input type="time" className="Zeit" id="zeit" placeholder="Wann?" />
          <Button variant="contained" onClick={submitTask}>Contained</Button>
        </div>
        <section className="task-list">
          <h2>Aufgaben</h2>
          <div>
            <ol>
          {liste}
          </ol></div>
        </section>
      </div>
    
      <TableContainer onClick={toggleDrawer} component={"Paper"}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Modulname</TableCell>
              <TableCell align="right">Credits</TableCell>
              <TableCell align="right">Semester</TableCell>
              <TableCell align="right">Art</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((modul) => (
              <TableRow key={modul.name}>
                <TableCell component="th" scope="row">
                  {modul.name}
                </TableCell>
                <TableCell align="right">{modul.credits}</TableCell>
                <TableCell align="right">{modul.semester}</TableCell>
                <TableCell align="right">{modul.art}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <div style={style}>
      <Button
        variant="contained"
        size={"large"}
        disableElevation
        onClick={toggleDrawer}
      >
        Medieninformatik
      </Button>
      <Drawer anchor={"right"} open={drawer}>
        {drawerContent()}
      </Drawer>
    </div>
  );
};

export default CDrawer;
