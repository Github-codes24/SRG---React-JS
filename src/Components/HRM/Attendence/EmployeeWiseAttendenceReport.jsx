import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { IoPrintOutline } from "react-icons/io5";
// import pngwing from '../Attendence/pngwing.png'


const EmployeeWiseAttendanceReport = () => {
      // Handle print
  const handlePrint = () => {
    const printContent = document.getElementById("table-to-print").outerHTML;
    const newWindow = window.open("", "_blank");
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
        <span className="text-base text-[#5C5858] md:text-md">
        Home / HRM / Attendance / Employee Wise Attendance Report
        </span>
      </div>
      
      <div className='flex justify-center m-4'>
        
      <div className='w-full h-[747px] bg-white rounded-[8px]'>
        <div className='border-b-2 flex justify-between items-center'>
      <h3 className="text-2xl  pb-2   text-[#878484] font-semibold px-2 pt-4">Employee Wise Attendance Report</h3>
      <button
              type="button"
              className="flex mr-4 w-[77px] h-[35px] items-center justify-center  rounded-lg bg-[#FF6500] text-white"
              onClick={handlePrint}
            >
              <IoPrintOutline fontSize={"1.5rem"} />
              <p>Print</p>
            </button>
      </div>
      <div className='flex justify-center p-4'>
      <div className='w-full rounded-xl flex justify-between items-center p-12 h-[319px] bg-gradient-to-b from-[#d7f2df] to-[#bdd3e3]'>
      <div>
        <img src="" alt="Image" />
      </div>
      <div className='pr-40 flex-col space-y-2'>
        <h1 className=' font-semibold  text-[#2E2E48] text-2xl'>Arpit Deshpande</h1>
        <h2 className='text-[#303077] font-semibold'>ID No.: 01</h2>
        <h2 className='text-[#303077] font-semibold'>Designation : Staff</h2>
        <h2 className='text-[#303077] font-semibold'>Mobile No : +91 77367 93283</h2>
        <h2 className='text-[#303077] font-semibold'>Joining Date : 22-Oct-2024</h2>
        <h2 className='text-[#303077] font-semibold'>Address : Plot No 01 Anant residency Wardha Road Nagpur</h2>
      </div>
      </div>
      </div>
      <div className="flex justify-center m-4">
            <table id="table-to-print" className="w-full">
              <thead className="h-10">
                <tr className="border">
                  <td className=" text-[#595996] pl-4 border-2 font-medium">Sl.</td>
                  
                  <td className=" text-[#595996] pl-4 border-2 font-medium">Date</td>
                  <td className=" text-[#595996] pl-4 border-2 font-medium">Check In</td>
                  <td className=" text-[#595996] pl-4 border-2 font-medium">Check Out</td>
                  <td className=" text-[#595996] pl-4 border-2 font-medium">Work Hours</td>
                </tr>
              </thead>
              <tr className='bg-[#f9f9f9]'>
               <td className='border h-10 text-[#666666] p-2  font-medium'>1</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>20-Nov-2024</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>09:00 AM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>05:00 PM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>08:00 Hrs</td>
              </tr>
              <tr className='bg-]'>
               <td className='border h-10 text-[#666666] p-2  font-medium'>2</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>20-Nov-2024</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>09:00 AM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>05:00 PM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>08:00 Hrs</td>
              </tr>
              <tr className='bg-[#f9f9f9]'>
               <td className='border h-10 text-[#666666] p-2  font-medium'>3</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>20-Nov-2024</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>09:00 AM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>05:00 PM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>08:00 Hrs</td>
              </tr>
              <tr className='b'>
               <td className='border h-10 text-[#666666] p-2  font-medium'>4</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>20-Nov-2024</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>09:00 AM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>05:00 PM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>08:00 Hrs</td>
              </tr>
              <tr className='bg-[#f9f9f9]'>
               <td className='border h-10 text-[#666666] p-2  font-medium'>5</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>20-Nov-2024</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>09:00 AM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>05:00 PM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>08:00 Hrs</td>
               
              </tr>
              <tr className='bg-'>
               <td className='border h-10 text-[#666666] p-2  font-medium'>6</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>20-Nov-2024</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>09:00 AM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>05:00 PM</td>
               <td className='border h-10 text-[#666666] p-2 font-medium'>08:00 Hrs</td>
              </tr>
            </table>
            </div>
      </div>
      </div>
    </div>
  )
}

export default EmployeeWiseAttendanceReport