import React from "react";
import Background from "../res/result.svg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Grid, Stack, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
const networkmanager = require("../manager/Networkmanager").default.instance;

export default function Login() {
    let navigate = useNavigate();

     const handleClick = async () => {
         console.log("sending")
        await networkmanager.sendStatement("login","entering username and password")
        navigate("/dashboard");
    }


    const login = (
        <Stack spacing={2}>
            <div style={{display:"flex",justifyContent:"center"}}>Login</div>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Username" variant="standard" />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Password" variant="standard" />
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
            <Box >
                <Card variant="outlined">
                    <CardContent>
                        {login}
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
