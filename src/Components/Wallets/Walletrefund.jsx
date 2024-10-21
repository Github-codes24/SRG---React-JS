import React from 'react'
import { FaRegMoneyBill1 } from 'react-icons/fa6'
import { IoIosAddCircle } from 'react-icons/io'
import { MdOutlineHome } from 'react-icons/md'
import { SlNotebook } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const Walletrefund = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Wallets Refund
        </span>
      </div>

      <div className='bg-white'>
      <div className="flex items-center justify-between my-2 bg-white px-2 py-1">
          <h1 className="text-[#878484] text-2xl">Manage Wallets</h1>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-x-2">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet")}
            >
              <IoIosAddCircle className="text-2xl" />
              Add Wallet
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletrecharge")}
            >
              <IoIosAddCircle className="text-2xl" />
              Wallet Recharge
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletrefund")}
            >
              <FaRegMoneyBill1 className="text-2xl" />
              Wallet Refund
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletledger")}
            >
              <SlNotebook className="text-2xl" />
              Wallet Ledger
            </button>
          </div>
          
        </div>
        <hr />
        <form>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="bankname"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Voucher Number <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Bank Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Name "
              className="w-[200px] text-[#595995] font-semibold"
            >
              Date <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="date"
              placeholder="Date "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Head"
              className="w-[200px] text-[#595995] font-semibold"
            >
              A/C Head <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="A/C Head "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Branch"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Wallet Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Wallet Name"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Wallet Balance"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Wallet Balance <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              placeholder="Wallet Balance"
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
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          
        </form>
        <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="border px-4 py-2">Ledger Name</th>
        <th className="border px-4 py-2">Ledger Balance</th>
        <th className="border px-4 py-2">Account Head</th>
        <th className="border px-4 py-2">Account</th>
      </tr>
    </thead>
    <tbody>
      {/* Row 1 */}
      <tr className="hover:bg-gray-100">
        <td className="border px-4 py-2 text-center"><select name="" >
          <option value="refund" selected>Refund</option></select></td>
        <td className="border px-4 py-2 text-center bg-gray-200">00</td>
        <td className="border px-4 py-2 text-center bg-gray-200">Indirect Income</td>
        <td className="border px-4 py-2 text-center"><input className='w-full h-full outline-none' type="number" /></td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-gray-100">
        <td className="border px-4 py-2 text-center">Account Head</td>
        <td className="border px-4 py-2 text-center"></td>
        <td className="border px-4 py-2 text-center">Total</td>
        <td className="border px-4 py-2 text-center bg-gray-200"></td>
      </tr>
      {/* Row 3 */}

    </tbody>
  </table>
  <div className="flex items-center justify-center my-4">
  <button className='px-6 py-2 bg-[#3A6D8C] text-white rounded-lg '>Save</button>
  </div>
</div>
      </div>
        
    </div>
  )
}

export default Walletrefund