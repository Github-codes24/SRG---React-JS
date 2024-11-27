import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import axios from 'axios';
import BASE_URL from "../../../api";


export default function AddDesignation() {
  // Local state to capture form data
  const [designation, setDesignation] = useState("");
  const [details, setDetails] = useState("");
  
  // State to handle loading and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent the default form submit behavior

    // Validate the form
    if (!designation || !details) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      // Replace the URL below with the API endpoint where you want to send the request
      const response = await axios.post(`${BASE_URL}/api/hrm/designation/addDesignation`, {
        designation,
        details,
      });

      // If successful, clear the form and show a success message
      setSuccess(true);
      setDesignation("");
      setDetails("");
    } catch (err) {
      setError("There was an error submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-[25%]">
        <div className="w-full xl:h-[59px] sm:h-[37px] flex justify-end items-center xl:mb-[14px] sm:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] sm:w-[21px] sm:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">
            Home/
          </a>
          <a className="mt-[4px]" href="">
            HRM/
          </a>
          <a className="mt-[4px]" href="">
            Add Designation
          </a>
        </div>
        <div className="rounded-lg pt-[1px] pb-[30px] bg-white">
          <div className="h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className="flex items-center xl:text-[25px] text-[#878484] sm:text-[20px] sm:font-medium font-leftHeading">
              Add Designation
            </h3>
          </div>
          <div className="w-full p-[20px]">
            <form onSubmit={handleSubmit} id="form2">
              <div className="flex mb-2 w-full items-center justify-between pr-[45px] p-[12px]">
                <p className="flex text-[#595995] font-semibold text-[22px]">
                  Designation <p className="text-red-700">*</p>
                </p>
                <input
                  className="w-[80%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="Designation"
                  required
                />
              </div>
              <div className="flex mb-2 w-full items-center justify-between pr-[45px] p-[12px]">
                <p className="flex text-[#595995] font-semibold text-[22px]">
                  Details <p className="text-red-700">*</p>
                </p>
                <select
                  id="countries"
                  className="border-gray-400 border-[1px] rounded-[5px] w-[80%] dark:placeholder-gray-400 bg-white px-[12px] p-[5px] text-gray-400"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  required
                >
                  <option value="">Select Details</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
            </form>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          {success && <div className="text-green-500 text-center">Designation added successfully!</div>}
          <div className="w-full p-[10px] flex justify-center">
            <button
              type="submit"
              form="form2"
              className="bg-[#3A6D8C] text-white w-[106px] h-[46px] rounded-[11px]"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
