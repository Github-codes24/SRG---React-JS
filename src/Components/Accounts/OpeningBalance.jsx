import React from "react";
import { MdOutlineHome } from "react-icons/md";

const OpeningBalance = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">Home / Accounts / Add New Bank</span>
      </div>

      <div className="bg-white pt-2 pb-2 rounded"> 
      <p className="font-medium text-xl text-[#878484] p-3">Opening Balance</p>
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
              htmlFor="Ledger"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Ledger <span className="text-red-600 text-2xl">*</span>
            </label>
            <select name="" id="" className="w-full border py-2 rounded">
              <option value="" disabled>Bank Name / Wallet Name</option>
              <option value="salesledger" disabled>Sales Ledger</option>
              <option value="purchaseledger" disabled>Purchase Ledger</option>
              <option value="generalledger" disabled>General Ledger</option>
            </select>
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Ledger Account Balance"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Ledger Account Balance <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Amount"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Amount <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
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

          <div className="buttons flex items-center justify-center gap-4">
           
            <button
              className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpeningBalance;
