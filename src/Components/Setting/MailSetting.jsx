import React from "react";
import { MdOutlineHome } from 'react-icons/md';

const MailSetting = () => {
  return (
    <div>
        <div className="flex items-center justify-end py-2 mt-1">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="  ml-2">
            Home / Setting / Software Setting / Mail Configuration
          </span>
        </div>
    <div className="p-6 bg-white rounded-lg shadow-md max-w-full mx-auto">
        <div className="border-b-2">
      <h2 className="text-xl font-semibold text-[#656565] mb-1  ">
        Mail Configuration
      </h2>
      </div>
      <div className="grid grid-cols-1 p-2 sm:grid-cols-3 gap-4">
        {/* Input Fields */}
        <div className="space-y-4 sm:col-span-2">
          <div className="flex items-center space-x-4">
            <label
              htmlFor="header"
              className="w-40 text-sm font-medium text-[#595995]"
            >
              Header<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="header"
              className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter header"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="smtp-host"
              className="w-40 text-sm font-medium text-[#595995]"
            >
              SMTP Host<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="smtp-host"
              className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter SMTP Host"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="smtp-port"
              className="w-40 text-sm font-medium text-[#595995]"
            >
              SMTP Port<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="smtp-port"
              className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter SMTP Port"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="sender-mail"
              className="w-40 text-sm font-medium text-[#595995]"
            >
              Sender Mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="sender-mail"
              className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Sender Mail"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="password"
              className="w-40 text-sm font-medium text-[#595995]"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label
              htmlFor="mail-type"
              className="w-40 text-sm font-medium text-[#595995]"
            >
              Mail Type<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="mail-type"
              className="flex-1 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Mail Type"
            />
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#595995]">Sale</span>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="sale"
                  value="yes"
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="sale"
                  value="no"
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#595995]">Service</span>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="service"
                  value="yes"
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="service"
                  value="no"
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#595995]">Quotation</span>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="quotation"
                  value="yes"
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="quotation"
                  value="no"
                  className="text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          className="px-6 py-2 bg-[#3A6D8C] text-white rounded-lg shadow focus:ring-4 focus:ring-blue-300"
        >
          Save Changes
        </button>
      </div>
    </div>
    </div>
  );
};

export default MailSetting;
