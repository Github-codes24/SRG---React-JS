import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import ImagePortion from "./ImagePortion";


function ClosingReport() {
  return (
    <div>
      <div>
      <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
      <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">Home/</a> <a className="mt-[4px]" href="">Reports/</a>
          <a className="mt-[4px]" href="">Closing Reports</a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[1px] bg-white ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium ">
              Closing Report
            </h3>
          </div>
            <ImagePortion/>
          <div className=" h-[266px] w-full p-[20px] ">
            <table className="border-collapse border-slate-400 border-2 w-full h-full">
              <thead>
                <tr className="  text-[#595995]  font-medium">
                  <th className="border border-slate-300 ...">Sl no</th>
                  <th className="border border-slate-300 ...">Date</th>
                  <th className="border border-slate-300 ...">Receipt</th>
                  <th className="border border-slate-300 ...">Payment</th>
                  <th className="border border-slate-300 ...">Balance</th>
                </tr>
              </thead>
              <tbody className="text-center text-[#636465BD]">
                <tr className=" bg-slate-100">
                  <td className="border border-slate-300 ...">1</td>
                  <td className="border border-slate-300 ...">08-Aug -2024</td>
                  <td className="border border-slate-300 ...">Rs 512736.00</td>
                  <td className="border border-slate-300 ...">Rs 0.00</td>
                  <td className="border border-slate-300 ...">Rs 512736.00</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 ...">2</td>
                  <td className="border border-slate-300 ...">08-Aug -2024</td>
                  <td className="border border-slate-300 ...">Rs 0.00</td>
                  <td className="border border-slate-300 ...">Rs 87775.00</td>
                  <td className="border border-slate-300 ...">Rs 87775.00</td>
                </tr>
                <tr className=" bg-slate-100">
                  <td className="border border-slate-300 ...">3</td>
                  <td className="border border-slate-300 ...">08-Aug -2024</td>
                  <td className="border border-slate-300 ...">Rs 48568.00</td>
                  <td className="border border-slate-300 ...">Rs 0.00</td>
                  <td className="border border-slate-300 ...">Rs 48568.00</td>
                </tr>
                <tr className=" ">
                  <td className="border border-slate-300 ...">4</td>
                  <td className="border border-slate-300 ...">08-Aug -2024</td>
                  <td className="border border-slate-300 ...">Rs 23073.00</td>
                  <td className="border border-slate-300 ...">Rs 0.00</td>
                  <td className="border border-slate-300 ...">Rs 23073.00</td>
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
    </div>
  );
}

export default ClosingReport;
