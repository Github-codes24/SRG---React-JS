import React from 'react'
import { MdOutlineHome, MdOutlineLocalPrintshop } from 'react-icons/md'

const ProfitReport2 = () => {
  return (
    <div>
        <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Account Report / Profit Report 2
        </span>
      </div>

      <div className="bg-white p-2">
        <p className='p-2 text-xl text-[#878484]'>Profit Report</p>
        <hr />
        <div className="">
            <p className='text-center text-xl font-semibold mb-3 text-[#2E2E48]'>Statment of Comphrensive Income</p>
            <p className='text-center text-[#2E2E48] font-semibold'>From 01-Oct-2024 to 31-Oct-2024</p>
        </div>
        <div className="flex items-center justify-evenly my-2 text-[#3E4966] bg-[#E7E0EE4A]">
            <p></p>
            <p >Particular</p>
            <p>Amounts</p>
        </div>
        <div className="flex items-center justify-start px-1">
            <p className='font-medium text-[#2E2E48]'>Income</p>
        </div>
        <div className="flex items-center justify-end bg-[#E7E0EE4A] gap-x-20 px-3">
            <p className='text-[#3E4966] font-medium'>Total Expense</p>
            <p className='text-[#3E4966] font-medium'>0.00</p>
        </div>
        <div className="flex items-center justify-start bg-[#C8C8C8] p-1">
            <p className='font-medium text-[#2E2E48]'>Expense</p>
        </div>
        <div className="flex items-center justify-end  my-1 gap-x-20 px-3 p-1">
            <p className='text-[#3E4966] font-medium '>Total Expense</p>
            <p className='text-[#3E4966] font-medium'>0.00</p>
        </div>
        <div className="flex items-center justify-end bg-[#B8E7A5] my-1 gap-x-20 px-3 p-1">
            <p className=' font-medium  text-[#31631E]'>Profit - Loss Profit</p>
            <p className='font-medium text-[#31631E]'>0.00</p>
        </div>
        <hr className='font-bold' />
        <div className="flex items-center justify-evenly text-[#525252]">
            <p>Prepard By</p>
            <p>Account</p>
            <p>Authorized Signature</p>
            <p>Chairman</p>
        </div>
        <div className="flex items-center justify-center">
        <button className="px-5 py-1 bg-[#FF6500] text-white rounded-md flex items-center gap-x-1 my-2">
            <MdOutlineLocalPrintshop fontSize={"1.3rem"} /> Print
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfitReport2