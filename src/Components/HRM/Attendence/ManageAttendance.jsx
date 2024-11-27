import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { PiSignOutBold } from "react-icons/pi";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const ManageAttendance = () => {
  return (
    <div>
      <>
      <div className="bg-white p-4">
       <div className="flex justify-between items-center space-x-4">
       <h3 className="text-xl font-extralight">Manage Attendance</h3>
 
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
    <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">1</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">20-sep-2024</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10.00 AM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">06.00 PM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">08.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#89aec4] text-white hover:bg-green-200 p-2 rounded-none">
  <FaEdit />
</button>
    
    
    <button className="bg-red-500 text-white hover:bg-red-200 p-2 rounded-none">
      <FaTrashAlt />
    </button>
  </div>
       </td>

    </tr>
    <tr>
    <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">2</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">20-sep-2024</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10.00 AM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
        <button className="bg-red-400 hover:bg-red-500 text-white font-normal py-2 px-4 rounded-md inline-flex items-center">
         <PiSignOutBold className='mr-2'/> Sign Out</button>

        </td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#89aec4] text-white hover:bg-green-200 p-2 rounded-none">
  <FaEdit />
</button>
    
    
    <button className="bg-red-500 text-white hover:bg-red-200 p-2 rounded-none">
      <FaTrashAlt />
    </button>
  </div>
        </td>
    </tr>
    <tr>
    <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">3</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">20-sep-2024</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10.00 AM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">06.00 PM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">08.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">
        <div className="flex justify-center items-center space-x-2">
    
    <button className="bg-[#89aec4] text-white hover:bg-green-200 p-2 rounded-none">
  <FaEdit />
</button>
    
    
    <button className="bg-red-500 text-white hover:bg-red-200 p-2 rounded-none">
      <FaTrashAlt />
    </button>
  </div>
        </td>
    </tr>
    <tr>
    <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">4</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">20-sep-2024</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10.00 AM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
        <button className="bg-red-400 hover:bg-red-500 text-white font-normal py-2 px-4 rounded-md inline-flex items-center">
        <PiSignOutBold className='mr-2'/> Sign Out</button>
        </td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#89aec4] text-white hover:bg-green-200 p-2 rounded-none">
  <FaEdit />
</button>
    
    
    <button className="bg-red-500 text-white hover:bg-red-200 p-2 rounded-none">
      <FaTrashAlt />
    </button>
  </div>
        </td>
    </tr>
    <tr>
    <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">5</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">20-sep-2024</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10.00 AM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">06.00 PM</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">08.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700">
  <div className="flex justify-center items-center space-x-2">
    
  <button className="bg-[#89aec4] text-white hover:bg-green-200 p-2 rounded-none">
  <FaEdit />
</button>
    
    
    <button className="bg-red-500 text-white hover:bg-red-200 p-2 rounded-none">
      <FaTrashAlt />
    </button>
  </div>
</td>

    </tr>
  </tbody>
</table><br /><br />
{/* <div className="flex justify-end space-x-2">

  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
    Previous
  </button>

  <button className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600">
    1
  </button>
  <button className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600">
    2
  </button>
  <button className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600">
    3
  </button>
  <button className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600">
    4
  </button>
  <button className="bg-blue-300 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600">
    5
  </button>

  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
    Next
  </button>
</div> */}
<div className="flex justify-end space-x-2">

<button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
  Previous
</button>

<button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
  1
</button>
<button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
  2
</button>
<button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
  3
</button>
<button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
  4
</button>
<button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
  5
</button>

<button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
  Next
</button>
</div>
      </div>
      </>
    </div>
  )
}

export default ManageAttendance
