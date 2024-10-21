import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; 

const LedgerList = () => {
  const [formData, setFormData] = useState({
    voucherNo: 'LR001',
    date: '30-Sep-2024',
    ledgerName: '',
    amountHead: '',
    linkWith: 'None',
    transactionType: 'Receipts / Payments',
    amount: '',
    remark: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-6 shadow-md rounded-md bg-[#FFFFFF] ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">Add Ledger</h2>
        <button
          className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded "
        >
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
          LedgerList
        </button>
      </div>

      <form>
        <div className="grid grid-cols-1 gap-6">
          {/* Voucher No */}
          <div className="flex flex-col space-y-4">
  {/* Voucher No */}
  <div className="flex items-center space-x-4">
    <label className="w-32  text-[#595995] font-medium">
      Voucher No <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="voucherNo"
      value={formData.voucherNo}
      onChange={handleInputChange}
      className="flex-1 border border-gray-300 p-2 rounded"
    />
  </div>

  {/* Date with icon */}
  <div className="flex items-center space-x-4 relative">
  <label className="w-32 font-medium text-[#595995]">Date</label>
  <input
    type="text"
    name="date"
    value={formData.date}
    onChange={handleInputChange}
    className="flex-1 border border-gray-300 p-2 rounded pl-12" // Increased left padding to make more space for the icon
  />
  <FaCalendarAlt className="absolute left-36 text-gray-500 pointer-events-none" /> {/* Adjusted icon position */}
</div>

</div>


          {/* Ledger Name */}
          <div className="flex items-center space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">
              Ledger Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ledgerName"
              value={formData.ledgerName}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 p-2 rounded"
              placeholder="Ledger Name"
            />
          </div>

          {/* Amount Head */}
          <div className="flex items-center space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">
              Amount Head <span className="text-red-500">*</span>
            </label>
            <select
              name="amountHead"
              value={formData.amountHead}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 p-2 rounded"
            >
              <option value="">Select option</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Link With */}
          <div className="flex items-center space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">Link With</label>
            <select
              name="linkWith"
              value={formData.linkWith}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 p-2 rounded"
            >
              <option value="None">None</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Transaction Type */}
          <div className="flex items-center space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">Transaction Type</label>
            <input
              type="text"
              name="transactionType"
              placeholder='Receipts / Payments'
              className="flex-1 border border-gray-300 p-2 rounded text-red-600"
              
            />
          </div>

          {/* Amount */}
          <div className="flex items-center space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">Amount</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 p-2 rounded"
              placeholder="0.00"
            />
          </div>

          {/* Remark */}
          <div className="flex items-center space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium  text-[#595995] ">Remark</label>
            <input
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 p-2 rounded"
              placeholder="Remark"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
        <div className="buttons flex items-center justify-center gap-4">
            <button className="px-6 py-1 bg-[#629584] rounded-md text-white" type="reset">Reset</button>
            <button className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white" type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LedgerList;
