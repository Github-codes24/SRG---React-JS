import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { SlNotebook } from "react-icons/sl";

const Addwallets = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Add New Wallet
        </span>
      </div>
      <div className="mt-4 bg-white p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
            Add Wallet
          </h1>
          <div className="flex items-center gap-2">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/managewallet")}
            >
              {" "}
              <BsNewspaper className="text-2xl" />
              Manage Wallet/
              
            </button>
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/walletrecharge")}
            >
              {" "}
              <IoIosAddCircle className="text-2xl" />
              Wallet Recharge
            </button>
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/walletrefund")}
            >
              <IoCashOutline className="text-2xl" /> Wallet Refund
            </button>
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/walletledger")}
            >
              <SlNotebook className="text-2xl" /> Wallet Ledger
            </button>
          </div>
        </div>
        <form className="mt-6">
          <div className="w-full md:flex items-center justify-between my-6">
            <label
              htmlFor="bankname"
              className="w-[200px] text-[#595995] font-semibold "
            >
              Wallet Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Wallet Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-6">
            <label
              htmlFor="A/C Name "
              className="w-[200px] text-[#595995] font-semibold"
            >
              Account Head<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="A/C Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
};

export default Addwallets;
