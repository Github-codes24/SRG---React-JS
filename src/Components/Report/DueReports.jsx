// import React from "react";
// import { FiAlignJustify } from "react-icons/fi";
// import { LuPrinter } from "react-icons/lu";
// import { IoHomeOutline } from "react-icons/io5";
// import { BsSearch } from "react-icons/bs";
// import Icon2 from "../../assets/ReportImages/iconfile.png"
// import ImagePortion from "./ImagePortion";

// export default function DueReports() {
//   return (
//     <div>
//       <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
//       <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
//       <a className="mt-[4px]" href="">Home/</a> <a className="mt-[4px]" href="">Reports/</a> / <a className="mt-[4px]" href="">Due Return</a>
//     </div>
//     <div className='flex justify-between w-full bg-white h-[126px] mb-[28px] rounded-[17px]' style={{boxShadow:"0px 13px 10px #b3adad"}}>
//         <div className='flex justify-evenly items-center xl:w-[648px] lg:w-[464px]'><p className='text-[#595995] text-[23px] font-semibold'>Start Date</p><input className='border-[1px] h-[33px] rounded-[5px] text-[#999595] border-[#c4bdbd]'   type="date" value="2017-06-01" />
//         <p className='text-[#595995] text-[23px] font-semibold'>End Date</p><input className='border-[1px] h-[33px] rounded-[5px] text-[#999595] border-[#c4bdbd]'  type="date" value="2017-06-01" /></div>
//         <div className='flex items-center p-[13px]'>
            
//             <button
//             className=" p-[7px] w-[89px] flex rounded-xl h-[45px] mr-[9px] bg-[#024CAA]"
//           >
//             <BsSearch color="white" className=" h-full mr-[5px]" />
//             <p className=" text-white">Search</p>
//           </button>
//             <button
//             className=" p-[7px] w-[89px] flex rounded-xl h-[45px] mr-[9px] bg-[#FF6500]"
            
//           >
//             <LuPrinter color="white" className=" h-full mr-[5px]" />
//             <p className=" text-white">Print</p>
//           </button>
//         </div>
        
//     </div>
//     <div className="   rounded-lg pt-[1px] pb-[1px] bg-white mb-[34px]">
//         <div className=" border-b-2 border-gray-400 mb-[4px] p-[6px] flex justify-between">
//           <h3 className=" flex items-center text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
//             Due Report
//           </h3>
//           <div className=" w-2/3 h-[59px] flex justify-end items-center ">
//             <button className=" p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
//               <img className="h-[29px] mr-[4px]" src={Icon2} alt="" />
//               Sales Report
//             </button>
//             <button className=" p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
//               <img className="h-[29px] mr-[4px]" src={Icon2} alt="" />
//               Purchase Report
//             </button>
//             <button className="p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center  bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
//               <FiAlignJustify className="h-[36px] w-[36px]" />
//               <p>Sales Report (Product Wise)</p>
//             </button>
//             <button className="p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center  bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
//               <FiAlignJustify className="h-[36px] w-[36px]" />
//               <p>Profit Report(Sales Wise)</p> 
//             </button>
//           </div>
//         </div>
//         <div className=" px-[15px] pt-[15px]">
//           <ImagePortion/>
//         </div>
//         <div className=" h-[266px] w-full p-[20px] ">
//           <table className="border-collapse border-slate-400 border-2 w-full h-full">
//             <thead>
//               <tr className="h-[46px] text-[#595995] font-normal">
//                 <th className="border border-slate-300 ...">Sales Date</th>
//                 <th className="border border-slate-300 ...">Invoice No</th>
//                 <th className="border border-slate-300 ...">Customer Name</th>
//                 <th className="border border-slate-300 ...">Mobile No</th>
//                 <th className="border border-slate-300 ...">Total Amount</th>
//                 <th className="border border-slate-300 ...">Paid Amount</th>
//                 <th className="border border-slate-300 ...">Due Amount</th>
//               </tr>
//             </thead>
//             <tbody className="text-center text-[#636465BD]">
//               <tr className="h-[46px] bg-slate-100">
//                 <td className="border border-slate-300 ...">1</td>
//                 <td className="border border-slate-300 ...">Indianapolis</td>
//                 <td className="border border-slate-300 ...">Indianapolis</td>
//                 <td className="border border-slate-300 ...">Indianapolis</td>
//                 <td className="border border-slate-300 ...">Indianapolis</td>
//                 <td className="border border-slate-300 ...">Indianapolis</td>
//                 <td className="border border-slate-300 ...">Indianapolis</td>
//               </tr>
//               <tr className="h-[46px]">
//                 <td className="border border-slate-300 ...">2</td>
//                 <td className="border border-slate-300 ...">Ohio</td>
//                 <td className="border border-slate-300 ...">Ohio</td>
//                 <td className="border border-slate-300 ...">Ohio</td>
//                 <td className="border border-slate-300 ...">Columbus</td>
//                 <td className="border border-slate-300 ...">Columbus</td>
//                 <td className="border border-slate-300 ...">Columbus</td>
//               </tr>
//               <tr className=" h-[46px]">
//                 <td
//                   className="border text-[#595995] border-slate-300 ... text-right pr-[15px]"
//                   colSpan={4}
//                 >
//                   Total
//                 </td>
//                 <td className="border text-[#595995] border-slate-300 ...">Michigan</td>
//                 <td className="border text-[#595995] border-slate-300 ...">Michigan</td>
//                 <td className="border text-[#595995] border-slate-300 ...">Michigan</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Icon2 from "../../assets/ReportImages/iconfile.png";
import ImagePortion from "./ImagePortion";

