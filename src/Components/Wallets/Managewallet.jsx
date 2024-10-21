import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
// import { FaRegMoneyBill1, FaSearch } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import { FaPencil, FaRegMoneyBill1 } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { CiTrash } from "react-icons/ci";

const ManageWallet = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Manage Wallet
        </span>
      </div>

      {/* Manage Wallet Header Section */}
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

        <hr />

        {/* Show Entries Section */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2 my-4">
            <label htmlFor="show" className="text-gray-700 font-medium w-10">
              Show
            </label>
            <select
              id="show"
              className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="10"
            >
              <option value="10">10</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label htmlFor="entries" className="text-gray-700 font-medium">
              Entries
            </label>
          </div>

          {/* Action Buttons: Copy, CSV, Excel, PDF, Print */}
          <div className="flex justify-center flex-grow mb-4">
            <button
              type="button"
              className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
            >
              Copy
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
            >
              CSV
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
            >
              Excel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
            >
              PDF
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
            >
              Print
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-2 bg-purple-950 text-white p-2">
              <FaSearch className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border ">
          {/* Table Header */}
          <thead>
            <tr className="bg-white">
              <th className="border px-4 py-2 text-center text-[#595995] font-medium">
                SR. No
              </th>
              <th className="border px-4 py-2 text-center text-[#595995] font-medium">
                Wallet Name
              </th>
              <th className="border px-4 py-2 text-center text-[#595995] font-medium">
                Account Head
              </th>
              <th className="border px-4 py-2 text-center text-[#595995] font-medium ">
                Balance
              </th>
              <th className="border px-4 py-2 text-center text-[#595995] font-medium">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">1</td>
              <td className="border px-4 py-2 text-center">XYZ</td>
              <td className="border px-4 py-2 text-center">Barik OC Account</td>
              <td className="border px-4 py-2 text-center">43194.00</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">2</td>
              <td className="border px-4 py-2 text-center">Barik OC Account</td>
              <td className="border px-4 py-2 text-center">4196.00</td>
              <td className="border px-4 py-2 text-center">4011.00</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">3</td>
              <td className="border px-4 py-2 text-center">Row 3, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 3, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 3, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">4</td>
              <td className="border px-4 py-2 text-center">Row 4, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 4, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 4, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">5</td>
              <td className="border px-4 py-2 text-center">Row 5, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 5, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 5, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 6 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">6</td>
              <td className="border px-4 py-2 text-center">Row 6, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 6, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 6, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 7 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">7</td>
              <td className="border px-4 py-2 text-center">Row 7, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 7, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 7, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 8 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">8</td>
              <td className="border px-4 py-2 text-center">Row 8, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 8, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 8, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 9 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">9</td>
              <td className="border px-4 py-2 text-center">Row 9, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 9, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 9, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Row 10 */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center">10</td>
              <td className="border px-4 py-2 text-center">Row 10, Col 2</td>
              <td className="border px-4 py-2 text-center">Row 10, Col 3</td>
              <td className="border px-4 py-2 text-center">Row 10, Col 4</td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-green-400 px-2 py-2 mx-1">
                  <GoPencil />
                </button>
                <button className="bg-red-400 px-2 py-2">
                  <CiTrash />
                </button>
              </td>
            </tr>

            {/* Total Row */}
            <tr className="bg-white">
              <td className="border px-4 py-2 text-center"></td>
              <td className="border px-4 py-2 text-center"></td>
              <td className="border px-4 py-2 text-center">Total</td>
              <td className="border px-4 py-2 text-center">4444.00</td>
              <td className="border px-4 py-2 text-center"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between my-3">
        <p>Showing 1 to 20 enteries</p>
        <div className="flex justify-end space-x-2">
          <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
            Previous
          </button>

          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            1
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            2
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            3
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            4
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            5
          </button>

          <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageWallet;
