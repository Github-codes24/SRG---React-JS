import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const TodayOverview = () => {
  const data = {
    labels: ["Sales", "Services", "Salary", "Purchase", "Expense"],
    datasets: [
      {
        label: "Data 1",
        data: [30, 40, 50, 60, 70],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Data 2",
        data: [40, 30, 60, 50, 80],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[35%] p-4 max-w-md mx-auto bg-white rounded-lg">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Today's Overview</h2>
      </div>
      <div className="mt-4 border rounded-md shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Today's Report</th>
              <th className="px-4 py-2">TK</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t px-4 py-2">Total Sales</td>
              <td className="border-t px-4 py-2">---</td>
            </tr>
            <tr>
              <td className="border-t px-4 py-2">Total Purchase</td>
              <td className="border-t px-4 py-2">---</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 h-64">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default TodayOverview;
