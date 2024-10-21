import React from 'react';
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";

const AddServiceCategory = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal">Add Service Category</h2>
       <div className='flex justify-between gap-4'> 
        <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
        <MdMiscellaneousServices className='mr-2 h-6 w-6'/>
          Manage Service
        </button>
        <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
        <MdOutlineFileUpload  className='mr-2 h-6 w-6'/>
        Service CSV Upload
        </button></div>
      </div>
 <hr />
      <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="bankname"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Service Category <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Service Category"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Name "
              className="w-[200px] text-[#595995] font-semibold"
            >
              Description <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="Service Name"
              placeholder="Description"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="flex justify-center mt-6 gap-4">
        <div className="buttons flex items-center">
             
            <button className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white" type="submit">Save</button>
          </div>
        </div>
    </div>
  );
};

export default AddServiceCategory;
