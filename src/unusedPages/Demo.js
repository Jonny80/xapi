import React, { useEffect } from "react";
import { DemoNews, DemoSteps, DrawerData } from "../Demo/Data";
import { AppBar, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Epg, Layout } from "planby";

import { useApp } from "../useApp";

import CDrawer from "../Components/CDrawer";
import CNews from "../Components/CNews";
import CStepper from "../Components/CStepper";
import Agenda from "../Components/Agenda";
import { Studiumplan } from "../Components/Studiumplan";
import { Timeline } from "../Components/Timeline";
import { ChannelItem } from "../Components/ChannelItem";
import { ProgramItem } from "../Components/ProgrammItem";
import { TaskList } from "../Components/TaskList";

const authmanager = require("../manager/Authmanager").default.getInstance();

export default function Demo() {
  useEffect(() => {
    console.log(authmanager.user);
    console.log(authmanager.userID);
  }, []);

  const { isLoading, getEpgProps, getLayoutProps } = useApp();

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
              <div style={{ height: "80vh", width: "100%" }}>
                <Epg isLoading={isLoading} {...getEpgProps()}>
                  <Layout
                    {...getLayoutProps()}
                    renderTimeline={(props) => <Timeline {...props} />}
                    renderProgram={({ program, ...rest }) => (
                      <ProgramItem
                        key={program.data.id}
                        program={program}
                        {...rest}
                      />
                    )}
                    renderChannel={({ channel }) => (
                      <ChannelItem key={channel.uuid} channel={channel} />
                    )}
                  />
                </Epg>
              </div>
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
