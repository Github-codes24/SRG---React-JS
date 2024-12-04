import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import BASE_URL from "../../../api";
import axios from "axios";

const Attendance = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    date: "",
    signIn: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.employeeName || !formData.date || !formData.signIn) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/attendance/addAttendance`,
        formData
      );
      alert("Check-In Successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Error during check-in", error);
      alert("Check-In failed. Please try again.");
    }
  };

  return (
    <div>
      <>
        <div className="bg-white p-4">
          <div className="flex justify-between items-center space-x-4">
            <h3 className="text-xl font-extralight">Check -In</h3>
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg"
              >
                <FaRegClock className="mr-2" /> Build Check-In
              </button>

              <button
                type="button"
                className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg"
              >
                <MdManageHistory className="mr-2" /> Manage Attendance
              </button>
            </div>
          </div>
          <br />
          <hr />
          <br />

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <label
                htmlFor="employeeName"
                className="text-gray-700 font-medium w-60"
              >
                Employee Name <span className="text-red-500">*</span>
              </label>
              <select
                id="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled>
                  Select Employee
                </option>
                <option value="employee1">Employee 1</option>
                <option value="employee2">Employee 2</option>
                <option value="employee3">Employee 3</option>
              </select>
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="date" className="text-gray-700 font-medium w-60">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="signIn"
                className="text-gray-700 font-medium w-60"
              >
                Sign In <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="signIn"
                value={formData.signIn}
                onChange={handleChange}
                className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-800 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Attendance;
