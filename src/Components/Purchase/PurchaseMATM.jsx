import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { MdOutlineHome } from 'react-icons/md'

const PurchaseMATM = () => {
  return (
    <div>
      <>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Purchase / Purchase Invoice-MATM
        </span>
      </div>
      <div className="bg-white p-4">
<div className="flex justify-between items-center space-x-4">
  <h3 className="text-xl font-extralight">Purchase Invoice-MATM</h3>
</div><hr />
{/* left section */}
<div className="flex justify-between mt-2">
  
<div className="flex flex-col space-y-4">
  <div className="flex items-center ">
    <label htmlFor="invoiceNo" className="text-gray-700 font-medium w-40">Service Mode</label>
    <input 
      type="text" 
      id="invoiceNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="Puchase Invoice" 
    />
  </div>

  <div className="flex items-center">
  <label htmlFor="employeeName" className="text-gray-700 font-medium w-40">Service Branch</label>
  <select 
    id="employeeName" 
    className="flex-1 px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Online Service/ OffLine Sevice</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>

  <div className="flex items-center">
    <label htmlFor="mobileNo" className="text-gray-700 font-medium w-40">Account Head</label>
    <input 
      type="text" 
      id="mobileNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="Purchase Account" 
    />
  </div>
  <div className="flex items-center">
  <label htmlFor="mobileNo" className="text-gray-700 font-medium w-40">MATM Invoice No.</label>
  <input 
    type="text" 
    id="mobileNo" 
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="MATM Invoice No" 
  />
  <button 
    type="button" 
    className="flex items-center px-4 py-2 ml-2 bg-[#024CAA] text-white rounded-lg">
    <IoSearch className="mr-2" /> Search
  </button>
</div>

{/* {Return Invoice Details} */}
<div className="flex space-x-4">
  <button type="button" className="flex items-center px-4 py-2 bg-[#2E2E48] text-white rounded-lg">
   Customer Details
  </button>
</div>
</div>


  {/* Right Section */}
  <div className="flex flex-col space-y-4 mt-2">
  <div className="flex items-center ">
    <label htmlFor="invoiceNo" className="text-gray-700 font-medium w-40">Invoice No</label>
    <input 
      type="text" 
      id="invoiceNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="2456DS500" 
    />
  </div>

  <div className="flex items-center">
    <label htmlFor="date" className="text-gray-700 font-medium w-40">Invoice Date</label>
    <input 
      type="date" 
      id="date" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="22-oc-2024" 
    />
  </div>

  <div className="flex items-center">
    <label htmlFor="mobileNo" className="text-gray-700 font-medium w-40">Service Type</label>
    <input 
      type="text" 
      id="mobileNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="Purchase Service Invoice" 
    />
  </div>
  <div className="flex items-center">
    <label htmlFor="mobileNo" className="text-gray-700 font-medium w-40">Employee Name</label>
    <input 
      type="text" 
      id="mobileNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="Employee Name" 
    />
  </div>
</div>



</div>

<div className="flex justify-between">
  
<div className="flex flex-col space-y-4">
  <div className="flex items-center ">
    <label htmlFor="invoiceNo" className="text-gray-700 font-medium w-40">Customer Name</label>
    <input 
      type="text" 
      id="invoiceNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      
    />
  </div>


</div>



  {/* Right Section */}
  <div className="flex flex-col space-y-4">
  <div className="flex items-center ">
    <label htmlFor="invoiceNo" className="text-gray-700 font-medium w-40">Mobile No.</label>
    <input 
      type="text" 
      id="invoiceNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
     
    />
  </div>

</div>
</div>
{/* {Purchase Entry} */}
<div className="flex space-x-4 mt-2">
  <button type="button" className="flex items-center px-4 py-2 bg-[#2E2E48] text-white rounded-lg">
   Purchase Entry
  </button>
</div>

{/* Table first */}
<div className="overflow-x-auto mt-2">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-white-100">
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Name</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Category</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Provider</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Provider Balance</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Sell Amount</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Buy Amount</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Total</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Profit</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
      <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">Income Certificate</td>
      <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">E-District Service</td>
      <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">SBI Bank</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">0</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10,000.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">9,500.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">9,500.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">500</td>
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
      <tr className="border-b">
      <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">Income Certificate</td>
      <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">E-District Service</td>
      <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">SBI Bank</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">0</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">10,000.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">9,500.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">9,500.00</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">500</td>
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
  {/* {Purchase Details} */}
 <div className="flex space-x-4 mt-2">
  <button type="button" className="flex items-center px-4 py-2 bg-[#2E2E48] text-white rounded-lg">
   Purchase Details
  </button>
</div>

{/* {Talble} */}
<div className="flex justify-between items-start mt-2">
  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-fit bg-white border border-gray-300">
      <thead>
        <tr className="bg-white -100">
          <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Name</th>
          <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Category</th>
          <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Provider</th>
          <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Buy Amount</th>
          <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
         
          <td className="py-2 px-4 border border-gray-300 text-gray-700">Income Cerificate</td>
          <td className="py-2 px-4 border border-gray-300 text-gray-700">E- District Service</td>
          <td className="py-2 px-4 border border-gray-300 text-gray-700">10,000.00</td>
          <td className="py-2 px-4 border border-gray-300 text-gray-700">10,000.00</td>
          <td className="py-2 px-4 border border-gray-300 text-gray-700">10,000.00</td>
        </tr>
        <tr className="border-b">
         
         <td className="py-2 px-4 border border-gray-300 text-gray-700">Income Cerificate</td>
         <td className="py-2 px-4 border border-gray-300 text-gray-700">E- District Service</td>
         <td className="py-2 px-4 border border-gray-300 text-gray-700">10,000.00</td>
         <td className="py-2 px-4 border border-gray-300 text-gray-700">10,000.00</td>
         <td className="py-2 px-4 border border-gray-300 text-gray-700">10,000.00</td>
       </tr>
      </tbody>
    </table>
  </div>

  {/* Return Service Section */}
  <div className="flex items-center ml-4 ">
    <label htmlFor="invoiceNo" className="text-gray-700 font-medium w-40">Grand Total</label>
    <input 
      type="text" 
      id="invoiceNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="1020.00" 
    />
  </div>
</div>

<div className="overflow-x-auto mt-2 w-[640px]">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
      
      </tr>
    </thead>
    <tbody>
   
      <tr className="border-b ">
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">No. of Items: 3</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">Total Amount</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">Rs.0.00</td>
   
      </tr>
    </tbody>
  </table>
</div>

<div className="flex justify-center mt-4">
  <button type="button" className="px-4 py-2 bg-[#3A6D8C] text-white rounded-lg">
    Save
  </button>
</div>
</div>
</div>
      </>
    </div>
  )
}

export default PurchaseMATM
