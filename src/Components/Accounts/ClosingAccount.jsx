import React from "react";
import { MdOutlineHome } from "react-icons/md";

const ClosingAccount = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Accounts / Closing Account
        </span>
      </div>

      <div
        className="flex items-center justify-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(66, 202, 96, 0.21) 0%, rgba(151, 195, 200, 0.32) 50%, rgba(15, 90, 154, 0.3) 100%)",
        }}
      >
        <div className="my-2 w-[50%]">
          <h1 className="text-[#595995] text-center text-xl font-bold mb-4 mt-2">
            Daily Closing Account
          </h1>
          <hr className="text-[#355B8B2B]" />
          <p className="text-center font-bold text-base text-[#636465] my-2">
            SRGIS CSC
          </p>
          <p className="text-center text-[#303077] text-sm font-medium">
            Sreerangam, Near Shree Dharma Sastha Temple,
            <br /> Murikkungal P.O, Vellikulangara,{" "}
          </p>
          <p className="text-[#1D3048] text-sm text-center mt-3 mb-1">
            Cash Closing
          </p>
          <p className="text-[#1D3048] text-sm text-center font-medium">
            Date : 04-Aug-2024
          </p>

          <div className="flex items-center justify-center my-3">
            <label
              htmlFor="lastdayclosing"
              className=" text-normal font-bold text-[#595995] mx-1"
            >
              Last Day Closing
            </label>
            <input
              type="number"
              className="w-[286px] bg-[#E9E9E9] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center my-3">
            <label
              htmlFor="lastdayclosing"
              className="mx-5 text-normal font-bold text-[#595995]"
            >
              Receive
            </label>
            <input
              type="number"
              className="w-[286px] bg-[#E9E9E9] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center my-3">
            <label
              htmlFor="lastdayclosing"
              className="mx-5 text-normal font-bold text-[#595995]"
            >
              Payment
            </label>
            <input
              type="number"
              className="w-[286px] bg-[#E9E9E9] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center my-3">
            <label
              htmlFor="balance"
              className="mx-5 text-normal font-bold text-[#595995]"
            >
              Balance
            </label>
            <input
              type="number"
              className="w-[286px] bg-[#E9E9E9] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#3A6D8C] text-white px-1 py-1 text-sm rounded-lg">
              Day Closing
            </button>
          </div>
        </div>
      </div>

      {/* Next container */}

      <div className="flex gap-x-1 my-1">
        <div className="left w-[48%] rounded-xl border-[3px] p-2">
          <p className="h-5 mb-3 text-xl text-[#878484] p-1">Cash Hand</p>
          <hr />
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-white">
                <th className="px-4 w-[120px] py-2 border text-[#595995] ">Note Name</th>
                <th className="px-4 py-2 border text-[#595995]">PCS.</th>
                <th className="px-4 py-2 border text-[#595995] ">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                 2000
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  1000
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  500
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  200
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border"/>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  100
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  50
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  20
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  10
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  5
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  2
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold" >
                  1
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold" >
                  
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <p className="text-end font-bold text-[#595995]">Grand Total</p>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right w-[48%] rounded-lg border px-2 border-[3px]">
        <p className="h-5 mb-6 text-xl text-[#878484] p-2"></p>
        <hr />
        <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-white">
                <th className="px-4 w-[120px] py-2 border text-[#595995] ">Note Name</th>
                <th className="px-4 py-2 border text-[#595995]">PCS.</th>
                <th className="px-4 py-2 border text-[#595995] ">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                 2000
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  1000
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  500
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  200
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border"/>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  100
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  50
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  20
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  10
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  5
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold">
                  2
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold" >
                  1
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="number" className="w-full border-[1px] border-[#99999980] px-1" />
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-300 text-center text-[#355B8B99] font-semibold" >
                  
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <p className="text-end font-bold text-[#595995]">Grand Total</p>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                <input type="text" className="w-full bg-[#E9E9E9] rounded-md outline-none border-[#99999980] border" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClosingAccount;
