import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageServiceCategory = () => {
  const data = [
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
   
  ];

  return (
    <div className="container mx-auto p-4">

<div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">Manage Service Category</h2>
        <button
          className="flex items-center bg-[#786fdc] text-white py-2 px-4 rounded "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm7 0a1 1 0 00-1 1v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Service Category
        </button>
      </div>
<div>

    <div className="bg-white p-4 rounded-lg justify-between mt-10 flex items-center space-x-4">
      {/* Name Input */}
      <div className='flex gap-3'>
      <h4>Show</h4>

{/* Dropdown Menu */}
<select className="border border-gray-300 rounded  focus:outline-none focus:ring-2 ">
  <option value="Option 1"> 10</option>
  <option value="Option 2"> 2</option>
  <option value="Option 3"> 3</option>
</select>
<h4>Entries</h4>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button className="bg-zinc-800 text-white px-4 py-2 rounded ">Copy</button>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded ">CSV</button>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded ">Excel</button>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded ">PDF</button>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded ">Print</button>
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


      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border text-[#595995] p-2 text-left">SL.</th>
            <th className="border text-[#595995] p-2 text-left">Account Head</th>
            <th className="border text-[#595995] p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
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
      <div className="flex justify-center items-center space-x-2 mt-10 float-right">
        <button className="px-2 py-1 border rounded-full border-[#9E95FF]">Previous</button>

        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">1</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">2</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">3</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">4</button>
        <button className="w-8 h-8 border rounded-full border-[#9E95FF]">5</button>

        <button className="px-2 py-1 border rounded-full border-[#9E95FF]">Next</button>
      </div>
    </div>
  );
};

export default ManageServiceCategory;
