import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import BASE_URL from "../../api";

const WebsiteLedger = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentWebsite, setCurrentWebsite] = useState({ name: "", link: "" });
  const [newWebsiteName, setNewWebsiteName] = useState("");
  const [newWebsiteLink, setNewWebsiteLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchWebsite();
  }, []);

  const fetchWebsite = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/api/websites`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching website:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteWebsite = async (websiteId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this website?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `${BASE_URL}/api/websites/${websiteId}`
        );
        alert("Website deleted successfully.");
        fetchWebsite(); // Refresh website list after deletion
      } catch (error) {
        console.error("Error deleting website:", error);
        alert("Failed to delete website. Please try again.");
      }
    }
  };

  const handleEditClick = (website) => {
    setCurrentWebsite(website);
    setNewWebsiteName(website.name);
    setNewWebsiteLink(website.link);
    setEditModalOpen(true);
  };

  const handleUpdateWebsite = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/websites/${currentWebsite._id}`,
        {
          name: newWebsiteName,
          link: newWebsiteLink,
        }
      );
      alert("Website updated successfully.");
      setEditModalOpen(false);
      fetchWebsite(); // Refresh website list after update
    } catch (error) {
      console.error("Error updating website:", error);
      alert("Failed to update website. Please try again.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Website Ledger
        </span>
      </div>
      <div className="max-w-full mx-auto mt-10 p-6 shadow-md rounded-md bg-[#FFFFFF]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
            Website Ledger
          </h2>
          <button
            className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded"
            onClick={() => navigate("/master/AddWebsite")}
          >
            Add Website Link
          </button>
        </div>
        <hr className="mb-4" />
        {loading ? (
          <div className="flex justify-center items-center py-10">
          <div className="loader border-t-4 border-b-4 border-purple-700 w-10 h-10 rounded-full animate-spin"></div>
        </div>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border text-[#746BD9] p-2 text-left">SL.</th>
                <th className="border text-[#746BD9] p-2 text-left">
                  Website Name
                </th>
                <th className="border text-[#746BD9] p-2 text-left">
                  Website Link
                </th>
                <th className="border text-[#746BD9] p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">
                    {" "}
                    <i className="text-blue-600">
                    <a
                      href={
                        item.link.startsWith("http")
                          ? item.link
                          : `https://${item.link}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                    </i>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex gap-2">
                      <button
                        className="text-green-600 hover:text-green-800"
                        onClick={() => handleEditClick(item)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => deleteWebsite(item._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Website</h2>
            <label className="text-lg font-medium my-4">Website Name</label>
            <input
              type="text"
              value={newWebsiteName}
              onChange={(e) => setNewWebsiteName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Website Name"
            />
            <label className="text-lg font-medium my-4">Website Link</label>
            <input
              type="text"
              value={newWebsiteLink}
              onChange={(e) => setNewWebsiteLink(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Website Link"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateWebsite}
                className="px-4 py-2 bg-purple-950 text-white rounded-lg"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WebsiteLedger;
