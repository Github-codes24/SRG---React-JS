import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BestServiceSalesChart = () => {
  // Data for the chart
  const data = {
    labels: [
      "Lubricant",
      "Spray",
      "WD 40",
      "Alloy Wheel",
      "Gas Kit",
      "Break Pad",
      "Motor Oil",
      "Coolant",
      "Oil Seal",
      "Disk Pad",
    ],
    datasets: [
      {
        label: "Sales",
        data: [80, 75, 60, 40, 65, 50, 35, 45, 30, 20],
        backgroundColor: [
          "#4F94F6", // Lubricant
          "#9BE3D6", // Spray
          "#F2A83E", // WD 40
          "#73A1F9", // Alloy Wheel
          "#F47CA6", // Gas Kit
          "#F2A83E", // Break Pad
          "#8D79F6", // Motor Oil
          "#B4BDC7", // Coolant
          "#3A80F7", // Oil Seal
          "#D0D6DD", // Disk Pad
        ],
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Quantity",
        },
      },
      x: {
        title: {
          display: true,
          text: "Services",
        },
      },
    },
  };

  return (
    <div className="w-[60%] max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center border-b border-black p-3">
        <h2 className="text-lg font-semibold text-gray-500">
          Best Service Sales
        </h2>
        <button className="bg-black text-white py-1 px-5 rounded-md text-md">
          See All
        </button>
      </div>
      <div className="relative mt-2 h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BestServiceSalesChart;
