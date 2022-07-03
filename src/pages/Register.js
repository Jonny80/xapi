import React, {useState} from "react";
import Background from "../res/result.svg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Stack, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";


// Registers automatically as Student
export default function Register() {

    var Minio = require("minio");
    var minioClient = new Minio.Client({
        endPoint: "141.56.132.18",
        port: 9000,
        useSSL: false,
        accessKey: "admin",
        secretKey: "hgjkrwehg46782h87z",
    });
    function upload(u) {

        var t = "{\"user\":" + JSON.stringify(u) + "}"
        minioClient.putObject('status', 'data.json', t, t.size, function (err, objInfo) {
            if (err) {
                return console.log(err) // err should be null
            }
            console.log("Success", objInfo)
        })
    }

    function hashing(pepper) {
        var salt = "dkgtsmhtebankmencrtiohcaik"

        var sha512 = require('js-sha512');
        return sha512(pepper+salt)

    }

    function getId(u) {
        var id = 1;
        var ident = 1
        while (ident === 1) {
            ident = 0
            for (var i = 0; i < u.length; i++) {
                if (u[i].id === id) {
                    id++;
                    ident = 1
                }
            }
        }
        return id;
    }

    let navigate = useNavigate();


    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [rPassword,setRPassword]= useState("");
    const [hashpassword, setHashPw] = useState("");

    const handleRPasswordChange = (event) => {
        setRPassword(event.target.value);
    };

    async function checkIfUserIsTaken() {
        const promise = new Promise((resolve, reject)=>{
            var arr = [];
            minioClient.getObject('status', 'data.json', function (err, dataStream) {
                if (err) {
                    return false;
                }
                dataStream.on('data', function (chunk) {
                    arr.push(chunk)
                })
                dataStream.on('end', function () {

                    var reg = JSON.parse(arr.toString()).user
                    var te = true
                    console.log(reg);
                    reg.map((u) => {
                        if (u.username.toLowerCase() === name.toLowerCase()) {
                            te = false;
                        }
                    })
                    resolve(reg);

                })
                dataStream.on("error",function (err){
                    console.log(err);
                    reject(false);
                })

            })

        })
        return promise;
    }


    async function registrieren(){

       let reg = await checkIfUserIsTaken().catch(()=>{
           return false;
       });
        if (reg===false){
            console.log("username already taken")
            setName("");
            return false;
        }
        let newid = getId(reg)
        let ob = {
            username: name,
            email: email,
            age:-1,
            Nutzergruppe: "Student",
            passwort: hashpassword,
            id: newid,
            module:["E802","I110","I121","I310","I381","I135","I320","I351","I378","I362"]
        }
        reg.push(ob);
        upload(reg);
        console.log(reg);
    }

    const handlePasswordChange = (event) => {
        setHashPw(hashing(event.target.value));
        setPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleMailChange = (event) => {
        setEmail(event.target.value);
    };

    async function handleClick() {
        if (!(rPassword === password)) {
            console.log("Repeated password does not match");
            return;
        }
        if(await registrieren()===false){
            return
        }
        navigate("/")
    }
    const register = (
        <Stack spacing={2}>
            <div style={{display:"flex",justifyContent:"center"}}>Login</div>
            <TextField id="standard-basic" label="Username" variant="standard" value={email} onChange={handleMailChange}/>
            <TextField id="standard-basic" label="Name" variant="standard"  value={name} onChange={handleNameChange}/>
            <TextField id="standard-basic" label="Password" type="password" value={password} onChange={handlePasswordChange}/>
            <TextField id="standard-basic" label="repeat password" type="password" value={rPassword} onChange={handleRPasswordChange}/>
            <CardActions onClick={async ()=>handleClick()} style={{display:"flex",justifyContent:"center"}}><Button variant="contained">Register</Button></CardActions>

        </Stack>
    )

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <Box >
                <Card variant="outlined">
                    <CardContent>
                        {register}
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}
