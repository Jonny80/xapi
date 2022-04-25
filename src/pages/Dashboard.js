import React, {useState} from "react";
import Box from "@mui/material/Box";
import {AppBar, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, Stack, Toolbar} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
const networkmanager = require("../manager/Networkmanager").default.instance;

export default function Dashboard() {

    const mappedList = [1,2,3,4,5,6,7,8,9]

    const [state, setState] = useState(false);

    const toggleDrawer = ()  =>  {
        setState(!state);
    };

    //TODO write wrapper for Buttons to send actions automatically to server
    /**
     *
     * @param topic {string}
     */
    const handleMenuClick = (topic)=> {
        networkmanager.sendStatement(`click button ${topic}`,"clicking dummy button")

    }

    /**
     *
     * @param topic {string}
     */
    const handleTopicClick = (topic) =>{
        networkmanager.sendStatement(`click button ${topic}`,"clicking dummy button")

    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {['Courses', 'Calendar', 'Mails', 'Personal'].map((text, index) => (
                    <ListItem button key={text} onClick={()=>handleMenuClick(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Hardware', 'Math', 'Programming'].map((text, index) => (
                    <ListItem button key={text} onClick={()=>handleMenuClick(text)}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
                <React.Fragment key={"test"}>
                    <Drawer
                        anchor={"test"}
                        open={state}
                        onClose={toggleDrawer}
                    >
                        {list()}
                    </Drawer>
                </React.Fragment>
            <div>
                <Grid container spacing={4}>
                    <Grid xs={4} item>Hello World</Grid>
                    <Grid xs={4} item>
                <Stack>
                    {
                        mappedList.map((item)=>(
                                <Button style={{marginTop:"2%"}} variant="contained" onClick={()=>handleTopicClick(item.toString())}>Test {item}</Button>
                        ))
                    }
                </Stack>
                    </Grid>
                <Grid xs={4} item>
                    Hello World
                </Grid>
                </Grid>
            </div>
        </div>
    );




}