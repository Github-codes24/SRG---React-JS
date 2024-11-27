import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";

import { FaTrash } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import axios from "axios";
import html2pdf from 'html2pdf.js';
import { useRef } from "react";
import * as XLSX from 'xlsx';
import BASE_URL from "../../api";

const ManageExpenseItem = () => {

  //search functionality
  
  const tableRef = useRef();
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
      link.setAttribute("download", "Manage_Expense_Item.csv"); // Filename for the CSV
      link.style.visibility = "hidden"; // Hide the link
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link after the download
    }
  };

  //excel button
  const exportToExcel = () => {
    const table = tableRef.current;

    // Create a workbook and add a worksheet
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

    // Write the workbook to an Excel file and trigger the download
    XLSX.writeFile(wb, "Manage_Expense_Item.xlsx");
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


  //pdfviewer
  const handleDownloadPDF = () => {
    // Get the HTML content of the table
    const element = tableRef.current;

    // Options for html2pdf
    const options = {
      filename: 'Manage_Expense_Item.pdf', // Name of the output PDF file
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
 
  const [expenseItems, setExpenseItems] = useState([]);
 
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);


  // Fetch Expense Items
  useEffect(() => {
    fetchExpenseItems();
  }, []);

  const fetchExpenseItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/expense-items`); // Replace with your GET API URL
      setExpenseItems(response.data);
    } catch (error) {
      console.error("Error fetching expense items", error);
    }
  };

  const deleteItem = async (id) => {
    
  
    try {
      const response = await axios.delete(`${BASE_URL}/api/expense-items/${id}`);
      console.log("Delete successful:", response.data);
      return response.data; // Return response if needed
    } catch (error) {
      console.error("Error deleting item:", error);
      
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      console.log(`deleted successfully`);
      // Update the UI after deletion, e.g., refetch data or remove from state
    } catch (error) {
      console.error("Failed to delete item", error.message)
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditItem(null);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`${BASE_URL}/api/expense-items/${editItem._id}`, editItem); // Replace with your PUT API URL
      setExpenseItems((prevItems) =>
        prevItems.map((item) =>
          item._id === editItem._id ? editItem : item
        )
      );
      handleModalClose();
    } catch (error) {
      console.error("Error updating expense item", error);
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Add Expense Item
        </span>
      </div>
      <div className="bg-white p-2 rounded-lg my-2">
        <div className="flex justify-between items-center space-x-4">
          <h3 className="text-xl   text-[#878484] font-semibold px-2 pt-4">Manage Expense Item</h3>
        </div>
        <br />
        <hr />

        <div>
          <div className="flex justify-between items-center">
            {/* Left Section: Show and Entries */}
            <div className="flex items-center space-x-2">
              <label htmlFor="show" className="text-gray-700 font-medium w-10">
                Show
              </label>
              <select
                id="show"
                className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="" disabled selected>
                  10
                </option>
                <option value="show">1</option>
                <option value="show">2</option>
                <option value="show">3</option>
              </select>

              <label
                htmlFor="employeeName"
                className="text-gray-700 font-medium"
              >
                Entries
              </label>
            </div>

            {/* Center Section: Buttons */}
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

            {/* Right Section: Search Input */}
            <div className="relative flex items-center">
              <input
                type="text"
                
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute right-2 bg-purple-950 text-white p-2 ">
                <FaMagnifyingGlass className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto  bg-white p-[10px]">
        <table ref={tableRef} id="table" className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white">
              <th className="px-4 py-2 w-1/6 text-center text-[#595995] font-medium">
                Sl. No
              </th>
              <th className="border border-gray-300 px-4 py-2 w-4/6 text-[#595995] font-medium">
                Expense Item
              </th>
              <th className="border border-gray-300 px-4 py-2 w-1/6 text-[#595995] font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expenseItems.map((item, index) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#636465BD] font-normal">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-[#636465BD] font-medium">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="w-full flex items-center justify-center gap-x-3">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="bg-[#75A68F] p-1"
                    >
                      <BsPencilFill className="text-white" />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-[#BF2D35] p-1"
                    >
                      <FaTrash className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit Expense Item</h2>
            <input
              type="text"
              value={editItem?.name || ""}
              onChange={(e) =>
                setEditItem((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-purple-950 text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    <div className="flex items-center justify-between">
      <p className="text-[#636465] font-medium">Showing 1 to 20 enteries</p>
      <div className="flex items-center justify-center gap-x-3">
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">Previous</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">1</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">2</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">3</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">4</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">5</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">6</button>
        <button className="rounded-full border-[#746BD9] border-[1.8px] px-2 hover:bg-[#746BD9] hover:text-white">Next</button>
      </div>
    </div>
      </div>

    </div>
  );
};

export default ManageExpenseItem;