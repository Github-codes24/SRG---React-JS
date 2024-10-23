import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { HiOutlineArrowsUpDown } from 'react-icons/hi2'
import { MdOutlineHome } from 'react-icons/md'
import { VscSaveAll } from "react-icons/vsc";

const PurchaseManage = () => {
  return (
    <div>
      <>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Purchase / Purchase Manage
        </span>
      </div>
      <div className="bg-white p-4 mt-1">
  <div className="flex justify-between items-center">
    {/* Left side: Start Date, End Date, and Search button */}
    <div className="flex space-x-4 items-center">
      <label className="text-gray-700 font-medium">From</label>
      <input 
        type="date" 
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
      
      <label className="text-gray-700 font-medium">To</label>
      <input 
        type="date" 
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      
      <button type="button" className="flex items-center px-4 py-2 bg-[#024CAA] text-white rounded-lg">
         Find
      </button>
    </div>
  </div>
  </div>
  <div className="bg-white p-4 mt-2">
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
    <button type="button" className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">Copy</button>
    <button type="button" className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">CSV</button>
    <button type="button" className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">Excel</button>
    <button type="button" className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">PDF</button>
    <button type="button" className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">Print</button>
  </div>

  {/* Right Section: Search Input */}
  <div className="relative flex items-center">
    <input 
      type="text" 
      placeholder="Search" 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <span className="absolute right-2 bg-[#2E2E48] text-white p-2 ">
      <FaMagnifyingGlass className="h-4 w-4" />
    </span>
  </div>
</div>

<div className="overflow-x-auto mt-2">
  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
    <thead>
      <tr>
      <th className="py-2 px-4 border text-[#595995]">SL.</th>
      <th className="py-2 px-4 border text-[#595995]">Purchase Invoice No</th>
      <th className="py-2 px-4 border text-[#595995]">Purchasse Date</th>
      <th className="py-2 px-4 border text-[#595995]">Service Provider Account </th>
      <th className="py-2 px-4 border text-[#595995]">Service Invoice No</th>
      <th className="py-2 px-4 border text-[#595995]">Total Amount</th>
      <th className="py-2 px-4 border text-[#595995]">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">1</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">2</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">3</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">4</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">5</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">6</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">7</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">8</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">9</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">10</td>
        <td className="py-2 px-4 border text-center align-middle">100021</td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">
        <div className="flex justify-center items-center space-x-2">
    
        <button className="bg-[#447967] text-white p-2 rounded-none">
<VscSaveAll />

</button>
    <button className="bg-[#75A68F] text-white p-2 rounded-none">
<FaEdit />
</button>
</div>
        </td>
      </tr>
      {/* Total Row */}
      <tr className="bg-white-100 font-normal">
        <td colSpan="5" className="py-2 px-4 border text-[#595995] font-semibold text-end">Total</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.10000000.00</td>
        
      </tr>
    </tbody>
  </table>
</div>

<div className="flex justify-between items-center mt-4">
  {/* Left side text */}
  <p className="text-[#746BD9]">
    Showing 1 to 10 of 100 entries
  </p>

  {/* Pagination buttons */}
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
      </>
    </div>
  )
}

export default PurchaseManage
