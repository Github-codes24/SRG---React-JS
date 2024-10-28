import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const UserAsignRole = () => {
  return (
    <div>
      <>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#a7d4ef]" />
        <span className="text-base md:text-xl">
          Home / Setting / User Permission Setting / User Assign Role
        </span>
      </div><br/>
      <div className="bg-white p-4 rounded-md">
<div className="flex justify-between items-center space-x-4">
  <h3 className="text-xl font-extralight">User Assign Role</h3>
 
</div><br /><hr /><br />
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">User <span className="text-red-500">*</span></label>
  <select 
    id="employeeName" 
    className="flex-1 px-2 py-2 mx-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
    style={{ maxWidth: '768px' }} // Adjust maxWidth as needed
  >
    <option value="" disabled selected className="text-gray-400"></option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">Role Name <span className="text-red-500">*</span></label>
  <select 
    id="employeeName" 
    className="flex-1 px-2 py-2 mx-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
    style={{ maxWidth: '768px' }} // Adjust maxWidth as needed
  >
    <option value="" disabled selected className="text-gray-400"></option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>
<div className="flex items-center mb-4">
  <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">Existing Role</label>
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

export default UserAsignRole
