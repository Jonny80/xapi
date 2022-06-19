import React from "react";
import Calendar from "react-calendar";
import "../Components/customCalendar.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import {months} from "../Demo/Data";


export const TaskList = () => {

    const initialList = [
    {
      name: "Thomas",
      time: "12:54",
      date: new Date(),
    },
  ];
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");
  const [time, setTime] = React.useState("");
  const [value, setDate] = React.useState(new Date());

  function handleNameChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleTimeChange(event) {
    setTime(event.target.value);
  }
  function handleDateChange(event) {
    console.log(event);
    setDate(event);
  }

  function handleAdd() {
    const date = value.toISOString();
    const newList = list.concat({ name:name, time:time, date:value });

    setList(newList);

    setName("");
    setDate(new Date());
    setTime("");
  }

  function getMonth(date) {
      return months[date.getMonth()];
  }
  function getHeader(date) {
      return <div style={{display:"flex",flexDirection:"row",alignItems:"baseline"}}>
          <div style={{fontSize:"20px",fontWeight:"bold"}}>{getMonth(date)}</div><div>{date.getFullYear()}</div>
      </div>
  }


  function formatDate(date) {
      console.log(list)
      console.log(typeof date)
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      let hour = date.getHours();
      let minute = date.getMinutes();
      if (minute < 10 ){
          minute = "0" + minute;
      }
      return year + "-" + day + "-" + month + " " + hour + ":" + minute + " Uhr";


  }

  return (
    <div>
      <form
        onSubmit={handleAdd}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Calendar next2Label={null} prev2Label={null} value={value}
                  navigationLabel={({ date, label, locale, view }) => getHeader(date)}
                  onChange={setDate}
                  prevLabel={<ArrowBackIosNewIcon />}
                  nextLabel={<ArrowForwardIosIcon/>}
        />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Was hast du vor?"
          style={{
            borderRadius: "8px",
            padding: "7px",
            marginTop: "7px",
          }}
        />
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          style={{
            borderRadius: "8px",
            padding: "7px",
            marginTop: "7px",
            marginBottom: "7px",
          }}
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          style={{ background: "#171923" }}
        >
          Add
        </Button>
      </form>

      <div style={{ marginTop: "15px" }}>
        {list.map((item) => (
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
                <p>{item.name}</p>
                <p style={{ fontSize: "11px", marginTop: "-8px" }}>
                  {item.time}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{formatDate(item.date)} {item.name}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
