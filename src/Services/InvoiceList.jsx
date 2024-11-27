import React from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FiEye, FiPrinter } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";



const InvoiceList = () => {
  return (
    <>
    <div className="flex items-center justify-end mr-5">
        <MdOutlineHome className="text-3xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Service  /  Invoice List
        </span>
      </div>
    <div className="container mx-auto p-4 mt-6">
      {/* Date Range and Search */}
      <div className="flex justify-between items-center mb-6">
  {/* Title Div */}
  <div>
    <h1 className="text-2xl text-[#878484] font-semibold"> Invoice List - / Service / MATM</h1>
  </div>

  {/* Date and Search Div */}
  <div className="flex items-center space-x-4">
    {/* From Date */}
    <div className="flex items-center">
      <span className="mr-2 text-[#595995]">From</span>
      <input
        type="date"
        className="border p-2 rounded text-[#595995]"
        defaultValue="2024-08-22"
      />
    </div>

    {/* To Date */}
    <div className="flex items-center">
      <span className="mr-2 text-[#595995]">To</span>
      <input
        type="date"
        className="border p-2 rounded text-[#595995]"
        defaultValue="2024-08-22"
      />
    </div>

    {/* Search Button */}
    <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
    <IoIosSearch className='text-xl' />Search
    </button>
  </div>
</div>


      {/* Invoice List Heading */}
      <div className="flex justify-center">
  <button className="text-3xl font-semibold bg-black text-white py-2 px-4 rounded mb-5" >
    INVOICE LIST
  </button>
</div>




      {/* Subheading for List Show */}
      <div className="bg-[#6A6AA0] text-white text-center p-2 mb-6 rounded shadow-md">
        LIST SHOWS
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead className="bg-[#6A6AA0]">
            <tr>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">SL. No.</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Sales Invoice Date</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Invoice No</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Service Name</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Invoice Amount</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Customer Name</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Mob No</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Status</th>
              <th className="p-4 border text-left text-[#FFFFFF] font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-4 border">1</td>
              <td className="p-4 border">21-Sep-2024</td>
              <td className="p-4 border">S10001</td>
              <td className="p-4 border">INCOME CERTIFICATE</td>
              <td className="p-4 border">100</td>
              <td className="p-4 border">SANJAY</td>
              <td className="p-4 border">9874561230</td>
              <td className="p-4 border text-red-500 font-bold">OPEN</td>
              <td className="p-4 border flex space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded">
                  <PiDownloadSimpleBold />
                  </button>
                  <button className="bg-gray-400 text-white p-2 rounded">
                  <FiEye />
                  </button>
                  <button className="bg-green-400 text-white p-2 rounded">
                  <FiPrinter />
                  </button>
                  <button className="bg-gray-500 text-white p-2 rounded">
                  <FaWhatsapp className='bg-green-500'/>
                  </button>
                  <button className="bg-black text-white p-2 rounded">
                  <IoMdMail />
                  </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-4 border">2</td>
              <td className="p-4 border">22-Sep-2024</td>
              <td className="p-4 border">S10002</td>
              <td className="p-4 border">PASSPORT NEW</td>
              <td className="p-4 border">150</td>
              <td className="p-4 border">SURESH</td>
              <td className="p-4 border">8745996135</td>
              <td className="p-4 border text-green-500 font-bold">CLOSED</td>
              <td className="p-4 border flex space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded">
                  <PiDownloadSimpleBold />
                  </button>
                  <button className="bg-gray-400 text-white p-2 rounded">
                  <FiEye />
                  </button>
                  <button className="bg-green-400 text-white p-2 rounded">
                  <FiPrinter />
                  </button>
                  <button className="bg-gray-500 text-white p-2 rounded">
                  <FaWhatsapp className='bg-green-500'/>
                  </button>
                  <button className="bg-black text-white p-2 rounded">
                  <IoMdMail />
                  </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-4 border">3</td>
              <td className="p-4 border">22-Sep-2024</td>
              <td className="p-4 border">S10003</td>
              <td className="p-4 border">MATM SERVICE</td>
              <td className="p-4 border">500</td>
              <td className="p-4 border">MANJU</td>
              <td className="p-4 border">3448461222</td>
              <td className="p-4 border text-green-500 font-bold">CLOSED</td>
              <td className="p-4 border flex space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded">
                  <PiDownloadSimpleBold />
                  </button>
                  <button className="bg-gray-400 text-white p-2 rounded">
                  <FiEye />
                  </button>
                  <button className="bg-green-400 text-white p-2 rounded">
                  <FiPrinter />
                  </button>
                  <button className="bg-gray-500 text-white p-2 rounded">
                  <FaWhatsapp className='bg-green-500'/>
                  </button>
                  <button className="bg-black text-white p-2 rounded">
                  <IoMdMail />
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-3">
  <button className=" font-semibold bg-[#3A6D8C] text-white py-2 px-4 rounded">
    Submit
  </button>
</div>

      </div>
    </div>
    </>
  );
};

export default InvoiceList;
