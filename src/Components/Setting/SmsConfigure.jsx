import React from 'react';
import { MdOutlineHome } from 'react-icons/md';

const SmsConfigure = () => {
  return (
    <div className="overflow-hidden"> {/* Added overflow-hidden to the outer div */}
      <>
        <div className="flex items-center justify-end">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="text-base md:text-xl">
            Home / Setting / SMS Configure
          </span>
        </div>
        <br />
        <div className="bg-white p-4 max-w-full"> {/* Added max-w-full to limit width */}
          <div className="flex justify-between items-center space-x-4">
            <h3 className="text-xl font-extralight">SMS Configure</h3>
          </div>
          <br />
          <hr />
          <br />

          <div className="flex flex-col sm:flex-row items-center mb-4">
  <label htmlFor="nexmoApiKey" className="text-[#595995] font-medium w-full sm:w-40">
    Nexmo Api Key <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    id="nexmoApiKey"
    className="flex-1 px-2 py-1 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[590px]"
  />
  <label htmlFor="nexmoRegistration" className="font-medium w-full sm:w-auto text-[#595995] mt-2 sm:mt-0">
    Nexmo Registration ?
  </label>
</div>


          <div className="flex flex-col sm:flex-row items-center mb-4">
            <label htmlFor="nexmoApiSecret" className="text-[#595995] font-medium w-40">
              Nexmo Api Secret <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nexmoApiSecret"
              className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[750px]" // Set max-width and full width
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-4">
            <label htmlFor="senderNumber" className="text-[#595995] font-medium w-40">
              Sender Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="senderNumber"
              className="flex-1 px-4 py-2 mx-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[750px]" // Set max-width and full width
            />
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <label htmlFor="saleOption" className="text-[#595995] font-medium w-40">Sale</label>
              <input type="radio" id="saleYes" name="saleOptions" className="mr-2" />
              <label htmlFor="saleYes" className="text-black">Yes</label>
            </div>

            <div className="flex items-center">
              <input type="radio" id="saleNo" name="saleOptions" className="mr-2" />
              <label htmlFor="saleNo" className="text-black">No</label>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <label htmlFor="serviceOption" className="text-[#595995] font-medium w-40">Service</label>
              <input type="radio" id="serviceYes" name="serviceOptions" className="mr-2" />
              <label htmlFor="serviceYes" className="text-black">Yes</label>
            </div>

            <div className="flex items-center">
              <input type="radio" id="serviceNo" name="serviceOptions" className="mr-2" />
              <label htmlFor="serviceNo" className="text-black">No</label>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <label htmlFor="customerServiceOption" className="text-[#595995] font-medium w-40">Customer Service</label>
              <input type="radio" id="customerServiceYes" name="customerServiceOptions" className="mr-2" />
              <label htmlFor="customerServiceYes" className="text-black">Yes</label>
            </div>

            <div className="flex items-center">
              <input type="radio" id="customerServiceNo" name="customerServiceOptions" className="mr-2" />
              <label htmlFor="customerServiceNo" className="text-black">No</label>
            </div>
          </div>

          {/* Adjusted Save Changes Button */}
          <div className="flex justify-center mt-4">
            <button type="button" className="px-4 py-2 bg-[#3A6D8C] text-white rounded-lg">
              Save Changes
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default SmsConfigure;
