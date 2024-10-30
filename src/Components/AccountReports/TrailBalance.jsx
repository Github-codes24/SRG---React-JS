import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const TrailBalance = () => {
  return (
    <div>
        <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl ml-2">
          Home / Account Report / Trial Balance
        </span>
      </div>

      <div className="bg-white p-3">
        <p className='text-xl text-[#878484]'>Trial Balance</p>
        <hr />

        <div className="my-3">
        <div className="flex items-center gap-3 my-2">
            <label htmlFor=""  className='text-[#595995] font-semibold'>Start Date <span className='font-bold text-red-500'>*</span></label>
            <input type="date" className='border-[#D3D1D1] border w-[20%] px-2' />
        </div>
        <div className="flex items-center gap-3 my-2">
            <label htmlFor="" className='text-[#595995] font-semibold'>End Date <span className='font-bold text-red-500'>*</span></label>
            <input type="date" className='border w-[20%] px-2 border-[#D3D1D1]'/>
        </div>
        <div className="flex items-center gap-3">
        <input type="checkbox" /> <p>With Details</p>
        </div>
        </div>
      <div className="flex items-center justify-center">
        <button className='px-4 text-white py-1 bg-[#3A6D8C] rounded-md'>Find</button>
      </div>
      </div>
    </div>
  )
}

export default TrailBalance