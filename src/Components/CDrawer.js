import React, {useState} from "react";
import {Drawer, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

/**
 *
 * @param data {{
 *     name:string,
 *     credits:number,
 *     art:string,
 *     semester:number
 * }[]}
 */
export default function CDrawer(data) {
    const [drawer,setDrawer] = useState(false);
    const toggleDrawer = ()=>{
        setDrawer(!drawer)
    }

    const drawerContent = () =>(
        <Box role={"presentation"} onClick={toggleDrawer}>
            <TableContainer component={"Paper"}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Modulname</TableCell>
                            <TableCell align="right">Credits</TableCell>
                            <TableCell align="right">Semester</TableCell>
                            <TableCell align="right">Art</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(modul=>(
                            <TableRow key={modul.name}>
                                <TableCell component="th" scope="row">
                                    {modul.name}
                                </TableCell>
                                <TableCell align="right">{modul.credits}</TableCell>
                                <TableCell align="right">{modul.semester}</TableCell>
                                <TableCell align="right">{modul.art}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )

    return(
        <div>
            <Button onClick={toggleDrawer}>Medieninformatik</Button>
            <Drawer anchor={"top"} open={drawer}>
                {drawerContent()}
            </Drawer>
        </div>
    )


}