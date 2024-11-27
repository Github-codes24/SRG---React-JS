import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineHome } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import * as XLSX from 'xlsx';
import html2pdf from 'html2pdf.js';
import BASE_URL from '../../api';


const ExpenseStatment = () => {

   //print method
  
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [expenseItem, setExpenseItem] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/expenses`);
        setExpenses(response.data);
        setFilteredExpenses(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter expenses based on inputs
  const handleFilter = () => {
    const filtered = expenses.filter(expense => {
      const matchesName = expenseItem
        ? expense.expenseType.toLowerCase().includes(expenseItem.toLowerCase())
        : true;
      const matchesStartDate = startDate ? new Date(expense.date) >= new Date(startDate) : true;
      const matchesEndDate = endDate ? new Date(expense.date) <= new Date(endDate) : true;

      return matchesName && matchesStartDate && matchesEndDate;
    });
    setFilteredExpenses(filtered);
  };

  

  // Handle print
  const handlePrint = () => {
    const printContent = document.getElementById('table-to-print').outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Expense Statement</title>
          <style>
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  

  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">Home / Expense / Manage Expense</span>
      </div>
      <div className='bg-white my-3 rounded-lg'>
        <form className='flex items-center justify-between p-3'>
          <div className='flex items-center justify-center gap-2'>
            <label className='text-[#595995] text-sm font-semibold'>Expense Item Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className='w-[50%] px-2 rounded-md border-[#D3D1D1] border'
              value={expenseItem}
              onChange={(e) => setExpenseItem(e.target.value)}
            />
          </div>
          <div className='flex items-center justify-center gap-2'>
            <label className='text-[#595995] text-sm font-semibold'>From Date</label>
            <input
              type="date"
              className='w-[70%] border-[#D3D1D1] border px-2 rounded-md'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className='flex items-center justify-center gap-2'>
            <label className='text-[#595995] text-sm font-semibold'>To Date</label>
            <input
              type="date"
              className='px-2 border-[#D3D1D1] border rounded-md'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className='flex items-center gap-x-2'>
            <button
              type="button"
              className='flex items-center justify-center p-1 rounded-lg bg-[#024CAA] text-white'
              onClick={handleFilter}
            >
              <CiSearch fontSize={"1.5rem"} />
              <p>Search</p>
            </button>
            <button
              type="button"
              className='flex items-center justify-center p-1 rounded-lg bg-[#FF6500] text-white'
              onClick={handlePrint}
            >
              <IoPrintOutline fontSize={"1.5rem"} />
              <p>Print</p>
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-md p-2">
        <p className='p-1 text-[#878484] text-2xl'>Expense Statement</p>
        <hr />
        <div className="overflow-x-auto" id="table-to-print">
          {isLoading ? (
            <p className="text-center py-4">Loading...</p>
          ) : (
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className='text-[#595995]'>
                  <th className="py-2 px-4 border-b border-gray-300 text-left border">Date</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left border">Voucher</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left border">Expense Item Name</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left border">Payment Type</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left border">Pay From</th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left border">Amount</th>
                </tr>
              </thead>
              <tbody>
  {filteredExpenses.map((expense, index) => {
    const formattedDate = new Date(expense.date).toLocaleDateString(); // Format date as MM/DD/YYYY
    return (
      <tr key={index} className='text-[#636465BD] font-normal border'>
        <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">{formattedDate}</td>
        <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">{expense.voucherNumber}</td>
        <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">{expense.expenseType}</td>
        <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">{expense.paymentType}</td>
        <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">{expense.payFrom || "NA"}</td>
        <td className="py-2 px-4 border-b border-gray-300 text-gray-600 border">{expense.amount}</td>
      </tr>
    );
  })}
</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatment;
