import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export const TaskList = () => {
  const initialList = [
    {
      name: "Thomas",
      time: "12:54",
      date: "Mon May 30 2022 00:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)",
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
    const newList = list.concat({ name, time, date });

    setList(newList);

    setName("");
    setDate(new Date());
    setTime("");
  }

  return (
    <div>
      <form
        onSubmit={handleAdd}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Calendar value={value} onChange={setDate} />
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
              <Typography>{item.date} und mehr info</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
