import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { MdOutlineHome } from 'react-icons/md'
// import  dummyprofile  from '../../assets/Dummy/dummyprofile'
// import dummyprofile from '../../assets/Dummy/dummyprofile.png'
 
// import { VscSaveAll } from 'react-icons/vsc'


const ManageUser = () => {
  return (
    <div>
      <div className="flex items-center justify-end py-2">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Setting/ Software Setting/ Manage User
        </span>
      </div>
      <div className="min-w-full bg-white p-4 mt-0 rounded-lg">
        <h3 className="text-xl font-extralight mt-0">SMS Configure</h3>
        <hr className='mt-1'/>
        <div className='flex justify-between items-center mt-0'>
          {/* Left Section: Show and Entries */}
          {/* <div className="flex items-center space-x-2 mt-0">
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
          </div> */}
          <div className="flex items-center space-x-2 mt-0">
  <label htmlFor="show" className="text-gray-700 font-medium w-10">Show</label>
  <div className="relative w-20">
    <select 
      id="show" 
      className="w-full px-2 py-1 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
    >
      <option value="" disabled selected>10</option>
      <option value="show">1</option>
      <option value="show">2</option>
      <option value="show">3</option>
    </select>
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      onClick={() => document.getElementById('show').value = ""}
    >
      &times;
    </button>
  </div>
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
          {/* <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-2 bg-[#2E2E48] text-white p-2">
              <FaMagnifyingGlass className="h-4 w-4" />
            </span>
          </div> */}
          <div className="relative flex items-center">
  <input 
    type="text" 
    placeholder="Search" 
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
  <span className="absolute right-0 h-full w-12 bg-[#2E2E48] text-white flex justify-center items-center rounded-r-lg">
    <FaMagnifyingGlass className="h-4 w-4" />
  </span>
</div>

        </div>
        <div className="mt-1 min-w-full table-container">
          <table className="bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border text-[#595995]">SL No</th>
                <th className="py-2 px-4 border text-[#595995]">Image</th>
                <th className="py-2 px-4 border text-[#595995]">User Name</th>
                <th className="py-2 px-4 border text-[#595995]">Mobile Number</th>
                <th className="py-2 px-4 border text-[#595995]">E-mail</th>
                <th className="py-2 px-4 border text-[#595995]">User Type</th>
                <th className="py-2 px-4 border text-[#595995]">Last Login Date Time</th>
                <th className="py-2 px-4 border text-[#595995]">Last Modify Date Time</th>
                <th className="py-2 px-4 border text-[#595995]">Work Date Time</th>
                <th className="py-2 px-4 border text-[#595995]">Work Company Id</th>
                <th className="py-2 px-4 border text-[#595995]">Work Branch Id</th>
                <th className="py-2 px-4 border text-[#595995]">Status</th>
              </tr>
            </thead>
            <tbody>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">1</td>
      <td className="py-2 px-4 border text-center align-middle">
  <img alt="Profile" width="100" height="100" />
     </td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center  text-[#48A448] align-middle">Active</td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">2</td>
        <td className="py-2 px-4 border text-center align-middle"><img  alt="Profile" width="100" height="100" /></td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center  text-[#48A448] align-middle">Active</td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">3</td>
        <td className="py-2 px-4 border text-center align-middle"><img src={dummyprofile} alt="Profile" width="100" height="100" /></td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center  text-[#48A448] align-middle">Active</td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">4</td>
        <td className="py-2 px-4 border text-center align-middle"><img src={dummyprofile} alt="Profile" width="100" height="100" /></td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center  text-[#48A448] align-middle">Active</td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">5</td>
        <td className="py-2 px-4 border text-center align-middle"><img  alt="Profile" width="100" height="100" /></td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center  text-[#48A448] align-middle">Active</td>
      </tr>
      <tr>
      <td className="py-2 px-4 border text-center align-middle">6</td>
        <td className="py-2 px-4 border text-center align-middle"><img  alt="Profile" width="100" height="100" /></td>
        <td className="py-2 px-4 border text-center align-middle">08-Aug-24</td>
        <td className="py-2 px-4 border text-center align-middle">Aman</td>
        <td className="py-2 px-4 border text-center align-middle">25478</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center align-middle">Rs.1000.00</td>
        <td className="py-2 px-4 border text-center  text-[#48A448] align-middle">Active</td>
      </tr>
    </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#746BD9]">Showing 1 to 10 of 100 entries</p>
          <div className="flex justify-end space-x-2">
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">Previous</button>
            {/* Pagination buttons */}
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">1</button>
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">2</button>
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">3</button>
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">4</button>
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">5</button>
            <button className="border-2 border-[#746BD9] text-[#746BD9] px-4 py-2 rounded-full">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageUser;