export default function DueReports() {
  return (
    <div className="p-4">
      <div className="w-full h-auto flex justify-end items-center mb-4 text-sm md:text-lg xl:text-xl pr-4">
        <IoHomeOutline className="w-6 h-6 md:w-8 md:h-8 text-[#3A6D8C]" />
        <a className="mt-1" href="">Home/</a>
        <a className="mt-1" href="">Reports/</a>
        <a className="mt-1" href="">Due Return</a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 mb-6 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row justify-evenly items-center w-full md:w-2/3 space-y-3 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <p className="text-[#595995] font-semibold">Start Date</p>
            <input
              className="border rounded-lg p-2 text-[#999595] border-gray-300"
              type="date"
            />
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-[#595995] font-semibold">End Date</p>
            <input
              className="border rounded-lg p-2 text-[#999595] border-gray-300"
              type="date"
            />
          </div>
        </div>

        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="flex items-center bg-[#024CAA] text-white rounded-lg p-3">
            <BsSearch className="mr-2" />
            <span>Search</span>
          </button>
          <button className="flex items-center bg-[#FF6500] text-white rounded-lg p-3">
            <LuPrinter className="mr-2" />
            <span>Print</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="border-b border-gray-300 mb-4 pb-2 flex justify-between items-center">
          <h3 className="text-[#878484] text-lg md:text-xl font-semibold">Due Report</h3>
          <div className="flex flex-wrap justify-end space-x-2">
            <button className="flex items-center bg-[#746BD9] text-white p-2 rounded-lg text-xs md:text-sm">
              <img className="h-5 mr-2" src={Icon2} alt="" />
              Sales Report
            </button>
            <button className="flex items-center bg-[#746BD9] text-white p-2 rounded-lg text-xs md:text-sm">
              <img className="h-5 mr-2" src={Icon2} alt="" />
              Purchase Report
            </button>
            <button className="flex items-center bg-[#746BD9] text-white p-2 rounded-lg text-xs md:text-sm">
              <FiAlignJustify className="h-5 w-5 mr-2" />
              Sales Report (Product Wise)
            </button>
            <button className="flex items-center bg-[#746BD9] text-white p-2 rounded-lg text-xs md:text-sm">
              <FiAlignJustify className="h-5 w-5 mr-2" />
              Profit Report (Sales Wise)
            </button>
          </div>
        </div>

        <div className="px-4 py-2">
          <ImagePortion />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700 border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-[#595995]">
                <th className="border px-4 py-2">Sales Date</th>
                <th className="border px-4 py-2">Invoice No</th>
                <th className="border px-4 py-2">Customer Name</th>
                <th className="border px-4 py-2">Mobile No</th>
                <th className="border px-4 py-2">Total Amount</th>
                <th className="border px-4 py-2">Paid Amount</th>
                <th className="border px-4 py-2">Due Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Indianapolis</td>
                <td className="border px-4 py-2">Indianapolis</td>
                <td className="border px-4 py-2">Indianapolis</td>
                <td className="border px-4 py-2">Indianapolis</td>
                <td className="border px-4 py-2">Indianapolis</td>
                <td className="border px-4 py-2">Indianapolis</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Ohio</td>
                <td className="border px-4 py-2">Ohio</td>
                <td className="border px-4 py-2">Ohio</td>
                <td className="border px-4 py-2">Columbus</td>
                <td className="border px-4 py-2">Columbus</td>
                <td className="border px-4 py-2">Columbus</td>
              </tr>
              <tr>
                <td className="border text-[#595995] text-right pr-4" colSpan={4}>Total</td>
                <td className="border px-4 py-2">Michigan</td>
                <td className="border px-4 py-2">Michigan</td>
                <td className="border px-4 py-2">Michigan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
