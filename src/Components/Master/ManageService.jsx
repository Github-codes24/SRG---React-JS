import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BASE_URL from "../../api";

const ManageService = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/services`
      );
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
      alert("Failed to fetch services.");
    }
  };

  const deleteService = async (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(
          `${BASE_URL}/api/services/${serviceId}`
        );
        alert("Service deleted successfully.");
        fetchServices();
      } catch (error) {
        console.error("Error deleting service:", error);
        alert("Failed to delete service.");
      }
    }
  };

  const handleEdit = (service) => {
    setCurrentService(service);
    setEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentService((prev) => ({ ...prev, [name]: value }));
  };

  const updateService = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/services/${currentService._id}`,
        currentService
      );
      alert("Service updated successfully.");
      setEditModalOpen(false);
      fetchServices();
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to update service.");
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Manage Service
        </span>
      </div>

      {/* Main Content */}
      <div className="container mx-auto rounded-md  bg-white py-4">
        <div className="flex justify-between items-center mb-2 p-4 border-b-[1px] border-gray-200 ">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
            Manage Service
          </h2>
          <button
            className="bg-[#786fdc] text-white py-2 px-4 rounded"
            onClick={() => navigate("/add-service")}
          >
            Add Service
          </button>
        </div>
        <div>
          <div className="bg-white p-4 rounded-lg justify-between mt-2 flex items-center space-x-4">
            {/* Name Input */}
            <div className="flex gap-3">
              <h4>Show</h4>

              {/* Dropdown Menu */}
              <select className="border border-gray-300 rounded  focus:outline-none focus:ring-2 ">
                <option value="Option 1"> 10</option>
                <option value="Option 2"> 2</option>
                <option value="Option 3"> 3</option>
              </select>
              <h4>Entries</h4>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2">
              <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
                Copy
              </button>
              <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
                CSV
              </button>
              <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
                Excel
              </button>
              <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
                PDF
              </button>
              <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
                Print
              </button>
            </div>

            {/* Search Box */}
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-l px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div className="absolute right-0 top-0 h-full w-10 bg-black flex items-center justify-center rounded-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className=" overflow-x-auto p-4 w-full">
        {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="loader border-t-4 border-b-4 border-purple-700 w-10 h-10 rounded-full animate-spin"></div>
            </div>
          ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left text-[#595995]">#</th>
              <th className="border p-2 text-left text-[#595995]">Branch</th>
              <th className="border p-2 text-left text-[#595995]">Name</th>
              <th className="border p-2 text-left text-[#595995]">Category</th>
              <th className="border p-2 text-left text-[#595995]">Buy</th>
              <th className="border p-2 text-left text-[#595995]">Sell</th>
              <th className="border p-2 text-left text-[#595995]">Profit</th>
              <th className="border p-2 text-left text-[#595995]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map((service, index) => (
                <tr key={service._id} className="odd:bg-white even:bg-gray-50">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{service.serviceNumber}</td>
                  <td className="border p-2">{service.serviceName}</td>
                  <td className="border p-2">{service.serviceCategory}</td>
                  <td className="border p-2">{service.buyAmount}</td>
                  <td className="border p-2">{service.sellAmount}</td>
                  <td className="border p-2">{service.profit}</td>
                  <td className="border p-2">
                    <div className="flex gap-2">
                      <button
                        className="text-green-600 hover:text-green-800"
                        onClick={() => handleEdit(service)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => deleteService(service._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  No services found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
          )}
        </div>
        {/* Pagination */}
        <div className="flex justify-end items-center space-x-2 mt-10 text-[#9E95FF]">
          <button className="px-2 py-1 border rounded-full border-[#9E95FF]">
            Previous
          </button>

          <button className="w-8 h-8 border  rounded-full border-[#9E95FF]">
            1
          </button>
          <button className="w-8 h-8 border  rounded-full border-[#9E95FF]">
            2
          </button>
          <button className="w-8 h-8 border  rounded-full border-[#9E95FF]">
            3
          </button>
          <button className="w-8 h-8 border  rounded-full border-[#9E95FF]">
            4
          </button>
          <button className="w-8 h-8 border  rounded-full border-[#9E95FF]">
            5
          </button>

          <button className="px-2 py-1 border  rounded-full border-[#9E95FF]">
            Next
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Service</h2>
            {["serviceNumber", "serviceName", "serviceCategory", "buyAmount", "sellAmount", "profit"].map((field) => (
              <div key={field} className="mb-4">
                <label className="block font-medium mb-2">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field.includes("Amount") || field === "profit" ? "number" : "text"}
                  name={field}
                  value={currentService[field] || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            ))}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={updateService}
                className="px-4 py-2 bg-purple-950 text-white rounded-lg"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageService;
