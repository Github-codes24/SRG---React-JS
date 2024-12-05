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
                    <td className="border p-2 text-lg">{index + 1}</td>
                    <td className="border p-2 text-lg">
                      {employee.firstName + " " + employee.lastName || "NA"}
                    </td>
                    <td className="border p-2 text-lg">{employee.designation || "NA"}</td>
                    <td className="border p-2 text-lg">{employee.mobileNumber || "NA"}</td>
                    <td className="border p-2 text-lg">{employee.email || "NA"}</td>
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
