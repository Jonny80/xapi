import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);


export let options = {
  datalabels: {
    //display: false,
  },

  indexAxis: "y",
  
  

  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
  },

  

  scales: {

    x: {
    title: {
      display: true,
      text: "Kalenderwoche",
     },
    min: 1,
    max: 15,
    ticks: {
      stepSize: 1,
    },
  },

  },
  
  responsive: true,

};

let labels = ["IT I", "SE II", "AVS", "MP", "CGV II", "EMMS", "GIS"];

export let data = {
  labels,
  datasets: [
    {
      label: {
        display: false
    },
      data: [
        [4, 10],
        [5, 8],
        [3, 12],
        [6, 10],
        [9, 15],
        [2, 6],
        [8, 14],
      ],
      backgroundColor: "#171923",
      borderColor: "#D1D1D1",
    },
  ],
};

export default function Timeline({studienplanStatus}) {
  {!studienplanStatus && (
    labels = ["Vorlesungen", "Beleg 1/2", "Beleg 2/2", "Präsentationen"]
  )}
  {studienplanStatus && (
    labels = ["IT I", "SE II", "AVS", "MP", "CGV II", "EMMS", "GIS"] 
  )}

  data = {
    labels,
    datasets: [
      {
        label: {
          display: false
      },
        data: [
          [4, 10],
          [5, 8],
          [3, 12],
          [6, 10],
          [9, 15],
          [2, 6],
          [8, 14],
        ],
        backgroundColor: "#171923",
        borderColor: "#D1D1D1",
      },
    ],
  }

  {!studienplanStatus && (
    data.datasets = [
      {
        label: {
          display: false
      },
        data: [ [1, 10], [2, 5], [5, 8], [7, 10],],
        backgroundColor: "#171923",
        borderColor: "#D1D1D1",
      },
    ]
  )}

  return <Bar options={options} data={data} style={{ marginBottom: "50px" }} />;
}
