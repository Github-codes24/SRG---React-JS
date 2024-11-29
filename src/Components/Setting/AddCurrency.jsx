import React from 'react'
import { CiCircleList } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const Currency = () => {
  return (
    <div>
        <div className="flex justify-end items-center">
          <IoHomeOutline className="  text-[#3A6D8C]" />
          <span className='text-[#5C5858]'>Home / Setting / Software Setting / Currency</span>
        </div>
        <div className="w-[1117px] mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <div className="flex justify-between border-b-2  items-center mb-6">
        <h1 className="text-2xl flex text-[#656565] w-full  font-semibold">Add Currency
      
        </h1>
        <button className="bg-[#746BD9] mb-4 w-[150px] h-[35px] justify-center gap-1    text-white rounded flex items-center">
        <CiCircleList className='text-bold ' />Currency List
        </button>
    </div>
    <form>
        <div className=" flex justify-between mb-4">
            <label className="block text-[#595995]  font-semibold mb-2">
                Currency Name<span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Currency Name" className="w-[745px] px-3 py-2 border rounded" />
        </div>
        <div className=" flex justify-between mb-6">
            <label className="block text-[#595995] font-semibold mb-2">
                Currency Symbol<span className="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Currency Symbol" className="w-[745px] px-3 py-2 border rounded" />
        </div>
        <div className="flex justify-center space-x-4">
            <button type="reset" className="bg-[#629584] w-[108px] text-white px-4 py-2 rounded">Reset</button>
            <button type="submit" className="bg-[#3A6D8C] w-[108px] text-white px-4 py-2 rounded">Save</button>
        </div>
    </form>
</div>
</div>
  )
}

export default Currency