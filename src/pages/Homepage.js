import React from "react";
import Headline from "../Components/Headline";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {Studiumplan} from "../Components/Studiumplan";
import {TaskList} from "../Components/TaskList";
import Agenda from "../Components/Agenda";
import {DemoNews} from "../Demo/Data";
import Timeline from "../Components/Timeline";

export default function Homepage() {

    const [studienplanStatus,setStudienPlanStatus]=React.useState(true);

    return(
        <div style={{height:"100vh",display:"flex",flexDirection:"column",background: "#E6E6E6"}} >
            <div className="headline">
                <Headline studienplanStatus={studienplanStatus} setStudienPlanStatus={setStudienPlanStatus}></Headline>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: "20px",
                    background: "#E6E6E6",

                }}
            >
                <div
                    style={{
                        width: "15%",
                    }}
                >
                    <TaskList />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "55%" }}>
                    {
                        studienplanStatus ?
                            <div style={{background:"white"}}>
                            <Studiumplan />
                        </div> : <div></div>
                    }

                    <div style={{background:"white",marginTop:"2%"}}>
                        <h2>Semester 4</h2>
                        <div>
                            <Timeline />
                        </div>
                    </div>
                </div>
                <div style={{ width: "15%" ,background:"white"}}>
                    <h2>Aufgaben</h2>
                    <Agenda data={DemoNews} />
                </div>
            </div>
    </div>)
}