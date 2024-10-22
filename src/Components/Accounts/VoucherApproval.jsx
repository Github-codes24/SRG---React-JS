import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { MdOutlineHome } from "react-icons/md";
import { TbArrowsUpDown } from "react-icons/tb";
import { FaPen } from "react-icons/fa6";

const VoucherApproval = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Accounts / Voucher Approval
        </span>
      </div>

      {/* tThat center thing */}
      <div className="bg-white p-2 rounded-xl">
        <div className="bg-white my-2">
          <p className="text-start text-xl font-medium text-[#878484]">
            Voucher Approval
          </p>
        </div>
        <hr />
        <div className="flex">
          {/* Left Section: Show and Entries */}
          <div className="flex items-center space-x-2">
            <label htmlFor="show" className="text-gray-700 font-medium w-10">
              Show
            </label>
            <select
              id="show"
              className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled selected>
                10
              </option>
              <option value="show">1</option>
              <option value="show">2</option>
              <option value="show">3</option>
            </select>

            <label htmlFor="employeeName" className="text-gray-700 font-medium">
              Entries
            </label>
          </div>

          {/* Center Section: Buttons */}
          <div className="flex justify-center flex-grow">
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

          {/* Right Section: Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-2 bg-purple-950 text-white p-2 ">
              <FaMagnifyingGlass className="h-4 w-4" />
            </span>
          </div>
        </div>
        <br />
      

      <div className="container mx-auto p-4">
      <table className="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr className="text-left text-[#595995]">
      {/* Table Headers with Icons */}
      <th className="border border-gray-300 px-4 py-2">
        SL No. <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        Voucher No. <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        Date <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        From Acc Head <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        To Ledger Name <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        Receipt <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        Payments <TbArrowsUpDown className="inline-block ml-2" />
      </th>
      <th className="border border-gray-300 px-4 py-2">
        Actions <TbArrowsUpDown className="inline-block ml-2" />
      </th>
    </tr>
  </thead>
  <tbody className="text-[#858585]">
    {/* Static Rows */}
    <tr>
      <td className="border border-gray-300 px-4 py-2">1</td>
      <td className="border border-gray-300 px-4 py-2">12345</td> {/* Random 5-digit voucher */}
      <td className="border border-gray-300 px-4 py-2">08-Aug-2024</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Receipt */}
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Payment */}
      <td className=" border-gray-300 px-4 py-2 flex items-center justify-center">
        <button className="bg-[#6A9C89] text-white px-2 py-1 rounded mr-2">Approved</button>
        <button className="bg-[#75A68F] text-white px-2 py-2 rounded mr-2"><FaPen /></button>
        <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><FiTrash /></button>
      </td>
    </tr>

    <tr>
      <td className="border border-gray-300 px-4 py-2">2</td>
      <td className="border border-gray-300 px-4 py-2">67890</td> {/* Random 5-digit voucher */}
      <td className="border border-gray-300 px-4 py-2">08-Aug-2024</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Receipt */}
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Payment */}
      <td className="border border-gray-300 px-4 py-2">
        <button className="bg-[#6A9C89] text-white px-2 py-1 rounded mr-2">Approved</button>
        <button className="bg-[#75A68F] text-white px-2 py-2 rounded mr-2"><FaPen /></button>
        <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><FiTrash /></button>
      </td>
    </tr>

    {/* Additional rows can be added similarly */}
    
    <tr>
      <td className="border border-gray-300 px-4 py-2">3</td>
      <td className="border border-gray-300 px-4 py-2">54321</td> {/* Random 5-digit voucher */}
      <td className="border border-gray-300 px-4 py-2">08-Aug-2024</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Receipt */}
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Payment */}
      <td className="border border-gray-300 px-4 py-2">
        <button className="bg-[#6A9C89] text-white px-2 py-1 rounded mr-2">Approved</button>
        <button className="bg-[#75A68F] text-white px-2 py-2 rounded mr-2"><FaPen /></button>
        <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><FiTrash /></button>
      </td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">4</td>
      <td className="border border-gray-300 px-4 py-2">54321</td> {/* Random 5-digit voucher */}
      <td className="border border-gray-300 px-4 py-2">08-Aug-2024</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Receipt */}
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Payment */}
      <td className="border border-gray-300 px-4 py-2">
        <button className="bg-[#6A9C89] text-white px-2 py-1 rounded mr-2">Approved</button>
        <button className="bg-[#75A68F] text-white px-2 py-2 rounded mr-2"><FaPen /></button>
        <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><FiTrash /></button>
      </td>
    </tr>
    <tr>
      <td className="border border-gray-300 px-4 py-2">5</td>
      <td className="border border-gray-300 px-4 py-2">54321</td> {/* Random 5-digit voucher */}
      <td className="border border-gray-300 px-4 py-2">08-Aug-2024</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Receipt */}
      <td className="border border-gray-300 px-4 py-2">1000.00</td> {/* Payment */}
      <td className="border border-gray-300 px-4 py-2">
        <button className="bg-[#6A9C89] text-white px-2 py-1 rounded mr-2">Approved</button>
        <button className="bg-[#75A68F] text-white px-2 py-2 rounded mr-2"><FaPen /></button>
        <button className="bg-[#BF2D35] text-white px-2 py-2 rounded"><FiTrash /></button>
      </td>
    </tr>

    {/* Repeat for remaining rows (4 to 10) with new random voucher numbers */}
  </tbody>
</table>
    </div>
    <div className="flex items-center justify-end">
      <button className="rounded-full border-[3px] px-4 border-[#746BD9] text-[#746BD9]  ">Previous</button>
      <button className="rounded-full border-[3px] px-4 border-[#746BD9] text-[#746BD9] ">1</button>
      <button className="rounded-full border-[3px] px-4 border-[#746BD9] text-[#746BD9] ">Next</button>
    </div>
    </div>
    </div>
  );
};

export default VoucherApproval;
