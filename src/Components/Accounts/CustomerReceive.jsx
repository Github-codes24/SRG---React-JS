import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const CustomerReceive = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">Home / Accounts / Customer Receive</span>
      </div>

      <div>
      <div className="bg-white pt-2 pb-2 rounded"> 
      <p className="font-medium text-xl text-[#878484] p-3">Customer Receive</p>
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
              htmlFor="Payment Type"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Payment Type <span className="text-red-600 text-2xl">*</span>
            </label>
            <select
              type="text"
              placeholder="Payment Type "
              className="w-full h-9 px-2 border border-[#D3D1D1] outline-none rounded"
            >
              <option value="" disabled>Select Option</option> 
              <option value="bank" >Bank</option> 
              <option value="Cash" >Cash</option> 
              <option value="Petty Cash" >XYZ</option> 
              <option value="YZX" >YZX</option> 
              <option value="YYY" >YYY</option> 
            </select>
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Bank"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Bank <span className="text-red-600 text-2xl">*</span>
            </label>
            <select name="" id="" className="w-full border py-2 rounded">
              <option value="" disabled selected>Bank Name</option>
              <option value="hdfc" >HDFC Bank</option>
              <option value="sbi" >SBI</option>
              <option value="icici" >ICICI</option>
              <option value="pnb" >PNB</option>
              <option value="axisbank" >AXIS Bank</option>
            </select>
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Balance Amount"
              className="w-[200px] text-[#595995] font-semibold"
            >
           Balance Amount <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="number"
              placeholder="0.00"
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
          <div className='w-full overflow-x-auto'>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-[#595995] ">
                <th className="border px-4 py-2">Customer Name</th>
                <th className="border px-4 py-2">Credit pending Amount</th>
                <th className="border px-4 py-2">Account Head</th>
                <th className="border px-4 py-2">Account</th>
              </tr>
            </thead>
            <tbody className='text-[#355B8B99]'>
              {/* Row 1 */}
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">
                  <select className="w-full h-full" name="">
                    <option value="CSC SRG" selected>
                      Shreejit
                    </option>
                  </select>
                </td>
                <td className="border px-4 py-2 text-center bg-gray-200">23500.00</td>
                <td className="border px-4 py-2 text-center bg-gray-200">
                  Customer
                </td>
                <td className="border px-4 py-2 text-center">
                  <input className="w-full h-full outline-none" type="number" />
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-100 text-[#595995] font-medium">
                <td className="border px-4 py-2 text-center">Account Head</td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">Total</td>
                <td className="border px-4 py-2 text-center bg-gray-200"><input type="number" className='w-full px-2' /></td>
              </tr>
              {/* Row 3 */}
            </tbody>
          </table>
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
    </div>
  )
}

export default CustomerReceive