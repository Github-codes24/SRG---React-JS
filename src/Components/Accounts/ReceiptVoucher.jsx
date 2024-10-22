import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";

const ReceiptVoucher = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Accounts / Receipt Voucher
        </span>
      </div>

      <div>
        <div className="bg-white pt-2 pb-2 rounded">
          <p className="font-medium text-xl text-[#878484] p-3">
            Receipt Voucher
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
                htmlFor="Account Head"
                className="w-[200px] text-[#595995] font-semibold"
              >
                Account Head <span className="text-red-600 text-2xl">*</span>
              </label>
              <select
                type="text"
                className="w-full h-9 px-2 border border-[#D3D1D1] outline-none rounded"
              >
                <option value="" disabled>
                  Cash in Hand / Bank / Wallet
                </option>
                <option value="bank">Cash in Hand</option>
                <option value="Cash">Bank</option>
                <option value="Petty Cash">Wallet</option>
              </select>
            </div>
            <div className="w-full md:flex items-center justify-between my-4 px-8">
              <label
                htmlFor="On Hand Balance"
                className="w-[200px] text-[#595995] font-semibold"
              >
                On Hand Balance <span className="text-red-600 text-2xl">*</span>
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
            <div className="w-full overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="text-[#595995] ">
                      <th className="border px-4 py-2">Receipt Ledger Name</th>

                      <th className="border px-4 py-2">
                        On Hand Balance [Debit A/C]
                      </th>
                      <th className="border px-4 py-2">Account Head</th>
                      <th className="border px-4 py-2">Amount</th>
                      <th className="border px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#355B8B99]">
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-100">
                      <td className="border px-4 py-2 text-center">
                        <select className="w-full h-full" name="">
                          <option value="" disabled selected>
                            Select Option
                          </option>
                        </select>
                      </td>
                      <td className="border px-4 py-2 text-center bg-gray-200">
                        23500
                      </td>
                      <td className="border px-4 py-2 text-center bg-gray-200">
                        Customer
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          className="w-full h-full outline-none"
                          type="number"
                        />
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {/* <input className="w-full h-full outline-none" type="number" /> */}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {/* <input className="w-full h-full outline-none" type="number" /> */}
                        <button className="bg-[#BF2D35] px-1 py-1">
                          <FaTrash className="text-white" />
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-gray-100 text-[#595995] font-medium">
                      <td className="border px-4 py-2 text-center"></td>
                      <td className="border px-4 py-2 text-center"></td>
                      <td className="border px-4 py-2 text-center"></td>
                      <td className="border px-4 py-2 text-center">Total</td>
                      <td className="border px-4 py-2 text-center bg-gray-200">
                        <input type="number" className="w-full px-2" />
                      </td>
                      <td className="border px-4 py-2 text-center bg-white">
                        <button className="p-1 bg-[#2E2E48]">
                          <FaPlus className="text-white" />
                        </button>
                      </td>
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
  );
};

export default ReceiptVoucher;
