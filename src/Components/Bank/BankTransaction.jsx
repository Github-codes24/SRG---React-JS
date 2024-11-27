
import axios from "axios";
import React, { useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../api";
const BankTransaction = () => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState({
    transactionNo: "",
    date: "",
    accountType: "",
    fromBank: "",
    toBank: "",
    transferType: "",
    amount: 0, // Default to number
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTransactions({
      ...transactions,
      [name]: name === "amount" ? Number(value) : value, // Convert "amount" to a number
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !transactions.transactionNo ||
      !transactions.date ||
      !transactions.accountType ||
      !transactions.fromBank ||
      !transactions.toBank ||
      !transactions.transferType ||
      !transactions.amount ||
      !transactions.description
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/transactions/add`,
        transactions,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setTransactions({
        transactionNo: "",
        date: "",
        accountType: "",
        fromBank: "",
        toBank: "",
        transferType: "",
        amount: 0, // Reset to default
        description: "",
      });
    } catch (error) {
      console.error("Error in Bank transaction:", error);
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
            Bank Transaction
          </h1>
          <div className="buttons gap-2 md:flex items-center justify-start">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/bank")}
            >
              {" "}
              <IoIosAddCircle className="text-2xl" /> Add new Bank
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
              htmlFor="transactionNo"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Transaction Number{" "}
              <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="transactionNo"
              value={transactions.transactionNo}
              onChange={handleChange}
              placeholder="Transaction Number "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="date"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Date <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={transactions.date}
              onChange={handleChange}
              placeholder="22-Aug-2024"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="accountType"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Account Type <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="accountType"
              value={transactions.accountType}
              onChange={handleChange}
              placeholder="Account Type"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="fromBank"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Bank Name{" "}
              <span className="text-red-600 text-2xl ">
                *{" "}
                <span className="text-[#595995] font-semibold text-sm">
                  [From]
                </span>
              </span>
            </label>
            <input
              type="text"
              name="fromBank"
              value={transactions.fromBank}
              onChange={handleChange}
              placeholder="Bank Name [From]"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="toBank"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Bank Name{" "}
              <span className="text-red-600 text-2xl">
                *{" "}
                <span className="text-[#595995] font-semibold text-sm">
                  [To]
                </span>
              </span>
            </label>
            <input
              type="text"
              name="toBank"
              value={transactions.toBank}
              onChange={handleChange}
              placeholder="Bank Name [To]"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="branch"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Transfer Type <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="transferType"
              value={transactions.transferType}
              onChange={handleChange}
              placeholder="Transfer Type"
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
              type="number"
              name="amount"
              value={transactions.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="description"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Description <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              name="description"
              value={transactions.description}
              onChange={handleChange}
              placeholder="Description"
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