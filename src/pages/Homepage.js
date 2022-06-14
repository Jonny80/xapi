import React from "react";
import Headline from "../Components/Headline";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {Studiumplan} from "../Components/Studiumplan";

export default function Homepage() {

    const [studienplanStatus,setStudienPlanStatus]=React.useState(true);

    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column"}}>
            <div className="headline">
                <Headline studienplanStatus={studienplanStatus} setStudienPlanStatus={setStudienPlanStatus}></Headline>
            </div>
            <Box style={{flex:1,marginTop:"2%"}}>
            <Grid container spacing={2} flex={"1 1 auto"}>
                <Grid item xs justifyContent={"center"} alignItems={"center"} display={"flex"}>
                    <h1>Hello</h1>
                </Grid>
                <Grid item xs={6} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                    {
                        studienplanStatus ? <Studiumplan/> : <div></div>

                    }
                </Grid>
                <Grid item xs justifyContent={"center"} alignItems={"center"} display={"flex"}>
                    <h1>Hello</h1>
                </Grid>
            </Grid>
            </Box>
    </div>)
}