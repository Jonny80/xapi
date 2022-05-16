import React from "react";
import CDrawer from "../Components/CDrawer";
import {DemoNews, DemoSteps, DrawerData} from "../Demo/Data";
import {AppBar, Container, Grid, Typography} from "@mui/material";
import CNews from "../Components/CNews";
import CStepper from "../Components/CStepper";
import Agenda from "../Components/Agenda";
import Box from "@mui/material/Box";

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
                    marginTop:"1%"

                }}>
                    <CNews data={DemoNews}/>
                </div>
            <Grid container
                  justifyContent="flex-end"
                  alignItems="stretch"
                  display={"flex"}
            >
            <Grid item xs={6} >
                <Container spacing={2}>
                    <h2>Status</h2>
                {DemoSteps.map(step=>{
                    return <CStepper data={step}/>
                })}
                </Container>
            </Grid>
                <Grid item xs={6}>
                    <Box display={"flex"} justifyContent={"center"} >
                        <div>
                            <h2>Status</h2>
                            <Agenda data={DemoNews}/>
                        </div>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}