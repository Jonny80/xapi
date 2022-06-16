import React from 'react'
import "./Headline.css"
import {useNavigate} from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";

export default function Headline({studienplanStatus,setStudienPlanStatus}) {

    let navigate = useNavigate();

    function changeState(){
    setStudienPlanStatus(!studienplanStatus);
}

  return (
    <div style={{height:"105px"}}>
        <div style={{background:"white",width:"100%",height:"50px"}}>
            <p id='page'>home</p>
            <IconButton id={"account"} onClick={()=>{}}><AccountCircleIcon/></IconButton>
            <IconButton id={"logout"} onClick={()=>navigate("/")}><LogoutIcon/></IconButton>
        </div>
        <div className='subhead'>
            <p id='name'>043 Medieninformatik</p>
            <Button color={"inherit"} onClick={changeState} variant="text" className="button" endIcon={<KeyboardArrowDownIcon />}>
                Studiengangsübersicht
            </Button>
        </div>
    </div>
  )
}
