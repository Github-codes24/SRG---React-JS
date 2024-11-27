
import React, { useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { RiBankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../api";

const AddNewBank = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    branch: "",
    ifscCode: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      bankName: "",
      accountName: "",
      accountNumber: "",
      branch: "",
      ifscCode: "",
      amount: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Correct method call

    try {
      const response = await axios.post(
        `${BASE_URL}/api/banks/add` ,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Bank details saved successfully.");
      setFormData({
        bankName: "",
        accountName: "",
        accountNumber: "",
        branch: "",
        ifscCode: "",
        amount: "",
      });
    } catch (error) {
      console.error("Error adding bank:", error);
      alert("Failed to save bank details. Please try again.");
    }
  };

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
              onClick={() => navigate("/bank/banktransaction")}
            >
              {" "}
              <GrTransaction className="text-2xl" />
              Bank Transaction
            </button>
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/bank/managebank")}
            >
              <RiBankLine className="text-2xl" /> Manage Bank
            </button>
          </div>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="bankName"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Bank Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Bank Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="accountName"
              className="w-[200px] text-[#595995] font-semibold"
            >
              A/C Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="accountName"
              value={formData.accountName}
              onChange={handleChange}
              placeholder="A/C Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="accountNumber"
              className="w-[200px] text-[#595995] font-semibold"
            >
              A/C Number <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="A/C Number "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="branch"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Branch <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Branch"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="ifscCode"
              className="w-[200px] text-[#595995] font-semibold"
            >
              IFSC Code <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              placeholder="IFSC Code"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="amount"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Amount <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="buttons flex items-center justify-center gap-4">
            <button
              onClick={handleReset}
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