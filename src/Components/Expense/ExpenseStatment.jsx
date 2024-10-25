import React from 'react'
import { MdOutlineHome } from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";

const ExpenseStatment = () => {
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Manage Expense
        </span>
      </div>
        <div className='bg-white my-3 rounded-lg'>
          <form action="" className='flex items-center justify-between p-3'>
            <div className='flex items-center justify-center gap-2 '>
              <label htmlFor="" className='text-[#595995] text-sm font-semibold'>
                Expense Item Name
              </label>
              <select name="" className='w-[50%] px-2 rounded-md border-[#D3D1D1] border'>
                <option value="select option" disabled selected>Select Option</option>
              </select>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <label htmlFor="" className='text-[#595995] text-sm font-semibold'>
                Date
              </label>
              <input type="date" name="" className='w-[70%] border-[#D3D1D1] border px-2 rounded-md' />
            </div>
            <div className='flex items-center justify-center gap-2'>
              <label htmlFor="" className='text-[#595995] text-sm font-semibold'>
               To
              </label>
              <input type="date" className='px-2 border-[#D3D1D1] border rounded-md' />
            </div>
            <div className='flex items-center gap-x-2'>
              <button className='flex items-center justify-center p-1 rounded-lg bg-[#024CAA] text-white'>< CiSearch fontSize={"1.5rem"} /><p>Search</p></button>
              <button className='flex items-center justify-center p-1 rounded-lg bg-[#FF6500] text-white'><IoPrintOutline  fontSize={"1.5rem"} /> <p>Print</p></button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-md p-2">
          <p className='p-1 text-[#878484] text-2xl'>Expense Statment</p>
        <hr />
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead>
          <tr className='text-[#595995]'>
            <th className="py-2 px-4 border-b border-gray-300  text-left border">Date</th>
            <th className="py-2 px-4 border-b border-gray-300  text-left border">Voucher</th>
            <th className="py-2 px-4 border-b border-gray-300  text-left border">Expense Item Name</th>
            <th className="py-2 px-4 border-b border-gray-300  text-left border">Payment Type</th>
            <th className="py-2 px-4 border-b border-gray-300  text-left border">Pay From</th>
            <th className="py-2 px-4 border-b border-gray-300  text-left border">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-[#636465BD] font-normal border'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Bank Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">01-Aug-2024</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">EXP 1</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Petrol Expense</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">Cash Payment</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">XYZ</td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">9000.00</td>
          </tr>
          <tr className='text-[#636465BD] font-normal'>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 "></td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 "></td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 "></td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 "></td>
            <td className="py-2 px-4 border-b border-gray-300 text-gray-600 "></td>
            <td className="py-2 px-4 border-b border-gray-300 text-[#595995] font-medium border">25000.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="flex items-center justify-end my-5 gap-x-3 text-[#595995] px-2">
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">Previous</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">1</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">2</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">3</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">4</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">5</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">6</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">Next</button>
      </div>
        </div>
    </div>
  )
}

export default ExpenseStatment