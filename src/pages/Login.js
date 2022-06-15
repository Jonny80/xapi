import React, {useEffect, useState} from "react";
import Background from "../res/result.svg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Grid, Stack, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
const authmanager = require("../manager/Authmanager").default.getInstance();
const Minio = require("minio");
const sha512 = require("js-sha512");


export default function Login() {
    const [error,seterr] = useState("");
    const [minioClient,setMinioClient] = useState(undefined);
    const [hash, sethas] = React.useState("");
    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");
    useEffect(()=>{
        let client = new Minio.Client({
            endPoint: "141.56.132.18",
            port: 9000,
            useSSL: false,
            accessKey: "admin",
            secretKey: "hgjkrwehg46782h87z",
        });
        checkMinio(client);
        setMinioClient(client);
    },[])


    async function checkMinio(client) {
        if (!client) return false;
        client.listBuckets(function (err, buckets) {
            if (err) {
                console.log(err);
                seterr("Failed to connect to server!");
                return false;
            }
        });
        return true;
    }



    function hashing(pepper) {
        var salt = "dkgtsmhtebankmencrtiohcaik";
        return sha512(pepper + salt);
    }
    function passinput(value) {
        setPassword(value);
        sethas(hashing(value));
    }
    let navigate = useNavigate();

     const handleClick = async () => {
        login();

    }

    function login() {

        if (`${mail}`.length > 0 && `${password}`.length > 0) {
            var arr = [];
            minioClient.getObject("status", "data.json", function (err, dataStream) {
                if (err) {
                    return console.log(err) ^ seterr("Failed to connect to server!");
                }
                dataStream.on("data", function (chunk) {
                    arr.push(chunk);
                });
                dataStream.on("end", function () {
                    //  console.log(arr.toString())
                    var users = JSON.parse(arr.toString()).user;
                    //   console.log("Redy")

                    for (var i = 0; i < users.length; i++) {
                        if (users[i].username === mail && users[i].passwort === hash) {
                            authmanager.setUserId(users[i].id);
                            authmanager.setUserName(users[i].username);
                            console.log(users[i].id);
                            console.log(users[i].username);
                            navigate("/home")
                        }
                    }
                });
            });
        } else {
            seterr("Please fill in all fields!");
        }
    }

    const handlePasswordChange = (event) => {
         passinput(event.target.value)
    };
    const handleMailChange = (event) => {
        setMail(event.target.value);
    };


    const loginUI = (
        <Stack spacing={2}>
            <div style={{display:"flex",justifyContent:"center"}}>Login</div>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Username" variant="standard" v
                                       alue={mail}
                                       onChange={handleMailChange}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Password" type={"password"} value={password}
                            onChange={handlePasswordChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <CardActions style={{display:"flex",justifyContent:"center"}}><Button onClick={()=>handleClick()} variant="contained">Login</Button></CardActions>

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
            <label className="loginErrorLabel">{error}</label>
            <Box >
                <Card variant="outlined">
                    <CardContent>
                        {loginUI}
                    </CardContent>
                </Card>
            </Box>
            <div style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "space-between",
            }}>

                <Button style={{
                    marginRight:"10%",
                    marginBottom:"10%"
                }}
                        variant="contained" href="/register">Register</Button>
            </div>
        </div>
    )
}
