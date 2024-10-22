import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ExpenseStatementChart = () => {
  // Data for the bubble chart
  const data = {
    datasets: [
      {
        label: "Total Sales",
        data: [{ x: 3.3, y: 36, r: 70 }],
        backgroundColor: "#9F85F5", // Light purple
      },
      {
        label: "Total Expense",
        data: [{ x: 3.32, y: 37, r: 55 }],
        backgroundColor: "#94D7B5", // Light green
      },
      {
        label: "Employee Salary",
        data: [{ x: 3.31, y: 35, r: 40 }],
        backgroundColor: "#F7A6B9", // Light red
      },
      {
        label: "Total Purchase",
        data: [{ x: 3.29, y: 35.8, r: 30 }],
        backgroundColor: "#FDE68A", // Yellow
      },
      {
        label: "Service",
        data: [{ x: 3.33, y: 36.5, r: 40 }],
        backgroundColor: "#8CC84F", // Green
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw.y}% - ${context.dataset.label}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[40%] mx-auto  bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <input
          type="month"
          className="border border-gray-300 p-2 rounded focus:outline-none"
          defaultValue="2024-10"
        />
        <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Filter
        </button>
      </div>
      <h2 className="text-center text-2xl font-semibold text-gray-700">
        Expense Statement
      </h2>
      <div className="relative items-center h-[400px] mt-6">
        <Bubble data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseStatementChart;
