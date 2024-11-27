import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import Avatar1 from "../../../assets/HRM/avatar.png";
import Avatar2 from "../../../assets/HRM/Avatar2.png";
import Avatar3 from "../../../assets/HRM/Avatar3.png";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";

export default function ManageEmployee() {
  return (
    <div>
      <div>
        <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px] ">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">
            Home/
          </a>{" "}
          <a className="mt-[4px]" href="">
            HRM/
          </a>
          <a className="mt-[4px]" href="">
            Manage Employee
          </a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[100px] bg-white ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium font-leftHeading ">
              Manage Employee
            </h3>
          </div>
          <div className="w-full p-[10px] flex justify-between flex-wrap items-center">
            <div className="flex">
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] mr-[5px] text-[#636465] font-bodyPop">
                Show
              </p>
              <select
                id="countries"
                className="border-gray-400 border-[1px] rounded-[5px] w-[50px]  dark:placeholder-gray-400 bg-white  px-[12px] p-[5px] text-gray-400 xl:h-[34px] sm:h-[27px] mr-[5px]"
              >
                <option selected>10</option>
                <option value="US">Staff</option>
                <option value="US">Staff</option>
              </select>
              <p className="xl:text-[20px] lg:text-[17px] sm:text-[17px] text-[#636465] font-bodyPop">
                Entries
              </p>
            </div>
            <div className="flex">
              <button className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Copy
              </button>
              <button className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                CSV
              </button>
              <button className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Excel
              </button>
              <button className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                PDF
              </button>
              <button className=" bg-[#2E2E48] text-white xl:w-[80px] xl:px-[5px] xl:py-[10px] xl:mr-[15px] lg:w-[56px] lg:px-[2px] lg:py-[3px] lg:mr-[9px] sm:w-[56px] sm:px-[2px] sm:py-[3px] sm:mr-[9px] rounded-[5px]">
                Print
              </button>
            </div>
            <div>
              <div className="flex rounded-md border-2 border-gray-400 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                <input
                  type="email"
                  placeholder="Search"
                  className="w-full outline-none xl:h-[39px] xl:w-[191px] sm:h-[29px] sm:w-[112px] bg-white text-gray-600 text-sm px-4 py-3"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-[#2E2E48] px-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192.904 192.904"
                    width="16px"
                    className="fill-white"
                  >
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative p-[10px] overflow-x-scroll">
            <table className=" border-collapse border-slate-400 border-2 w-full h-full font-bodyPop ">
              <thead>
                <tr className="  text-[#595995]  font-medium  h-[100px]">
                  <th className="border border-slate-300 ">
                    <div className="flex justify-between">
                      SL.
                      <LuArrowUpDown className="w-auto xl:h-[18px] sm:h-[14px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ">
                    <div className="flex justify-between">
                      Name
                      <LuArrowUpDown className="w-auto xl:h-[18px] sm:h-[14px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ">
                    <div className="flex justify-between">
                      Designat
                      <LuArrowUpDown className="w-auto xl:h-[18px] sm:h-[14px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ">
                    <div className="flex justify-between">
                      Phone
                      <LuArrowUpDown className="w-auto xl:h-[18px] sm:h-[14px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ">
                    <div className="flex justify-between">
                      Email
                      <LuArrowUpDown className="w-auto xl:h-[18px] sm:h-[14px]" />
                    </div>
                  </th>
                  <th className="border border-slate-300 ">Picture</th>
                  <th className="border border-slate-300 ">Action</th>
                </tr>
              </thead>
              <tbody className="text-center text-[#636465BD]">
                <tr className="  h-[20px]">
                  <td className="border border-slate-300 ">1</td>
                  <td className="border border-slate-300 ">
                    IBRAHIM A SEAD
                  </td>
                  <td className="border border-slate-300 ">Staff</td>
                  <td className="border border-slate-300 ">1234567890</td>
                  <td className="border border-slate-300 ">
                    ibrahimit4@gmail.com
                  </td>
                  <td className="border border-slate-300  ">
                    <div className="flex justify-center w-full">
                      <img src={Avatar1} alt="" className="xl:h-[90px] lg:h-[70px] sm:h-[60px]" />
                    </div>
                  </td>
                  <td className="border border-slate-300 ">
                    <div className="flex gap-[4px] w-full justify-center">
                      <BsPencil
                        className="bg-[#96CEB4] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[1px] border-[#75A68F]"
                        color="white"
                      />
                      <FaRegTrashAlt
                        className="bg-[#CB6040] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[#BF2D35] border-[1px]"
                        color="white"
                      />
                      <IoPerson
                        className="bg-white border-[1px] border-black p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px]"
                        color="#746BD9"
                      />
                    </div>
                  </td>
                </tr>
                <tr className="  h-[20px]">
                  <td className="border border-slate-300 ">1</td>
                  <td className="border border-slate-300 ">08-Aug -2024</td>
                  <td className="border border-slate-300 ">Rs 512736.00</td>
                  <td className="border border-slate-300 ">Rs 0.00</td>
                  <td className="border border-slate-300 ">Rs 512736.00</td>
                  <td className="border border-slate-300  ">
                    <div className="flex justify-center w-full">
                      <img src={Avatar2} alt="" className="xl:h-[90px] lg:h-[70px] sm:h-[60px]" />
                    </div>
                  </td>
                  <td className="border border-slate-300 ">
                    <div className="flex gap-[4px] w-full justify-center">
                      <BsPencil
                        className="bg-[#96CEB4] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[1px] border-[#75A68F]"
                        color="white"
                      />
                      <FaRegTrashAlt
                        className="bg-[#CB6040] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[#BF2D35] border-[1px]"
                        color="white"
                      />
                      <IoPerson
                        className="bg-white border-[1px] border-black p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px]"
                        color="#746BD9"
                      />
                    </div>
                  </td>
                </tr>
                <tr className="  h-[20px]">
                  <td className="border border-slate-300 ">1</td>
                  <td className="border border-slate-300 ">08-Aug -2024</td>
                  <td className="border border-slate-300 ">Rs 512736.00</td>
                  <td className="border border-slate-300 ">Rs 0.00</td>
                  <td className="border border-slate-300 ">Rs 512736.00</td>
                  <td className="border border-slate-300  ">
                    <div className="flex justify-center w-full">
                      <img src={Avatar3} alt="" className="xl:h-[90px] lg:h-[70px] sm:h-[60px]" />
                    </div>
                  </td>
                  <td className="border border-slate-300 ">
                    <div className="flex gap-[4px] w-full justify-center">
                      <BsPencil
                        className="bg-[#96CEB4] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[1px] border-[#75A68F]"
                        color="white"
                      />
                      <FaRegTrashAlt
                        className="bg-[#CB6040] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[#BF2D35] border-[1px]"
                        color="white"
                      />
                      <IoPerson
                        className="bg-white border-[1px] border-black p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px]"
                        color="#746BD9"
                      />
                    </div>
                  </td>
                </tr>
                <tr className="  h-[20px]">
                  <td className="border border-slate-300 ">1</td>
                  <td className="border border-slate-300 ">08-Aug -2024</td>
                  <td className="border border-slate-300 ">Rs 512736.00</td>
                  <td className="border border-slate-300 ">Rs 0.00</td>
                  <td className="border border-slate-300 ">Rs 512736.00</td>
                  <td className="border border-slate-300  ">
                    <div className="flex justify-center w-full">
                      <img src={Avatar1} alt="" className="xl:h-[90px] lg:h-[70px] sm:h-[60px]" />
                    </div>
                  </td>
                  <td className="border border-slate-300 ">
                    <div className="flex gap-[4px] w-full justify-center">
                      <BsPencil
                        className="bg-[#96CEB4] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[1px] border-[#75A68F]"
                        color="white"
                      />
                      <FaRegTrashAlt
                        className="bg-[#CB6040] p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px] border-[#BF2D35] border-[1px]"
                        color="white"
                      />
                      <IoPerson
                        className="bg-white border-[1px] border-black p-[2px] xl:h-[30px] xl:w-[30px] lg:h-[25px] lg:w-[25px] sm:h-[19px] sm:w-[19px]  rounded-[2px]"
                        color="#746BD9"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
