import React, { useEffect, useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineHome } from "react-icons/md";
import { PiNotebookLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { usePagination } from "../../context/PaginationContext";
import BASE_URL from "../../api";

const ManageBank = () => {
  const navigate = useNavigate();

  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editRowId, setEditRowId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newExpenseItem, setNewExpenseItem] = useState("");

  const {
    currentPage,
    paginateData,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination();

  const paginationBanks = paginateData(banks);

  // Fetch banks on component mount
  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/banks`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setBanks(response.data || []);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error("Fetching data is unsuccessful:", error);
      setLoading(false);
    }
  };

  // Handle edit button click
  const handleEditClick = (bank) => {
    setEditRowId(bank.id);
    setEditedData({ ...bank });
    setNewExpenseItem(bank.bankName || "");
    setEditModalOpen(true);
  };

  // Handle input change in modal
  const handleModalInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle save from modal
  const handleUpdatePost = async () => {
    try {
      await axios.put(`${BASE_URL}/api/banks/update/${editRowId}`, editedData, {
        headers: { "Content-Type": "application/json" },
      });
      setEditModalOpen(false);
      fetchBanks();
    } catch (error) {
      console.error("Error updating bank:", error);
    }
  };

  // Handle delete button click
  const handleDeleteClick = async (id) => {

    alert(id)
    try {
      await axios.delete(`${BASE_URL}/api/banks/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchBanks(); // Refresh the table
    } catch (error) {
      
      console.error("Error deleting bank:", error);
    }
  };

  return (
    <div className="">
      {/* Modal UI */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
            <h2 className="text-xl font-semibold mb-4">Edit Bank Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={editedData.bankName || ""}
                  onChange={handleModalInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium">Account Name</label>
                <input
                  type="text"
                  name="accountName"
                  value={editedData.accountName || ""}
                  onChange={handleModalInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={editedData.accountNumber || ""}
                  onChange={handleModalInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={editedData.branch || ""}
                  onChange={handleModalInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium">Balance</label>
                <input
                  type="number"
                  name="amount"
                  value={editedData.amount || ""}
                  onChange={handleModalInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium">IFSC Code</label>
                <input
                  type="text"
                  name="ifscCode"
                  value={editedData.ifscCode || ""}
                  onChange={handleModalInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setEditModalOpen(false)}
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdatePost}
                  type="button"
                  className="px-4 py-2 bg-purple-950 text-white rounded-lg"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Existing Table and Actions */}
      <div className="flex items-center justify-end w-full">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">Home / Bank / Manage Bank</span>
        <div className="parent"></div>
      </div>

      <div className="mt-4 bg-white p-4 rounded-xl">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
            Bank List
          </h1>
          <hr />
          <div className="buttons gap-2 md:flex items-center justify-start">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/bank")}
            >
              <IoIosAddCircle className="text-2xl" /> Add new Bank
            </button>
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/bank/banktransaction")}
            >
              <GrTransaction className="text-2xl" /> Bank Transaction
            </button>
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/bank/bankledger")}
            >
              <PiNotebookLight className="text-2xl" /> Bank Ledger
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-[#595995]">
                <th className="px-4 py-2 border border-gray-300">SL.</th>
                <th className="px-4 py-2 border border-gray-300 text-center">
                  Bank Name
                </th>
                <th className="px-4 py-2 border border-gray-300">A/C Name</th>
                <th className="px-4 py-2 border border-gray-300">A/C Number</th>
                <th className="px-4 py-2 border border-gray-300">Branch</th>
                <th className="px-4 py-2 border border-gray-300">Balance</th>
                <th className="px-4 py-2 border border-gray-300">IFSC Code</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody className="border border-gray-300">
              {paginationBanks.map((bank, index) => (
                <tr
                  key={bank.id || index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="px-4 py-2 border text-center border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    {bank.bankName}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    {bank.accountName}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    {bank.accountNumber}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    {bank.branch}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    {bank.amount}
                  </td>
                  <td className="px-4 py-2 text-center border border-gray-300">
                    {bank.ifscCode}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button
                      className="bg-green-600 p-1"
                      onClick={() => handleEditClick(bank._id)}
                    >
                      <FaPencil className="text-white" />
                    </button>
                    <button
                      className="bg-red-600 p-1"
                      onClick={() => handleDeleteClick(bank._id)}
                    >
                      <FaTrash className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-400 rounded-lg mx-2 text-white"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-400 rounded-lg mx-2 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default ManageBank