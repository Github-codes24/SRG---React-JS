import React, { useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
// import { FaRegMoneyBill1, FaSearch } from "react-icons/fa";
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import { FaPencil, FaRegMoneyBill1 } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { CiTrash } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';
import html2pdf from 'html2pdf.js';

import BASE_URL from "../../api";

const ManageWallet = () => {
 const navigate = useNavigate();
  const [wallets, setWallets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentWallet, setCurrentWallet] = useState(null);
  const [editFormData, setEditFormData] = useState({ walletName: "", accountHead: "" });

  // Fetch wallets from API
  const fetchWallets = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/wallets/all`);
      setWallets(response.data);
    } catch (error) {
      console.error("Error fetching wallets:", error);
    }
  };

  // Delete wallet by ID
  const deleteWallet = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/wallets/delete/${id}`)
      fetchWallets(); // Refresh wallet list
    } catch (error) {
      console.error("Error deleting wallet:", error);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Open the edit modal
  const openEditModal = (wallet) => {
    setCurrentWallet(wallet);
    setEditFormData({ walletName: wallet.walletName, accountHead: wallet.accountHead });
    setEditModalOpen(true);
  };

  // Close the edit modal
  const closeEditModal = () => {
    setEditModalOpen(false);
    setCurrentWallet(null);
  };

  // Handle edit form input change
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit edited wallet details
  const submitEditForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${BASE_URL}/api/wallets/update/${currentWallet._id}`,
        editFormData
      );
      alert("Wallet updated successfully!");
      closeEditModal();
      fetchWallets(); // Refresh wallet list
    } catch (error) {
      console.error("Error updating wallet:", error);
      alert("Failed to update wallet. Please try again.");
    }
  };

  const tableRef = React.useRef();



  // Filtered wallets based on search term
  const filteredWallets = wallets.filter(
    (wallet) =>
      wallet.walletName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wallet.accountHead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchWallets();
  }, []);

  //excel button
  const exportToExcel = () => {
    const table = tableRef.current;

    // Create a workbook and add a worksheet
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

    // Write the workbook to an Excel file and trigger the download
    XLSX.writeFile(wb, "Manage_Expense.xlsx");
  };

   //pdfviewer
   const handleDownloadPDF = () => {
    // Get the HTML content of the table
    const element = tableRef.current;

    // Options for html2pdf
    const options = {
      filename: 'Manage_Expense.pdf', // Name of the output PDF file
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Higher scale for better quality
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // PDF paper size and orientation
    };

    // Convert the table to PDF
    html2pdf().from(element).set(options).save();
  };
  

   //print method
   const handlePrint = () => {
    const printContent = document.getElementById('table').outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Expense Statement</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };
 
 
  
  //copy button
  const copyTableToClipboard = () => {
    const table = tableRef.current;
    
    // Create a range and select the content
    const range = document.createRange();
    range.selectNode(table);
    
    // Select the content in the table
    window.getSelection().removeAllRanges();  // Clear previous selections
    window.getSelection().addRange(range);   // Add the range to the selection

    try {
      // Execute the copy command
      document.execCommand('copy');
      alert('Table content copied to clipboard!');
    } catch (err) {
      console.error('Error copying table content: ', err);
    }

    // Clear the selection (optional)
    window.getSelection().removeAllRanges();
  };

   //csv button
   const exportToCSV = () => {
    const table = tableRef.current;
    let csvContent = "";

    // Get table headers
    const headers = [];
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      headers.push(table.rows[0].cells[i].innerText); // Get header text
    }
    csvContent += headers.join(",") + "\n"; // Add header row to CSV

    // Get table rows (excluding the header)
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const rowData = [];
      for (let j = 0; j < row.cells.length; j++) {
        rowData.push(row.cells[j].innerText); // Get each cell's text
      }
      csvContent += rowData.join(",") + "\n"; // Add row to CSV
    }

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a link element to trigger the file download
    const link = document.createElement("a");
    if (link.download !== undefined) {
      // Create a URL for the Blob and set the download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "Manage_Expense.csv"); // Filename for the CSV
      link.style.visibility = "hidden"; // Hide the link
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link after the download
    }
  };

  // Handle print
  
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Manage Wallet
        </span>
      </div>

      {/* Manage Wallet Header Section */}
      <div className="bg-white">
        <div className="flex items-center justify-between my-2 bg-white px-2 py-1">
          <h1 className="text-[#878484] text-2xl">Manage Wallets</h1>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-x-2">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet")}
            >
              <IoIosAddCircle className="text-2xl" />
              Add Wallet
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletrecharge")}
            >
              <IoIosAddCircle className="text-2xl" />
              Wallet Recharge
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletrefund")}
            >
              <FaRegMoneyBill1 className="text-2xl" />
              Wallet Refund
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletledger")}
            >
              <SlNotebook className="text-2xl" />
              Wallet Ledger
            </button>
          </div>
        </div>

        <hr />

        {/* Show Entries Section */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2 my-4">
            <label htmlFor="show" className="text-gray-700 font-medium w-10">
              Show
            </label>
            <select
              id="show"
              className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="10"
            >
              <option value="10">10</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label htmlFor="entries" className="text-gray-700 font-medium">
              Entries
            </label>
          </div>

          {/* Action Buttons: Copy, CSV, Excel, PDF, Print */}
          <div className="flex justify-center flex-grow">
          <button
            type="button"
            onClick={copyTableToClipboard}
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={exportToCSV}
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            CSV
          </button>
          <button
            type="button"
            onClick={exportToExcel}
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            Excel
          </button>
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            PDF
          </button>
          <button
          onClick={handlePrint}
            type="button"
            className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
          >
            Print
          </button>
        </div>

          {/* Search Input */}
          <div className="relative flex items-center mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-2 bg-purple-950 text-white p-2">
              <FaSearch className="h-4 w-4" />
            </span>
          </div>
        </div>
      {/* table */}
      <div className="overflow-x-auto" id="table-to-print">
     <table className="table-auto w-full border" id="table" ref={tableRef}>
              <thead>
                <tr className="bg-white">
                  <th className="border px-4 py-2">SR. No</th>
                  <th className="border px-4 py-2">Wallet Name</th>
                  <th className="border px-4 py-2">Account Head</th>
                  <th className="border px-4 py-2">Balance</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredWallets.map((wallet, index) => (
                  <tr key={wallet._id} className="bg-white">
                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                    <td className="border px-4 py-2 text-center">{wallet.walletName}</td>
                    <td className="border px-4 py-2 text-center">{wallet.accountHead}</td>
                    <td className="border px-4 py-2 text-center">{wallet.balance}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        className="bg-green-400 px-2 py-2 mx-1"
                        onClick={() => openEditModal(wallet)}
                      >
                        <GoPencil />
                      </button>
                      <button
                        className="bg-red-400 px-2 py-2"
                        onClick={() => deleteWallet(wallet._id)}
                      >
                        <CiTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredWallets.length === 0 && (
              <p className="text-center my-4">No wallets found.</p>
            )}
                  </div>
            <div>
            {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Wallet</h2>
            <form onSubmit={submitEditForm}>
              <div className="mb-4">
                <label className="block mb-2">Wallet Name</label>
                <input
                  type="text"
                  name="walletName"
                  value={editFormData.walletName}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Account Head</label>
                <input
                  type="text"
                  name="accountHead"
                  value={editFormData.accountHead}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
            </div>
      <div className="flex items-center justify-between my-3">
        <p>Showing 1 to 20 enteries</p>
        <div className="flex justify-end space-x-2">
          <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
            Previous
          </button>

          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            1
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            2
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            3
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            4
          </button>
          <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            5
          </button>

          <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
            Next
          </button>
        </div>
      </div>


      </div>
    </div>
  );
};

export default ManageWallet;
