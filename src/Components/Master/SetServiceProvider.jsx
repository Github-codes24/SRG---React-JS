import React from "react";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";

const SetServiceProvider = () => {
  const data = [
    {
      SL: 1,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 2,
      SelectAccountHead: "",
      ParentGroup: "Current Liabilities",
      AccountHeads: "A/C Payables",
    },
    {
      SL: 3,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "Bank Accounts",
    },
    {
      SL: 4,
      SelectAccountHead: "",
      ParentGroup: "Loan [Liabilities]",
      AccountHeads: "Bank OCC Accounts",
    },
    {
      SL: 6,
      SelectAccountHead: "",
      ParentGroup: "Loan [Liabilities]",
      AccountHeads: "Bank OD Accounts",
    },
    {
      SL: 7,
      SelectAccountHead: "",
      ParentGroup: "Assets",
      AccountHeads: "Branches",
    },
    {
      SL: 8,
      SelectAccountHead: "",
      ParentGroup: "Liabilities",
      AccountHeads: "Capital Amount",
    },
    {
      SL: 9,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "Cash In Hands",
    },
    {
      SL: 10,
      SelectAccountHead: "",
      ParentGroup: "Assets",
      AccountHeads: "Current Assets",
    },
    {
      SL: 11,
      SelectAccountHead: "",
      ParentGroup: "Liabilities",
      AccountHeads: "Current Liabilities",
    },
    {
      SL: 12,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "Deposits [Assets]",
    },
    {
      SL: 13,
      SelectAccountHead: "",
      ParentGroup: "Indirect Expense",
      AccountHeads: "Depreciation",
    },
    {
      SL: 14,
      SelectAccountHead: "",
      ParentGroup: "Income",
      AccountHeads: "Direct Income",
    },
    {
      SL: 15,
      SelectAccountHead: "",
      ParentGroup: "Expense",
      AccountHeads: "Direct Expense",
    },
    {
      SL: 16,
      SelectAccountHead: "",
      ParentGroup: "Current Liabilities",
      AccountHeads: "Employees",
    },
    {
      SL: 17,
      SelectAccountHead: "",
      ParentGroup: "Assets",
      AccountHeads: "Fixed Assets",
    },
    {
      SL: 18,
      SelectAccountHead: "",
      ParentGroup: "Indirect Income",
      AccountHeads: "Income",
    },
    {
      SL: 19,
      SelectAccountHead: "",
      ParentGroup: "Expense",
      AccountHeads: "Indirect Expense",
    },
    {
      SL: 20,
      SelectAccountHead: "",
      ParentGroup: "Assets",
      AccountHeads: "Investments",
    },
    {
      SL: 21,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "Loans & Advance [Assets]",
    },
    {
      SL: 22,
      SelectAccountHead: "",
      ParentGroup: "Liabilities",
      AccountHeads: "Loans [Liabilities]",
    },
    {
      SL: 23,
      SelectAccountHead: "",
      ParentGroup: "Assets",
      AccountHeads: "MISC Expense [Assets]",
    },
    {
      SL: 24,
      SelectAccountHead: "",
      ParentGroup: "Deposits [Assets]",
      AccountHeads: "Wallets",
    },
    {
      SL: 25,
      SelectAccountHead: "",
      ParentGroup: "Current Liabilities",
      AccountHeads: "Provisions",
    },
    {
      SL: 26,
      SelectAccountHead: "",
      ParentGroup: "Expense",
      AccountHeads: "Purchase Account",
    },
    {
      SL: 27,
      SelectAccountHead: "",
      ParentGroup: "Capital Account",
      AccountHeads: "Reserve & Surplus",
    },
    {
      SL: 28,
      SelectAccountHead: "",
      ParentGroup: "Capital Account",
      AccountHeads: "Retained Earnings",
    },
    {
      SL: 29,
      SelectAccountHead: "",
      ParentGroup: "Income",
      AccountHeads: "Sales Account",
    },
    {
      SL: 30,
      SelectAccountHead: "",
      ParentGroup: "Icome",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 31,
      SelectAccountHead: "",
      ParentGroup: "Account Payable",
      AccountHeads: "Service Providers",
    },
    {
      SL: 32,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 33,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 34,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 35,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 36,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
    {
      SL: 37,
      SelectAccountHead: "",
      ParentGroup: "Current Assets",
      AccountHeads: "A/C Receivables",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home / Master / Set Service Provider
        </span>
      </div>
      <div className="container mx-auto  bg-white py-4">
        <div className="flex justify-between items-center p-4 placeholder: mb-6">
          <h2 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
            Set Service Provider
          </h2>
          <button className="flex items-center bg-[#746BD9] text-white py-2 px-4 rounded">
            <MdMiscellaneousServices className="mr-2 h-6 w-6" />
            Manage Service
          </button>
        </div>
        <div></div>
        <hr className="mb-5" />
        <div className=" overflow-x-auto p-4">

        <table className="w-full border-collapse border  border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border text-[#595995] p-2 text-left">SL.</th>
              <th className="border text-[#595995] p-2 text-left">
                Select Account Head
              </th>
              <th className="border text-[#595995] p-2 text-left">
                Parent Group
              </th>
              <th className="border text-[#595995] p-2 text-left">
                Account Heads
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-2">{item.SL}</td>
                <td className="border border-gray-300 p-2">
                  <input type="checkbox" />
                </td>
                <td className="border border-gray-300 p-2">
                  {item.ParentGroup}
                </td>
                <td className="border border-gray-300 p-2">
                  {item.AccountHeads}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className="buttons flex items-center justify-center gap-4 mt-5">
          <button
            className="px-6 py-1 bg-[#3A6D8C] rounded-md text-white"
            type="reset"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default SetServiceProvider;
