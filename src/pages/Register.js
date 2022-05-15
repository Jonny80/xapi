import React, {useState} from "react";
import Background from "../res/result.svg"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Stack, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
const networkmanager = require("../manager/Networkmanager").default.instance;

export default function Register() {
    let navigate = useNavigate();


    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [rPassword,setRPassword]= useState("");

    const handleRPasswordChange = (event) => {
        setRPassword(event.target.value);
    };

    const handlePasswordChange = (event) => {
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
        await networkmanager.addUser(name,password,email);
        await networkmanager.sendStatement("register","register a new user")
        navigate("/");
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
