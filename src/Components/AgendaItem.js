import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
// import "./AgendaItem.css";
/**
 *
 * @param header {string}
 * @param body {string}
 * @param date {string}
 * @return {JSX.Element}
 * @constructor
 */
const AgendaItem = ({ header, body, date, box }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <ListItem alignItems="flex-start" className="">
      <Accordion style={{ marginBottom: "10px", borderRadius: "10px " }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#D1D1D1" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            background: "#171923",
            color: "#D1D1D1",
            borderRadius: "10px ",
          }}
        >
          <div>
            <p>{header}</p>
            <p style={{ fontSize: "11px", marginTop: "-8px" }}>{date}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {box && (
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={box} />
            </FormGroup>
          )}

          <Typography>{body}</Typography>
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
};

export default AgendaItem;
