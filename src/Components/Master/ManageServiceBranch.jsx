import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BASE_URL from "../../api";

const ManageServiceList = () => {
  const [data, setData] = useState([]);
  
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editService, setEditService] = useState({ serviceType: "", _id: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchService();
  },);

  const fetchService = async () => {
    
    try {
      const response = await axios.get(
        `${BASE_URL}/api/service-branches`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching service branches:", error);
      alert("Failed to fetch service branches.");
    } 
  };

  const deleteService = async (serviceId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `${BASE_URL}/api/service-branches/${serviceId}`
        );
        alert("Service branch deleted successfully.");
        fetchService(); // Refresh the data after deletion
      } catch (error) {
        console.error("Error deleting service branch:", error);
        alert("Failed to delete service branch. Please try again.");
      }
    }
  };

  const openEditModal = (serviceId, currentName) => {
    setEditService({ serviceType: currentName, _id: serviceId });
    setEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditService((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdatePost = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/service-branches/${editService._id}`,
        {
          serviceType: editService.serviceType,
        }
      );
      alert("Service branch updated successfully.");
      setEditModalOpen(false);
      fetchService(); // Refresh the data after editing
    } catch (error) {
      console.error("Error updating service branch:", error);
      alert("Failed to update service branch. Please try again.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Manage Service Branch
        </span>
      </div>
      <div className="container mx-auto mt-3 p-4 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
            Manage Service Branch
          </h2>
          <button
            className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded"
            onClick={() => navigate("/AddServiceBranch")}
          >
            Add Service Branch
          </button>
        </div>
        <hr className="pt-4" />
        {  
          
         
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border text-[#746BD9] p-2 text-left">SL.</th>
                <th className="border text-[#746BD9] p-2 text-left">
                  Service Branch
                </th>
                <th className="border text-[#746BD9] p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">
                    {item.serviceType}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2">
                      <button
                        className="text-green-600 hover:text-green-800"
                        onClick={() =>
                          openEditModal(item._id, item.serviceType)
                        }
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => deleteService(item._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        {/* Modal for Editing */}
        {editModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h2 className="text-xl font-semibold mb-4">
                Edit Service Branch
              </h2>
              <label className="font-medium mb-2 block">Service Branch</label>
              <input
                type="text"
                name="serviceType"
                value={editService.serviceType}
                onChange={handleEditChange}
                className="w-full border border-gray-300 p-2 rounded mb-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdatePost}
                  className="px-4 py-2 bg-purple-950 text-white rounded-lg"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

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
    </>
  );
};

export default ManageServiceList;




