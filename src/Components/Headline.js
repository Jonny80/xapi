import React from 'react'
import "./Headline.css"
import {useNavigate} from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";

export default function Headline({setModulNummer,modulNummer,studienplanStatus,setStudienPlanStatus}) {

    let navigate = useNavigate();

    function changeState(){
    setStudienPlanStatus(!studienplanStatus);
}

function switchModul(v){
    let alt = document.getElementById("navModuls"+modulNummer);
    let neu = document.getElementById("navModuls"+v);
    setModulNummer(v)
   
    alt.style="color:#1C1B1F";

    neu.style="color: white; background: #1C1B1F;border-radius: 50px;"
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
            {studienplanStatus &&
            <Button  onClick={changeState} id="studgang" variant="text" className="button" >
                Modulübersicht
            </Button>
            }
            {!studienplanStatus &&
            <Button  onClick={changeState} id="studgang" variant="text" className="button" >
                Studiengangsübersicht
            </Button>
            }
       
        </div>
        {!studienplanStatus &&
            <div id="modulContainer">
            <Button value={1} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls1">IT I</Button>
            <Button value={2} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls2">SE II</Button>
            <Button value={3} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls3">AVS</Button>
            <Button value={4} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls4">MP</Button>
            <Button value={5} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls5">CGV II</Button>
            <Button value={6} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls6">EMMS</Button>
            <Button value={7} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls7">GIS</Button>
            <Button value={8} onClick={(e)=>{switchModul(e.target.value)}}id="navModuls8">INFOVIS</Button>
            </div>
        }
        
    </div>
  )
}
