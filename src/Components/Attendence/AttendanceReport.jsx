import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import { PiFiles } from "react-icons/pi";

const AttendanceReport = () => {
  return (
    <div>
     <>
     <div className="bg-white p-4">
<div className="flex justify-between items-center space-x-4">
  <h3 className="text-xl font-extralight">Check -In</h3>
  <div className="flex space-x-4">
  <button type="button" className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg">
    <PiFiles  className="mr-2"/> Date Wise Report
</button>

  <button type="button" className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg">
  <PiFiles  className="mr-2"/> Employee Wise Report 
  </button>
</div>
</div><br /><hr /><br />
<div className='flex justify-between items-center'>
  {/* Left Section: Show and Entries */}
  <div className="flex items-center space-x-2">
    <label htmlFor="show" className="text-gray-700 font-medium w-10">Show</label>
    <select 
      id="show" 
      className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <option value="" disabled selected>10</option>
      <option value="show">1</option>
      <option value="show">2</option>
      <option value="show">3</option>
    </select>
    
    <label htmlFor="employeeName" className="text-gray-700 font-medium">Entries</label>
  </div>

  {/* Center Section: Buttons */}
  <div className="flex justify-center flex-grow">
    <button type="button" className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2">Copy</button>
    <button type="button" className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2">CSV</button>
    <button type="button" className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2">Excel</button>
    <button type="button" className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2">PDF</button>
    <button type="button" className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2">Print</button>
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
</div><br />
<table className="min-w-full bg-white border border-gray-300">
     <thead>
    <tr className="bg-gray-200 text-gray-700">
    <th className="py-3 px-4 border border-gray-300">
      <div className="flex justify-between items-center"><span>SL.</span><HiOutlineArrowsUpDown className="ml-2" /></div>
</th>
<th className="py-3 px-4 border border-gray-300">
      <div className="flex justify-between items-center"><span>Name</span><HiOutlineArrowsUpDown className="ml-2" /></div>
</th>
<th className="py-3 px-4 border border-gray-300">
      <div className="flex justify-between items-center"><span>Date</span><HiOutlineArrowsUpDown className="ml-2" /></div>
</th>
<th className="py-3 px-4 border border-gray-300">
      <div className="flex justify-between items-center"><span>Check In</span><HiOutlineArrowsUpDown className="ml-2" /></div>
</th>
<th className="py-3 px-4 border border-gray-300">
      <div className="flex justify-between items-center"><span>Check Out</span><HiOutlineArrowsUpDown className="ml-2" /></div>
</th>
     <th className="py-3 px-4 border border-gray-300 text-left">Stay Time</th>
     
      <th className="py-3 px-4 border border-gray-300 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td colSpan="6" className="py-4 text-center text-gray-500">There are currently no information</td>
    </tr>
  
  </tbody>
</table>
</div>
     
     </>
    </div>
  )
}

export default AttendanceReport
