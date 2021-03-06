import React from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button as button } from "@mui/material";

export default function ModulOverview() {
  var Minio = require("minio");
  const minioClient = new Minio.Client({
    endPoint: "141.56.132.18",
    port: 9000,
    useSSL: false,
    accessKey: "admin",
    secretKey: "hgjkrwehg46782h87z",
  });

  function downloadSomeFiles() {
    for (var i = 1; i < 5; i++) {
      let filename = "pdf"+i+".pdf";
      var ar = [];
      minioClient.getObject(
        "downloadbucket",
        filename,
        function (err, dataStream) {
          if (err) {
            return console.log(err);
          }
          dataStream.on("data", function (chunk) {
            ar.push(chunk);
          });
          dataStream.on("end", function () {
            console.log(ar.length);
            var newBlob = new Blob(ar);
            const file = new File([newBlob], filename, {
              type: "application/zip",
            });
            console.log(file);
            var url = URL.createObjectURL(file);
            console.log(file);
            if (url === null) {
              console.log("better luck next time");
              return;
            }

            console.log(url);
            var element = document.createElement("a");
            element.setAttribute("href", url);
            element.setAttribute("download", filename);
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          });
        }
      );
    }
  }

  function createData(KW, name, verst??ndnis, unterlagen) {
    return {
      KW,
      name,
      verst??ndnis,
      folien: [
        {
          Datum: "2022-01-05",
          Folie: unterlagen,
          amount: 1,
        },
      ],
    };
  }
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.KW}
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="right" >
            <span style={{borderRadius: '999px', padding:'10px', background: row.verst??ndnis.toString().toLowerCase() === 'gut' ? '#67DE49' : row.verst??ndnis.toString().toLowerCase() === 'mittel' ? '#FAC126' : '#F5574C'}}>
            {row.verst??ndnis}
            </span>
            </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Unterlagen
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                    {row.folien.map((historyRow) => (
                      <TableRow key={historyRow.Datum}>
                        <TableCell component="th" scope="row">
                          {historyRow.Datum}
                        </TableCell>
                        <TableCell>{historyRow.Folie}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  Row.propTypes = {
    row: PropTypes.shape({
      KW: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      verst??ndnis: PropTypes.string.isRequired,
      folien: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          Folie: PropTypes.string.isRequired,
          Datum: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  const rows = [
    createData(12, "01 Eclipse + LWJGL einrichten", "GUT", "Meilenstein 1"),
    createData(13, "02 Grundlegendes zu OpenGL", "MITTEL", "Meilenstein 1"),
    createData(14, "03 Objekte erstellen, speichern und laden", "SCHLECHT", "Meilenstein 1"),
    createData(15, "04 Buffer-Objects", "GUT", "Meilenstein 1"),
    createData(16, "05 Spielumgebung schaffen", "GUT", "Meilenstein 1"),
    createData(17, "06 Kollektive Intelligenz und Schwarmverhalten", "GUT", "Meilenstein 11"),
    createData(18, "07 Konvolution und Blur-Effekt", "GUT", "Meilenstein 1"),
  ];

  return (
    <div style={{background:"white", padding: "1rem"}}>
<h2>I341 Computergrafik/Visualisierung II</h2>
      <div style={{display: 'flex', justifyContent:"center"}}>
        <TableContainer component={Paper} style={{width: "80%"}}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>KW</TableCell>
                <TableCell align="left">Kapitel</TableCell>
                <TableCell align="right">Verst??ndnis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="buttonbar" style={{display: 'flex', justifyContent:'space-around'}}>
        <button onClick={downloadSomeFiles} style={{borderRadius: '999px', background:'#171923', color:'#D1D1D1', padding:'4px', paddingLeft:'10px',paddingRight:'10px', marginTop:'1rem' }}>
          alle Matertialien herunterladen
        </button>{" "}
        <button style={{borderRadius: '999px', background:'#171923', color:'#D1D1D1', padding:'4px', paddingLeft:'10px',paddingRight:'10px', marginTop:'1rem' }}>Lernplan generieren</button>
      </div>
    </div>
  );
}
