import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Icon2 from "../../assets/ReportImages/iconfile.png";
import { IoIosArrowDown } from "react-icons/io";


export default function IncomeExReport() {
  return (
  
    <div>
      <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
      <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
        <a href="">Home</a>/ <a href="">Reports</a> /{" "}
        <a href="">Income & Expenditure Report</a>
      </div>
      <div
        className="flex justify-between w-full bg-white h-[126px] mb-[28px] rounded-[17px]"
        style={{ boxShadow: "0px 13px 10px #b3adad" }}
      >
        <div className="flex justify-evenly items-center xl:w-[648px] lg:w-[464px]">
          <p className="text-[#595995] text-[23px] font-semibold">Start Date</p>
          <input
            className="border-[1px] h-[33px] rounded-[5px] text-[#999595] border-[#c4bdbd]"
            type="date"
            value="2017-06-01"
          />
          <p className="text-[#595995] text-[23px] font-semibold">End Date</p>
          <input
            className="border-[1px] h-[33px] rounded-[5px] text-[#999595] border-[#c4bdbd]"
            type="date"
            value="2017-06-01"
          />
        </div>
        <div className="flex items-center p-[13px]">
          <button className=" p-[7px] w-[89px] flex rounded-xl h-[45px] text-[17px] mr-[9px] bg-[#024CAA]">
            <BsSearch color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Search</p>
          </button>
          <button className=" p-[7px] w-[89px] flex rounded-xl h-[45px] text-[17px] mr-[9px] bg-[#FF6500]">
            <LuPrinter color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Print</p>
          </button>
        </div>
      </div>
      <div className="   rounded-lg pt-[1px] pb-[1px] bg-white mb-[34px]">
      <div className=" border-b-2 border-gray-400 mb-[4px] p-[6px] flex justify-between">
          <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
          Income & Expenditure Report
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
        <div className="  w-full p-[20px] ">
          <table className="border-collapse border-slate-400 border-2 w-full h-full">
            <thead>
              <tr className=" text-[#595995] font-normal">
              <th className="border border-slate-300 h-[50px]   ..."><div className=' flex justify-between item-center '>Voucher type <IoIosArrowDown className='mt-[5px]'/></div></th>
                <th className="border border-slate-300 h-[50px]   ..."><div className=' flex justify-between item-center '>Voucher No <IoIosArrowDown className='mt-[5px]'/></div></th>
                <th className="border border-slate-300 h-[50px]   ..."><div className=' flex justify-between item-center '>Voucher Date <IoIosArrowDown className='mt-[5px]'/></div></th>
                <th className="border border-slate-300 h-[50px]   ..."><div className=' flex justify-between item-center '>Description <IoIosArrowDown className='mt-[5px]'/></div></th>
                <th className="border border-slate-300 h-[50px]   ..."><div className=' flex justify-between item-center '>Expenditure <IoIosArrowDown className='mt-[5px]'/></div></th>
                <th className="border border-slate-300 h-[50px]   ..."><div className=' flex justify-between item-center '>Income <IoIosArrowDown className='mt-[5px]'/></div></th>

              </tr>
            </thead>
            <tbody className="text-center text-[#636465BD]">
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
   
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">        </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
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
  )
}
