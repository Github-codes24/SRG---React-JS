import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { MdOutlineHome } from 'react-icons/md'

const UserAsignRoleList = () => {
  return (
    <div>
      <>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#a7d4ef]" />
        <span className="text-base md:text-xl">
          Home / Setting / User Permission Setting / Role List
        </span>
      </div><br/>
      <div className=" w-full bg-[#629584] text-white p-4 flex justify-between items-center shadow-md z-50 rounded-lg">
   <span className="font-bold">Save Successfully</span>
   <button className="text-white font-bold text-xl hover:text-gray-300 focus:outline-none">
       &times;
   </button>
</div>
   
      <div className="bg-white p-4 rounded-md mt-2">
<div className="flex justify-between items-center space-x-4">
  <h3 className="text-xl font-extralight">Role List</h3>
 
</div><br /><hr /><br />
<table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-white-200 text-gray-700">
              <th className="w-1/12 py-3 px-4 border border-gray-300">
                <div className="text-left text-[#595995]">SL.</div>
              </th>
              <th className="w-10/12 py-3 px-4 border border-gray-300">
                <div className="text-left text-[#595995]">Role Name</div>   
              </th>
              <th className="w-1/12 py-3 px-4 border border-gray-300">
                <div className="flex justify-center items-center text-[#595995]">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-left">1</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-left">IBRAHIM A SEAD</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700">
                <div className="flex justify-center items-center space-x-2">
                  <button className="bg-[#75A68F] text-white p-2 rounded-none">
                    <FaEdit />
                  </button>
                  <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-left">2</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-left">IBRAHIM A SEAD</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700">
                <div className="flex justify-center items-center space-x-2">
                  <button className="bg-[#75A68F] text-white p-2 rounded-none">
                    <FaEdit />
                  </button>
                  <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-left">3</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-left">IBRAHIM A SEAD</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700">
                <div className="flex justify-center items-center space-x-2">
                  <button className="bg-[#75A68F] text-white p-2 rounded-none">
                    <FaEdit />
                  </button>
                  <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
</div>
      </>
    </div>
  )
}

export default UserAsignRoleList

