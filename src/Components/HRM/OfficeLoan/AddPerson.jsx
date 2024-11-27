import React from "react";
import { MdManageAccounts, MdOutlineHome } from "react-icons/md";

const AddPerson = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-end">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="text-base md:text-xl">
            Home / HRM / Office Loan / Add Person
          </span>
        </div>
        <br />
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center space-x-4">
            <h3 className="text-xl font-extralight">Add Person</h3>
            <div className="flex space-x-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-[#746BD9] text-white rounded-lg"
              >
                <MdManageAccounts className="mr-2" /> Manage Person
              </button>
            </div>
          </div>

          <br />
          <hr />
          <br />
          <div className="flex items-center mb-4">
            <label
              htmlFor="employeeName"
              className="text-gray-700 font-medium w-60"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="employeeName"
              className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="employeeName"
              className="text-gray-700 font-medium w-60"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="employeeName"
              className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Phone"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="employeeName"
              className="text-gray-700 font-medium w-60"
            >
              Address
            </label>
            <input
              type="text"
              id="employeeName"
              className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Address"
            />
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-[#629584] text-white rounded-lg"
            >
              Reset
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-[#3A6D8C] text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddPerson;
