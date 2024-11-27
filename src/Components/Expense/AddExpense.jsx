import React, { useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import axios from "axios";
import BASE_URL from "../../api";


const AddExpense = () => {
  const postExpense = async (expenseData) => {
    
  
    try {
      const response = await axios.post(`${BASE_URL}/api/expenses`, expenseData);
      console.log("Expense added successfully:", response.data);
      return response.data; // Return response if needed
    } catch (error) {
      console.error("Error posting expense:", error);
      throw error; // Rethrow error for handling in the caller
    }
  };
  

  const [formData, setFormData] = useState({
    voucherNumber: "",
    date: "",
    expenseType: "",
    paymentType: "",
    balanceName: "",
    balanceAmount: "",
    amount: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postExpense(formData);
      alert("Expense added successfully!");
      console.log("Response:", response);
      // Reset form after successful submission
      setFormData({
        voucherNumber: "",
        date: "",
        expenseType: "",
        paymentType: "",
        balanceName: "",
        balanceAmount: "",
        amount: "",
      });
    } catch (error) {
      alert("Error adding expense. Please try again.");
    }
  };

  function generateUniqueRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = characters.length;
    let result = '';

    // Create a Set to ensure uniqueness of the 5 characters
    const usedIndexes = new Set();
    while (result.length < 5) {
        const randomIndex = Math.floor(Math.random() * length);
        if (!usedIndexes.has(randomIndex)) {
            result += characters[randomIndex];
            usedIndexes.add(randomIndex);
        }
    }

    return result;
}



  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Add Expense
        </span>
      </div>

      <div className="bg-white px-1">
        <p className="text-2xl text-[#878484] font-medium p-2">Add Expense</p>
        <hr />

        <div className="p-3">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucherNumber" className="text-[#595995] text-lg font-semibold">
                Voucher Number <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                required
                type="text"
                name="voucherNumber"
                value={formData.voucherNumber}
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
              />
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="date" className="text-[#595995] text-lg font-semibold">
                Date <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-[80%] px-3 h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
              />
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="expenseType" className="text-[#595995] text-lg font-semibold">
                Expense Type<span className="text-red-500 font-bold">*</span>
              </label>
              <select
                name="expenseType"
                value={formData.expenseType}
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
                required
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="Petrol Expense">Petrol Expense</option>
                <option value="House Rent">House Rent</option>
                <option value="Office Expense">Office Expense</option>
                <option value="Office Supplies">Office Supplies</option>
              </select>
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="paymentType" className="text-[#595995] text-lg font-semibold">
                Payment Type <span className="text-red-500 font-bold">*</span>
              </label>
              <select
                name="paymentType"
                value={formData.paymentType}
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
                required
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="Bank Payment">Bank Payment</option>
                <option value="Cash Payment">Cash Payment</option>
              </select>
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="balanceName" className="text-[#595995] text-lg font-semibold">
                Balance Name <span className="text-red-500 font-bold">*</span>
              </label>
              <select
                name="balanceName"
                value={formData.balanceName}
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
                required
              >
                <option value="" disabled>
                  Select Option
                </option>
                <option value="SBI">SBI</option>
                <option value="HDFC">HDFC</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Vidharbha Bank">Vidharbha Bank</option>
              </select>
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="balanceAmount" className="text-[#595995] text-lg font-semibold">
                Balance Amount <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                required
                type="text"
                name="balanceAmount"
                value={formData.balanceAmount}
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
              />
            </div>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="amount" className="text-[#595995] text-lg font-semibold">
                Amount <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                required
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
              />
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
    </div>
  );
};

export default AddExpense;