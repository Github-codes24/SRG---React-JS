import React from "react";
import { GrTransaction } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BankTransaction = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">Home / Bank / Add New Bank</span>
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-xl ">
        <div className="flex items-center justify-between">
        <h1 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
          {" "}
          Bank Transaction
        </h1>
        <div className="buttons gap-2 md:flex items-center justify-start">
      <button className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2" onClick={() => navigate("/")}>
          {" "}
          
           < IoIosAddCircle className='text-2xl'/> Add new Bank
        </button>
        <button
          className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
          onClick={() => navigate("/managebank")}
        >
          <RiBankLine className="text-2xl" /> Manage Bank
        </button>
      </div>
        </div>
        <hr />
        <form>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="transaction number"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Transaction Number{" "}
              <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Transaction Number "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Date "
              className="w-[200px] text-[#595995] font-semibold"
            >
              Date <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="22-Aug-2024"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Account Type"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Account Type <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Account Type"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Branch"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Branch <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Branch"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center my-4 px-8">
            <label
              htmlFor="radio"
              className="w-[200px] text-[#595995] font-semibold"
            >
              IFSC Code <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="radio"
              placeholder="IFSC Code"
              className=" h-9 mx-4 p-2 border border-[#D3D1D1] outline-none rounded"
            />
            <p className="text-green-600 font-semibold">Receipts</p>
            <input
              type="radio"
              placeholder="IFSC Code"
              className="h-9 mx-4 p-2 border border-[#D3D1D1] outline-none rounded"
            />
            <p className="text-red-600 font-semibold">Payments</p>
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Amount"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Amount <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="number"
              placeholder="Amount"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="desciption"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Desciption <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              placeholder="Descitpion"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="buttons flex items-center justify-center gap-4">
            <button
              className="px-6 py-1 bg-[#629584] rounded-md text-white"
              type="reset"
            >
              Reset
            </button>
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

export default BankTransaction;
