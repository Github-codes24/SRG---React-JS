import React, { useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BASE_URL from "../../api";

const Addwallets = () => {
  const [formData, setFormData] = useState({
    walletName: "",
    accountHead: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/wallets/add`, formData); // Replace with your API endpoint
      alert("Wallet added successfully!");
      // Reset form or navigate after success
      setFormData({ walletName: "", accountHead: "" });
      navigate("/wallet/managewallet"); // Example navigation
    } catch (error) {
      console.error("Error adding wallet:", error);
      alert("Failed to add wallet. Please try again.");
    }
  };
  
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
              onClick={() => navigate("/wallet/managewallet")}
            >
              <BsNewspaper className="text-2xl" />
              Manage Wallet
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
              <IoCashOutline className="text-2xl" />
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
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="w-full md:flex items-center justify-between my-6">
            <label
              htmlFor="walletName"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Wallet Name <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              name="walletName"
              type="text"
              placeholder="Wallet Name"
              value={formData.walletName}
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-6">
            <label
              htmlFor="accountHead"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Account Head <span className="text-red-600 text-2xl">*</span>
            </label>
            <select
              name="accountHead"
              value={formData.accountHead}
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Account Head
              </option>
              <option value="A/C Receivables">A/C Receivables</option>
              <option value="A/C Payables">A/C Payables</option>
              <option value="Bank Accounts">Bank Accounts</option>
              <option value="Bank OCC Acc">Bank OCC Acc</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#3A6D8C] rounded-md text-white px-5 py-1"
          >
            Save
          </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Addwallets;