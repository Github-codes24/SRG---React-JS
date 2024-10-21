import React from 'react'
import { MdOutlineHome } from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { IoIosAddCircle } from 'react-icons/io';
import { FaRegMoneyBill1 } from 'react-icons/fa6';
import { SlNotebook } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const Walletledger = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Manage Ledger
        </span>
      </div>

      <div className='flex items-center justify-between mt-3 bg-white py-3 px-2'>
        <div className=''>
        <label htmlFor="walletname" className='text-[#595995] font-medium mx-2'>Wallet name</label>
        <input type="text" className='py-2 rounded px-3' placeholder='Wallet Name' />
        </div>
        <div className=''>
        <label htmlFor="from" className='font-medium mx-2 text-[#595995]'>From</label>
        <input type="date" className='py-2 rounded px-3' />
        </div>
        <div>
        <label htmlFor="to" className='font-medium mx-2 text-[#595995]'>To</label>
        <input type="date" className='py-2 rounded px-3' />
        </div>

        <div className="flex items-center gap-3">
          <button className='flex items-center gap-1 bg-[#024CAA] text-white px-5 py-1 rounded'>< CiSearch fontSize={"1.5rem"} /> Search</button>
          <button className='flex items-center gap-1 bg-[#FF6500] text-white px-5 py-1 rounded'><FiPrinter fontSize={'1.5rem'}/> Print</button>
        </div>
      </div>

      <div className="bg-white">
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
        <div className="overflow-x-auto ">
        <table className="min-w-full bg-white border border-gray-300">
  <thead>
    <tr className="bg-white border text-[#595995]">
      <th className="py-2 border-b">Date</th>
      <th className="py-2 border-b">Wallet Name</th>
      <th className="py-2 border-b">From Account</th>
      <th className="py-2 border-b">Voucher No.</th>
      <th className="py-2 border-b">Remarks</th>
      <th className="py-2 border-b">Receipt</th>
      <th className="py-2 border-b">Payments</th>
      <th className="py-2 border-b">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-50">
      <td className="py-2 border-b">2024-10-01</td>
      <td className="py-2 border-b">Wallet A</td>
      <td className="py-2 border-b">Account 1</td>
      <td className="py-2 border-b">VN001</td>
      <td className="py-2 border-b">Payment Received</td>
      <td className="py-2 border-b">RCP001</td>
      <td className="py-2 border-b">Rs 5000.00</td>
      <td className="py-2 border-b">Rs 5000.00</td>
    </tr>
    <tr className="bg-white">
      <td className="py-2 border-b">2024-10-02</td>
      <td className="py-2 border-b">Wallet B</td>
      <td className="py-2 border-b">Account 2</td>
      <td className="py-2 border-b">VN002</td>
      <td className="py-2 border-b">Transfer</td>
      <td className="py-2 border-b">RCP002</td>
      <td className="py-2 border-b">Rs 2000.00</td>
      <td className="py-2 border-b">Rs 3000.00</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="py-2 border-b">2024-10-03</td>
      <td className="py-2 border-b">Wallet A</td>
      <td className="py-2 border-b">Account 1</td>
      <td className="py-2 border-b">VN003</td>
      <td className="py-2 border-b">Invoice Payment</td>
      <td className="py-2 border-b">RCP003</td>
      <td className="py-2 border-b">Rs 1500.00</td>
      <td className="py-2 border-b">Rs 4500.00</td>
    </tr>
    <tr className="bg-white">
      <td className="py-2 border-b">2024-10-04</td>
      <td className="py-2 border-b">Wallet C</td>
      <td className="py-2 border-b">Account 3</td>
      <td className="py-2 border-b">VN004</td>
      <td className="py-2 border-b">Withdrawal</td>
      <td className="py-2 border-b">RCP004</td>
      <td className="py-2 border-b">Rs 1000.00</td>
      <td className="py-2 border-b">Rs 3500.00</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="py-2 border-b">2024-10-05</td>
      <td className="py-2 border-b">Wallet B</td>
      <td className="py-2 border-b">Account 2</td>
      <td className="py-2 border-b">VN005</td>
      <td className="py-2 border-b">Deposit</td>
      <td className="py-2 border-b">RCP005</td>
      <td className="py-2 border-b">Rs 3000.00</td>
      <td className="py-2 border-b">Rs 6500.00</td>
    </tr>
    <tr className="bg-white">
      <td className="py-2 border-b">2024-10-06</td>
      <td className="py-2 border-b">Wallet C</td>
      <td className="py-2 border-b">Account 3</td>
      <td className="py-2 border-b">VN006</td>
      <td className="py-2 border-b">Refund</td>
      <td className="py-2 border-b">RCP006</td>
      <td className="py-2 border-b">Rs 750.00</td>
      <td className="py-2 border-b">Rs 7250.00</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="py-2 border-b">2024-10-07</td>
      <td className="py-2 border-b">Wallet A</td>
      <td className="py-2 border-b">Account 1</td>
      <td className="py-2 border-b">VN007</td>
      <td className="py-2 border-b">Payment Received</td>
      <td className="py-2 border-b">RCP007</td>
      <td className="py-2 border-b">Rs 1200.00</td>
      <td className="py-2 border-b">Rs 8450.00</td>
    </tr>
    <tr className="bg-white">
      <td className="py-2 border-b">2024-10-08</td>
      <td className="py-2 border-b">Wallet C</td>
      <td className="py-2 border-b">Account 3</td>
      <td className="py-2 border-b">VN008</td>
      <td className="py-2 border-b">Payment Made</td>
      <td className="py-2 border-b">RCP008</td>
      <td className="py-2 border-b">Rs 400.00</td>
      <td className="py-2 border-b">Rs 8050.00</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="py-2 border-b">2024-10-09</td>
      <td className="py-2 border-b">Wallet B</td>
      <td className="py-2 border-b">Account 2</td>
      <td className="py-2 border-b">VN009</td>
      <td className="py-2 border-b">Transfer</td>
      <td className="py-2 border-b">RCP009</td>
      <td className="py-2 border-b">Rs 800.00</td>
      <td className="py-2 border-b">Rs 7250.00</td>
    </tr>
    <tr className="bg-white font-semibold text-[#595995]">
      <td className="py-2 border-b"></td>
      <td className="py-2 border-b"></td>
      <td className="py-2 border-b"></td>
      <td className="py-2 border-b"></td>
      <td className="py-2 border-b">Grand Total</td>
      <td className="py-2 border-b">Rs 7860.00</td>
      <td className="py-2 border-b">Rs 728362.00</td>
      <td className="py-2 border-b">Rs 3869.00</td>
    </tr>
  </tbody>
</table>
    </div>
      </div>
    </div>
  )
}

export default Walletledger
