import React from 'react';
import { LiaLanguageSolid } from "react-icons/lia";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineHome } from 'react-icons/md';
const PhraseList = () => {
  return (
    <>
    <div className="p-6 max-w-full mx-auto">
        <div className="flex items-center justify-end py-2 mt-1">
          <MdOutlineHome className="text-xl text-[#3A6D8C]" />
          <span className=" ml-2">
          Home / Setting / Software Setting / Phrases List
          </span>
        </div>
        </div>
    <div className="min-h-screen flex flex-col items-center py-6">
        
      {/* Header */}
      <div className="bg-white shadow rounded-lg w-11/12 lg:w-full">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">Phrase List</h1>
          <button className="px-4 py-2 flex items-center bg-[#746BD9] text-white text-sm font-medium rounded-md hover:bg-indigo-500">
  <LiaLanguageSolid className="mr-2 text-2xl" />
  Language List
</button>

        </div>
        {/* Form */}
        <div className="p-4 flex items-center space-x-2 border-b border-gray-200">
          <input
            type="text"
            placeholder="Language Name"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button className="px-4 py-2 bg-[#3A6D8C] text-white text-sm font-medium rounded-md hover:bg-blue-500">
            Save
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border border-gray-300"><TfiMenuAlt /></th>
                <th className="px-4 py-2 border border-gray-300">Phrase</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, phrase: '1' },
                { id: 2, phrase: '1' },
                { id: 3, phrase: '10' },
                { id: 4, phrase: '100' },
                { id: 5, phrase: '1000' },
                { id: 6, phrase: '2' },
                { id: 7, phrase: '20' },
                { id: 8, phrase: '5' },
                { id: 9, phrase: '50' },
                { id: 10, phrase: '500' },
                { id: 11, phrase: 'Account' },
                { id: 12, phrase: 'Accounts' },
                { id: 13, phrase: 'account_name' },
                { id: 14, phrase: 'account_summary' },
                { id: 15, phrase: 'account_tree_view' },
                { id: 16, phrase: 'account_tree_view' },
                { id: 17, phrase: 'account_already_exist' },
                { id: 18, phrase: 'account_closing_report' },
                { id: 19, phrase: 'account_code' },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-2 border border-gray-300">{row.id}</td>
                  <td className="px-4 py-2 border border-gray-300">
                    {row.phrase}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default PhraseList;
