import React from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { MdOutlineHome } from 'react-icons/md'
import { PiNotebookLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";

const ManageBank = () => {

    const navigate = useNavigate()

  return (
    <div className=''>
      <div className="flex items-center justify-end w-full">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">Home / Bank / Manage Bank</span>
        <div className="parent">
          
        </div>
      </div>

      

      <div className="mt-4 bg-white p-4 rounded-xl">
        <div className="flex items-center justify-between mt- mb-1">
        <h1 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
          Bank List
        </h1>
        <hr />
        <div className="buttons gap-2 md:flex items-center justify-start">
        <button className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2" onClick={() => navigate("/")}>
          <IoIosAddCircle className='text-2xl' /> Add new Bank
        </button>
        <button className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2" onClick={() => navigate("/banktransaction")}>
          <GrTransaction className="text-2xl" /> Bank Transaction
        </button>
        <button className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2" onClick={() => navigate("/bankledger")}>
          <PiNotebookLight className="text-2xl" /> Bank Ledger
        </button>
      </div>
        </div>
        
        {/* Wrapping table in a responsive container */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-[#595995]">
                <th className="px-4 py-2 border border-gray-300">SL.</th>
                <th className="px-4 py-2 border border-gray-300 text-center">Bank Name</th>
                <th className="px-4 py-2 border border-gray-300">A/C Name</th>
                <th className="px-4 py-2 border border-gray-300">A/C Number</th>
                <th className="px-4 py-2 border border-gray-300">Branch</th>
                <th className="px-4 py-2 border border-gray-300">Balance</th>
                <th className="px-4 py-2 border border-gray-300">IFSC Code</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody className="border border-gray-300">
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 border border-gray-300">1</td>
                <td className="px-4 py-2 border border-gray-300">Bank Muscat</td>
                <td className="px-4 py-2 border border-gray-300">Current Account</td>
                <td className="px-4 py-2 border border-gray-300">xxxx</td>
                <td className="px-4 py-2 border border-gray-300">Nandur Baugh</td>
                <td className="px-4 py-2 border border-gray-300">Rs. 1246.00</td>
                <td className="px-4 py-2 border border-gray-300">FRDL001485</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button className="bg-green-600 p-1">
                    <FaPencil className="text-white" />
                  </button>{" "}
                  <button className="bg-red-600 p-1">
                    <FaTrash className="text-white" />
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-100 border-t border-gray-300">
                <td className="px-4 py-2 border border-gray-300">2</td>
                <td className="px-4 py-2 border border-gray-300">BIBS Bank</td>
                <td className="px-4 py-2 border border-gray-300">Tyrol Toys</td>
                <td className="px-4 py-2 border border-gray-300">12345</td>
                <td className="px-4 py-2 border border-gray-300">Nandur Baugh</td>
                <td className="px-4 py-2 border border-gray-300">Rs. 1246.00</td>
                <td className="px-4 py-2 border border-gray-300">FRDL001485</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button className="bg-green-600 p-1">
                    <FaPencil className="text-white" />
                  </button>{" "}
                  <button className="bg-red-600 p-1">
                    <FaTrash className="text-white" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageBank;
