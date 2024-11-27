import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
const ServiceInvoice = () => {
  return (
    <>
    <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Service  /  Service Invoice
        </span>
      </div>
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Main Container */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-[#878484]  font-bold font-sans-600 mb-6">Service Invoice</h1>

        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-[#595995E5] font-semibold">Service Mode</label>
            <select className="w-full p-2 border rounded">
              <option>Job Card, Direct Bill</option>
            </select>
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Service Branch</label>
            <select className="w-full p-2 border rounded">
              <option>Online Service / Offline Service</option>
            </select>
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Account Head</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Service Account" />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Job Card No</label>
            <div className="flex justify-between gap-4">
              <input type="text" className="w-full p-2 border rounded-l" placeholder="Job Card No" />
              <button className="bg-[#024CAA] text-white flex px-4 py-2 rounded-md"><IoIosSearch className='text-2xl mr-2' />Search</button>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
          <div>
            <label className="block text-[#595995E5] font-semibold">Invoice No</label>
            <input type="text" className="w-full p-2 border rounded" value="2546DS200" readOnly />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Invoice Date</label>
            <input type="text" className="w-full p-2 border rounded" value="22-Oct-2024" readOnly />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Service Type</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Service Invoice" readOnly />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Employee Name</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Employee Name" />
          </div>
        </div>

      
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded-xl w-[200px] text-center mb-2 mt-5">
          Customer Details
        </h2>
        <div className="flex items-center gap-4">
          <label className="block font-semibold text-[#595995E5]">Customer Name</label>
          <select className="w-1/3 p-2 border border-gray-300 rounded-md">
            <option>Customer Name</option>
          </select>
          <button className="bg-[#2E2E48] text-white h-10 w-10 flex justify-center items-center rounded-md">
            +
          </button>
          <button className="bg-[#024CAA] text-white flex px-4 py-2 rounded-md"><IoIosSearch className='text-2xl mr-2' />Search</button>
          <label className="block font-semibold text-[#595995E5]">Mob no</label>
          <input
            type="text"
            className="w-1/3 p-2 border border-gray-300 rounded-md"
            placeholder="Mob No."
          />
        </div>
      </div>

        {/* Service Details Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded-xl w-[200px] text-center mb-2">Service Details</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                {['Service Name', 'Service Category', 'Service Provider', 'Service Provider Balance', 'Sell Amount', 'Total', 'Action'].map(header => (
                  <th key={header} className="p-2 border border-gray-300 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300">Income Certificate</td>
                <td className="p-2 border border-gray-300">E-District Service</td>
                <td className="p-2 border border-gray-300">SBI Bank</td>
                <td className="p-2 border border-gray-300">0</td>
                <td className="p-2 border border-gray-300">10,000.00</td>
                <td className="p-2 border border-gray-300">10,000.00</td>
                <td className="p-2 border border-gray-300">
                  <button className="bg-[#2E2E48] text-white px-2 py-1 rounded mr-2">+</button>
                  <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><RiDeleteBin6Line /></button>
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
                  <button className="bg-[#2E2E48] text-white px-2 py-1 rounded mr-2">+</button>
                  <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><RiDeleteBin6Line /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sell Details Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded-xl w-[200px] text-center mb-2" >Sale Details</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                {['Service Name', 'Service Category', 'Sell Amount', 'Total'].map(header => (
                  <th key={header} className="p-2 border border-gray-300 text-left">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300">Income Certificate</td>
                <td className="p-2 border border-gray-300">E-District Service</td>
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
            <label className="block text-gray-700 font-semibold">No Of Items</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Total Amount</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Rs. 0.00" />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-[#3A6D8C] text-white px-6 py-2 rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceInvoice;