import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const AddUser = () => {
  return (
    <div><>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Setting / Software Setting / Add User
        </span>
      </div>
      <div className="bg-white p-4 rounded-lg mt-1">
        <div className="flex justify-between items-center space-x-4">
          <h3 className="text-xl font-extralight">Add User</h3>
        </div>
            <hr className='mt-2'/>
        <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        First Name <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="First Name"/>
       </div>

        <div className="flex items-center mb-4  w-[950px] h-6">
          <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="employeeName" 
            className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="Last Name"/>
        </div>
        <div className="flex items-center mb-4  w-[950px] h-6">
          <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
            User ID <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="employeeName" 
            className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            />
        </div>
        <div className="flex items-center mb-4 h-6 w-[950px]">
          <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
            Password <span className="text-red-500">*</span>
          </label>
          <input 
            type="password" 
            id="employeeName" 
            className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            />
        </div>
<div className="flex items-center mb-4 w-[950px] h-6">
  {/* Label for the image upload */}
  <label htmlFor="imageUpload" className="text-[#595995] font-medium w-60">
    Upload Image <span className="text-red-500">*</span>
  </label>

  {/* Custom styled file input */}
  <div className="relative w-30 flex items-center">
    <div className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-full h-9 flex items-center justify-between">
      <span id="fileName" className="text-gray-600">Select File</span>
      <input
        type="file"
        id="imageUpload"
        className="absolute inset-0 w-30 h-full opacity-0 cursor-pointer"
        accept="image/*"  // Ensures only image files can be selected
        onChange={(e) => {
          const fileName = e.target.files[0]?.name || "Select File";
          document.getElementById('fileName').innerText = fileName;
          document.getElementById('noFileSelected').innerText = fileName === "Select File" ? "No File Selected" : fileName;
        }}
      />
    </div>

    {/* Message for no file selected */}
    <span id="noFileSelected" className="ml-2 inline-block text-black">
      No File Selected
    </span>
  </div>
</div>
<div className="flex items-center space-x-4 mb-4 h-6">
            <div className="flex items-center">
              <label htmlFor="saleOption" className="text-[#595995] font-medium w-[245px]">User Type <span className="text-red-500">*</span></label>
              <input type="radio" id="saleYes" name="saleOptions" className="mr-2" />
              <label htmlFor="saleYes" className="text-black">User</label>
            </div>

            <div className="flex items-center">
              <input type="radio" id="saleNo" name="saleOptions" className="mr-2" />
              <label htmlFor="saleNo" className="text-black">Admin</label>
            </div>
 </div>
 <div className="flex items-center space-x-4 mb-4 h-6">
            <div className="flex items-center">
              <label htmlFor="saleOption" className="text-[#595995] font-medium w-[245px]">Status <span className="text-red-500">*</span></label>
              <input type="radio" id="saleYes" name="saleOptions" className="mr-2" />
              <label htmlFor="saleYes" className="text-black">User</label>
            </div>

            <div className="flex items-center">
              <input type="radio" id="saleNo" name="saleOptions" className="mr-2" />
              <label htmlFor="saleNo" className="text-black">Admin</label>
            </div>
 </div>

 <div className="flex items-center mb-4 w-[950px] h-8">
  <label htmlFor="employeeName" className="text-[#464689E5] font-medium w-60">Work Company <span className="text-red-500">*</span></label>
  <select 
    id="employeeName" 
    className="flex-1 px-4 py-1 h-8 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Select Option</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>

<div className="flex items-center mb-4 w-[950px] h-8 mt-2"> {/* Keep mt-4 for spacing */}
  <label htmlFor="workCompany" className="text-[#464689E5] font-medium w-60">Work Branches <span className="text-red-500">*</span></label>
  <select 
    id="workCompany" 
    className="flex-1 px-4 py-1 h-8 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
  >
    <option value="" disabled selected className="text-gray-400">Select Option</option>
    <option value="employee1" className="text-gray-400">Voucher 1</option>
    <option value="employee2" className="text-gray-400">Voucher 2</option>
    <option value="employee3" className="text-gray-400">Voucher 3</option>
  </select>
</div>

<div className="flex items-center mb-4 w-[950px] mt-1">
  <label htmlFor="details" className="text-[#464689E5] font-medium w-60">Address <span className="text-red-500">*</span></label>
  <textarea 
    id="details" 
    rows="2" 
    className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
    placeholder="Enter your Address"
  ></textarea>
</div>
<div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Phone <span className="text-red-500">*</span>
       </label>
         <input 
         type="number" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Phone"/>
       </div>
       <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Default Login Branch <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Default Login Branch"/>
       </div>
       <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Security <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Security Code"/>
       </div>
       <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Gender <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Gender"/>
       </div>
       <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Create Date Time <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Create Date Time"/>
       </div>
       <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Modification Date Time <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Modification Date Time"/>
       </div>
       <div className="flex items-center mb-4 mt-2 w-[950px] h-6"> {/* Set height to 10 or adjust accordingly */}
       <label htmlFor="employeeName" className="text-[#595995] font-medium w-60">
        Last Login Date Time <span className="text-red-500">*</span>
       </label>
         <input 
         type="text" 
         id="employeeName" 
         className="flex-1 px-4 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
         placeholder="Last Login Date Time"/>
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

export default AddUser
