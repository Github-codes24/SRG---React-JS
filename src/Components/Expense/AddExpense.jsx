import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const AddExpense = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Add Expense
        </span>
      </div>

      <div className="bg-white px-1">
        <p className='text-2xl text-[#878484] font-medium p-2'>Add Expense</p>
        <hr />

        <div className='p-3'>
          <form>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucher number" className='text-[#595995] text-lg font-semibold' >
                Voucher Number <span className='text-red-500 font-bold'>*</span>
              </label>
              <input required type="text" className='w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border' />
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="date" className='text-[#595995] text-lg font-semibold' >
                Date <span className='text-red-500 font-bold'>*</span>
              </label>
              <input required type="date" className='w-[80%] px-3 h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border' />
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucher number" className='text-[#595995] text-lg font-semibold' >
                Expense Type<span className='text-red-500 font-bold'>*</span>
              </label>
              <select name="" className='w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border'>
                <option value="Select option" disabled selected>Select Option</option>
                <option value="Petrol Expense"  >Petrol Expense</option>
                <option value="House Rent"  >House Rent</option>
                <option value="Office Expense"  >Office Expense</option>
                <option value="Office Supplies"  >Office Supplies</option>
              </select>
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucher number" className='text-[#595995] text-lg font-semibold' >
                Payment Type <span className='text-red-500 font-bold'>*</span>
              </label>
              <select name="" className='w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border'>
                <option value="Select option" disabled selected>Select Option</option>
                <option value="Bank Payment"  >Bank Payment</option>
                <option value="Cash Payment"  >Cash Payment</option>
               
              </select>
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucher number" className='text-[#595995] text-lg font-semibold' >
                Balance Name <span className='text-red-500 font-bold'>*</span>
              </label>
              <select name="" className='w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border'>
                <option value="Select option" disabled selected>Select Option</option>
                <option value="SBI"  >SBI</option>
                <option value="HDFC"  >HDFC</option>
                <option value="Bank of Baroda"  >Bank of Baroda</option>
                <option value="Vidharbha Bank"  >Vidharbha Bank</option>
              </select>
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucher number" className='text-[#595995] text-lg font-semibold' >
                Balance Amount <span className='text-red-500 font-bold'>*</span>
              </label>
              <input required type="text" className='w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border' />
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucher number" className='text-[#595995] text-lg font-semibold' >
                Amount <span className='text-red-500 font-bold'>*</span>
              </label>
              <input required type="text" className='w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border' />
            </div>
            <div className='flex items-center justify-center'>
              <button className='bg-[#3A6D8C] rounded-md text-white px-5 py-1'>Save</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default AddExpense