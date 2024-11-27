import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";

function ManagePerson() {
  return (
    <div>
      <>
        <div className="flex items-center justify-end">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="text-base md:text-xl">
            Home / HRM / Office Loan / Manage Person
          </span>
        </div>
        <br />
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center space-x-4">
            <h3 className="text-xl font-extralight">Manage Person</h3>
          </div>
          <br />
          <hr />
          <br />

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border text-[#595995]">Name</th>
                  <th className="py-2 px-4 border text-[#595995]">Address</th>
                  <th className="py-2 px-4 border text-[#595995]">Phone</th>
                  <th className="py-2 px-4 border text-[#595995]">Balance</th>
                  <th className="py-2 px-4 border text-[#595995]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border text-center align-middle">
                    John Doe
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    xyz
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    9637226397
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    Rs.0.00
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="bg-[#75A68F] text-white p-2 rounded-none">
                        <FaEdit />
                      </button>

                      <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border text-center align-middle">
                    Jane Smith
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    ad
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    1234567
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    Rs.0.00
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="bg-[#75A68F] text-white p-2 rounded-none">
                        <FaEdit />
                      </button>

                      <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border text-center align-middle">
                    Michael Brown
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    asdf
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    78956452
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    Rs0.00
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="bg-[#75A68F] text-white p-2 rounded-none">
                        <FaEdit />
                      </button>

                      <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border text-center align-middle">
                    Michael Brown
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    asdf
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    78956452
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    Rs0.00
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="bg-[#75A68F] text-white p-2 rounded-none">
                        <FaEdit />
                      </button>

                      <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Total Row */}
                <tr className="bg-white-100 font-normal">
                  <td
                    colSpan="3"
                    className="py-2 px-4 border text-[#595995] font-semibold text-end"
                  >
                    Total
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    Rs.0.00
                  </td>
                  <td className="py-2 px-4 border text-center align-middle">
                    <div className="flex justify-center items-center space-x-2">
                      <button className="bg-[#75A68F] text-white p-2 rounded-none">
                        <FaEdit />
                      </button>

                      <button className="bg-[#BF2D35] text-white p-2 rounded-none">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
}

export default ManagePerson;
