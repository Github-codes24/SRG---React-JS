import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageLedger = () => {
  const tableData = [
    { sl: 1, voucherNo: 'LR001', date: '2024-10-01', ledgerName: 'test', accountHead: 11, transactionType: 'Receive', remark: 'text', balanceAmount: 1001 },
    { sl: 2, voucherNo: 'LR002', date: '2024-10-02', ledgerName: 'SBI BANK CA', accountHead: 12, transactionType: 'Receive', remark: 'DEPOSIT', balanceAmount: 500 },
    { sl: 3, voucherNo: 'LR003', date: '2024-10-03', ledgerName: 'dfgdf', accountHead: 13, transactionType: 'Receive', remark: 'chfg', balanceAmount: 343 },
  ];

  return (
    <div className="max-w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal">Manage Ledger</h2>
        <button className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm7 0a1 1 0 00-1 1v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Ledger
        </button>
      </div>
      <hr className="h-5"/>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border text-[#595995] px-4 py-2">SL.</th>
              <th className="border text-[#595995] px-4 py-2">Voucher No</th>
              <th className="border text-[#595995] px-4 py-2">Date</th>
              <th className="border text-[#595995] px-4 py-2">Ledger Name</th>
              <th className="border text-[#595995] px-4 py-2">Account Head</th>
              <th className="border text-[#595995] px-4 py-2">Transaction Type</th>
              <th className="border text-[#595995] px-4 py-2">Remark</th>
              <th className="border text-[#595995] px-4 py-2">Balance Amount</th>
              <th className="border text-[#595995] px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.sl} className="bg-white hover:bg-gray-50">
                <td className="border border-gray-300  px-4 py-2">{item.sl}</td>
                <td className="border border-gray-300 px-4 py-2">{item.voucherNo}</td>
                <td className="border border-gray-300 px-4 py-2">{item.date}</td>
                <td className="border border-gray-300 px-4 py-2">{item.ledgerName}</td>
                <td className="border border-gray-300 px-4 py-2">{item.accountHead}</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600">{item.transactionType}</td>
                <td className="border border-gray-300 px-4 py-2">{item.remark}</td>
                <td className="border border-gray-300 px-4 py-2">{item.balanceAmount}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-800">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination UI */}
        <div className="flex justify-center items-center space-x-2 mt-10 float-right">
        <button className="px-2 py-1 border rounded-full border-[#9E95FF]">Previous</button>

        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">1</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">2</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">3</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">4</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">5</button>

        <button className="px-2 py-1 border rounded-full border-[#9E95FF]">Next</button>
      </div>
      </div>
    </div>
  );
};

export default ManageLedger;
