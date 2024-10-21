import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Websitelist = () => {
  const data = [
    { id: 1, name: 'Facebook' ,  link : 'facebook.com' },
    { id: 2, name: 'E District Keral',link : 'https://eDistrict.Keral.gov.in/' },
    { id: 3, name: 'google' , link : 'https://www.google.co.in/'},
  ];

  return (
    <div className="max-w-full mx-auto mt-10 p-6 shadow-md rounded-md bg-[#FFFFFF]">
<div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">Website Ledger</h2>
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
          Add WebSite Link
        </button>
      </div>
      <hr />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border text-[#746BD9] p-2 text-left">SL.</th>
            <th className="border text-[#746BD9] p-2 text-left">Website Name</th>
            <th className="border text-[#746BD9] p-2 text-left">Website Link</th>
            <th className="border text-[#746BD9] p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.link}</td>

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
      <div className="flex justify-center items-center space-x-2 mt-7 float-right">
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

export default Websitelist;
