import React from "react";
import CDrawer from "../Components/CDrawer";
import {DemoNews, DemoSteps, DrawerData} from "../Demo/Data";
import {AppBar, Container, Grid, Typography} from "@mui/material";
import CNews from "../Components/CNews";
import CStepper from "../Components/CStepper";

export default function Demo() {


    return(
        <div style={{height:"100%"}}>
            <AppBar style={{alignItems:"center",justifyContent:"center"}} position={"static"}>
                <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
                    <CDrawer style={{}} data={DrawerData}/>
                </Typography>
            </AppBar>
                <div style={{
                    justifyContent:"center",alignItems:"center",height:"30%",width:"100%",
                    display:"flex",
                    marginTop:"2%"

                }}>
                    <CNews data={DemoNews}/>
                </div>
            <div style={{width:"50%"}}>
                {DemoSteps.map(step=>{
                    return <CStepper data={step}/>
                })}
            </div>

        </div>
    )
}