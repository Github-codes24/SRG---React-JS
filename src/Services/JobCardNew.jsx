import React from "react";
import { MdOutlineHome } from "react-icons/md";

const JobCardNew = () => {
  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Service / Job Card New
        </span>
      </div>
      <div className="p-8 bg-gray-100 min-h-screen flex justify-center">
        <div className="w-full max-w-7xl bg-white p-8 shadow-lg rounded-lg border">
          <h1 className="text-2xl font-bold mb-4">Job Card New</h1>
          <hr className="mb-5" />

          {/* Job Card Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* First two divs (one below another) */}
            <div>
              <div className="flex items-center space-x-2 mb-4 ">
                <label className="block text-[#595995E5] font-semibold w-1/3">
                  Service Branch *
                </label>
                <input
                  className="border p-2 rounded w-full"
                  value="Online Services"
                  readOnly
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="block text-[#595995E5] font-semibold w-1/3">
                  Job Card Date *
                </label>
                <input
                  className="border p-2 rounded w-full"
                  value="22-Aug-2024"
                  readOnly
                />
              </div>
            </div>

            {/* Last two divs (one below another) */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <label className="block text-[#595995E5] font-semibold w-1/3">
                  Job Card ID
                </label>
                <input
                  className="border p-2 rounded w-full"
                  value="JC001"
                  readOnly
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="block text-[#595995E5] font-semibold w-1/3">
                  Job Card Time *
                </label>
                <input
                  className="border p-2 rounded w-full"
                  value="12:30 PM"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded w-[200px] text-center">
              Customer Details
            </h2>

            {/* First three fields stacked one below the other */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div>
                <div className="relative flex items-center space-x-2 mb-4">
                  <label className="block text-[#595995E5] font-semibold w-1/3">
                    Customer Name
                  </label>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Customer Name"
                  />
                  <button className="absolute top-2 right-2 bg-[#2E2E48] text-white hover:bg-gray-300 w-6 h-6 rounded">
                    +
                  </button>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <label className="block text-[#595995E5] font-semibold w-1/3">
                    Mob No
                  </label>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="xxxxxxxxxx"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label className="block text-[#595995E5] font-semibold w-1/3">
                    DOB
                  </label>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="22-Aug-2024"
                  />
                </div>
              </div>

              {/* Last two fields stacked one below the other */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <label className="block text-[#595995E5] font-semibold w-1/3">
                    Email ID
                  </label>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <label className="block text-[#595995E5] font-semibold w-1/3">
                    Job Assign Staff
                  </label>
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Staff / User Name"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded w-[200px] text-center">
              Service Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Service Name
                </label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Service Name"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Service Category
                </label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Service Category"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Sells Amount
                </label>
                <input
                  className="border p-2 rounded w-full"
                  type="number"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Website Link
                </label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="https://www.google.com"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Required Documents
                </label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Required Documents"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Document Received
                </label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="Document Received"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  User Name
                </label>
                <input
                  className="border p-2 rounded w-full"
                  placeholder="User Name"
                />
              </div>
              <div>
                <label className="block text-[#595995E5] font-semibold">
                  Password
                </label>
                <input
                  className="border p-2 rounded w-full"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          {/* Application Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Application No
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="Application No"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Application Date
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="DD-MM-YYYY"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Approved Document No
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="Approved Document No"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Approved Document Date
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="DD-MM-YYYY"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Document Collected Date
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="DD-MM-YYYY"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Rejected Date
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="DD-MM-YYYY"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Re-Submitted Application No
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="Re-Submitted Application No"
              />
            </div>
            <div>
              <label className="block text-[#595995E5] font-semibold">
                Service Completion
              </label>
              <select className="border p-2 rounded w-full">
                <option>YES</option>
                <option>NO</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <button className="px-3 py-2 text-white bg-[#3A6D8C] rounded-md text-base">Update</button>
            <button className="px-3 py-2 text-white bg-[#3A6D8C] rounded-md text-base"> Save</button>
          </div>
          {/* Service Status */}
          {/* <div className="mb-6">
            <h2 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded w-[200px] text-center">
              Service Status
            </h2>
            <div className="flex flex-wrap space-x-2 mt-4 justify-between">
              <button className="bg-[#E2F1E7] text-[#637B6B] border border-[#637B6B] px-4 py-2 rounded ">
                Open
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B] border border-[#637B6B] px-4 py-2 rounded">
                In Process
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B] border border-[#637B6B] px-4 py-2 rounded">
                Submitted
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B] border border-[#637B6B] px-4 py-2 rounded">
                Rejected
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B]  border border-[#637B6B] px-4 py-2 rounded">
                Re-Submitted
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B]  border border-[#637B6B] px-4 py-2 rounded">
                Approved
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B]  border border-[#637B6B] px-4 py-2 rounded">
                Completed
              </button>
              <button className="bg-[#E2F1E7] text-[#637B6B]  border border-[#637B6B] px-4 py-2 rounded">
                Closed
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default JobCardNew;
