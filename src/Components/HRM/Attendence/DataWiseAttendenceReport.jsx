import React, { useState, useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import axios from "axios";
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';

const DateWiseAttendanceReport = () => {
  const tableRef = useRef();

  // CSV Export Functionality
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
      link.setAttribute("download", "Date_Wise_Attendance_Report.csv"); // Updated filename for CSV
      link.style.visibility = "hidden"; // Hide the link
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link after the download
    }
  };

  // Excel Export Functionality
  const exportToExcel = () => {
    const table = tableRef.current;

    // Create a workbook and add a worksheet
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

    // Write the workbook to an Excel file and trigger the download
    XLSX.writeFile(wb, "Date_Wise_Attendance_Report.xlsx");
  };

  // Copy Table to Clipboard Functionality
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

  // PDF Download Functionality
  const handleDownloadPDF = () => {
    // Get the HTML content of the table
    const element = tableRef.current;

    // Options for html2pdf
    const options = {
      filename: 'Date_Wise_Attendance_Report.pdf', // Name of the output PDF file
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Higher scale for better quality
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // PDF paper size and orientation
    };

    // Convert the table to PDF
    html2pdf().from(element).set(options).save();
  };

  // Print Table Functionality
  const handlePrint = () => {
    const printContent = tableRef.current.outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Attendance Report</title>
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

  // Dummy data (replace with your data fetching logic)
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "John Doe", date: "2024-12-01", checkIn: "09:00 AM", checkOut: "06:00 PM", stayTime: "9:00 Hrs" },
    { id: 2, name: "Jane Smith", date: "2024-12-02", checkIn: "08:30 AM", checkOut: "05:30 PM", stayTime: "9:00 Hrs" },
    // More data here
  ]);

  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base text-[#5C5858] md:text-xl">
          Home / HRM / Attendance / Date Wise Attendance Report
        </span>
      </div>

      <div className="w-full h-[332px] rounded-xl bg-white">
        <h1 className="text-[#878484] border-b text-3xl p-2 tracking-tight">
          Date Wise Attendance Report
        </h1>
        <div className="flex justify-center pr-2 items-center">
          <div className="flex items-center m-6 space-x-2">
            <label htmlFor="show" className="text-[#636465] font-medium w-10">
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

            <label htmlFor="employeeName" className="text-[#636465] font-medium">
              Entries
            </label>
          </div>

          <div className="flex justify-center flex-grow">
            <button
              type="button"
              onClick={copyTableToClipboard}
              className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2"
            >
              Copy
            </button>
            <button
              type="button"
              onClick={exportToCSV}
              className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2"
            >
              CSV
            </button>
            <button
              type="button"
              onClick={exportToExcel}
              className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2"
            >
              Excel
            </button>
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2"
            >
              PDF
            </button>
            <button
              onClick={handlePrint}
              type="button"
              className="px-4 py-2 bg-[#2E2E48] text-white rounded-lg m-2"
            >
              Print
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="absolute rounded-r-lg right-0 w-14 flex justify-center bg-[#2E2E48] text-white p-3">
              <FaMagnifyingGlass className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Table Section */}
        <div className="flex justify-center m-2">
          <table ref={tableRef} className="w-full">
            <thead className="h-10">
              <tr className="border">
                <td className="text-[#595996] pl-4 border-2 font-medium p-2">Sl.</td>
                <td className="text-[#595996] pl-4 border-2 font-medium p-2">Name</td>
                <td className="text-[#595996] pl-4 border-2 font-medium p-2">Date</td>
                <td className="text-[#595996] pl-4 border-2 font-medium p-2">Check In</td>
                <td className="text-[#595996] pl-4 border-2 font-medium p-2">Check Out</td>
                <td className="text-[#595996] pl-4 border-2 font-medium p-2">Stay Time</td>
              </tr>
            </thead>
            <tbody>
              {attendanceData.length > 0 ? (
                attendanceData.map((item, index) => (
                  <tr key={item.id}>
                    <td className="pl-4 border">{index + 1}</td>
                    <td className="pl-4 border">{item.name}</td>
                    <td className="pl-4 border">{item.date}</td>
                    <td className="pl-4 border">{item.checkIn}</td>
                    <td className="pl-4 border">{item.checkOut}</td>
                    <td className="pl-4 border">{item.stayTime}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center bg-gray-100 h-10 border" colSpan={6}>
                    No attendance records available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DateWiseAttendanceReport;
