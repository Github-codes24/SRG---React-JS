import React from "react";
import { BsPencilFill } from "react-icons/bs";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";

const ManageExpense = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Manage Expense
        </span>
      </div>

      <div className="bg-white">
        <p className="text-2xl p-2 text-[#878484] font-medium">Manage Expense</p>
        <hr />
      <div className="flex justify-between items-center p-2">
        {/* Left Section: Show and Entries */}
        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="text-gray-700 font-medium w-10">
            Show
          </label>
          <select
            id="show"
            className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="" disabled selected>
              10
            </option>
            <option value="show">1</option>
            <option value="show">2</option>
            <option value="show">3</option>
          </select>

          <label htmlFor="employeeName" className="text-gray-700 font-medium">
            Entries
          </label>
        </div>

        {/* Center Section: Buttons */}
        <div className="flex justify-center flex-grow">
          <button
            type="button"
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            Copy
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            CSV
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            Excel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            PDF
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            Print
          </button>
        </div>

        {/* Right Section: Search Input */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="absolute right-2 bg-purple-950 text-white p-2 ">
            <FaMagnifyingGlass className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border font-semibold text-[#595995]">SL. No</th>
            <th className="py-2 px-4 border font-semibold text-[#595995]">Voucher No.</th>
            <th className="py-2 px-4 border font-semibold text-[#595995]">Expense Type</th>
            <th className="py-2 px-4 border font-semibold text-[#595995]">Payment Type</th>
            <th className="py-2 px-4 border font-semibold text-[#595995]">Amount</th>
            <th className="py-2 px-4 border font-semibold text-[#595995]">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[#636465BD]">
            <td className="py-2 px-4 border text-center font-medium text-sm">1</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">EXP 1</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Petrol Expense</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Cash Payment</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">500.00</td>
            <td className="py-2 px-4 border">
              <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1"><BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1"><FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr className="text-[#636465BD]">
            <td className="py-2 px-4 border text-center font-medium text-sm">2</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">EXP 2</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Petrol Expense</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Cash Payment</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">500.00</td>
            <td className="py-2 px-4 border">
              <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1"><BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1"><FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr className="text-[#636465BD]">
            <td className="py-2 px-4 border text-center font-medium text-sm">3</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">EXP 3</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">House Rent Expense</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Bank Payment</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">500.00</td>
            <td className="py-2 px-4 border">
              <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1"><BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1"><FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr className="text-[#636465BD]">
            <td className="py-2 px-4 border text-center font-medium text-sm">4</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">EXP 4</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Petrol Expense</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">Cash Payment</td>
            <td className="py-2 px-4 border text-center font-medium text-sm">500.00</td>
            <td className="py-2 px-4 border">
              <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1"><BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1"><FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border"></td>
            <td className="py-2 px-4 border"></td>
            <td className="py-2 px-4 border"></td>
            <td className="py-2 px-4 border text-end text-[#595995] font-medium">Total</td>
            <td className="py-2 px-4 border text-[#636465BD] text-center font-semibold">25000.00</td>
            <td className="py-2 px-4 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="flex items-center justify-between my-8 px-2 pb-5">
      <p className="text-[#636465] font-medium">Showing 1 to 20 enteries</p>
      <div className="flex items-center justify-center gap-x-3 text-[#595995]">
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">Previous</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">1</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">2</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">3</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">4</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">5</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">6</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">Next</button>
      </div>
    </div>
      </div>
      <br />
    </div>
  );
};

export default ManageExpense;
