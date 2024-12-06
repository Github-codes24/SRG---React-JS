import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import BASE_URL from "../../api";

const ManageLedger = () => {
  const [table, setTable] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentLedger, setCurrentLedger] = useState({});
  const [newLedgerName, setNewLedgerName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchLedger();
  }, []);

  const fetchLedger = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/ledgers`
      );
      setTable(response.data);
    } catch (error) {
      console.error("Error fetching ledger:", error);
    }
  };

  const deleteLedger = async (ledgerId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ledger?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `${BASE_URL}/api/ledgers/${ledgerId}`
        );
        alert("Ledger deleted successfully.");
        fetchLedger(); // Refresh ledger list after deletion
      } catch (error) {
        console.error("Error deleting ledger:", error);
        alert("Failed to delete ledger.");
      }
    }
  };

  const openEditModal = (ledger) => {
    setCurrentLedger(ledger);
    setNewLedgerName(ledger.voucherNo);
    setEditModalOpen(true);
  };

  const handleUpdateLedger = async () => {
    try {
      await axios.put(
        `${BASE_URL}/api/ledgers/${currentLedger._id}`,
        {
          ...currentLedger,
          ledgerName: newLedgerName,
        }
      );
      alert("Ledger updated successfully.");
      setEditModalOpen(false);
      fetchLedger();
    } catch (error) {
      console.error("Error updating ledger:", error);
      alert("Failed to update ledger.");
    }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-2xl text-[#3A6D8C] mr-2" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Manage Ledger
        </span>
      </div>

      {/* Manage Ledger Section */}
      <div className="max-w-full mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal">
            Manage Ledger
          </h2>
          <button
            className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded"
            onClick={() => navigate("/master")}
          >
            Add Ledger
          </button>
        </div>
        <hr className="h-5" />
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border text-[#595995] px-4 py-2">SL.</th>
                <th className="border text-[#595995] px-4 py-2">Voucher No</th>
                <th className="border text-[#595995] px-4 py-2">Date</th>
                <th className="border text-[#595995] px-4 py-2">Ledger Name</th>
                <th className="border text-[#595995] px-4 py-2">
                  Account Head
                </th>
                <th className="border text-[#595995] px-4 py-2">
                  Transaction Type
                </th>
                <th className="border text-[#595995] px-4 py-2">Remark</th>
                <th className="border text-[#595995] px-4 py-2">
                  Balance Amount
                </th>
                <th className="border text-[#595995] px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, index) => (
                <tr key={item._id} className="bg-white hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{item.voucherNo || "NA"}</td>
                  <td className="border px-4 py-2">{item.date || "NA"}</td>
                  <td className="border px-4 py-2">
                    {item.ledgerName || "NA"}
                  </td>
                  <td className="border px-4 py-2">
                    {item.accountHead || "NA"}
                  </td>
                  <td className="border px-4 py-2">
                    {item.transactionType || "NA"}
                  </td>
                  <td className="border px-4 py-2">{item.remark || "NA"}</td>
                  <td className="border px-4 py-2">{item.amount || "NA"}</td>
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2">
                      <button
                        className="text-green-600 hover:text-green-800"
                        onClick={() => openEditModal(item)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => deleteLedger(item._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination UI */}
      <div className="flex justify-center items-center space-x-2 mt-10 float-right">
        <button className="px-2 py-1 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          Previous
        </button>

        <button className="w-8 h-8 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          1
        </button>
        <button className="w-8 h-8 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          2
        </button>
        <button className="w-8 h-8 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          3
        </button>
        <button className="w-8 h-8 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          4
        </button>
        <button className="w-8 h-8 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          5
        </button>

        <button className="px-2 py-1 text-[#9E95FF] border rounded-full border-[#9E95FF]">
          Next
        </button>
      </div>
        </div>
        
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Ledger</h2>
            <input
              type="text"
              value={newLedgerName}
              onChange={(e) => setNewLedgerName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />

            <input
              type="date"
              value={currentLedger.date || ""}
              onChange={(e) =>
                setCurrentLedger({ ...currentLedger, date: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <input
  type="text"
  value={currentLedger.ledgerName || ''}
  onChange={(e) => setCurrentLedger({ ...currentLedger, ledgerName: e.target.value })}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
  placeholder="Ledger Name"
/>

            {/* Account Head */}
            <select
              value={currentLedger.accountHead || ""}
              onChange={(e) =>
                setCurrentLedger({
                  ...currentLedger,
                  accountHead: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            >
              <option value="">Select Account Head</option>
              <option value="Bank">Bank</option>
              <option value="Cash">Cash</option>
            </select>

            {/* Transaction Type */}
            <select
              value={currentLedger.transactionType || ""}
              onChange={(e) =>
                setCurrentLedger({
                  ...currentLedger,
                  transactionType: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            >
              <option value="">Transaction Type</option>
              <option value="Receipts">Receipts</option>
              <option value="Payments">Payments</option>
            </select>

            {/* Remark */}
            <input
              type="text"
              value={currentLedger.remark || ""}
              onChange={(e) =>
                setCurrentLedger({ ...currentLedger, remark: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Remark"
            />

            {/* Balance Amount */}
            <input
              type="number"
              value={currentLedger.amount || ""}
              onChange={(e) =>
                setCurrentLedger({ ...currentLedger, amount: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Balance Amount"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateLedger}
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

export default ManageLedger;
