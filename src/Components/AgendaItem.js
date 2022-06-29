import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    <div style={{display:'flex', justifyContent: 'center', marginBottom:'7px'}} >
    <Accordion style={{borderRadius:'30px',  width:'90%'}} >
      <AccordionSummary style={{borderRadius: '30px', background: '#171923', color:'#D1D1C6'}}
        expandIcon={<ExpandMoreIcon style={{color:'#D1D1C6'}} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {date
          && <br />
          }
          {body
          && <br />
          }
          {box && (
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label={box} />
            </FormGroup>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
  );
};

export default AgendaItem;
