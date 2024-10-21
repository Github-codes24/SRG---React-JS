import React from 'react';
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";

const AddService = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal">Add Services</h2>
        <div className='flex justify-between gap-4'> 
        <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
        <MdMiscellaneousServices className='mr-2 h-6 w-6'/>
          Manage Service
        </button>
        <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
        <MdOutlineFileUpload  className='mr-2 h-6 w-6'/>
        Service CSV Upload
        </button></div>
      </div>
 <hr />
      <div className="mt-4 bg-white p-4 rounded-xl ">
        
        <form>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="bankname"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Service Number <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Service Number"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Name "
              className="w-[200px] text-[#595995] font-semibold"
            >
              Service Name  <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="Service Name"
              placeholder="A/C Name "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Number"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Service Category <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Service Category "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Branch"
              className="w-[200px] text-[#595995] font-semibold"
            >
             Buy Amount <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Buy Amount"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="IFSC Code"
              className="w-[200px] text-[#595995] font-semibold"
            >
             Service Charge <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Service Charge"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Amount"
              className="w-[200px] text-[#595995] font-semibold"
            >
            Sell Amount <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Sell Amount"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between my-4 px-8">
  {/* Label for Profit */}
  <div className="w-full flex flex-col md:flex-row items-center justify-between my-4 px-8">
  {/* Label for Profit */}
  <label
    htmlFor="Profit"
    className="w-full md:w-[200px] text-[#595995] font-semibold mb-2 md:mb-0"
  >
    Profit <span className="text-red-600 text-2xl">*</span>
  </label>

  {/* Input field for Profit with full width */}
  <input
    type="text"
    placeholder="Profit"
    className="flex-grow h-9 p-2 border border-[#D3D1D1] outline-none rounded mb-2 md:mb-0 md:mr-4"
  />

  {/* Button for Service Slap */}
  <button
    className="px-4 py-2 bg-[#AAD3CE] rounded-md text-[#2F605A] w-full md:w-auto"
    type="reset"
  >
    Service Slap
  </button>
</div>
</div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Amount"
              className="w-[200px] text-[#595995] font-semibold"
            >
            Documents Required <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              placeholder="Documents Required "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="buttons flex items-center justify-center gap-4">
            <button className="px-6 py-1 bg-[#629584] rounded-md text-white" type="reset">Reset</button>
            <button className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
