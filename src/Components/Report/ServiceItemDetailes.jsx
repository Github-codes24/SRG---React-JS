import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import Icon2 from "../../assets/ReportImages/iconfile.png";

const ServiceItemReport = () => {
  return (
    <div>
      <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
      <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
        <a href="">Home</a>/ <a href="">Reports</a> /{" "}
        <a href="">Service Items Detailes Report</a>
      </div>
      <div
        className="flex justify-between w-full bg-white h-[126px] mb-[28px] rounded-[17px]"
        style={{ boxShadow: "0px 13px 10px #b3adad" }}
      >
        <div className="flex justify-evenly items-center xl:w-[648px] lg:w-[280px] flex-wrap">
          <p className="text-[#595995] xl:text-[23px] lg:text-[18px] font-semibold">Start Date</p>
          <input
            className="border-[1px] h-[33px] rounded-[5px] text-[#999595] border-[#c4bdbd]"
            type="date"
            value="2017-06-01"
          />
          <p className="text-[#595995] xl:text-[23px] lg:text-[18px] font-semibold">End Date</p>
          <input
            className="border-[1px] h-[33px] rounded-[5px] text-[#999595] border-[#c4bdbd]"
            type="date"
            value="2017-06-01"
          />
        </div>
        <div>
          <form>
          <div className=" flex flex-col font-medium   text-[#355B8B] gap-y-1  pt-[20px]">
                <div className="flex gap-3">
                  {" "}
                  <input type="checkbox" name="" id="" />
                  Service Name
                </div>
                <div className="flex gap-3">
                  {" "}
                  <input type="checkbox" name="" id="" />
                  Voucher Number
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" name="" id="" />
                  Customer Name{" "}
                </div>
              </div>
          </form>
        </div>
        <div className="flex items-center p-[13px]">
          <button className=" p-[7px] w-[89px] flex rounded-xl h-[45px] mr-[9px] bg-[#024CAA]">
            <BsSearch color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Search</p>
          </button>
          <button className=" p-[7px] w-[89px] flex rounded-xl h-[45px] mr-[9px] bg-[#FF6500]">
            <LuPrinter color="white" className=" h-full mr-[5px]" />
            <p className=" text-white">Print</p>
          </button>
        </div>
      </div>
      <div className="   rounded-lg pt-[1px] pb-[1px] bg-white mb-[34px]">
        <div className=" border-b-2 border-gray-400 mb-[4px] p-[6px] flex justify-between">
          <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
            Service Items Detailes Report
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
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">Sl. </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Voucher No
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Voucher Date
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Voucher Type
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Service Name
                  </div>
                </th>

                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Service Category
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Service Provider
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Buy Amount
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Sell Amount{" "}
                  </div>
                </th>
                <th className="border border-slate-300 h-[50px]   ...">
                  <div className=" flex justify-between item-center ">
                    Service Charge
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-center text-[#636465BD]">
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">1 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">2 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ..."> 3</td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ..."> 4</td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ..."> 5</td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ..."> 6</td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">7 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">8 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className= "border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">9 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">10 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">11 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
              </tr>
              <tr className=" bg-slate-100">
                <td className="border h-[40px] border-slate-300 ...">12 </td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
                <td className="border h-[40px] border-slate-300 ..."></td>
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
  );
};

export default ServiceItemReport;
