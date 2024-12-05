import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoHomeOutline } from "react-icons/io5";
import Avatar1 from "../../../assets/HRM/avatar.png";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import BASE_URL from "../../../api";

export default function ManageEmployee() {
  const [manageEmployee, setManageEmployee] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [updatedEmployeeDesignation, setUpdatedEmployeeDesignation] = useState("");
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
        await axios.delete(`${BASE_URL}/api/employee/deleteEmployee/${id}`);
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
    setUpdatedEmployeeDesignation(employee.designation || "");
    setIsModalOpen(true);
  };

  // Update API Call
  const handleUpdate = async () => {
    if (!updatedEmployeeDesignation.trim()) {
      alert("Designation cannot be empty.");
      return;
    }
    try {
      const response = await axios.put(
        `${BASE_URL}/api/employee/updateEmployee/${currentEmployee.id}`,
        {
          manageEmployee: updatedEmployeeDesignation,
        }
      );
      setManageEmployee((prev) =>
        prev.map((employee) =>
          employee.id === currentEmployee.id
            ? { ...employee, designation: updatedEmployeeDesignation }
            : employee
        )
      );
      alert("Employee updated successfully.");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee. Please try again.");
    }
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

        {/* Table */}
        <div className="relative overflow-x-scroll">
          <table className="border-collapse border-2 w-full text-center">
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
  {manageEmployee.length > 0 ? (
    manageEmployee.map((employee, index) => (
      <tr key={employee.id} className="border">
        <td className="border p-2">{index + 1}</td>
        <td className="border p-2">{employee.name || "NA"}</td>
        <td className="border p-2">{employee.designation || "NA"}</td>
        <td className="border p-2">{employee.phone || "NA"}</td>
        <td className="border p-2">{employee.email || "NA"}</td>
        <td className="border p-2">
          <img
            src={employee.picture || Avatar1}
            alt="Avatar"
            className="h-12 w-12 mx-auto"
          />
        </td>
        <td className="border p-2 flex justify-center gap-2">
          <BsPencil
            className="text-green-600 cursor-pointer"
            onClick={() => handleEdit(employee)}
          />
          <FaRegTrashAlt
            className="text-red-600 cursor-pointer"
            onClick={() => handleDelete(employee.id)}
          />
          <IoPerson className="text-blue-600" />
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" className="text-center font-semibold text-xl">
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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h3 className="text-xl mb-4">Edit Employee</h3>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={updatedEmployeeDesignation}
              onChange={(e) => setUpdatedEmployeeDesignation(e.target.value)}
            />
            <button
              className="bg-green-600 text-white px-4 py-2 mr-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
