import React from 'react';
import { MdOutlineFormatListBulleted } from "react-icons/md";

const AddWebsite = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal">Add Website</h2>
        <button className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded">
        <MdOutlineFormatListBulleted className="mr-2"/>
          Website List
        </button>
      </div>
      <hr className='mb-3'/>
 
          <div className="flex items-center justify-between space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">Website Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="transactionType"
              placeholder='Website Link'
              className="flex-1 border border-gray-300 p-2 rounded text-red-600"
              
            />
          </div>
          <div className="flex items-center justify-between space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">Link <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="transactionType"
              placeholder=' Link'
              className="flex-1 border border-gray-300 p-2 rounded text-red-600"
              
            />
          </div>
          <div className="flex justify-center mt-6 gap-4">
        <div className="buttons flex items-center justify-center gap-4">
        <button className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white" type="submit">Save</button>
            <button className="px-6 py-1 bg-[#629584] rounded-md text-white" type="reset">Reset</button>
            
          </div>
        </div>

    </div>
  );
};

export default AddWebsite;
