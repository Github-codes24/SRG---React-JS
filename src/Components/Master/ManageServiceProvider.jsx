import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineHome } from "react-icons/md";

const ManageServiceProvider = () => {
  const data = [
    { SL : 1, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    {SL : 2, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    { SL : 3, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    {SL : 4, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    { SL : 6, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 7, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 8, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 9, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 10, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 11, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 12, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 13, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 14, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 15, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 16, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    {SL : 17, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    { SL : 18, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    {SL : 19, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables',},
    { SL : 20, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 21, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 22, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 23, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 24, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 25, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 26, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 27, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 28, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 29, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 30, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 31, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 32, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 33, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 34, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 35, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 36, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 37, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
    { SL : 38, SelectAccountHead: '',ParentGroup:"Current Assets" , AccountHeads:'A/C Receivables', },
   
   
  ];

  return (
    <>
    <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Master  / Manage Service Provider
        </span>
      </div>
    <div className="container mx-auto p-4">

<div className="flex justify-between items-center mb-6">
        <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">Manage Service Provider</h2>
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
          Add Service Provider
        </button>
      </div>
<div>
</div>
<hr className='mb-5'/>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border text-[#595995] p-2 text-left">SL.</th>
            <th className="border text-[#595995] p-2 text-left">Select Account Head</th>
            <th className="border text-[#595995] p-2 text-left">Parent Group</th>
            <th className="border text-[#595995] p-2 text-left">Account Heads</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{item.SL}</td>
              <td className="border border-gray-300 p-2"><input type="checkbox" /></td>
              <td className="border border-gray-300 p-2">{item.ParentGroup}</td>
              <td className="border border-gray-300 p-2">{item.AccountHeads}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons flex items-center justify-center gap-4 mt-5">
            <button className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white" type="reset">Clear All</button>
            <button className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white" type="submit">Update</button>
          </div>
    </div>
    </>
  );
};

export default ManageServiceProvider;
