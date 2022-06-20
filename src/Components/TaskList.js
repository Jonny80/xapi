import React from "react";
import Calendar from "react-calendar";
import "../Components/customCalendar.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import {months} from "../Demo/Data";
const authmanager = require("../manager/Authmanager").default.getInstance();

export const TaskList = () => {

  React.useEffect(() => {
    start();
  }, []);

  var Minio = require("minio");
  var minioClient = new Minio.Client({
    endPoint: "141.56.132.18",
    port: 9000,
    useSSL: false,
    accessKey: "admin",
    secretKey: "hgjkrwehg46782h87z",
  });

  function pushChangedDataToServer(value) {
    var arr = [];
    minioClient.getObject("status", "data.json", function(err, dataStream) {
      if (err) {
        return console.log("Failed to connect to server!");
      }
      dataStream.on("data", function(chunk) {
        arr.push(chunk);
      });
      dataStream.on("end", function() {
        var reg = JSON.parse(arr.toString()).user;
        let tochange = null;
        reg.map((u, i) => {
          if (`${u.id}` === `${value.id}`) {
            console.log("changed");
            tochange = i;
          }
        });
        if (tochange !== null) {
          reg[tochange] = value;
        }
        upload(reg);
      });
    });
  }
  function upload(u) {
    var t = '{"user":' + JSON.stringify(u) + "}";
    minioClient.putObject("status", "data.json", t, t.size, function(
      err,
      objInfo
    ) {
      if (err) {
        return console.log(err); // err should be null
      }
      console.log("Success", objInfo);
    });
  }

var initialList=[];

  function start() {
    console.log("starten wir");
  //  console.log(new Date);
    var arr = [];
  

    minioClient.getObject("status", "data.json", function(err, dataStream) {
      if (err) {
        return console.log(err);
      }
      dataStream.on("data", function(chunk) {
        arr.push(chunk);
      });
      dataStream.on("end", function() {
        //  console.log(arr.toString())
        var u = JSON.parse(arr.toString()).user;
        //   console.log("Redy")

        for (var i = 0; i < u.length; i++) {
          if (`${u[i].id}` === `${authmanager.userID}`) {
            setUserData(u[i]);
         //   console.log(u[i])
            if (u[i].todo !== undefined) {
          //    console.log(u[i].todo);
              setTodo(u[i].todo);
              setList(u[i].todo)
              
            }else{
              initialList = [
                {
                  name: "Thomas",
                  time: "12:54",
                  date: new Date(),
                },
              ];
            }
          }
        }
      });
    });
  }


     
  
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState("");
  const [value, setDate] = React.useState(new Date());
  const [todo, setTodo] = React.useState([]);
  const [userData, setUserData] = React.useState(null);

  function handleNameChange(event) {
  //  console.log(event.target.value);
    setName(event.target.value);
  }
  function handleTimeChange(event) {
    setTime(event.target.value);
  }
  function handleDateChange(event) {
  //  console.log(event);
    setDate(event);
  }

  function handleAdd() {
    const date = value.toISOString();
    
    //console.log("hier" +value)
    //console.log("h"+formatDate(new Date()).split(" ")[0])
    
    const newList = list.concat({ name:name, time:time, date:formatDate(value).split(" ")[0] });

    setList(newList);

    setName("");
    setDate(new Date());
    setTime("");

    var ud = null;
    if (userData.todo === undefined || userData.todo === null) {
      ud = userData;
      ud.todo = newList;
      setUserData(ud);
    } else {
      ud = userData;
      ud.todo=newList;
      setUserData(ud);
    }
    pushChangedDataToServer(ud);

  }

  function getMonth(date) {
      return months[date.getMonth()];
  }
  function getHeader(date) {
      return <div style={{display:"flex",flexDirection:"row",alignItems:"baseline"}}>
          <div style={{fontSize:"20px",fontWeight:"bold"}}>{getMonth(date)}</div><div>{date.getFullYear()}</div>
      </div>
  }


  function formatDate(date) {
      //console.log(list)
     //console.log(typeof date)
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      let hour = date.getHours();
      let minute = date.getMinutes();
      if (minute < 10 ){
          minute = "0" + minute;
      }
      return year + "-" + day + "-" + month + " " + hour + ":" + minute + " Uhr";


  }

  return (
    <div>
      <form
        onSubmit={handleAdd}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Calendar next2Label={null} prev2Label={null} value={value}
                  navigationLabel={({ date, label, locale, view }) => getHeader(date)}
                  onChange={setDate}
                  prevLabel={<ArrowBackIosNewIcon />}
                  nextLabel={<ArrowForwardIosIcon/>}
        />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Was hast du vor?"
          style={{
            borderRadius: "8px",
            padding: "7px",
            marginTop: "7px",
          }}
        />
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          style={{
            borderRadius: "8px",
            padding: "7px",
            marginTop: "7px",
            marginBottom: "7px",
          }}
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          style={{ background: "#171923" }}
        >
          Add
        </Button>
      </form>

      <div style={{ marginTop: "15px" }}>
        {list.map((item) => (
          <Accordion style={{ marginBottom: "10px", borderRadius: "10px " }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#D1D1D1" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{
                background: "#171923",
                color: "#D1D1D1",
                borderRadius: "10px ",
              }}
            >
              <div>
                <p>{item.name}</p>
                <p style={{ fontSize: "11px", marginTop: "-8px" }}>
                  {item.time}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.date} {item.name}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
