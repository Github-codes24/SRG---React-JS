import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineHome } from 'react-icons/md';

const RoleList = () => {
  return (
    <div className="overflow-hidden"> {/* Added overflow-hidden to the main div */}
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Setting / User Permission Settings / RoleList
        </span>
      </div>
      <br />
      <div className="bg-white p-4">
        <div className="flex justify-between items-center space-x-4">
          <h3 className="text-xl font-extralight">Role List</h3>
        </div>
        <br />
        <hr />
        <br />
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-white-200 text-gray-700">
              <th className="w-1/12 py-3 px-4 border border-gray-300">
                <div className="flex justify-center items-center text-[#595995]">SL.</div>
              </th>
              <th className="w-10/12 py-3 px-4 border border-gray-300">
                <div className="flex justify-center items-center text-[#595995]">Role Name</div>
              </th>
              <th className="w-1/12 py-3 px-4 border border-gray-300">
                <div className="flex justify-center items-center text-[#595995]">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">1</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
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
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">2</td>
              <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">IBRAHIM A SEAD</td>
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
        <br />
        <br />
        <div className="flex justify-end space-x-2">
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            Previous
          </button>
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            1
          </button>
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            2
          </button>
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            3
          </button>
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            4
          </button>
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            5
          </button>
          <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleList;
