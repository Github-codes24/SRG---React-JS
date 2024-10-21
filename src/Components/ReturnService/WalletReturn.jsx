import React from 'react'
import { FiPlus } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

const WalletReturn = () => {
  return (
    <div>
      <>
     <header>
     <div className="bg-white p-4">
  <div className="flex justify-between items-center">
    {/* Left side: Start Date, End Date, and Search button */}
    <div className="flex space-x-4 items-center">
      <label className="text-gray-700 font-medium">Start Date <span className="text-red-500"> *</span></label>
      <input 
        type="date" 
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
      
      <label className="text-gray-700 font-medium">End Date <span className="text-red-500"> *</span></label>
      <input 
        type="date" 
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      
      <button type="button" className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg">
        <IoMdSearch /> Search
      </button>
    </div>

    {/* Right side: Add Return button */}
    <div>
      <button type="button" className="flex items-center px-4 py-2 bg-purple-800 text-white rounded-lg">
        <FiPlus /> Add Return
      </button>
    </div>
  </div>
</div>

    <br />
     </header>
     <main>
     <table className="min-w-full bg-white border border-gray-300">
     <thead>
    <tr className="bg-gray-200 text-gray-700">
      <th className="py-3 px-4 border border-gray-300 text-left">SL.</th>
      <th className="py-3 px-4 border border-gray-300 text-left">Invoice ID </th>
      <th className="py-3 px-4 border border-gray-300 text-left">Date </th>
      <th className="py-3 px-4 border border-gray-300 text-left">Service Provider</th>
      <th className="py-3 px-4 border border-gray-300 text-left">Refund Amount</th>
      <th className="py-3 px-4 border border-gray-300 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan="6" className="py-4 text-center text-gray-500">There are currently no information</td>
    </tr>
  </tbody>
</table>

     </main>
      </>
    </div>
  )
}

export default WalletReturn
