import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesGraph = () => {
  const data = {
    labels: [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          200000, 180000, 220000, 250000, 230000, 270000, 200000, 220000,
          210000, 240000,
        ],
        borderColor: "#1e3a8a", // Dark blue color for the line
        backgroundColor: "rgba(30, 58, 138, 0.5)", // Light blue fill
        fill: true,
        tension: 0.4, // Smooth curves
      },
      {
        label: "Purchase",
        data: [
          150000, 160000, 170000, 190000, 210000, 200000, 190000, 180000,
          170000, 200000,
        ],
        borderColor: "#60a5fa", // Light blue color for the line
        backgroundColor: "rgba(96, 165, 250, 0.5)", // Light blue fill
        fill: true,
        tension: 0.4, // Smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Sales & Purchase Report Summary",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `$${value / 1000}k`,
          font: {
            size: 12,
          },
          color: "#6b7280",
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: "#6b7280",
        },
      },
    },
  };

  return (
    <div className="w-[65%] p-3 border border-dashed border-gray-300 rounded-lg shadow-sm bg-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesGraph;
