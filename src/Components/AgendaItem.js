import React from "react";
import {ListItem, ListItemText, Typography} from "@mui/material";
import "./AgendaItem.css"
/**
 *
 * @param header {string}
 * @param body {string}
 * @param date {string}
 * @return {JSX.Element}
 * @constructor
 */
const AgendaItem = ({header,body,date}) =>{

    return (
        <ListItem alignItems="flex-start" className="test">
            <ListItemText
                primary={header}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {date}
                        </Typography>
                        <br/>
                        {body}
                    </React.Fragment>
                }
            />
        </ListItem>
    )



}

export default AgendaItem;