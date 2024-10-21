import React from "react";
import { CiEdit } from "react-icons/ci";
 

const ServiceSlab = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-6">Service Slab</h2>

      {/* Input Fields Row */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <label className="text-sm font-medium mb-2">From Buy Amt</label>
          <input
            type="text"
            placeholder=""
            className="border border-gray-300 rounded w-32 p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col items-center mb-4 md:mb-0">
          <label className="text-sm font-medium mb-2">From Buy Amt</label>
          <input
            type="text"
            placeholder=""
            className="border border-gray-300 rounded w-32 p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium mb-2">From Buy Amt</label>
          <div className="relative">
            <select className="border border-gray-300 rounded w-32 p-2 focus:outline-none focus:border-blue-500 appearance-none">
              <option>Select</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#746BD952] text-left">
              <th className="p-2 border border-gray-300">SNo</th>
              <th className="p-2 border border-gray-300">From Amt</th>
              <th className="p-2 border border-gray-300">To Amount</th>
              <th className="p-2 border border-gray-300">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">1</td>
              <td className="p-2 border border-gray-300">1.00</td>
              <td className="p-2 border border-gray-300">500.00</td>
              <td className="p-2 border border-gray-300">20.00</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">2</td>
              <td className="p-2 border border-gray-300">5001.00</td>
              <td className="p-2 border border-gray-300">1000.00</td>
              <td className="p-2 border border-gray-300">25.00</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">3</td>
              <td className="p-2 border border-gray-300">1001.00</td>
              <td className="p-2 border border-gray-300">5000.00</td>
              <td className="p-2 border border-gray-300">30.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons flex items-center justify-center gap-4 mt-5">
        <button
          className="flex items-center px-6 py-1 bg-[#629584] rounded-md text-white"
          type="reset"
        >
          <CiEdit className="mr-2" />
          Edit
        </button>

        <button
          className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
          type="submit"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ServiceSlab;
