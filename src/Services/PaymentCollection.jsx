import React, { useState } from "react";

const PaymentCollection = () => {
  const [payStatus, setPayStatus] = useState("UN-PAID"); // For handling Pay Status

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-center">
      {/* Main Form Container */}
      <div className="bg-white p-8 shadow-md rounded-md w-3/4">
        <h1 className="text-2xl font-semibold mb-6 text-left text-[#878484]">
          Payment Collection
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Invoice No <span className="text-red-500">*</span>
            </label>
            <select className="w-2/3 p-2 border rounded">
              <option value="">SELECT</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Voucher No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              value="243321"
              readOnly
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              value="08-Sep-2024"
              readOnly
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">Customer</label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              placeholder="Customer Name"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">Mob No.</label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              placeholder="XXXXXXXXXX"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Employee Name
            </label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              placeholder="Employee Name"
            />
          </div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Bill Amount
            </label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              value="0"
              readOnly
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">Advance</label>
            <input type="text" className="w-2/3 p-2 border rounded" />
          </div>
        </div>

        {/* Fifth Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">Pending</label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              value="0"
              readOnly
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">Balance</label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              value="0"
              readOnly
            />
          </div>
        </div>

        {/* Sixth Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Pay Status
            </label>
            <div className="w-2/3 p-2 border rounded">
              <span className="text-green-500">PAID</span>/ 
              <span className="text-red-500">UN-PAID</span>
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Mode of Payment
            </label>
            <select className="w-2/3 p-2 border rounded">
              <option>Cash / Bank / Both</option>
            </select>
          </div>
        </div>

        {/* Seventh Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Cash Amount <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-2/3 p-2 border rounded" value="0" />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">Bank Name</label>
            <select className="w-2/3 p-2 border rounded">
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Eighth Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Bank Amount <span className="text-red-500">*</span>
            </label>
            <input type="text" className="w-2/3 p-2 border rounded" value="0" />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Cash From Client
            </label>
            <input type="text" className="w-2/3 p-2 border rounded" />
          </div>
        </div>

        {/* Ninth Row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Balance To Return
            </label>
            <input type="text" className="w-2/3 p-2 border rounded" />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 text-[#595995E5] font-medium">
              Collected By <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-2/3 p-2 border rounded"
              placeholder="Cashier Name / User Name"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-[#3A6D8C] text-white px-6 py-2 rounded hover:bg-blue-600">
            Save
          </button>
          <button className="bg-[#C96868] text-white px-6 py-2 rounded hover:bg-red-600">
            Close
          </button>
          <button className="bg-[#B19964] text-white px-6 py-2 rounded hover:bg-yellow-600">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCollection;
