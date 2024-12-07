import React, { useState } from "react";
import axios from "axios";
import {
  MdMiscellaneousServices,
  MdOutlineFileUpload,
  MdOutlineHome,
} from "react-icons/md";

import BASE_URL from "../../api";
import ServiceSlab from "./ServiceSlab";

const AddService = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    serviceNumber: "",
    serviceName: "",
    serviceCategory: "",
    buyAmount: "",
    serviceCharge: "",
    sellAmount: "",
    profit: "",
    documentsRequired: "",
  });

  function Showtoggle(){
    setShowModal(true)
  }
  function Hidetoggle(){
    setShowModal(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]:
          name === "buyAmount" ||
          name === "sellAmount" ||
          name === "serviceCharge"
            ? parseFloat(value) || 0 // Convert to number or default to 0
            : value,
      };

      // Update Profit dynamically
      if (name === "sellAmount" || name === "buyAmount") {
        const sellAmount = parseFloat(updatedData.sellAmount) || 0;
        const buyAmount = parseFloat(updatedData.buyAmount) || 0;
        updatedData.profit = sellAmount - buyAmount;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/api/services`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.ok) {
        alert("Service added successfully!");
        console.log("Response:", response.data);

        // Reset form data
        setFormData({
          serviceNumber: "",
          serviceName: "",
          serviceCategory: "",
          buyAmount: "",
          serviceCharge: "",
          sellAmount: "",
          profit: "",
          documentsRequired: "",
        });
      }
    } catch (error) {
      alert(
        "An error occurred: ", error
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Add Service
        </span>
      </div>
      <div className="w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-md ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal">
            Add Services
          </h2>
          <div className="flex justify-between gap-4">
            <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
              <MdMiscellaneousServices className="mr-2 h-6 w-6" />
              Manage Service
            </button>
            <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
              <MdOutlineFileUpload className="mr-2 h-6 w-6" />
              Service CSV Upload
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-4 bg-white p-4 rounded-xl">
          <form>
            {[
              { label: "Service Number", name: "serviceNumber", type: "text" },
              { label: "Service Name", name: "serviceName", type: "text" },
              {
                label: "Service Category",
                name: "serviceCategory",
                type: "text",
              },
              { label: "Buy Amount", name: "buyAmount", type: "number" },
              {
                label: "Service Charge",
                name: "serviceCharge",
                type: "number",
              },
              { label: "Sell Amount", name: "sellAmount", type: "number" },
              {
                label: "Documents Required",
                name: "documentsRequired",
                type: "text",
              },
            ].map((field, index) => (
              <div
                className="w-full md:flex items-center justify-between my-4 px-8"
                key={index}
              >
                <label
                  htmlFor={field.name}
                  className="w-[200px] text-[#595995] font-semibold"
                >
                  {field.label} <span className="text-red-600 text-2xl">*</span>
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  placeholder={field.label}
                  className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
                  onChange={handleInputChange}
                />
              </div>
            ))}

            {/* Profit Field */}
            <div className="w-full md:flex items-center justify-between my-4 px-8">
              <label
                htmlFor="profit"
                className="w-[200px] text-[#595995] font-semibold"
              >
                Profit <span className="text-red-600 text-2xl">*</span>
              </label>
              <input
                type="number"
                name="profit"
                value={formData.profit}
                placeholder="Profit"
                className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
                readOnly
              />

              <button
                className="ml-2 px-2 py-2 bg-[#AAD3CE] rounded-md text-[#2F605A] w-full md:w-auto h-[60px]"
                onClick={Showtoggle}
                type="reset"
              >
                Service Slap
              </button>
            </div>

            <div className="buttons flex items-center justify-center gap-4">
              <button
                className="px-6 py-1 bg-[#629584] rounded-md text-white"
                type="reset"
                onClick={() =>
                  setFormData({
                    serviceNumber: "",
                    serviceName: "",
                    serviceCategory: "",
                    buyAmount: "",
                    serviceCharge: "",
                    sellAmount: "",
                    profit: "",
                    documentsRequired: "",
                  })
                }
              >
                Reset
              </button>
              <button
                className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ServiceSlab hideModal={Hidetoggle}/>
        </div>
      )}
    </>
  );
};

export default AddService;
