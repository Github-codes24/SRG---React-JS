import React from 'react'
import { MdOutlineHome, MdOutlineLocalPrintshop } from 'react-icons/md'

const GeneralLedgerReport = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb Section */}
      <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl ml-2">
          Home / Account Report / General Ledger Report
        </span>
      </div>

      {/* General Ledger Header */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <p className="text-[#878484] text-xl my-1">General Ledger Report</p>
        <hr />
        <div className="flex justify-between my-1">
          <p className="text-base text-[#000000A1]">Pre Balance : 0.00</p>
          <p className="text-base text-[#000000A1]">Current Balance : 0.00</p>
        </div>
        <hr className="my-2" />
        <p className="text-center text-xl text-[#595995] font-medium">
          General Ledger of BANK MUSCAT (On 22-OCT-2024 To 22-OCT-2024)
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Sl No</th>
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Transaction Date</th>
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Head Code</th>
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Transaction Head</th>
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Receipt</th>
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Payments</th>
                <th className="border border-gray-300 px-4 py-2 text-[#595995]">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#595995] font-medium text-center">
                <td className="border border-gray-300 px-4 py-2 text-gray-600"></td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600"></td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600"></td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 text-end">Total</td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">0.00</td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">0.00</td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center my-2">
        <button className="px-5 py-1 bg-[#FF6500] text-white rounded-md flex items-center gap-x-1">
            <MdOutlineLocalPrintshop fontSize={"1.3rem"} /> Print
          </button>
        </div>
      </div>
    </div>
  )
}

export default GeneralLedgerReport
