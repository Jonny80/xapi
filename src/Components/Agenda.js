import React from "react";
import {List} from "@mui/material";
import AgendaItem from "./AgendaItem";

/**
 *
 * @param data  {{
 *     header:string,
 *     description:string,
 *     date:string
 * }[]}
 * @return {JSX.Element}
 * @constructor
 */
const Agenda = ({data}) =>{


    return(
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((data)=>{
                return (<AgendaItem header={data.header} body={data.description} date={data.date}/>)
            })}

        </List>
        )

}
export default Agenda;