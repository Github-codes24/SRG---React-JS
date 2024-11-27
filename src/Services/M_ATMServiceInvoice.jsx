import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineHome } from "react-icons/md";
const M_ATMServiceInvoice = () => {
  return (
    <>
    <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Service  / MATM Service Invoice
        </span>
      </div>
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Main Container */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-[#878484]  font-bold font-sans-600 mb-6">
          MATM -Service Invoice
        </h1>

        {/* First Row */}
        <div className="flex justify-between gap-8 mt-6">
          {/* First Div: Service Details */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              {/* Service Mode */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Service Mode
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Job Card, Direct Bill</option>
                </select>
              </div>
              {/* Service Branch */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Service Branch
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Online Service / Offline Service</option>
                </select>
              </div>
              {/* Account Head */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Account Head
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Service Account"
                />
              </div>
              {/* Job Card No */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Job Card No
                </label>
                <div className="flex w-full">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-l"
                    placeholder="Job Card No"
                  />
                  <button className="bg-[#024CAA] text-white px-4 py-2 rounded-lg ml-4">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Div: Invoice Details */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              {/* Invoice No */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Invoice No
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value="2546DS200"
                  readOnly
                />
              </div>
              {/* Invoice Date */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Invoice Date
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value="22-Oct-2024"
                  readOnly
                />
              </div>
              {/* Service Type */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Service Type
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Service Invoice"
                  readOnly
                />
              </div>
              {/* Employee Name */}
              <div className="flex items-center">
                <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
                  Employee Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Employee Name"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Details Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4 text-white bg-gray-800 p-2 rounded w-[200px] text-center">Customer Details</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  {/* First div containing Customer Name, + button, and Search button */}
  <div className="flex items-center">
    <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
      Customer Name
    </label>
    <div className="flex items-center w-full">
      <select className="w-full p-2 border rounded-l">
        <option>Cash in Hand / Bank / Wallet</option>
      </select>
      <button className="bg-[#2E2E48] text-white px-4 py-2 rounded-r ml-2">
        +
      </button>
      <button className="bg-[#024CAA] text-white px-4 py-2 rounded-lg ml-4">
        Search
      </button>
    </div>
  </div>

            {/* Second div containing Mob No. */}
            <div className="flex items-center">
  <label className="text-[#595995E5] font-semibold mr-4 whitespace-nowrap">
    Mob No.
  </label>
  <input
    type="text"
    className="w-full p-2 border rounded"
    placeholder="XXXXXXXXXX"
  />
</div>

          </div>
        </div>

        {/* Service Details Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4 text-white bg-gray-800 p-2 rounded w-[200px] text-center">Service Details</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                {[
                  "Service Name",
                  "Service Category",
                  "Service Provider",
                  "Service Provider Balance",
                  "Sell Amount",
                  "Total",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-2 border border-gray-300 text-left"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300">
                  Income Certificate
                </td>
                <td className="p-2 border border-gray-300">
                  E-District Service
                </td>
                <td className="p-2 border border-gray-300">SBI Bank</td>
                <td className="p-2 border border-gray-300">0</td>
                <td className="p-2 border border-gray-300">10,000.00</td>
                <td className="p-2 border border-gray-300">10,000.00</td>
                <td className="p-2 border border-gray-300">
                  <button className="bg-[#2E2E48] text-white px-2 py-1 rounded mr-2">
                    +
                  </button>
                  <button className="bg-[#BF2D35] text-white px-2 py-2 rounded">
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300">Pan Card New</td>
                <td className="p-2 border border-gray-300">Pan Card Service</td>
                <td className="p-2 border border-gray-300">CSC SRGIS</td>
                <td className="p-2 border border-gray-300">0</td>
                <td className="p-2 border border-gray-300">120.00</td>
                <td className="p-2 border border-gray-300">120.00</td>
                <td className="p-2 border border-gray-300">
                  <button className="bg-[#2E2E48] text-white px-2 py-1 rounded mr-2">
                    +
                  </button>
                  <button className="bg-[#BF2D35] text-white px-2 py-2 rounded">
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sell Details Section */}
        <div className="mt-6">
          <h2 className="mb-4 text-white bg-gray-800 p-2 rounded w-[200px] text-center">Sell Details</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                {[
                  "Service Name",
                  "Service Category",
                  "Sell Amount",
                  "Total",
                ].map((header) => (
                  <th
                    key={header}
                    className="p-2 border border-gray-300 text-left"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300">
                  Income Certificate
                </td>
                <td className="p-2 border border-gray-300">
                  E-District Service
                </td>
                <td className="p-2 border border-gray-300">10,000.00</td>
                <td className="p-2 border border-gray-300">10,000.00</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300">Pan Card New</td>
                <td className="p-2 border border-gray-300">Pan Card Service</td>
                <td className="p-2 border border-gray-300">120.00</td>
                <td className="p-2 border border-gray-300">120.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div>
            <label className="block text-gray-700 font-semibold">
              No Of Items
            </label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Total Amount
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Rs. 0.00"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className=" bg-[#3A6D8C] text-[#ffff] px-6 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
export default M_ATMServiceInvoice;
