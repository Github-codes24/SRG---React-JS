import React from 'react'
import { IoPersonAdd } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineHome, MdOutlineManageAccounts } from "react-icons/md";

const AddOfficeLoan = () => {
  return (
    <div>
      <>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / HRM / Office Loan / Add Office Loan
        </span>
      </div><br />
      <div className="bg-white p-4 rounded-lg">
<div className="flex justify-between items-center space-x-4">
  <h3 className="text-xl font-extralight">Add Office Loan</h3>
  <div className="flex space-x-4">
  <button type="button" className="flex items-center px-4 py-2 bg-[#746BD9] text-white rounded-lg">
     <IoPersonAdd className='mr-2'/> Add Person
</button>

  <button type="button" className="flex items-center px-4 py-2 bg-[#746BD9] text-white rounded-lg">
  <IoMdAdd className='mr-2'/> Add Payment  
  </button>

  <button type="button" className="flex items-center px-4 py-2 bg-[#746BD9] text-white rounded-lg">
   <MdOutlineManageAccounts className='mr-2'/> Manage Person  
  </button>
</div>
</div><br /><hr /><br />

<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Voucher No</label>
  <select 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Select One</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Date</label>
  <input 
    type="date" 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="22-oct-2024"/>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Name <span className="text-red-500">*</span></label>
  <select 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Select One</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Phone <span className="text-red-500">*</span></label>
  <input 
    type="text" 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="Phone"/>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Amount <span className="text-red-500">*</span></label>
  <input 
    type="text" 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="Amount"/>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Payment Type <span className="text-red-500">*</span></label>
  <select 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Bank Payment/ Cash Payment</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="bank" className="text-[#464689E5] font-medium w-60">Bank <span className="text-red-500">*</span></label>
  <select 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Select Option</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>

<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Account Balance</label>
  <input 
    type="text" 
    id="employeeName" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="0.00"/>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="details" className="text-[#464689E5] font-medium w-60">Details</label>
  <textarea 
    id="details" 
    rows="2" 
    className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="Enter details"
  ></textarea>
</div>

<div className="flex justify-center mt-4 space-x-4">
  <button type="button" className="px-4 py-2 bg-[#629584] text-white rounded-lg">
    Reset
  </button>
  <button type="button" className="px-4 py-2 bg-[#3A6D8C] text-white rounded-lg">
    Save
  </button>
</div>



</div>
      </>
      
    </div>
  )
}

export default AddOfficeLoan
