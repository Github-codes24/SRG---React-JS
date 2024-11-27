import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function AddSalarySetup() {
  return (
<div>
      <div >
        <div className=" w-full xl:h-[59px] lg:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px] ">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] lg:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">
            Home/
          </a>{" "}
          <a className="mt-[4px]" href="">
            HRM/
          </a>
          <a className="mt-[4px]" href="">
            Payroll/
          </a>
          <a className="mt-[4px]" href="">
            Salary Setup
          </a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[30px] bg-white font-bodyPop ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium font-leftHeading ">
              Salary Setup
            </h3>
          </div>
          <div className="  w-full p-[20px] ">
            <form action="" id="form2">
              <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                <p className="flex text-[#595995] font-semibold lg:text-[22px] sm:text-[15px]">
                  Employee Name <p className=" text-red-700">*</p>
                </p>
                <select
                  id="countries"
                  className="border-gray-400 border-[1px] rounded-[5px] w-[80%]  dark:placeholder-gray-400 bg-white  px-[12px] p-[5px] text-gray-400"
                >
                  <option selected>Add / Deduct</option>
                  <option value="US">Add</option>
                  <option value="US">Deduct</option>
                </select>
              </div>
              <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                <p className="flex text-[#595995] font-semibold lg:text-[22px] sm:text-[15px]">
                  Salary Type <p className=" text-red-700">*</p>
                </p>
                <input
                  className="w-[80%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px] bg-[#D9D9D9]"
                  type="text"
                  placeholder="Salary Benefits"
                  required
                />
              </div>
              <div className="px-[30px]">
                <div
                  className="w-full border-[1px] border-black  rounded-[15px] flex "
                  style={{
                    background:
                      "linear-gradient(0deg,rgba(46, 46, 72, 0.81)  16.6%, rgba(158, 149, 255, 0.24) 100%)",
                  }}
                >
                    <div className="w-[50%] border-r-[1px] border-black flex justify-center items-center py-[30px] px-[5px]">
                        <div className="lg:h-[301px] sm:h-[150px] ">
                            <div className="w-full flex justify-end lg:mb-[39px]  sm:mb-[16px] pr-[21%] lg:text-[25px] sm:text-[18px]"><span className="border-b-[1px] border-black">Addition</span></div>
                            <div className="w-full flex justify-between mb-[5px]">
                                <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[12px]">Basic</p>
                                <input type="text" className=" xl:w-[60%]  sm:w-[49%] bg-white xl:h-[30px] lg:w-[60%] lg:h-[25px]  md:h-[16px] sm:h-[16px] mb-[4px]" />
                            </div>
                            <div className="w-full flex justify-between mb-[5px]">
                                <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[12px]">100</p>
                                <input type="text" className=" xl:w-[60%]  sm:w-[49%] bg-white xl:h-[30px] lg:w-[60%] lg:h-[25px]  md:h-[16px] sm:h-[16px] mb-[4px]" />
                            </div>
                            <div className="w-full flex justify-between mb-[5px]">
                                <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[12px]">HRA</p>
                                <input type="text" className=" xl:w-[60%]  sm:w-[49%] bg-white xl:h-[30px] lg:w-[60%] lg:h-[25px]  md:h-[16px] sm:h-[16px] mb-[4px]" />
                            </div>
                            <div className="w-full flex justify-between mb-[5px]">
                                <p className="xl:text-[20px] lg:text-[15px] md:text-[12px] sm:text-[12px]">Mobile Recharge</p>
                                <input type="text" className=" xl:w-[60%]  sm:w-[49%] bg-white xl:h-[30px] lg:w-[60%] lg:h-[25px]  md:h-[16px] sm:h-[16px] mb-[4px]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] flex justify-center  py-[30px] px-[5px]">
                        <div className="  ">
                          <div className="flex   mb-[19%]">
                          <div className="w-full flex justify-center lg:mb-[39px] sm:mb-[16px] lg:text-[25px] sm:text-[18px]"><span className="border-b-[1px] border-black">Addition</span></div>
                          </div>
                          <div className="flex ">
                           
                            <p className="lg:mr-[8%] sm:mr-[3%] xl:text-[20px] lg:text-[15px] sm:text-[12px]">Tax</p>
                            <input className="bg-white xl:h-[30px] lg:h-[25px] sm:h-[16px] lg:w-[47%] sm:w-[36%] lg:mr-[20px] sm:mr-[7px]" type="text" />
                            <input type="checkbox" className="bg-transparent  text-transparent lg:mr-[10px] sm:mr-[6px]" />
                            <p className="xl:text-[20px] lg:text-[15px] sm:text-[12px]">Tax Manager</p>
                       
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px] mt-[10px]">
                <p className="flex text-[#595995] font-semibold lg:text-[22px] sm:text-[15px]">
                  Gross Salary 
                </p>
                <input
                  className="w-[80%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                  type="text"
                  required
                />
              </div>
            </form>
          </div>
          <div className="w-full p-[10px] flex justify-center gap-4">
            <button
              type="submit"
              form="form2"
              className="bg-[#629584] text-white w-[106px] h-[46px] rounded-[11px]"
            >
              Reset
            </button>
            <button
              type="submit"
              form="form2"
              className="bg-[#3A6D8C] text-white w-[106px] h-[46px] rounded-[11px]"
            >
              Set
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSalarySetup

