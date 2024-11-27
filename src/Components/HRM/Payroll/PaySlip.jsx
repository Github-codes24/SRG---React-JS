import React from "react";
import Bg1 from "../../../assets/ReportImages/Backg1.jpeg";
import Logo from "../../../assets/ReportImages/logo1-2.png";
import Logo2 from "../../../assets/ReportImages/logo2.png";
import Logo3 from "../../../assets/ReportImages/logo3.png";
import { FiPrinter } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";



export default function PaySlip() {
  return (
    <div>
      <div
        className=" rounded-t-[28px] 2xl:h-[319px] 2xl:w-full 2xl:pl-[41px] 2xl:py-[19px] flex justify-between items-center 2xl:pr-[53px] xl:p-[11px] xl:pr-[33px] xl:pl-[25] sm:p-[11px] sm:pr-[14px] sm:pl-[25] sm:h-[278px]  md:p-[11px]  md:pr-[14px] md:pl-[25] md:h-[278px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(66, 202, 96, 0.21) 0%, rgba(151, 195, 200, 0.32) 50%, rgba(15, 90, 154, 0.3) 100%)",
        }}
      >
        <div
          className="div1 2xl:h-full 2xl:w-[528px] p-[22px] rounded-[30px] bg-cover bg-no-repeat shadow-md shadow-stone-500 xl:w-[405px] xl:h-[240px] sm:w-[334px] sm:h-[201px] sm:p-[20px] md:w-[334px] md:h-[201px] md:p-[20px] "
          style={{ backgroundImage: `url(${Bg1})` }}
        >
          <div className=" 2xl:h-[143px] w-full  flex justify-center items-center xl:h-[115px] sm:h-[115px] md::h-[115px] ">
            <img className=" h-[108px]]" src={Logo} alt="" />
          </div>
          <div className=" 2xl:h-[63px] w-full 2xl:mt-[28px]  rounded-[19px] flex justify-center items-center p-[5px] xl:h-[53px] xl:mt-[19px] sm:h-[41px] sm:mt-[15px] md:h-[41px] md:mt-[15px] bg-[#708EAB6B]">
            <img className="h-full mr-[3px]" src={Logo3} alt="" />
            <img className="h-full mr-[3px]" src={Logo2} alt="" />
          </div>
        </div>
        <div className="div2 2xl:w-[618px] p-px xl:w-[494px] xl:h-[235px] sm:w-[379px] sm:h-[184px] md:w-[361px] md:h-[184px]">
          <div className=" text-center flex justify-between h-[73px] xl:h-[57px] sm:h-[30px]">
            <div className=" h-full w-[56%]">
              <h2 className=" 2xl:text-[37px] text-right xl:text-[35px] text-[#2E2E48] font-medium font-middF">
                Address
              </h2>
            </div>
            <div className="w-1/5 xl:flex xl:items-center  sm:flex sm:items-center md:flex md:items-center">
              <h4 className=" 2xl:text-[20px] text-right xl:text-[16px] sm:text-[12px] md:text-[12px] text-[#6A6868] font-middF">
                22-Oct-2024
              </h4>
            </div>
          </div>
          <div className="flex 2xl:text-[17px] xl:text-[14px] sm:text-[11px] md:text-[11px]  text-[#303077] font-bodyPop">
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
      <div className="w-full font-bodyPop ">
        <div className="w-full xl:h-[96px] sm:h-[76px] md:h-[76px] bg-[#B7C7D6] flex ">
            <div className="  flex items-center w-[55%] justify-end xl:text-[33px] sm:text-[27px] md:text-[27px]"><h3>Salary Slip</h3></div>
            <div className="flex items-center w-[44%] justify-end ">
                <FiPrinter className="w-[30px] xl:h-[30px] sm:h-[23px] md:h-[23px] mr-[12px]"/>
                <MdOutlineFileDownload className="w-[30px] xl:h-[30px] sm:h-[23px] md:h-[23px] mr-[8px]"/>
            </div>
        </div>
        <div className="w-full flex xl:h-[300px] sm:h-[198px]   xl:text-[23px] sm:text-[18px] bg-[#DCE7EFC4]">
          <div className=" flex  justify-center items-center w-1/2 h-full   px-[20px]">
            <div className="p-[5px]">
              <p>Employee Name: Rahul Verma</p>
              <p>Employee ID: EMP00123</p>
              <p>Date of Joining : March 15, 2023</p>
            </div>
          </div>
          <div className=" flex  justify-start items-center w-1/2 h-full   px-[20px]">
            <div className="p-[5px]">
              <p>Designation : Software Engineer</p>
              <p>Department : IT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
