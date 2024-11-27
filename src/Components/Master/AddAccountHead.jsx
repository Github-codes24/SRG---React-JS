import React, { useState } from "react";
import { MdOutlineHome, MdOutlineDensityMedium } from "react-icons/md";
import axios from "axios"; // Ensure you have axios installed

import BASE_URL from "../../api";

const AddAccountHead = () => {
  const [post, setPost] = useState({
    accountHead: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    setSuccess(false); // Clear previous success

    try {
      const response = await axios.post(
        `${BASE_URL}/api/accountHeads/add`,
        post // The data being sent in the request body
      );
      console.log("Response:", response.data);
      alert("Account Head added successfully")
      setSuccess(true); // Set success state
      setPost({ accountHead: "" }); // Reset form fields
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to add account head. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Add Account Head
        </span>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal">
            Add Account Head
          </h2>
          <button className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded">
            <MdOutlineDensityMedium className="mr-2" />
            Account List
          </button>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between space-x-4 sm:col-span-2 mt-4">
            <label className="w-32 font-medium text-[#595995]">
              Account Head <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="accountHead"
              placeholder="Account Head"
              value={post.accountHead}
              onChange={handleChange}
              className="flex-1 border border-gray-300 p-2 rounded text-gray-700"
              required
            />
          </div>

          {/* Buttons Section */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              className="px-6 py-1 bg-[#629584] rounded-md text-white"
              type="reset"
              onClick={() => setPost({ accountHead: "" })}
            >
              Reset
            </button>
            <button
              className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>

        {/* Feedback Section */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4">Account Head added successfully!</p>
        )}
      </div>
    </>
  );
};

export default AddAccountHead;
