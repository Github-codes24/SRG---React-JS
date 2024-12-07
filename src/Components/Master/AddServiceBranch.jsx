import axios from 'axios';
import React, { useState } from 'react';
import { MdOutlineFormatListBulleted, MdOutlineHome } from "react-icons/md";
import { Link } from 'react-router-dom';

import BASE_URL from '../../api';

const AddServiceBranch = () => {


  const [serviceType, setServiceType] = useState("");

  const handleSave = async () => {
    if (!serviceType) {
      alert("Please select a service type.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/service-branches`,
        { serviceType }, // Payload
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Service branch added successfully!");
        console.log(response.data);
        // Reset the form or take any other action
        setServiceType("");
      } else {
        alert(`Error: ${response.data.message || "Failed to add service branch."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Add Service Branch
        </span>
      </div>
      <div className="max-w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-md ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal">Add Service Branch</h2>
          <Link to="/master/manageservicebranch" ><button className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded">
            <MdOutlineFormatListBulleted className="mr-2" />
            Branch List
          </button></Link>
        </div>
        <hr className="h-3" />

        <div className="flex items-center justify-center space-x-4 sm:col-span-2 mt-4">
          <label className="w-32 flex items-center justify-center font-medium text-[#595995]">
            Service branch <span className="text-red-500">*</span>
          </label>
          <select
            name="serviceType"
            className="w-full border ring-2 rounded-md outline-none h-10"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="" disabled>
              Select Service Type
            </option>
            <option value="Offline">Offline Service</option>
            <option value="Online">Online Service</option>
          </select>
        </div>
        <div className="flex justify-center mt-6 gap-4">
          <div className="buttons flex items-center justify-center gap-4">
            <button
              className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
              type="button"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-6 py-1 bg-[#629584] rounded-md text-white"
              type="reset"
              onClick={() => setServiceType("")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddServiceBranch;
