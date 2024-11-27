import React, { useState } from 'react';
import axios from 'axios';
import { MdOutlineHome } from 'react-icons/md';
import api from '../../api';
import BASE_URL from '../../api';

const AddExpenseItem = () => {
  const postExpense = async (expenseData) => {
  
    try {
      const response = await axios.post(`${BASE_URL}/api/expense-items`, expenseData);
      console.log("Expense added successfully:", response.data);
      return response.data; // Return response if needed
    } catch (error) {
      console.error("Error posting expense:", error);
      throw error; // Rethrow error for handling in the caller
    }
  };
  

  const [formData, setFormData] = useState({
    name: "",
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
        name: "",
      });
    } catch (error) {
      alert("Error adding expense. Please try again.",error);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">Home / Expense / Add Expense Item</span>
      </div>
      <div className="bg-white p-2 my-2 rounded-lg">
        <p className="text-[#878484] font-medium text-2xl">Add Expense Item</p>
        <hr />
        <div className="my-8 flex items-center justify-between pr-10">
        <form onSubmit={handleSubmit} className='w-full'>
            <div className="flex items-center justify-between my-5">
              <label htmlFor="voucherNumber" className="text-[#595995] text-lg font-semibold">
                Expense Item Name <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                required
                type="text"
                name="name"
                onChange={handleInputChange}
                className="w-[80%] h-[2rem] bg-[#F3F1F1] rounded-md outline-none border-[#D3D1D1] border"
              />
            </div>
            
            <div className="flex items-center justify-center w-full">
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

export default AddExpenseItem;