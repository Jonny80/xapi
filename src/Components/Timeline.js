import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  datalabels: {
    display: false,
  },
  indexAxis: "y",

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
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
  responsive: true,
};

const labels = ["IT I", "SE II", "AVS", "MP", "CGV II", "EMMS", "GIS"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
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

export default function Timeline() {
  return <Bar options={options} data={data} style={{ marginBottom: "50px" }} />;
}
