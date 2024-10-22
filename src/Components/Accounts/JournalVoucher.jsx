import React from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa6'
import { MdOutlineHome } from 'react-icons/md'

const JournalVoucher = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Accounts / Journal Voucher
        </span>
      </div>
      <div className="bg-white pt-2 pb-2 rounded">
          <p className="font-medium text-xl text-[#878484] p-3">
            Journal Voucher
          </p>
          <hr />
          <form>
            <div className="w-full md:flex items-center justify-between my-4 px-8">
              <label
                htmlFor="bankname"
                className="w-[200px] text-[#595995] font-semibold"
              >
                Voucher No <span className="text-red-600 text-2xl"></span>
              </label>
              <input
                type="text"
                placeholder="OPBL001"
                className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
              />
            </div>
            <div className="w-full md:flex items-center justify-between my-4 px-8">
              <label
                htmlFor="Date"
                className="w-[200px] text-[#595995] font-semibold"
              >
                Date<span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="date"
                placeholder="date"
                className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
              />
            </div>

            
        
            <div className="w-full md:flex items-center justify-between my-4 px-8">
              <label
                htmlFor="Remark"
                className="w-[200px] text-[#595995] font-semibold"
              >
                Remark <span className="text-red-600 text-2xl"></span>
              </label>
              <input
                type="text"
                placeholder="Remark"
                className="w-full h-16  border border-[#D3D1D1] outline-none rounded"
              />
            </div>
            <div className="w-full overflow-x-auto">
              <div className="overflow-x-auto">
              <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse border border-gray-300 font-medium">
        <thead>
          <tr className='font-medium'>
            {/* Table Headers */}
            <th className="border border-gray-300 px-4 py-2 text-[#595995]">Ledger Name <span className='text-red-500'>*</span></th>
            <th className="border border-gray-300 px-4 py-2 text-[#595995]">Ledger Balance</th>
            <th className="border border-gray-300 px-4 py-2 text-[#595995]">Account Head</th>
            <th className="border border-gray-300 px-4 py-2 text-green-500 w-[25%]">Receipt</th>
            <th className="border border-gray-300 px-4 py-2 text-red-500 w-[25%]">Payments</th>
            <th className="border border-gray-300 px-4 py-2 text-[#595995] w-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <select  className='w-full'>
                <option value="cash in hand">Cash in hand</option>
              </select>
            </td>
            <td className="border border-gray-300 px-4 py-2 w-[10%]"><div className='border-[4px] px-1 py-1 text-[#355B8B99]'>1000.00</div></td>
            <td className="border border-gray-300 px-4 py-2  "><div className='border-[4px] text-[#355B8B99] px-1 py-1'>Cash Account</div></td>
            <td className="border border-gray-300 px-4 py-2">
              <input type="number" className='w-full border-[4px]' />
            </td>
            <td className="border border-gray-300 px-4 py-2">
            <input type="number" className='w-full border-[4px] text-red-500' placeholder='1000' />
            </td>
            <td className="border border-gray-300 px-4 py-2"><button className='flex items-center justify-center bg-[#BF2D35] text-white px-1 py-1'><FaTrash /></button></td>
          </tr>
          {/* Row 2 */}
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <select name="" id="" className='px-1 border-[4px]'>
                <option value="bankbob" selected>Bank BOB</option>
              </select>
            </td>
            <td className="border border-gray-300 px-4 py-2"><div className='border-[4px] w-full px-3 text-[#355B8B99]'>25000.00</div></td>
            <td className="border border-gray-300 px-4 py-2 w-[15%]"><div className='border-[4px] w-full text-center text-[#355B8B99] font-medium'>Cash Account</div></td>
            <td className="border border-gray-300 px-4 py-2"><input type="number" className='w-full border-[4px] '/></td>
            <td className="border border-gray-300 px-4 py-2"><input type="number" className='w-full border-[4px] '/></td>
            <td className="border border-gray-300 px-4 py-2"><button className='flex items-center justify-center bg-[#BF2D35] text-white px-1 py-1'><FaTrash /></button></td>
          </tr>
          {/* Row 3 */}
          <tr>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2 text-[#2E2E48]">Total</td>
            <td className="border border-gray-300 px-4 py-2"><input type="text" className='w-full bg-gray-200' /></td>
            <td className="border border-gray-300 px-4 py-2"><input type="text" className='w-full bg-gray-200' /></td>
            <td className="border border-gray-300 px-4 py-2"><button className='flex items-center justify-center bg-[#2E2E48] text-white px-1 py-1'><FaPlus /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
                <div className="flex items-center justify-center my-4">
                  <button className="px-6 py-2 bg-[#3A6D8C] text-white rounded-lg ">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default JournalVoucher