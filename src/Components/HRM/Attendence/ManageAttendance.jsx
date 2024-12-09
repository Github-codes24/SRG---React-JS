import React, { useEffect, useState, useRef } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import axios from 'axios';
import BASE_URL from '../../../api';

const ManageAttendance = () => {
  const tableRef = useRef();
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false)


  // Fetch data function
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${BASE_URL}/api/attendance/getAttendances`);
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  // Paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = attendanceData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // CSV export functionality
  const exportToCSV = () => {
    const table = tableRef.current;
    let csvContent = "";

    const headers = [];
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      headers.push(table.rows[0].cells[i].innerText); // Get header text
    }
    csvContent += headers.join(",") + "\n";

    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const rowData = [];
      for (let j = 0; j < row.cells.length; j++) {
        rowData.push(row.cells[j].innerText); // Get each cell's text
      }
      csvContent += rowData.join(",") + "\n"; // Add row to CSV
    }

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "Manage_Expense_Item.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Excel export functionality
  const exportToExcel = () => {
    const table = tableRef.current;
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
    XLSX.writeFile(wb, "Manage_Expense_Item.xlsx");
  };

  // Copy to clipboard functionality
  const copyTableToClipboard = () => {
    const table = tableRef.current;
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
      alert('Table content copied to clipboard!');
    } catch (err) {
      console.error('Error copying table content: ', err);
    }

    window.getSelection().removeAllRanges();
  };

  // PDF download functionality
  const handleDownloadPDF = () => {
    const element = tableRef.current;
    const options = {
      filename: 'Manage_Expense_Item.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().from(element).set(options).save();
  };

  // Print functionality
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

  // Calculate total pages
  const totalPages = Math.ceil(attendanceData.length / itemsPerPage);

  return (
    <div>
      <div className="bg-white rounded-xl p-4">
        <div className="flex justify-between items-center space-x-4">
          <h3 className="text-2xl text-[#878484] tracking-tight font-semibold">Manage Attendance</h3>
        </div><br /><hr /><br />
        
        <div className="flex justify-between items-center">
          {/* Left Section: Show and Entries */}
          <div className="flex items-center space-x-2">
            <label htmlFor="show" className="text-gray-700 font-medium w-10">Show</label>
            <select 
              id="show" 
              className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <label htmlFor="employeeName" className="text-gray-700 font-medium">Entries</label>
          </div>

          {/* Center Section: Buttons */}
          <div className="flex justify-center flex-grow">
            <button type="button" onClick={copyTableToClipboard} className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">Copy</button>
            <button type="button" onClick={exportToCSV} className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">CSV</button>
            <button type="button" onClick={exportToExcel} className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">Excel</button>
            <button type="button" onClick={handleDownloadPDF} className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">PDF</button>
            <button type="button" onClick={handlePrint} className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2">Print</button>
          </div>

          {/* Right Section: Search Input */}
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute right-0 rounded-r-lg flex justify-center bg-[#2E2E48] text-white p-2 ">
              <FaMagnifyingGlass className="h-6 w-14 " />
            </span>
          </div>
        </div><br />

        {
          loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="loader border-t-4 border-b-4 border-purple-700 w-10 h-10 rounded-full animate-spin"></div>
              </div>
          ) : (
            <table ref={tableRef} id="table" className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 border border-gray-300">
                <div className="flex justify-between items-center"><span>SL.</span><HiOutlineArrowsUpDown className="ml-2" /></div>
              </th>
              <th className="py-3 px-4 border border-gray-300">
                <div className="flex justify-between items-center"><span>Name</span><HiOutlineArrowsUpDown className="ml-2" /></div>
              </th>
              <th className="py-3 px-4 border border-gray-300">
                <div className="flex justify-between items-center"><span>Date</span><HiOutlineArrowsUpDown className="ml-2" /></div>
              </th>
              <th className="py-3 px-4 border border-gray-300">
                <div className="flex justify-between items-center"><span>Check In</span><HiOutlineArrowsUpDown className="ml-2" /></div>
              </th>
              <th className="py-3 px-4 border border-gray-300">
                <div className="flex justify-between items-center"><span>Check Out</span><HiOutlineArrowsUpDown className="ml-2" /></div>
              </th>
              <th className="py-3 px-4 border border-gray-300">
                <div className="flex justify-between items-center"><span>Stay Time</span><HiOutlineArrowsUpDown className="ml-2" /></div>
              </th>
              <th className="py-3 px-4 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border border-gray-300">{index + 1}</td>
                <td className="py-3 px-4 border border-gray-300">{item.employeeName}</td>
                <td className="py-3 px-4 border border-gray-300">{item.date}</td>
                <td className="py-3 px-4 border border-gray-300">{item.signIn}</td>
                <td className="py-3 px-4 border border-gray-300">{item.checkOut}</td>
                <td className="py-3 px-4 border border-gray-300">{item.status}</td>
                <td className="py-3 px-4 border border-gray-300">
                  <button className="text-blue-500 text-2xl"><FaEdit /></button>
                  <button className="text-red-500 text-2xl"><MdDeleteForever /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          )
        }

        {/* Pagination Controls */}
        <div className="flex justify-end mt-4 space-x-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1} 
            className="px-4 py-2 bg-white rounded-full border-[#746BD9] text-[#746BD9] border">
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index} 
              onClick={() => handlePageChange(index + 1)} 
              className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-[#746BD9]' : 'bg-white text-[#746BD9]'} rounded-full border bg-white border-[#746BD9]`}>
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            className="px-4 py-2 bg-white rounded-full border-[#746BD9] text-[#746BD9] border">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAttendance;
