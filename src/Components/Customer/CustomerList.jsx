import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CustomerList = () => {
  const [customers] = useState([
    {
      id: 1,
      name: "IBRAHIM A SEAD",
      mobile: "9375287364",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 2,
      name: "MOHIT GUPTA",
      mobile: "9353812190",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
    {
      id: 3,
      name: "Aboobacker Sidhiquie",
      mobile: "9523785321",
      address: "Plot no 00 grand trunk road Dubai east",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "RS 0.00",
    },
  ]);

  return (
    <div className="p-8">
      <div className="container mx-auto mt-4">
        <h1 className="text-xl font-semibold mb-4">Customer List</h1>
        <div className="flex justify-between mb-4 border-t-2 pt-4">
          <div>
            <label htmlFor="entries" className="mr-2">
              Show
            </label>
            <select
              id="entries"
              className="border-none outline-none rounded p-1 shadow-md shadow-blue-300 "
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="ml-2">Entries</span>
          </div>
          <div className="flex gap-3">
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg">
              Copy
            </button>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg">
              CSV
            </button>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg">
              Excel
            </button>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg">
              PDF
            </button>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg">
              Print
            </button>
          </div>

          <div class="flex items-center">
            <input
              type="text"
              placeholder="Search"
              class="w-44 border-2 border-gray-200 px-2 py-1 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="bg-black w-12 py-2 rounded-r-lg hover:bg-gray-800">
              <svg
                class="h-5 w-4 text-white mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-white text-left">
                <th className="py-2 px-4 border-r border-gray-200">SL</th>
                <th className="flex justify-between items-center py-2 px-2 border-r border-gray-200">
                  Customer Name
                  <svg
                    class="h-4 w-4 text-center text-gray-7 00"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 9l4-4l4 4m-4 -4v14" />
                    <path d="M21 15l-4 4l-4-4m4 4v-14" />
                  </svg>
                </th>
                <th className="py-2 px-4 border-r border-gray-200">
                  Mobile No
                </th>
                <th className="py-2 px-4 border-r border-gray-200">Address</th>
                <th className="py-2 px-4 border-r border-gray-200">Location</th>
                <th className="flex justify-between items-center py-2 px-2 border-r border-gray-200">
                  Balance{" "}
                  <svg
                    class="h-4 w-4 text-end text-gray-700"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 9l4-4l4 4m-4 -4v14" />
                    <path d="M21 15l-4 4l-4-4m4 4v-14" />
                  </svg>
                </th>
                <th className=" py-2 px-4 border-r border-gray-200">Action </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer.id} className="text-left">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{customer.name}</td>
                  <td className="py-2 px-4 border">{customer.mobile}</td>
                  <td className="py-2 px-4 border">{customer.address}</td>
                  <td className="py-2 px-4 border">{customer.location}</td>
                  <td className="py-2 px-4 border">{customer.balance}</td>
                  <td className="py-2 px-4 border text-center">
                    <button className="text-blue-500 mr-2">
                      <FaEdit />
                    </button>
                    <button className="text-red-500">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end gap-5 items-center mt-4 mr-6">
          <span className="border-blue-500 text-blue-500 px-3 border-2 rounded-full">
            Previous
          </span>
          <div className="flex gap-3">
            <button className="bg-white border-blue-500 border-2 px-3 text-blue-500 py-1 rounded-full">
              1
            </button>
            <button className="bg-white border-blue-500 border-2 px-3 text-blue-500 py-1 rounded-full">
              2
            </button>
            <button className="bg-white border-blue-500 border-2 px-3 text-blue-500 py-1 rounded-full">
              3
            </button>
            <button className="bg-white border-blue-500 border-2 px-3 text-blue-500 py-1 rounded-full">
              4
            </button>
            <button className="bg-white border-blue-500 border-2 px-3 text-blue-500 py-1 rounded-full">
              5
            </button>
          </div>
          <span className="border-blue-500 text-blue-500 px-3 border-2 rounded-full">
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
