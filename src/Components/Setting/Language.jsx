import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Language = () => {
    const navigate = useNavigate()
  return (
    <div>
       <div className="flex items-center p-8 justify-end">
          <IoHomeOutline className=" text-[#3A6D8C]" />
          <span className='text-[#5C5858]' >Home / Setting / Software Setting / Language</span>
        </div> 
    <div className="p-6 bg-gray-50 border border-blue-300 rounded-lg shadow-md max-w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Language</h2>
        <button onClick={()=>navigate("/setting/phraselist")} className="flex items-center px-4 py-2 bg-[#746BD9] text-white rounded-md shadow hover:bg-purple-600">
  <FaPlus className="mr-2" />
  
  <span className="font-medium">Add Phrase</span>
</button>

      </div>

      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Language Name"
          className="w-1/3 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="px-4 py-2 bg-[#3A6D8C] text-white rounded-md shadow  ">
          Save
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border border-gray-200 font-medium text-gray-700"><TfiMenuAlt /></th>
              <th className="text-left px-4 py-2 border border-gray-200 font-medium text-gray-700">Language</th>
              <th className="text-center px-4 py-2 border border-gray-200 font-medium text-gray-700">
              <IoMdSettings className="text-3px" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200 text-gray-700">1</td>
              <td className="px-4 py-2 border border-gray-200 text-gray-700">English</td>
              <td className="px-4 py-2 border border-gray-200 ">
                <button className="px-2 py-1 bg-green-200 text-[#75A68F] rounded shadow hover:bg-green-300">
                <CiEdit />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200 text-gray-700">2</td>
              <td className="px-4 py-2 border border-gray-200 text-gray-700">Bangla</td>
              <td className="px-4 py-2 border border-gray-200  ">
                <button className="px-2 py-1 bg-green-200 text-[#75A68F] rounded shadow hover:bg-green-300">
                <CiEdit />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200 text-gray-700">3</td>
              <td className="px-4 py-2 border border-gray-200 text-gray-700">Arabic</td>
              <td className="px-4 py-2 border border-gray-200  ">
                <button className="px-2 py-1 bg-green-200 text-[#75A68F] rounded shadow hover:bg-green-300">
                <CiEdit />
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-200 text-gray-700">4</td>
              <td className="px-4 py-2 border border-gray-200 text-gray-700">Ar</td>
              <td className="px-4 py-2 border border-gray-200  ">
                <button className="px-2 py-1 bg-green-200 text-[#75A68F] rounded shadow hover:bg-green-300">
                <CiEdit />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Language;
