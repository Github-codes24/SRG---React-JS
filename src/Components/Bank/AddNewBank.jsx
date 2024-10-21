import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { RiBankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AddNewBank = () => {
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
            Add New Bank
          </h1>
          <div className="flex items-center  gap-2">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/banktransaction")}
            >
              {" "}
              <GrTransaction className="text-2xl" />
              Bank Transaction
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
              htmlFor="bankname"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Bank Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Bank Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Name "
              className="w-[200px] text-[#595995] font-semibold"
            >
              A/C Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="A/C Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Number"
              className="w-[200px] text-[#595995] font-semibold"
            >
              A/C Number <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="A/C Number "
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
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="IFSC Code"
              className="w-[200px] text-[#595995] font-semibold"
            >
              IFSC Code <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              placeholder="IFSC Code"
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
              placeholder="Amount"
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

export default AddNewBank;
