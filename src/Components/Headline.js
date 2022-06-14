import React from 'react'
import "./Headline.css"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Headline({studienplanStatus,setStudienPlanStatus}) {

function changeState(){
    setStudienPlanStatus(!studienplanStatus);
}

  return (
    <div style={{height:"105px"}}>
        <div><p id='page'>home</p> <AccountCircleIcon id="account"/>< LogoutIcon id="logout" /></div>
        <div className='subhead'><p id='name'>043 Medieninformatik</p><div onClick={changeState} className='button'>Studiengangsübersicht <KeyboardArrowDownIcon id="arrow"/></div></div>
    </div>
  )
}
