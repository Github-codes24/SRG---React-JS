import React from "react";

const AddCustomer = () => {
  return (
    <div className=" bg-[#daeaf4] p-5">
      <div className="container mx-auto mt-5">
        <div className="flex justify-end mb-4 gap-2">
          <img src="./Vector.png" alt="vector" className="w-6 h-5 " />{" "}
          <span>Home</span> /<span>Customer</span> / <span>AddCustomer</span>
        </div>
        <div className="bg-white-100 bg-white shadow-md rounded-md p-6">
          <div className=" pb-5 ">
            <h2 className="text-2xl font-semibold text-[#615f5f] text-start ">
              Add Customer
            </h2>
          </div>
          <form className="grid grid-cols-2 gap-4 pt-5 border-t-2 ">
            {/* Customer Name */}
            <div className="flex items-center space-x-4">
              <label className="whitespace-nowrap text-[#595995]">
                Customer Name <span className="text-red-500">*:</span>
              </label>
              <input
                type="text"
                placeholder="Customer Name"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center space-x-4">
              <label className="whitespace-nowrap text-[#595995]">
                Mobile Number:
              </label>
              <div className="flex w-[450px]">
                <span className="bg-gray-200 px-2 border-l-2 border-gray-300 rounded-l-lg">
                  <img src="./flag.png" alt="flag" className="w-9 h-9" />
                </span>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border border-gray-300 rounded-r w-[450px] p-2 outline-none"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-11">
              <label className="whitespace-nowrap text-[#595995]">
                Email Address:
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="border  border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Location */}
            <div className="flex items-center space-x-16">
              <label className="whitespace-nowrap text-[#595995]">
                Location:
              </label>
              <input
                type="text"
                placeholder="Location"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Address */}
            <div className="flex items-center space-x-20">
              <label className="whitespace-nowrap text-[#595995]">
                Address :
              </label>
              <textarea
                placeholder="Address"
                className="border border-gray-300 rounded w-[450px] p-2 h-12 outline-none"
              />
            </div>

            {/* City */}
            <div className="flex items-center space-x-24">
              <label className="whitespace-nowrap text-[#595995]">City:</label>
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
                // defaultValue="Thrissur"
              />
            </div>

            {/* DOB */}
            <div className="flex items-center space-x-28">
              <label className="whitespace-nowrap text-[#595995]">DOB:</label>
              <input
                type="date"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* State */}
            <div className="flex items-center space-x-24">
              <label className="whitespace-nowrap text-[#595995]">State:</label>
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
                // defaultValue="Kerala"
              />
            </div>

            {/* Previous Balance */}
            <div className="flex items-center space-x-7">
              <label className="whitespace-nowrap text-[#595995]">
                Previous Balance:
              </label>
              <input
                type="text"
                placeholder="Previous Balance"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Country */}
            <div className="flex items-center space-x-20">
              <label className="whitespace-nowrap text-[#595995]">
                Country:
              </label>
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
                // defaultValue="India"
              />
            </div>

            {/* Credit Days */}
            <div className="flex items-center space-x-16">
              <label className="whitespace-nowrap text-[#595995]">
                Credit Days:
              </label>
              <input
                type="text"
                placeholder="7 Days"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-8">
              <label className="whitespace-nowrap text-[#595995]">
                Phone Number:
              </label>
              <div className="flex w-[450px]">
                <span className="bg-gray-200 px-2 border-l-2 border-gray-300 rounded-l-lg">
                  <img src="./flag.png" alt="flag" className="w-9 h-9" />
                </span>
                <input
                  type="text"
                  placeholder="Additional Number"
                  className="border border-gray-300 rounded-r w-[450px] p-2 outline-none"
                />
              </div>
            </div>

            {/* Credit Limit */}
            <div className="flex items-center space-x-16">
              <label className="whitespace-nowrap text-[#595995]">
                Credit Limit:
              </label>
              <input
                type="text"
                placeholder="Credit Limit"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Po Box */}
            <div className="flex items-center space-x-24">
              <label className="whitespace-nowrap text-[#595995]">
                Po Box:
              </label>
              <input
                type="text"
                placeholder="Po Box"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Website Link */}
            <div className="flex items-center space-x-14">
              <label className="whitespace-nowrap text-[#595995]">
                Website Link:
              </label>
              <input
                type="text"
                placeholder="Website Links"
                className="border border-gray-300 rounded w-[450px] p-2 outline-none"
              />
            </div>

            {/* Save Button */}
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#3A6D8C] text-white px-7 py-2 rounded-xl w-[100px] mt-4"
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

export default AddCustomer;
