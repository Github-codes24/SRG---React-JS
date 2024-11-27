import React, { useState } from "react";
import { MdOutlineFormatListBulleted, MdOutlineHome } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import BASE_URL from "../../api";

const AddWebsite = () => {
  const [website, setWebsite] = useState({
    name: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setWebsite({
      ...website,
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
        `${BASE_URL}/api/websites`,
        website // The data being sent in the request body
      );
      console.log("Response:", response.data);
      setSuccess(true); // Set success state
      setWebsite({ websiteName: "", link: "" }); // Reset form fields
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to add the website. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  // Reset form
  const handleReset = () => {
    setWebsite({ name: "", link: "" });
    setError(null);
    setSuccess(false);
  };

  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Add Website
        </span>
      </div>
      <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal">Add Website</h2>
          <button
            className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded"
            onClick={() => navigate("/master/WebsiteLedger")}
          >
            <MdOutlineFormatListBulleted className="mr-2" />
            Website List
          </button>
        </div>
        <hr className="mb-3" />

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between space-x-4 sm:col-span-2 mt-4">
            <label
              htmlFor="websiteName"
              className="w-32 font-medium text-[#595995]"
            >
              Website Name <span className="text-red-500">*</span>
            </label>
            <input
              id="websiteName"
              type="text"
              name="name"
              value={website.name}
              onChange={handleChange}
              placeholder="Enter website name"
              className="flex-1 border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex items-center justify-between space-x-4 sm:col-span-2 mt-4">
            <label htmlFor="link" className="w-32 font-medium text-[#595995]">
              Link <span className="text-red-500">*</span>
            </label>
            <input
              id="link"
              type="text"
              name="link"
              value={website.link}
              onChange={handleChange}
              placeholder="Enter website link"
              className="flex-1 border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <button
              type="submit"
              className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-1 bg-[#629584] rounded-md text-white"
            >
              Reset
            </button>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">Website added successfully!</p>}
        </form>
      </div>
    </>
  );
};

export default AddWebsite;
