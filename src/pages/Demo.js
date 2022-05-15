import React from "react";
import CDrawer from "../Components/CDrawer";
import {DrawerData} from "../Demo/Data";
import Button from "@mui/material/Button";

export default function Demo() {



    return(
        <div>
            <CDrawer data={DrawerData}/>
            <Button>Hello</Button>
        </div>
    )
}