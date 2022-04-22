import React from "react";
import Background from "../res/result.svg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Stack, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    const register = (
        <Stack spacing={2}>
            <div style={{display:"flex",justifyContent:"center"}}>Login</div>
            <TextField id="standard-basic" label="Username" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
            <TextField id="standard-basic" label="repeat password" variant="standard" />
            <CardActions onClick={handleClick} style={{display:"flex",justifyContent:"center"}}><Button variant="contained">Register</Button></CardActions>

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
