import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import axios from "axios";
import BASE_URL from "../../../api";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable"; // For creating tables in the PDF

export default function ManageDesignation() {
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState(null);

  // State for form input in the modal
  const [updatedDesignation, setUpdatedDesignation] = useState("");

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/hrm/designation/getDesignation`
        );
        setDesignations(response.data.data.designations);
        console.log(response.data.data.designations); // Assuming API returns a list of designations
      } catch (error) {
        console.error("Error fetching designations:", error);
      }
    };
    fetchDesignations();
  });

  // Handle Copy Button
  const handleCopy = () => {
    const dataToCopy = designations
      .map((designation, index) => `${index + 1}. ${designation.designation}`)
      .join("\n"); // Prepare data to copy as a newline-separated string
    navigator.clipboard
      .writeText(dataToCopy)
      .then(() => {
        alert("Designations copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
        alert("Failed to copy. Please try again.");
      });
  };
  const handleExportToExcel = () => {
    if (designations.length === 0) {
      alert("No data to export.");
      return;
    }

    // Create a worksheet from the data
    const ws = XLSX.utils.json_to_sheet(
      designations.map((designation, index) => ({
        "SL No": index + 1,
        Designation: designation.designation,
      }))
    );

    // Create a new workbook and append the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Designations");

    // Write the workbook and trigger download
    XLSX.writeFile(wb, "Designations.xlsx");
  };

  const handleExportToPDF = () => {
    if (designations.length === 0) {
      alert("No data to export.");
      return;
    }

    // Initialize a new PDF document
    const doc = new jsPDF();

    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text("Designations List", 14, 15);

    // Prepare data for the table
    const tableData = designations.map((designation, index) => [
      index + 1, // SL No
      designation.designation,
    ]);

    // Add a table to the PDF
    doc.autoTable({
      head: [["SL No", "Designation"]],
      body: tableData,
      startY: 20,
    });

    // Save the PDF
    doc.save("Designations.pdf");
  };

  //print method
 const handlePrint = () => {
  const printContent = document.getElementById("table");

  if (printContent) {
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Expense Statement</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>${printContent.outerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => printWindow.print();
  } else {
    console.error("Table with ID 'table' not found.");
  }
};


  // Delete API Call
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this designation?")) {
      try {
        await axios.put(
          `${BASE_URL}/api/hrm/designation/deleteDesignation/${id}`
        );
        // Update state after successful deletion
        setDesignations((prev) =>
          prev.filter((designation) => designation.id !== id)
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
                onClick={handleCopy}
                className="bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]"
              >
                Copy
              </button>

              <button className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                CVG
              </button>

              <button
                className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]"
                type="button"
                onClick={handleExportToExcel}
              >
                Excel
              </button>
              <button
                className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]"
                type="button"
                onClick={handleExportToPDF}
              >
                PDF
              </button>
              <button
                className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]"
                onClick={handlePrint}
                type="button"
              >
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
          <div className="w-full p-[10px] ">
            <table  id="table" className="border-collapse border-slate-400 border-2 w-full h-full font-bodyPop text-left">
              <thead>
                <tr className="  text-[#595995]  font-medium  h-[60px]">
                  <th className="border border-slate-300 ...">
                    <div className="flex justify-between">
                      SL.
                      <LuArrowUpDown className="w-auto h-[18px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ...">
                    <div className="flex justify-between">
                      Designation
                      <LuArrowUpDown className="w-auto h-[18px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ...">
                    <div className="flex justify-between">
                      Action
                      <LuArrowUpDown className="w-auto h-[18px]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {designations.map((designation, index) => (
                  <tr key={index} className="hover:bg-[#F2F2F2] h-[50px]">
                    <td className="border border-slate-300 ...">{index + 1}</td>
                    <td className="border border-slate-300 ...">
                      {designation.designation}
                    </td>
                    <td className="border border-slate-300 ...">
                      <div className="flex justify-center">
                        <button className="mr-3 text-[#636465]">
                          <BsPencil onClick={() => handleEdit(designation)} />
                        </button>
                        <button className="mr-3 text-[#636465]">
                          <FaRegTrashAlt
                            onClick={() => handleDelete(designation._id)}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
