import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

const ManageExpenseItem = () => {
  return (
    <div className="">
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Add Expense Item
        </span>
      </div>
      <div className="bg-white rounded-lg my-2">
        <div className="flex justify-between items-center space-x-4">
          <h3 className="text-xl font-semibold px-2 py-1">Manage Attendance</h3>
        </div>
        <br />
        <hr />

        <div>
          <div className="flex justify-between items-center">
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

              <label
                htmlFor="employeeName"
                className="text-gray-700 font-medium"
              >
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
        </div>
        <div className="container mx-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className=" px-4 py-2 w-1/6 text-center text-[#595995] font-medium">Sl. no</th>
            <th className="border border-gray-300 px-4 py-2 w-4/6 text-[#595995] font-medium">Expense Item</th>
            <th className="border border-gray-300 px-4 py-2 w-1/6 text-[#595995] font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">1</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Petrol Expense</td>
            <td className="border border-gray-300 px-4 py-2">
              <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">2</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">House Rent Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">3</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Travel Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">4</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">House rent Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">5</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Office Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">6</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Office Supplies</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">7</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Petrol Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">8</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Petrol Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">9</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Petrol Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">10</td>
            <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">Petrol Expense</td>
            <td className="border border-gray-300 px-4 py-2">
            <div className="w-full flex items-center justify-center gap-x-3">
                <button className="bg-[#75A68F] p-1">< BsPencilFill className="text-white" /></button>
                <button className="bg-[#BF2D35] p-1">< FaTrash className="text-white" /></button>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-[#636465] font-medium">Showing 1 to 20 enteries</p>
      <div className="flex items-center justify-center gap-x-3">
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

    </div>
  );
};

export default ManageExpenseItem;
