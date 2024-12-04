import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { PiSignOutBold } from "react-icons/pi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import BASE_URL from "../../../api";

const ManageAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);

  // API call to fetch attendance data
  useEffect(() => {
    const fetchAttendanceData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/attendance/getAttendances`);
        setAttendanceData(response.data);
        console.log(response.data) // Assuming response.data contains an array
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);
  
  return (
    <div>
      <>
        <div className="bg-white p-4">
          <div className="flex justify-between items-center space-x-4">
            <h3 className="text-xl font-extralight"></h3>
          </div>
          <br />
          <hr />
          <br />
          <div className="flex justify-between items-center">
            {/* Left Section: Show and Entries */}
            <div className="flex items-center space-x-2">
              <label htmlFor="show" className="text-gray-700 font-medium w-10">
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

              <label
                htmlFor="employeeName"
                className="text-gray-700 font-medium"
              >
                Entries
              </label>
            </div>

            {/* Center Section: Buttons */}
            <div className="flex justify-center flex-grow">
              <button
                type="button"
                className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
              >
                Copy
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
              >
                CSV
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
              >
                Excel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
              >
                PDF
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-purple-950 text-white rounded-lg m-2"
              >
                Print
              </button>
            </div>

            {/* Right Section: Search Input */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute right-2 bg-purple-950 text-white p-2 ">
                <FaMagnifyingGlass className="h-4 w-4" />
              </span>
            </div>
          </div>
          <br />

          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 border border-gray-300">
                  <div className="flex justify-between items-center">
                    <span>SL.</span>
                    <HiOutlineArrowsUpDown className="ml-2" />
                  </div>
                </th>
                <th className="py-3 px-4 border border-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Name</span>
                    <HiOutlineArrowsUpDown className="ml-2" />
                  </div>
                </th>
                <th className="py-3 px-4 border border-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Date</span>
                    <HiOutlineArrowsUpDown className="ml-2" />
                  </div>
                </th>
                <th className="py-3 px-4 border border-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Check In</span>
                    <HiOutlineArrowsUpDown className="ml-2" />
                  </div>
                </th>
                <th className="py-3 px-4 border border-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Check Out</span>
                    <HiOutlineArrowsUpDown className="ml-2" />
                  </div>
                </th>
                <th className="py-3 px-4 border border-gray-300 text-left">
                  Stay Time
                </th>

                <th className="py-3 px-4 border border-gray-300 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : attendanceData.length > 0 ? (
              attendanceData.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border text-center">{index + 1}</td>
                  <td className="py-2 px-4 border text-center">
                    {item.employeeName}
                  </td>
                  <td className="py-2 px-4 border text-center">{item.date}</td>
                  <td className="py-2 px-4 border text-center">
                    {item.checkIn}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {item.checkOut || (
                      <button className="bg-red-400 text-white px-4 py-2 rounded-md">
                        Sign Out
                      </button>
                    )}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    {item.stayTime || "-"}
                  </td>
                  <td className="py-2 px-4 border text-center">
                    <div className="flex space-x-2">
                      <button className="bg-green-500 text-white p-2 rounded">
                        <FaEdit />
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded">
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No data available
                </td>
              </tr>
            )}
            </tbody>
          </table>
          <br />
          <br />
         
          <div className="flex justify-end space-x-2">
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
              Previous
            </button>

            <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
              1
            </button>
            <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
              2
            </button>
            <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
              3
            </button>
            <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
              4
            </button>
            <button className="border-2 border-blue-500 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
              5
            </button>

            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full">
              Next
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default ManageAttendance;
