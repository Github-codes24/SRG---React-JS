import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa";

const AddRole = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-end">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="text-base md:text-xl">
            Home / Setting / User Permission Settings / Add Role
          </span>
        </div>
        <br />
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center space-x-4">
            <h3 className="text-xl font-extralight">Add Role</h3>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex items-center mb-4 w-[900px]">
            <label
              htmlFor="employeeName"
              className="text-[#595995] font-medium w-60"
            >
              Role Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="employeeName"
              className="flex-1 px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 "
              placeholder="Role Name"
            />
          </div>
          <br />
          {/* {Return Invoice Details} */}
          <div className="flex space-x-4">
            <label
              htmlFor="employeeName"
              className="text-[#2E2E48] font-bold w-60 text-2xl"
            >
              Masters
            </label>
          </div>

          {/* {Talble} */}
          <div className="overflow-x-auto  rounded-lg">
            <table className="min-w-full bg-white border  border-gray-300 ">
              <thead>
                <tr className=" bg-[#2E2E48]">
                  <th className="py-2 px-4 border border-gray-300 text-center text-white  font-medium jus">
                    SL No.
                  </th>
                  <th className="py-2 px-4 border border-gray-300 text-center text-white font-medium">
                    Menu Name
                  </th>
                  <th className="py-2 px-4 border border-gray-300 text-center text-white font-medium">
                    Create(
                    <input type="checkbox" className="ml-1" /> All)
                  </th>

                  <th className="py-2 px-4 border border-gray-300 text-center text-white font-medium">
                    Role(
                    <input type="checkbox" className="ml-1" /> All)
                  </th>
                  <th className="py-2 px-4 border border-gray-300 text-center text-white font-medium">
                    Update(
                    <input type="checkbox" className="ml-1" /> All)
                  </th>
                  <th className="py-2 px-4 border border-gray-300 text-center text-white font-medium">
                    Delete(
                    <input type="checkbox" className="ml-1" /> All)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    1
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    Ledger
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    2
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    Ledger
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    3
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    Ledger
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    4
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    Ledger
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    5
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    Ledger
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    6
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-[#595995] text-center align-middle">
                    Ledger
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-700 text-center align-middle">
                    <input type="checkbox" className="ml-1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddRole;
