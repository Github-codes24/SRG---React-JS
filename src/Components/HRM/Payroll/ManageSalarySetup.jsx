import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoHomeOutline } from 'react-icons/io5';
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import BASE_URL from '../../../api';
import html2pdf from 'html2pdf.js';
import { useRef } from "react";
import * as XLSX from 'xlsx';

export default function ManageSalarySetup() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: '',
    salaryType: ''
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(1);

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/api/salarySetup/getAllSalarySetup`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete data from API
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await axios.put(`${BASE_URL}/api/salarySetup/deleteSalarySetup/${id}`);
        alert("Entry deleted successfully!");
        fetchData(); // Refresh the data
      } catch (error) {
        console.error("Error deleting data:", error);
        alert("Failed to delete the entry. Please try again.");
      }
    }
  };

  // Open modal for updating
  const handleEdit = (item) => {
    setSelectedItem(item);
    setFormData({
      employeeName: item.employeeName,
      salaryType: item.salaryType,
    });
    setIsModalOpen(true);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Update data in API
  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...formData,
      };
      await axios.put(`${BASE_URL}/api/salarySetup/updateSalarySetup/${selectedItem._id}`, updatedData);
      alert("Entry updated successfully!");
      setIsModalOpen(false); // Close modal
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update the entry. Please try again.");
    }
  };

  // Calculate the data for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


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
      link.setAttribute("download", "Manage_Salary_Setup.csv"); // Filename for the CSV
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
    XLSX.writeFile(wb, "Manage_Salary_Setup.xlsx");
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
      filename: 'Manage_Salary_Setup.pdf', // Name of the output PDF file
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


  return (
    <div>
      <div className='mb-[11%]'>
        <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px] ">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">
            Home/
          </a>{" "}
          <a className="mt-[4px]" href="">
            HRM/
          </a>
          <a className="mt-[4px]" href="">
            Payroll/
          </a>
          <a className="mt-[4px]" href="">
            Manage Salary Setup
          </a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[30px] bg-white ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium font-leftHeading ">
              Manage Salary Setup
            </h3>
          </div>
          <div className="w-full p-[10px] flex justify-between flex-wrap items-center">
            <div className="flex">
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] mr-[5px] text-[#636465] font-bodyPop">
                Show
              </p>
              <select
                id="countries"
                className="border-gray-400 border-[1px] rounded-[5px] w-[50px]  dark:placeholder-gray-400 bg-white  px-[12px] p-[5px] text-gray-400 xl:h-[34px] sm:h-[27px] mr-[5px]"
              >
                <option selected>10</option>
                <option value="US">Staff</option>
                <option value="US">Staff</option>
              </select>
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] text-[#636465] font-bodyPop">
                Entries
              </p>
            </div>
            <div className="flex">
            <button 
              onClick={copyTableToClipboard}
              className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Copy
              </button>
              <button 
              onClick={exportToCSV}
              className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                CSV
              </button>
              <button
              onClick={exportToExcel}
              className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Excel
              </button>
              <button
              onClick={handleDownloadPDF}
              className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                PDF
              </button>
              <button
              onClick={handlePrint}
              className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
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
          <div className=" overflow-x-auto w-full p-[10px] ">
          {loading ? (
              <div className="flex justify-center items-center py-10">
              <div className="loader border-t-4 border-b-4 border-purple-700 w-10 h-10 rounded-full animate-spin"></div>
            </div>
            ) : (
          
          <table ref={tableRef} id="table" className="border-collapse border-slate-400 border-2 w-full h-full font-bodyPop text-left">
              <thead>
                <tr className="  text-[#595995]  font-medium  h-[60px]">
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">SL.<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">Employee Name<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">Salary Type<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">Date<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]">Action</th>
                </tr>
              </thead>
              
              <tbody className="text-left text-[#636465BD]">
              
              {currentData.map((item, index) => (
                <tr className="  h-[60px]">
                  <td className="border border-slate-300 pl-[8px]">{index + 1}</td>
                  <td className="border border-slate-300 pl-[8px]">{item.employeeName}</td>
                  <td className="border border-slate-300 pl-[8px]">{item.salaryType}</td>
                  <td className="border border-slate-300 pl-[8px]">{item.createdAt}</td>
                  <td className="border border-slate-300 pl-[8px]"><div className="flex gap-[4px] w-full justify-left pl-[5px]">
                    <BsPencil onClick={() => handleEdit(item)} className="bg-[#96CEB4] p-[2px] h-[30px] w-[30px] rounded-[2px] border-[1px] border-[#75A68F]" color="white"/>
                    <FaRegTrashAlt onClick={() => handleDelete(item._id)} className="bg-[#CB6040] p-[2px] h-[30px] w-[30px] rounded-[2px] border-[#BF2D35] border-[1px]" color="white"/>
                    
                    </div>
                    </td>
                </tr>
                ))}
              </tbody>
              
            </table>
           )}
          </div>
           {/* Pagination */}
      <div className="h-[100px] flex justify-end items-center pr-[20px]">
        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="border-[2px] xl:w-[100px] sm:w-[80px] rounded-[50px] xl:h-[50px] sm:h-[40px] mr-[4px] border-[#746BD9]">
          <p className="text-[#746BD9]">Previous</p>
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button key={page} onClick={() => handlePageChange(page + 1)} className={`border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] border-[#746BD9] ${currentPage === page + 1 ? "bg-[#746BD9] text-white" : ""}`}>
            <p>{page + 1}</p>
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="border-[2px] xl:w-[100px] sm:w-[80px] rounded-[50px] xl:h-[50px] sm:h-[40px] border-[#746BD9]">
          <p className="text-[#746BD9]">Next</p>
        </button>
      </div>
        </div>
        {/* Modal for Update */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/3">
              <h2 className="text-xl mb-4">Update Salary Setup</h2>
              <div className="mb-4">
                <label className="block mb-2">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={formData.employeeName}
                  onChange={handleInputChange}
                  className="border w-full p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Salary Type</label>
                <input
                  type="text"
                  name="salaryType"
                  value={formData.salaryType}
                  onChange={handleInputChange}
                  className="border w-full p-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
