import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";

const PaidCustomer = () => {
  const data = [
    {
      id: 1,
      customerName: "Anand Shah",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 2,
      customerName: "Aditya Shinde",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 3,
      customerName: "Amit Deshpande",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 4,
      customerName: "Madhur Peshkar",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 5,
      customerName: "Aniruddh Harde",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 6,
      customerName: "Gitanjali patil ",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 7,
      customerName: "Supiya Sule",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 8,
      customerName: "Amar deep ",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 9,
      customerName: "Ajit Wahane ",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: 10,
      customerName: "Supiya Sindhe",
      mobileNo: "99873476372",
      email: "Anand@gmail.com",
      address: "Villa no 00 near cornich each Opposite Lulu mall Qatar",
      location: "Plot no 88 airport road wardhaman nagar",
      balance: "100.00",
    },
    {
      id: "",
      customerName: "",
      mobileNo: "",
      email: "",
      address: "",
      location: "Total",
      balance: "10000",
    },
  ];

  return (
    <>
    <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]"  />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Customer  / Paid Customer
        </span>
      </div>
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
        Paid Customer
        </h2>
      </div>
      <div>
      <hr/>
        <div className="bg-white p-4 rounded-lg justify-between mt-10 flex items-center space-x-4">
          {/* Name Input */}
          <div className="flex gap-3 text-[#636465]">
            <h4>Show</h4>

            {/* Dropdown Menu */}
            <select className="border border-gray-300 rounded focus:outline-none focus:ring-2 ">
              <option value="Option 1"> 10</option>
              <option value="Option 2"> 2</option>
              <option value="Option 3"> 3</option>
            </select>
            <h4>Entries</h4>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 text-[#FFFFFF]">
            <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
              Copy
            </button>
            <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
              CSV
            </button>
            <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
              Excel
            </button>
            <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
              PDF
            </button>
            <button className="bg-zinc-800 text-white px-4 py-2 rounded ">
              Print
            </button>
          </div>

          {/* Search Box */}
          <div className="relative ml-auto">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-l px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <div className="absolute right-0 top-0 h-full w-10 bg-black flex items-center justify-center rounded-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse border border-gray-300 text-[#8B8C8D]">
        <thead>
          <tr className="bg-gray-100">
            <th className="border text-[#595995] p-2 text-left">Cus ID</th>
            <th className="border text-[#595995] p-2 text-left">
              Customer Name
            </th>
            <th className="border text-[#595995] p-2 text-left">Mobile No</th>
            <th className="border text-[#595995] p-2 text-left">Address</th>
            <th className="border text-[#595995] p-2 text-left">Location</th>
            <th className="border text-[#595995] p-2 text-left">Balance</th>
            <th className="border text-[#595995] p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">
                {item.customerName}
              </td>
              <td className="border border-gray-300 p-2">{item.mobileNo}</td>
              <td className="border border-gray-300 p-2">{item.address}</td>
              <td className="border border-gray-300 p-2">{item.location}</td>
              <td className="border border-gray-300 p-2">{item.balance}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex gap-2">
                  <button className="text-green-600 hover:text-green-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between  space-x-2 mt-10">
        <div>
            <h2 className="text-[#8B8C8D]">Showing 1 to 10 of 20 entries</h2>
        </div>
        <div className="text-[#746BD9] ">
  <button className="px-2 py-1 border rounded-full border-[#9E95FF] mx-2">
    Previous
  </button>

  <button className="w-8 h-8 border rounded-full border-[#9E95FF] mx-2">
    1
  </button>
  <button className="w-8 h-8 border rounded-full border-[#9E95FF] mx-2">
    2
  </button>
  <button className="w-8 h-8 border rounded-full border-[#9E95FF] mx-2">
    3
  </button>
  <button className="w-8 h-8 border rounded-full border-[#9E95FF] mx-2">
    4
  </button>
  <button className="w-8 h-8 border rounded-full border-[#9E95FF] mx-2">
    5
  </button>

  <button className="px-2 py-1 border rounded-full border-[#9E95FF] mx-2">
    Next
  </button>
</div>
      </div>
    </div>
    </>
  );
};

export default PaidCustomer;
