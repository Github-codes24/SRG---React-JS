import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
const ChartAccount = () => {
  return (
    <div>
      <div className="flex items-center justify-end my-2">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Accounts / Chart of Account
        </span>
      </div>

      <div className="bg-white p-3 rounded-md">
        {/*  */}
        <div className="flex items-center">
          <div className="">
            <p>
              {" "}
              <MdKeyboardArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-semibold text-base">Head Name</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-semibold text-base">
                Opening-balance
              </p>
              <p className="text-[#355B8B] font-semibold text-base">Balance</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-3">
          <div className="">
            <p>
              {" "}
              <MdKeyboardArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-semibold text-base">Assets</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-semibold text-base">
              56,00.00
              </p>
              <p className="text-[#355B8B] font-semibold text-base">3,55426,14562</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Current Assets</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
               56,00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">36,45,20.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Non-current Assets</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
              0.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">-3600450,00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              {/* <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "} */}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-semibold text-base">Equity</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-semibold text-base">
                00.00
              </p>
              <p className="text-[#355B8B] font-semibold text-base">00.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <p>
              {" "}
              <MdKeyboardArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-semibold text-base">Experience</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-semibold text-base">
                00.00
              </p>
              <p className="text-[#355B8B] font-semibold text-base">8,120.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Buying a car for a site</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">0.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Default expense</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">12,00.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Employee salary</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">1100.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Petrol expenses</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">200.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-3">
          <div className="">
            <p>
              {" "}
              <MdKeyboardArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-semibold text-base">Income</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-semibold text-base">
              56,00.00
              </p>
              <p className="text-[#355B8B] font-semibold text-base">424,422.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Product sales</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">427,620</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Service Income</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base ">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">-3125.00</p>
            </div>
          </div>
        </div>
        <div className="flex items-center my-4 ml-3">
          <div className="">
            <p>
              {" "}
              <MdKeyboardArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-semibold text-base">Liablities</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-semibold text-base">
              56,0000.00
              </p>
              <p className="text-[#355B8B] font-semibold text-base">3,55426,14562</p>
            </div>
          </div>
        </div>

        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Current Liablities</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             5200,00,00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">0.00</p>
            </div>
          </div>
        </div>

        <div className="flex items-center my-4 ml-7">
          <div className="">
            <p>
              {" "}
              <MdOutlineSubdirectoryArrowRight fontSize={"1.3rem"} />{" "}
            </p>
          </div>
          <div className="flex items-center justify-between border px-3 rounded-md py-1 w-full">
            <p className="text-[#355B8B] font-normal text-base">Head Name</p>
            <div className="flex items-center gap-x-20 ">
              <p className="text-[#355B8B] font-normal text-base">
             00.00
              </p>
              <p className="text-[#355B8B] font-normal text-base">0.00</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ChartAccount;
