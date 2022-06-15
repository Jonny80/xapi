import React, { useEffect } from "react";
import { DemoNews, DemoSteps, DrawerData } from "../Demo/Data";
import { AppBar, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import CDrawer from "../Components/CDrawer";
import CNews from "../Components/CNews";
import CStepper from "../Components/CStepper";
import Agenda from "../Components/Agenda";
import { Studiumplan } from "../Components/Studiumplan";
import Timeline from "../Components/Timeline";
import { TaskList } from "../Components/TaskList";

const authmanager = require("../manager/Authmanager").default.getInstance();

export default function Demo() {
  useEffect(() => {
    console.log(authmanager.user);
    console.log(authmanager.userID);
  }, []);

  return (
    <div style={{ height: "100%", background: "#E6E6E6" }}>
      <AppBar
        style={{ alignItems: "center", justifyContent: "center" }}
        position={"static"}
      >
        {/* <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
          <CDrawer style={{}} data={DrawerData} />
        </Typography> */}
      </AppBar>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          width: "100%",
          display: "flex",
          marginTop: "1%",
        }}
      >
        <CNews data={DemoNews} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "20px",
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
          <div>
            <Studiumplan />
          </div>
          <div>
            <h2>Semester 4</h2>
            <div>
              <Timeline />
            </div>
          </div>
        </div>
        <div style={{ width: "15%" }}>
          <h2>Aufgaben</h2>
          <Agenda data={DemoNews} />
        </div>
      </div>
    </div>
  );
}
