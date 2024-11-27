import React from "react";
import { MdOutlineHome } from "react-icons/md";

const CustomerAdvance = () => {
  return (
    <>
<div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Customer  / Customer Advance
        </span>
      </div>

    <div className="mt-4 bg-[#ffffff] p-4 rounded-xl">
      <h1 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
        {" "}
        Customer Advance
      </h1>
      <hr />
      <form>
        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="bankname"
            className="w-[200px] text-[#595995] font-semibold"
          >
            Advance Received Date
            <span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="date"
            placeholder=""
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          />
        </div>
        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="A/C Name "
            className="w-[200px] text-[#595995] font-semibold"
          >
            Customer ID No <span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            placeholder="1"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          />
        </div>

        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="customerName"
            className="w-[200px] text-[#595995] font-semibold"
          >
            Customer Name <span className="text-red-600 text-2xl">*</span>
          </label>
          <select
            id="customerName"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          >
            <option value="" disabled selected>
              Select a customer
            </option>
            <option value="customer1">Customer 1</option>
            <option value="customer2">Customer 2</option>
            <option value="customer3">Customer 3</option>
            <option value="customer4">Customer 4</option>
          </select>
        </div>

        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="Branch"
            className="w-[200px] text-[#595995] font-semibold"
          >
            Service Request <span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            placeholder="Service Request"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          />
        </div>
        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="IFSC Code"
            className="w-[200px] text-[#595995] font-semibold"
          >
            Advance Type<span className="text-red-600 text-2xl"></span>
          </label>
          <input
            type="text"
            placeholder="Advance Paid"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          />
        </div>

        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="customerName"
            className="w-[200px] text-[#595995] font-semibold"
          >
            Paid by <span className="text-red-600 text-2xl">*</span>
          </label>
          <select
            id="customerName"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          >
            <option value="" disabled selected>
              Bank Payment/ Cash Payment
            </option>
            <option value="customer1">Customer 1</option>
            <option value="customer2">Customer 2</option>
            <option value="customer3">Customer 3</option>
            <option value="customer4">Customer 4</option>
          </select>
        </div>

        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="customerName"
            className="w-[200px] text-[#595995] font-semibold"
          >
            Bank Name <span className="text-red-600 text-2xl">*</span>
          </label>
          <select
            id="customerName"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          >
            <option value="" disabled selected>
              Select Options
            </option>
            <option value="customer1">Customer 1</option>
            <option value="customer2">Customer 2</option>
            <option value="customer3">Customer 3</option>
            <option value="customer4">Customer 4</option>
          </select>
        </div>
        <div className="w-full md:flex items-center justify-between my-4 px-8">
          <label
            htmlFor="A/C Name "
            className="w-[200px] text-[#595995] font-semibold"
          >
            Amount <span className="text-red-600 text-2xl">*</span>
          </label>
          <input
            type="text"
            placeholder="0.0"
            className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
          />
        </div>

        <div className="buttons flex items-center justify-center gap-4">
          <button
            className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CustomerAdvance;
