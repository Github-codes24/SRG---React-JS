import React from "react";
import Bg1 from "../../assets/ReportImages/Backg1.jpeg";
import Logo from "../../assets/ReportImages/logo1-2.png";
import Logo2 from "../../assets/ReportImages/logo2.png";
import Logo3 from "../../assets/ReportImages/logo3.png";
import { FiAlignJustify } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Icon2 from "../../assets/ReportImages/iconfile.png";
import ImagePortion from "./ImagePortion";

export default function PurchaseReport() {
  return (
    <div>
      <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
      <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
        <a href="">Home</a>/ <a href="">Reports</a> /
        <a href="">Purchase Report</a>
      </div>
      <div
        className="flex justify-between w-full bg-white h-[126px] mb-[28px] rounded-[17px] "
        style={{ boxShadow: "0px 13px 10px #b3adad" }}
      >
        <div className="flex justify-evenly items-center xl:w-4/5 lg:w-[464px] xl:text-[20px] lg:text-[16px] xl:flex-nowrap lg:flex-wrap-reverse">
          <div className=" flex items-center">
            <div className="relative flex">
              <p classNameName=" mr-[13px] text-[#595995]">Service Provider</p>
              <select className=" xl:w-[177px] lg:w-[331px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                <option value="brazil">Brazil</option>
                <option value="bucharest">Bucharest</option>
                <option value="london">London</option>
                <option value="washington">Washington</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
          <p className="text-[#595995]">Start Date</p>
          <input
            className="border-[1px] h-[33px] rounded-[5px] border-[#c4bdbd] text-[#999595]"
            type="date"
            value="2017-06-01"
          />
          <p className="text-[#595995]">End Date</p>
          <input
            className="border-[1px] h-[33px] rounded-[5px] border-[#c4bdbd] text-[#999595]"
            type="date"
            value="2017-06-01"
          />
        </div>
        <div className="flex items-center p-[13px]">
          <button
            className=" p-[7px] w-[89px] flex rounded-xl h-[45px] mr-[9px]"
            style={{ background: "#024CAA" }}
          >
            <BsSearch color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Search</p>
          </button>
          <button
            className=" p-[7px] w-[89px] flex rounded-xl h-[45px] mr-[9px]"
            style={{ backgroundColor: "#FF6500" }}
          >
            <LuPrinter color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Print</p>
          </button>
        </div>
      </div>

      <div className="   rounded-lg pt-[1px] pb-[1px] bg-white mb-[34px]">
        <div className=" border-b-2 border-gray-400 mb-[4px] p-[6px] flex justify-between">
          <h3 className=" flex items-center text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
            Service Providers Purchase Report
          </h3>
          <div className=" w-2/3 h-[59px] flex justify-end items-center ">
            <button className=" p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
              <img className="h-[29px] mr-[4px]" src={Icon2} alt="" />
              Sales Report
            </button>
            <button className=" p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
              <img className="h-[29px] mr-[4px]" src={Icon2} alt="" />
              Purchase Report
            </button>
            <button className="p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center  bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
              <FiAlignJustify className="h-[36px] w-[36px]" />
              <p>Sales Report (Product Wise)</p>
            </button>
            <button className="p-[2px] h-[47px] mr-[5px] text-white rounded-lg xl:px-[10px] lg:px-[3px] flex justify-center items-center  bg-[#746BD9] xl:text-[15px] lg:text-[11px] lg:font-bold">
              <FiAlignJustify className="h-[36px] w-[36px]" />
              <p>Profit Report(Sales Wise)</p>
            </button>
          </div>
        </div>
        <div className=" px-[15px] pt-[15px]">
          <ImagePortion/>
        </div>
        <div className=" h-[266px] w-full p-[20px] ">
          <table className="border-collapse border-slate-400 border-2 w-full h-full">
            <thead>
              <tr className=" text-[#595995] font-normal">
                <th className="border border-slate-300 ...">Purchase Date</th>
                <th className="border border-slate-300 ...">Purchase Invoice No</th>
                <th className="border border-slate-300 ...">Service Sales Invoice No</th>
                <th className="border border-slate-300 ...">Service Provider</th>
                <th className="border border-slate-300 ...">Receipts</th>
                <th className="border border-slate-300 ...">Payments</th>
                <th className="border border-slate-300 ...">Balance</th>
              </tr>
            </thead>
            <tbody className="text-center text-[#636465BD]">
              <tr className=" bg-slate-100">
                <td className="border border-slate-300 ...">08-Aug -2024</td>
                <td className="border border-slate-300 ...">37337353</td>
                <td className="border border-slate-300 ...">4089487348</td>
                <td className="border border-slate-300 ...">Cash A/C</td>
                <td className="border border-slate-300 ...">0.00</td>
                <td className="border border-slate-300 ...">0.00</td>
                <td className="border border-slate-300 ...">0.00</td>
              </tr>
              <tr className=" ">
                <td className="border border-slate-300 ...">08-Aug -2024</td>
                <td className="border border-slate-300 ...">37337353</td>
                <td className="border border-slate-300 ...">4089487348</td>
                <td className="border border-slate-300 ...">Cash A/C</td>
                <td className="border border-slate-300 ...">0.00</td>
                <td className="border border-slate-300 ...">0.00</td>
                <td className="border border-slate-300 ...">0.00</td>
              </tr>
              
              
              <tr className=" ">
                <td
                  className="border text-[#595995] font-semibold border-slate-300 ... text-right pr-[15px]"
                  colSpan={6}
                >
                  Total Purchase
                </td>
                <td className="border text-[#595995] font-semibold border-slate-300 ...">Michigan</td>

              </tr>
            </tbody>
          </table>
        </div>
        <div className="h-[100px] flex justify-end items-center pr-[20px]">
          <button className=" border-[2px] xl:w-[100px] lg:w-[80px] rounded-[50px] xl:h-[50px] lg:h-[40px] mr-[4px] border-[#746BD9]">
            <p className="text-[#746BD9]">Previous</p>
          </button>
          <button className="  border-[2px] rounded-full xl:h-[50px] lg:h-[40px] xl:w-[50px] lg:w-[40px] mr-[4px] border-[#746BD9]">
            <p className=" text-[#746BD9]">1</p>
          </button>
          <button className="  border-[2px] rounded-full xl:h-[50px] lg:h-[40px] xl:w-[50px] lg:w-[40px] mr-[4px] border-[#746BD9]">
            <p className=" text-[#746BD9]">2</p>
          </button>
          <button className="  border-[2px] rounded-full xl:h-[50px] lg:h-[40px] xl:w-[50px] lg:w-[40px] mr-[4px] border-[#746BD9]">
            <p className=" text-[#746BD9]">3</p>
          </button>
          <button className="  border-[2px] rounded-full xl:h-[50px] lg:h-[40px] xl:w-[50px] lg:w-[40px] mr-[4px] border-[#746BD9]">
            <p className=" text-[#746BD9]">4</p>
          </button>
          <button className="  border-[2px] rounded-full xl:h-[50px] lg:h-[40px] xl:w-[50px] lg:w-[40px] mr-[4px] border-[#746BD9]">
            <p className=" text-[#746BD9]">5</p>
          </button>
          <button className=" border-[2px] xl:w-[100px] lg:w-[80px] rounded-[50px] xl:h-[50px] lg:h-[40px] border-[#746BD9]">
            <p className=" text-[#746BD9]">Next</p>
          </button>
        </div>
      </div>
    </div>
  );
}
