import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const CashFlowReport = () => {
  return (
    <div>
        <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Account Report / Cash Flow Report
        </span>
      </div>

        <div className="bg-white p-2 my-2">
            <p className='text-xl text-[#878484]'>Cash Flow Report</p>
            <hr />
            <form action="" className='my-10'>
                <div className="flex items-center gap-3 my-5">
                <label className='text-[#595995] font-semibold ' htmlFor="">
                    Start Date <span className='text-red-500 font-semibold'>*</span>
                </label>
                <input type="date" className='border border-[#D3D1D1] w-[20%] rounded-md p-1' />
                </div>
                <div className="flex items-center gap-3 ">
                <label className='text-[#595995] font-semibold' htmlFor="">
                    End Date <span className='text-red-500 font-semibold'>*</span>
                </label>
                <input type="date" className='border border-[#D3D1D1] w-[20%] rounded-md p-1'/>
                </div>
                <div className="flex items-center justify-center">
                    <button className='text-white bg-[#3A6D8C] px-4 py-1 rounded-md'>Find </button>
                </div>
            </form>

        </div>


    </div>
  )
}

export default CashFlowReport