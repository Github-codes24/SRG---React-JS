import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const AddExpenseItem = () => {
  return (
    <div>
        <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">Home / Expense / Add Expense Item</span>
      </div>
        <div className='bg-white p-2 my-2 rounded-lg'>
            <p className='text-[#878484] font-medium text-2xl'>Add Expense Item</p>
            <hr />
        
        <div className='my-8 flex items-center justify-between pr-10'>
            <label htmlFor="expenseitem" className='text-[#595995] text-md'>Expense Item Name <span className='text-red-500 font-bold'>*</span></label>
            <input type="text" className='w-[745px] h-8 border-[2px] rounded-md' />
        </div>
            <div className='flex items-center justify-center'>
                <button className='bg-[#3A6D8C] text-white px-5 rounded-lg py-1'>Save</button> 
            </div>
        </div>
    </div>
  )
}

export default AddExpenseItem