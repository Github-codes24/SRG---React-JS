import React from 'react'
import { FaListUl } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';


const CustomerList = () => {
  return (
<>
<header>
<div className="flex justify-between items-center space-x-4">
  <h3 className="text-xl font-extralight">Service Return</h3>
  <div className="flex space-x-4">
  <button type="button" className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg">
    <FaListUl className="mr-2" /> Customer Return List
  </button>
  <button type="button" className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg">
    <FaListUl className="mr-2" /> Wallet Refund List  
  </button>
</div>
</div>
</header>
<br />
<hr />
<br />
<main>
<div className="flex justify-between">
  
      <div className="w-1/2">
          <div className="bg-gray-200 p-4 rounded-t-md">
            <span className="font-medium text-gray-700">Return From Customer</span>
          </div>
          <div className="border border-gray-300 p-4 rounded-b-md bg-white">
            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="invoiceInput" className="text-gray-700 font-medium">Invoice No</label>
              <input 
                type="text" 
                id="invoiceInput" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
                placeholder="Invoice No" 
              />
              <button type="button" className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg">
                <IoSearch className="mr-2" /> Search
              </button>
            </div>

          </div>
          <br />
          
          <div className="mb-4 flex items-center space-x-4">
            <label htmlFor="customerName" className="text-gray-700 font-medium">Customer Name</label> 
        <input 
         type="text" 
         id="customerName" 
         className="flex items-center px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Customer Name"/>
</div>

        </div>



  {/* Right Section */}
  <div className="flex flex-col space-y-4">
  <div className="flex items-center ">
    <label htmlFor="invoiceNo" className="text-gray-700 font-medium w-40">Return Invoice No</label>
    <input 
      type="text" 
      id="invoiceNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="2456DS500" 
    />
  </div>

  <div className="flex items-center">
    <label htmlFor="date" className="text-gray-700 font-medium w-40">Date</label>
    <input 
      type="date" 
      id="date" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="22-oc-2024" 
    />
  </div>

  <div className="flex items-center">
    <label htmlFor="mobileNo" className="text-gray-700 font-medium w-40">Mob No.</label>
    <input 
      type="text" 
      id="mobileNo" 
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
      placeholder="xxxxxxxxxx" 
    />
  </div>
</div>



</div>
<br />
{/* {Return Invoice Details} */}
 <div className="flex space-x-4">
  <button type="button" className="flex items-center px-4 py-2 bg-blue-950 text-white rounded-lg">
   Return Invoice Details
  </button>
</div>
<br />
{/* {Talble} */}
<div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Name</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Category</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Provider</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Provider Balance</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Customer Refund Amount</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Return Amount</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Total</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Loss</th>
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
  </table>
</div>
<br />
{/* {Talble} */}
<div className="overflow-x-auto">
  <table className="min-w-fit bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">SL No.</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Name</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Category</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Service Provider </th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Refund Amount</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Return Amount</th>
        <th className="py-2 px-4 border border-gray-300 text-left text-gray-700 font-medium">Less Comm</th>
        
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="py-2 px-4 border border-gray-300 text-gray-700">1</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
      </tr>
      <tr className="border-b">
        <td className="py-2 px-4 border border-gray-300 text-gray-700">2</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
      </tr>
      <tr className="border-b">
        <td className="py-2 px-4 border border-gray-300 text-gray-700">3</td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
        <td className="py-2 px-4 border border-gray-300 text-gray-700"></td>
      </tr>
    </tbody>
  </table>
</div>
<br />

<div className="overflow-x-auto w-[930px]">
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
  <button type="button" className="px-4 py-2 bg-blue-800 text-white rounded-lg">
    Save
  </button>
</div>

</main>
</>
  )
}


export default CustomerList
