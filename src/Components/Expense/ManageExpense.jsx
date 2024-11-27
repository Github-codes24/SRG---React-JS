import React, { useEffect, useState,useRef } from "react";
import axios from "axios";
import { BsPencilFill } from "react-icons/bs";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import * as XLSX from 'xlsx';
import html2pdf from 'html2pdf.js';
import BASE_URL from "../../api";

const ManageExpense = () => {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const tableRef = useRef();

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


  // Fetch expenses
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/expenses`) // Replace with your API endpoint
      .then((response) => setExpenses(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteItem = async (id) => {
  
  
    try {
      const response = await axios.delete(`${BASE_URL}/api/expenses/${id}`);
      console.log("Delete successful:", response.data);
      return response.data; // Return response if needed
    } catch (error) {
      console.error("Error deleting item:", error);
      throw error; // Rethrow error for handling in the caller
    }
  };
  const handleDelete = async (id) => {
    try {
      
      await deleteItem(id);
      console.log(`Item with ID ${id} deleted successfully`);
      // Update the UI after deletion, e.g., refetch data or remove from state
    } catch (error) {
      console.error("Failed to delete item:", error.message);
    }
  };

  // Handle edit
  const handleEdit = (expense) => {
    setEditExpense(expense);
    setShowModal(true);
  };

  // Save edited expense
  const saveEdit = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/api/expenses/${editExpense._id}`, editExpense) // Replace with your API endpoint
      .then((response) => {
        setExpenses(
          expenses.map((expense) =>
            expense._id === response.data._id ? response.data : expense
          )
        );
        setShowModal(false);
        setEditExpense(null);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Expense / Manage Expense
        </span>
      </div>

      <div className="bg-white">
        <p className="text-2xl p-2 text-[#878484] font-medium">Manage Expense</p>
        <hr />
      <div className="flex justify-between items-center p-2">
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

          <label htmlFor="employeeName" className="text-gray-700 font-medium">
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

      <div className="bg-white">
        <p className="text-2xl p-2 text-[#878484] font-medium">Manage Expense</p>
        <hr />
        <div className="overflow-x-auto">
          <table id="table" ref={tableRef} className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border font-semibold text-[#595995]">SL. No</th>
                <th className="py-2 px-4 border font-semibold text-[#595995]">Voucher No.</th>
                <th className="py-2 px-4 border font-semibold text-[#595995]">Expense Type</th>
                <th className="py-2 px-4 border font-semibold text-[#595995]">Payment Type</th>
                <th className="py-2 px-4 border font-semibold text-[#595995]">Amount</th>
                <th className="py-2 px-4 border font-semibold text-[#595995]">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={expense._id} className="text-[#636465BD]">
                  <td className="py-2 px-4 border text-center font-medium text-sm">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border text-center font-medium text-sm">
                    {expense.voucherNumber}
                  </td>
                  <td className="py-2 px-4 border text-center font-medium text-sm">
                    {expense.expenseType}
                  </td>
                  <td className="py-2 px-4 border text-center font-medium text-sm">
                    {expense.paymentType}
                  </td>
                  <td className="py-2 px-4 border text-center font-medium text-sm">
                    {expense.amount}
                  </td>
                  <td className="py-2 px-4 border">
                    <div className="w-full flex items-center justify-center gap-x-3">
                      <button
                        className="bg-[#75A68F] p-1"
                        onClick={() => handleEdit(expense)}
                      >
                        <BsPencilFill className="text-white" />
                      </button>
                      <button
                        className="bg-[#BF2D35] p-1"
                        onClick={() => handleDelete(expense._id)}
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
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Edit Expense</h2>
            <form onSubmit={saveEdit}>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-semibold">Voucher Number</label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-md"
                    value={editExpense?.voucherNumber || ""}
                    onChange={(e) =>
                      setEditExpense({
                        ...editExpense,
                        voucherNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block font-semibold">Expense Type</label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-md"
                    value={editExpense?.expenseType || ""}
                    onChange={(e) =>
                      setEditExpense({
                        ...editExpense,
                        expenseType: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block font-semibold">Payment Type</label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 rounded-md"
                    value={editExpense?.paymentType || ""}
                    onChange={(e) =>
                      setEditExpense({
                        ...editExpense,
                        paymentType: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block font-semibold">Amount</label>
                  <input
                    type="number"
                    className="w-full border px-3 py-2 rounded-md"
                    value={editExpense?.amount || ""}
                    onChange={(e) =>
                      setEditExpense({
                        ...editExpense,
                        amount: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    <div className="flex items-center justify-between my-8 px-2 pb-5">
      <p className="text-[#636465] font-medium">Showing 1 to 20 enteries</p>
      <div className="flex items-center justify-center gap-x-3 text-[#595995]">
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
      <br />
    </div>
  );
};

export default ManageExpense;
