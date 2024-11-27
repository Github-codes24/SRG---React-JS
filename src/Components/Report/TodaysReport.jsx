import React from "react";
import Bg1 from "../../assets/ReportImages/Backg1.jpeg";
import Logo from "../../assets/ReportImages/logo1-2.png";
import Logo2 from "../../assets/ReportImages/logo2.png";
import Logo3 from "../../assets/ReportImages/logo3.png";
import { FiAlignJustify } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import Icon2 from "../../assets/ReportImages/iconfile.png"
import ImagePortion from "./ImagePortion";

const TodaysReport = () => {
  return (
    <>
    <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
    <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
        <a href="">Home</a>/ <a href="">Reports</a> /
        <a href="">Todays Reports</a>
      </div>
      <div className="   rounded-lg pt-[1px] pb-[1px] bg-white mb-[34px]">
        <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px] flex justify-between">
        <h3 className=" flex items-center text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
            Today Sales Report
          </h3>
          <button
            className=" p-[7px] w-[89px] flex rounded-xl bg-[#FF6500]"
           
          >
            <LuPrinter color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Print</p>
          </button>
        </div>
        <div className=" px-[15px] pt-[15px]">
          <ImagePortion/>
        </div>
        <div className=" h-[266px] w-full p-[20px] ">
          <table className="border-collapse border-slate-400 border-2 w-full h-full">
            <thead>
              <tr className=" text-[#595995] font-normal">
                <th className="border border-slate-300 ...">Sales Date</th>
                <th className="border border-slate-300 ...">Invoice No</th>
                <th className="border border-slate-300 ...">Customer Name</th>
                <th className="border border-slate-300 ...">Mobile No</th>
                <th className="border border-slate-300 ...">Servie Name</th>
                <th className="border border-slate-300 ...">Total Amount</th>
              </tr>
            </thead>
            <tbody className="text-center text-[#636465BD]">
              <tr className=" bg-slate-100">
                <td className="border border-slate-300 ...">08-Aug-2024</td>
                <td className="border border-slate-300 ...">746234787787</td>
                <td className="border border-slate-300 ...">Arpit Deshpande</td>
                <td className="border border-slate-300 ...">97341767263</td>
                <td className="border border-slate-300 ...">XYXzmdiknkkkim</td>
                <td className="border border-slate-300 ...">4469183.00</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">08-Aug-2024</td>
                <td className="border border-slate-300 ...">746234787787</td>
                <td className="border border-slate-300 ...">Manish Thakre</td>
                <td className="border border-slate-300 ...">97341767263</td>
                <td className="border border-slate-300 ...">XYXzmdiknkkkim</td>
                <td className="border border-slate-300 ...">4469183.00</td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border border-slate-300 ...">08-Aug-2024</td>
                <td className="border border-slate-300 ...">746234787787</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Detroit</td>
                <td className="border border-slate-300 ...">Detroit</td>
              </tr>
              <tr className=" ">
                <td className="border border-slate-300 ...">08-Aug-2024</td>
                <td className="border border-slate-300 ...">746234787787</td>
                <td className="border border-slate-300 ...">Amit Tripathi</td>
                <td className="border border-slate-300 ...">97341767263</td>
                <td className="border border-slate-300 ...">XYXzmdiknkkkim</td>
                <td className="border border-slate-300 ...">4469183.00</td>
              </tr>
              <tr className=" ">
                <td
                  className="border text-[#355B8B] font-bolds border-slate-300 ... text-right pr-[15px]"
                  colSpan={5}
                >
                  Total Sales
                </td>
                <td className="border text-[#355B8B] font-bolds border-slate-300 ...">Michigan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="   rounded-lg pt-[1px] pb-[1px] bg-white ">
        <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px] flex justify-between">
        <h3 className=" flex items-center text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
            Today Serice Provider Purchase Report
          </h3>
          <button
            className=" p-[7px] w-[89px] flex rounded-xl bg-[#FF6500]"
            
          >
            <LuPrinter color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Print</p>
          </button>
        </div>
        <div className=" px-[15px] pt-[15px]">
          <div
            className=" rounded-[28px] 2xl:h-[319px] 2xl:w-full 2xl:pl-[41px] 2xl:py-[19px] flex justify-between items-center 2xl:pr-[53px] xl:p-[11px] xl:pr-[33px] xl:pl-[25] lg:p-[11px] lg:pr-[14px] lg:pl-[25] lg:h-[278px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(66, 202, 96, 0.21) 0%, rgba(151, 195, 200, 0.32) 50%, rgba(15, 90, 154, 0.3) 100%)",
            }}
          >
            <div
              className="div1 2xl:h-full 2xl:w-[528px] p-[22px] rounded-[30px] bg-cover bg-no-repeat shadow-md shadow-stone-500 xl:w-[405px] xl:h-[240px] lg:w-[334px] lg:h-[201px] lg:p-[20px] "
              style={{ backgroundImage: `url(${Bg1})` }}
            >
              <div className=" 2xl:h-[143px] w-full  flex justify-center items-center xl:h-[115px] lg:h-[115px]">
                <img className=" h-[108px]]" src={Logo} alt="" />
              </div>
              <div
                className=" 2xl:h-[63px] w-full 2xl:mt-[28px]  rounded-[19px] flex justify-center items-center p-[5px] xl:h-[53px] xl:mt-[19px] lg:h-[41px] lg:mt-[15px]"
                style={{ background: "#708EAB6B" }}
              >
                <img className="h-full mr-[3px]" src={Logo3} alt="" />
                <img className="h-full mr-[3px]" src={Logo2} alt="" />
              </div>
            </div>
            <div className="div2 2xl:w-[618px] p-px xl:w-[485px] xl:h-[235px] lg:w-[361px] lg:h-[184px]">
              <div className=" text-center flex justify-between h-[73px] xl:h-[57px] lg:h-[30px]">
                <div className=" h-full" style={{ width: "56%" }}>
                  <h2 className=" 2xl:text-[37px] text-right xl:text-[35px] text-[#2E2E48] font-medium ">
                    Address
                  </h2>
                </div>
                <div className="w-1/5 xl:flex xl:items-center  lg:flex lg:items-center">
                  <h4 className=" 2xl:text-[20px] text-right xl:text-[16px] lg:text-[12px] text-[#6A6868]">
                    22-Oct-2024
                  </h4>
                </div>
              </div>
              <div className="flex 2xl:text-[17px] xl:text-[14px] lg:text-[11px] text-[#303077]">
                <div className=" w-1/2 text-left">
                  <p>Shreerangam, Near Shree Dharma</p>
                  <p>Sastha Temple,</p>
                  <p>Murikkungal P.O, Vellikulangara,</p>
                  <p>Pin : 680699</p>
                  <p>Thrissur, Kerala</p>
                  <p>India</p>
                </div>
                <div className=" w-1/2 text-left">
                  <p>Mail - infosrgiskdly@gmail.com</p>
                  <p></p>
                  <p>Mobile No.- +91 7736793283</p>
                  <p className=" text-center">+91 8891075320</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[266px] w-full p-[20px] ">
          <table className="border-collapse border-slate-400 border-2 w-full h-full">
            <thead>
              <tr className=" text-[#595995] font-normal">
                <th className="border border-slate-300 ...">Purchase Date</th>
                <th className="border border-slate-300 ...">Purchase Invoice No</th>
                <th className="border border-slate-300 ...">Sales Invoice No</th>
                <th className="border border-slate-300 ...">Service Provider</th>
                <th className="border border-slate-300 ...">Service Name</th>
                <th className="border border-slate-300 ...">Total Amount</th>
              </tr>
            </thead>
            <tbody className="text-center text-[#636465BD]">
              <tr className=" bg-slate-100">
                <td className="border border-slate-300 ...">1</td>
                <td className="border border-slate-300 ...">Indianapolis</td>
                <td className="border border-slate-300 ...">Indianapolis</td>
                <td className="border border-slate-300 ...">Indianapolis</td>
                <td className="border border-slate-300 ...">Indianapolis</td>
                <td className="border border-slate-300 ...">Indianapolis</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">2</td>
                <td className="border border-slate-300 ...">Ohio</td>
                <td className="border border-slate-300 ...">Ohio</td>
                <td className="border border-slate-300 ...">Ohio</td>
                <td className="border border-slate-300 ...">Columbus</td>
                <td className="border border-slate-300 ...">Columbus</td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border border-slate-300 ...">3</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Detroit</td>
                <td className="border border-slate-300 ...">Detroit</td>
              </tr>
              <tr className=" ">
                <td className="border border-slate-300 ...">4</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Michigan</td>
                <td className="border border-slate-300 ...">Detroit</td>
                <td className="border border-slate-300 ...">Detroit</td>
              </tr>
              <tr className=" ">
                <td
                  className="border text-[#355B8B] font-bolds border-slate-300 ... text-right pr-[15px]"
                  colSpan={5}
                >
                  Total Purchase
                </td>
                <td className="border text-[#355B8B] font-bolds border-slate-300 ...">Michigan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TodaysReport;
