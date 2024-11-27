import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";

// Sample JSON Data
const invoiceData = [
  {
    sl: 1,
    serviceBranch: "Online Service",
    invoiceNo: "125456",
    invoiceDate: "22-Aug-2024",
    invoiceType: "Service Invoice",
    customerName: "Customer Name",
    mobNo: "9775516122",
    serviceName: "Service Invoice",
    buyAmount:"00",
    invoiceAmount: "5000"
  },
  {
    sl: 2,
    serviceBranch: "Offline Service",
    invoiceNo: "125457",
    invoiceDate: "22-Aug-2024",
    invoiceType: "MATM Invoice",
    customerName: "Customer Name",
    mobNo: "9775516123",
    serviceName: "Service From Quotation",
    buyAmount:"00",
    invoiceAmount: "7000"
  },
  {
  sl: 3,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
{
  sl: 4,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
{
  sl: 5,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
{
  sl: 6,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
{
  sl: 7,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
{
  sl: 8,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
{
  sl: 9,
  serviceBranch: "Offline Service",
  invoiceNo: "125457",
  invoiceDate: "22-Aug-2024",
  invoiceType: "MATM Invoice",
  customerName: "Customer Name",
  mobNo: "9775516123",
  serviceName: "Service From Quotation",
  buyAmount:"00",
  invoiceAmount: "7000"
},
  // Add more data here if necessary
];

const ManageServiceInvoice = () => {
  return (
    <>
      <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
          Home  /  Service  /  Manage Service Invoice
        </span>
      </div>

      <div className="container mx-auto mt-10 p-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          {/* Title Div */}
          <div>
            <h1 className="text-2xl text-[#878484] font-semibold">Manage Service Invoice</h1>
          </div>

          {/* Date and Search Div */}
          <div className="flex items-center space-x-4">
            {/* From Date */}
            <div className="flex items-center">
              <span className="mr-2 text-[#595995]">From</span>
              <input
                type="date"
                className="border p-2 rounded"
                defaultValue="2024-08-22"
              />
            </div>

            {/* To Date */}
            <div className="flex items-center">
              <span className="mr-2 text-[#595995]">To</span>
              <input
                type="date"
                className="border p-2 rounded"
                defaultValue="2024-08-22"
              />
            </div>

            {/* Search Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              <IoIosSearch className='text-2xl' />Search
            </button>
          </div>
        </div>
        <hr className='mb-4' />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-100 text-[#595995]">
              <tr>
                <th className="p-4 border text-left font-semibold">SL.</th>
                <th className="p-4 border text-left font-semibold">Service Branch</th>
                <th className="p-4 border text-left font-semibold">Invoice No</th>
                <th className="p-4 border text-left font-semibold">Invoice Date</th>
                <th className="p-4 border text-left font-semibold">Invoice Type</th>
                <th className="p-4 border text-left font-semibold">Customer Name</th>
                <th className="p-4 border text-left font-semibold">Mob No</th>
                <th className="p-4 border text-left font-semibold">Service Name</th>
                <th className="p-4 border text-left font-semibold">Buy Amount</th>
                <th className="p-4 border text-left font-semibold">Invoice Amount</th>
                <th className="p-4 border text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 border">{invoice.sl}</td>
                  <td className="p-4 border">{invoice.serviceBranch}</td>
                  <td className="p-4 border">{invoice.invoiceNo}</td>
                  <td className="p-4 border">{invoice.invoiceDate}</td>
                  <td className="p-4 border">{invoice.invoiceType}</td>
                  <td className="p-4 border">{invoice.customerName}</td>
                  <td className="p-4 border">{invoice.mobNo}</td>
                  <td className="p-4 border">{invoice.serviceName}</td>
                  <td className="p-4 border">{invoice.buyAmount}</td>
                  <td className="p-4 border">{invoice.invoiceAmount}</td>
                  <td className="p-4 border flex space-x-2">
                    <button className="bg-green-500 text-white p-2 rounded">
                      <FaEdit />
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageServiceInvoice;
