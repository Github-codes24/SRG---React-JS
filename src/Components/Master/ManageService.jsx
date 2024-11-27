import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BASE_URL from "../../api";

const ManageService = () => {
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
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
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

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">#</th>
              <th className="border p-2 text-left">Branch</th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Buy</th>
              <th className="border p-2 text-left">Sell</th>
              <th className="border p-2 text-left">Profit</th>
              <th className="border p-2 text-left">Actions</th>
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
