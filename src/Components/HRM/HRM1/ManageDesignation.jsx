import React, { useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import axios from "axios";
import BASE_URL from "../../../api";
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import { FaPen } from "react-icons/fa6";

export default function ManageDesignation() {
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState(null);
  const [updatedDesignation, setUpdatedDesignation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default number of rows per page
  const tableRef = useRef();

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/hrm/designation/getDesignation`
        );
        setDesignations(response.data.data.designations);
      } catch (error) {
        console.error("Error fetching designations:", error);
      }
    };
    fetchDesignations();
  }, []);

  // Delete API Call
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this designation?")) {
      try {
        await axios.put(
          `${BASE_URL}/api/hrm/designation/deleteDesignation/${id}`
        );
        setDesignations((prev) =>
          prev.filter((designation) => designation._id !== id)
        );
        alert("Designation deleted successfully.");
      } catch (error) {
        console.error("Error deleting designation:", error);
        alert("Failed to delete designation. Please try again.");
      }
    }
  };

  // Open Modal and Set Current Designation
  const handleEdit = (designation) => {
    setCurrentDesignation(designation);
    setUpdatedDesignation(designation.designation);
    setIsModalOpen(true);
  };

  // Update API Call
  const handleUpdate = async () => {
    if (!updatedDesignation.trim()) {
      alert("Designation cannot be empty.");
      return;
    }
    try {
      const response = await axios.put(
        `${BASE_URL}/api/hrm/designation/updateDesignation/${currentDesignation._id}`,
        {
          designation: updatedDesignation,
        }
      );
      setDesignations((prev) =>
        prev.map((designation) =>
          designation._id === currentDesignation._id
            ? response.data.data.designation
            : designation
        )
      );
      alert("Designation updated successfully.");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating designation:", error);
      alert("Failed to update designation. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = designations.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(designations.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle "Show Entries" change
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
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
  
  
  //excel button
  const exportToExcel = () => {
    const table = tableRef.current;

    // Create a workbook and add a worksheet
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

    // Write the workbook to an Excel file and trigger the download
    XLSX.writeFile(wb, "Manage_Expense.xlsx");
  };

  return (
    <div>
      <div className="mb-[11%]">
        <div className=" w-full xl:h-[59px] sm:h-[37px] flex justify-end items-center xl:mb-[14px] sm:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px] ">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] sm:w-[21px] sm:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">
            Home/
          </a>{" "}
          <a className="mt-[4px]" href="">
            HRM/
          </a>
          <a className="mt-[4px]" href="">
            Manage Designation
          </a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[30px] bg-white ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] sm:text-[20px] sm:font-medium font-leftHeading ">
              Manage Designation
            </h3>
          </div>
          <div className="w-full p-[10px] flex justify-between flex-wrap items-center">
            <div className="flex">
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] mr-[5px] text-[#636465] font-bodyPop">
                Show
              </p>
              <select
                id="entries"
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="border-gray-400 border-[1px] rounded-[5px]   dark:placeholder-gray-400 bg-white  px-[12px] p-[5px] text-black xl:h-[34px] sm:h-[27px] mr-[5px]"
              >
                <option className="text-gray-500" value={5}>5</option>
                <option className="text-gray-500" value={10}>10</option>
                <option className="text-gray-500" value={15}>15</option>
                <option className="text-gray-500" value={20}>20</option>
              </select>
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] text-[#636465] font-bodyPop">
                Entries
              </p>
            </div>
            <div className="flex">
              <button onClick={copyTableToClipboard} className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Copy
              </button>
              <button onClick={exportToCSV} className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                CSV
              </button>
              <button  onClick={exportToExcel} className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Excel
              </button>
              <button onClick={handleDownloadPDF} className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                PDF
              </button>
              <button onClick={handlePrint} className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Print
              </button>
            </div>
            <div>
              <div className="flex rounded-md border-2 border-gray-400 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                <input
                  type="email"
                  placeholder="Search"
                  className="w-full outline-none xl:h-[39px] xl:w-[191px] sm:h-[29px] sm:w-[112px] bg-white text-gray-600 text-sm px-4 py-3"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-[#2E2E48] px-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="fill-white"
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="table w-full p-[10px] " >
            <table id="table" ref={tableRef} className="table border-collapse border-slate-400 border-2 w-full h-full font-bodyPop text-left" >
              <thead>
                <tr className="  text-[#595995]  font-medium  h-[60px]">
                  <th className="border border-slate-300 ...">
                    <div className="flex justify-between text-xl text-center">
                      SL.
                      <LuArrowUpDown className="w-auto h-[18px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ...">
                    <div className="flex justify-between  text-xl text-center">
                      Designation
                      <LuArrowUpDown className="w-auto h-[18px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ...">
                    <div className="flex justify-between  text-xl  px-3">
                      Action
                      <LuArrowUpDown className="w-auto h-[18px]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((designation, index) => (
                  <tr key={index} className="hover:bg-[#F2F2F2] h-[50px]">
                    <td className="border border-slate-300 px-3">
                      {indexOfFirstRow + index + 1}
                    </td>
                    <td className="border border-slate-300 text-lg px-3">
                      {designation.designation}
                    </td>
                    <td className="border border-slate-300">
                      <div className="flex justify-start">
                        <button
                          className="mr-3 bg-[#75A68F] px-2 py-1"
                          onClick={() => handleEdit(designation)}
                        >
                          <FaPen className="text-white" />
                        </button>
                        <button
                          className="mr-3 text-[#636465] px-2 py-1 bg-red-500"
                          onClick={() => handleDelete(designation._id)}
                        >
                          <FaRegTrashAlt className="text-white" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-[100px] flex justify-end items-center pr-[20px]">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className=" border-[2px] xl:w-[100px] sm:w-[80px] rounded-[50px] xl:h-[50px] sm:h-[40px] mr-[4px] border-[#746BD9]"
            >
              <p className="text-[#746BD9]">Previous</p>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] ${
                  currentPage === index + 1
                    ? "bg-[#746BD9] text-white"
                    : "border-[#746BD9] text-[#746BD9]"
                }`}
              >
                <p>{index + 1}</p>
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className=" border-[2px] xl:w-[100px] sm:w-[80px] rounded-[50px] xl:h-[50px] sm:h-[40px] border-[#746BD9]"
            >
              <p className=" text-[#746BD9]">Next</p>
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Update Designation</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Designation
              </label>
              <input
                type="text"
                value={updatedDesignation}
                onChange={(e) => setUpdatedDesignation(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
