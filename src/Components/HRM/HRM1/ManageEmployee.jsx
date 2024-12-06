import React, { useEffect, useState ,useRef } from "react";
import axios from "axios";
import { IoHomeOutline } from "react-icons/io5";
import Avatar1 from "../../../assets/HRM/avatar.png";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';

import BASE_URL from "../../../api";

export default function ManageEmployee() {
  const [manageEmployee, setManageEmployee] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [entriesToShow, setEntriesToShow] = useState(30); // Number of entries to display
  const [currentPageData, setCurrentPageData] = useState([]); // Data to display

  const tableRef = useRef();
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({
    name: "",
    designation: "",
    phone: "",
    email: "",
    picture: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/employee/getAllEmployee`);
        setManageEmployee(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  // Delete API Call
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.put(`${BASE_URL}/api/employee/deleteEmployee/${id}`);
        setManageEmployee((prev) => prev.filter((employee) => employee.id !== id));
        alert("Employee deleted successfully.");
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("Failed to delete employee. Please try again.");
      }
    }
  };

  // Open Modal and Set Current Employee
  const handleEdit = (employee) => {
    setCurrentEmployee(employee);
    setUpdatedEmployeeData({
      name: `${employee.firstName} ${employee.lastName}`,
      designation: employee.designation || "",
      phone: employee.mobileNumber || "",
      email: employee.email || "",
      picture: employee.picture || Avatar1,
    });
    setIsModalOpen(true);
  };

  // Update API Call
  const handleUpdate = async () => {
    if (!updatedEmployeeData.designation.trim()) {
      alert("Designation cannot be empty.");
      return;
    }

    const formData = new FormData();
    formData.append("name", updatedEmployeeData.name);
    formData.append("designation", updatedEmployeeData.designation);
    formData.append("phone", updatedEmployeeData.phone);
    formData.append("email", updatedEmployeeData.email);
    if (updatedEmployeeData.picture !== Avatar1) {
      formData.append("picture", updatedEmployeeData.picture);
    }

    try {
      await axios.put(
        `${BASE_URL}/api/employee/updateEmployee/${currentEmployee._id}`,
        formData
      );

      // Update the employee in the state
      setManageEmployee((prev) =>
        prev.map((employee) =>
          employee.id === currentEmployee.id
            ? {
                ...employee,
                firstName: updatedEmployeeData.name.split(" ")[0],
                lastName: updatedEmployeeData.name.split(" ")[1],
                designation: updatedEmployeeData.designation,
                mobileNumber: updatedEmployeeData.phone,
                email: updatedEmployeeData.email,
                picture: updatedEmployeeData.picture !== Avatar1
                  ? URL.createObjectURL(updatedEmployeeData.picture)
                  : employee.picture,
              }
            : employee
        )
      );

      alert("Employee updated successfully.");
      setIsModalOpen(false);
      setCurrentEmployee(null);
      setUpdatedEmployeeData({
        name: "",
        designation: "",
        phone: "",
        email: "",
        picture: null,
      });
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee. Please try again.");
    }
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

  // Update the data to show based on the selected entries
  useEffect(() => {
    setCurrentPageData(manageEmployee.slice(0, entriesToShow));
  }, [manageEmployee, entriesToShow]);

  const handleEntriesChange = (e) => {
    setEntriesToShow(Number(e.target.value));
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full flex justify-end items-center mb-4 tracking-wide text-lg pr-4">
        <IoHomeOutline className="w-6 h-6 text-blue-700" />
        <a href="">Home/</a>
        <a href="">HRM/</a>
        <a href="">Manage Employee</a>
      </div>

      {/* Main Content */}
      <div className="rounded-lg bg-white p-4">
        <h3 className="text-2xl text-gray-600 mb-4">Manage Employee</h3>
        <div className="w-full p-[10px] flex justify-between flex-wrap items-center">
            <div className="flex">
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] mr-[5px] text-[#636465] font-bodyPop">
                Show
              </p>
              <select
              id="entries"
              value={entriesToShow}
              onChange={handleEntriesChange}
              className="border-gray-400 border-[1px] rounded-[5px] dark:placeholder-gray-400 bg-white px-[12px] p-[5px] text-black xl:h-[34px] sm:h-[27px] mr-[5px]"
            >
              
              <option value={10} className="text-gray-500">
                10
              </option>
              <option value={15} className="text-gray-500">
                15
              </option>
              <option value={20} className="text-gray-500">
                20
              </option>
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
        {/* Table */}
        <div className="relative overflow-x-scroll">
          <table className="border-collapse border-2 w-full text-center" id="table" ref={tableRef}>
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-xl">SL.</th>
                <th className="border p-2 text-xl">Name</th>
                <th className="border p-2 text-xl">Designation</th>
                <th className="border p-2 text-xl">Phone</th>
                <th className="border p-2 text-xl">Email</th>
                <th className="border p-2 text-xl">Picture</th>
                <th className="border p-2 text-xl">Action</th>
              </tr>
            </thead>
            <tbody>
            {currentPageData.length > 0 ? (
                currentPageData.map((employee, index) => (
                  <tr key={employee.id} className="border">
                    <td className="border p-2 text-lg">{index + 1}</td>
                    <td className="border p-2 text-lg">
                      {employee.firstName + " " + employee.lastName || "NA"}
                    </td>
                    <td className="border p-2 text-lg">
                      {employee.designation || "NA"}
                    </td>
                    <td className="border p-2 text-lg">
                      {employee.mobileNumber || "NA"}
                    </td>
                    <td className="border p-2 text-lg">
                      {employee.email || "NA"}
                    </td>
                    <td className="border p-2 text-lg">
                      <img
                        src={employee.picture || Avatar1}
                        alt="Avatar"
                        className="h-12 w-12 mx-auto"
                      />
                    </td>
                    <td className="border p-2 flex justify-center gap-2">
            
                      <button className="bg-[#75a68f] px-2 py-2 text-white cursor-pointer" onClick={() => handleEdit(employee)} >
                        
                      <BsPencil
                      />
                      </button>
                     <button  className="text-white cursor-pointer px-2 py-2 bg-red-400" onClick={() => handleDelete(employee._id)}>
                     <FaRegTrashAlt />
                     </button>
                     
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center font-semibold text-xl"
                  >
                    No data to show
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Modal for Editing */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Edit Employee</h3>
            <label>Name:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              value={updatedEmployeeData.name}
              onChange={(e) =>
                setUpdatedEmployeeData({ ...updatedEmployeeData, name: e.target.value })
              }
            />
            
            <label>Phone:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              value={updatedEmployeeData.phone}
              onChange={(e) =>
                setUpdatedEmployeeData({ ...updatedEmployeeData, phone: e.target.value })
              }
            />
            <label>Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              value={updatedEmployeeData.email}
              onChange={(e) =>
                setUpdatedEmployeeData({ ...updatedEmployeeData, email: e.target.value })
              }
            />
            <label>Picture:</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              onChange={(e) =>
                setUpdatedEmployeeData({ ...updatedEmployeeData, picture: e.target.files[0] })
              }
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-500 text-white rounded-lg"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
