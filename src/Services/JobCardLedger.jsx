import React from 'react';
import { MdOutlinePrint } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { MdOutlineHome } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

const JobCardLedger = () => {
  return (
    <>
    <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Service  /  Job Card Ledger
        </span>
      </div>
    <div className="p-6 job-card-ledger overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Job Card Ledger</h1>
        <button className="bg-[#2E2E48] text-white px-4 py-2 rounded">Job Card New</button>
      </div>
      <hr />

      {/* Filter Section */}
      <div className="p-6">
        {/* Filter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-[#595995E5] font-semibold">Start Date</label>
            <input type="text" className="border p-2 rounded w-full" value="22-Aug-2024" readOnly />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">End Date</label>
            <input type="text" className="border p-2 rounded w-full" value="22-Aug-2024" readOnly />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Status</label>
            <select className="border p-2 rounded w-full">
              <option>Select Status</option>
            </select>
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Service Branch</label>
            <select className="border p-2 rounded w-full">
              <option>Select Service Branch</option>
            </select>
          </div>
        </div>

        {/* Job and Employee Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-[#595995E5] font-semibold">Job</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Job" />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Employee</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Employee" />
          </div>
          <div>
            <label className="block text-[#595995E5] font-semibold">Customer</label>
            <input type="text" className="border p-2 rounded w-full" placeholder="Customer" />
          </div>
          <div>
          <button className="bg-[#024CAA] text-white px-4 py-2 rounded mt-6 flex items-center space-x-2">
  <IoIosSearch className='text-2xl'/>
  <span>Search</span>
</button>

          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 mb-4">
        <select className="border p-2 rounded bg-[#2E2E48] text-[#FFFFFF]">
          <option className=''>Column Visibility</option>
        </select>
        <button className="bg-[#FF6500] text-white px-4 py-2 rounded inline-flex items-center justify-center">
  <MdOutlinePrint className='mr-2' />Print
</button>

<button className="bg-[#15B392] text-white px-4 py-2 rounded inline-flex items-center justify-center">
  <PiMicrosoftExcelLogoFill className='mr-2' />Excel
</button>

      </div>

      {/* Data Table */}
      <div className="overflow-x-hidden"> {/* Change this line to overflow-x-hidden */}
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              {[
                'Check Box', 'JC ID No', 'Customer Name', 'Mobile No', 'Email ID',
                'Service Name', 'Service Category', 'Sell Amount', 'Application Number',
                'Application Date', 'Username', 'Password', 'Rejected Date',
                'Re Submitted Application No', 'Approved Documents No', 'Approved Documents Date',
                'Job Assign Staff', 'Status', 'Action'
              ].map((header) => (
                <th key={header} className="p-2 border border-gray-400 text-left">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Empty Data Rows */}
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <td className="p-2 border border-gray-300"><input type="checkbox" /></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300"></td>
                <td className="p-2 border border-gray-300">
                <div className="flex flex-col space-y-2">
  <button className="bg-[#3A6D8C] text-white px-2 py-1 rounded">
    <RxUpdate /> Update
  </button>
  <button className="bg-[#98DED9] text-white px-2 py-1 rounded">
    Status Change
  </button>
</div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default JobCardLedger;
