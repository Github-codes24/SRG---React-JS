import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import BASE_URL from "../../../api";

export default function AddEmployee() {
  const [desOption, setDesOption] = useState([]);

  const optionFetching = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/hrm/designation/getDesignation`
      ); // Replace with your API URL
      if (!response.ok) {
        throw new Error("Failed to fetch designations");
      }
      const data = await response.json();
      setDesOption(data.data.designations); // Assuming `data` is an array of designations
      console.log(data.data.designations)
    } catch (error) {
      console.error("Error fetching designations:", error);
    }
  };

  useEffect(() => {
    optionFetching();
  }, []);
  return (
    <div>
      <div>
        <div className=" w-full xl:h-[59px] sm:h-[37px] flex justify-end items-center xl:mb-[14px] sm:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px]">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] sm:w-[21px] sm:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]">Home/</a> <a className="mt-[4px]">HRM/</a>
          <a className="mt-[4px]">Add Employee</a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[1px] bg-white ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] sm:text-[20px] sm:font-medium font-leftHeading ">
              Add Employee
            </h3>
          </div>
          <form action="" id="form1">
            <div className="w-full flex px-2 font-bodyPop xl:text-[19px] sm:text-[16px]  flex-wrap ">
              <div className="w-1/2   p-1   min-w-[382px]">
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    First Name <p className=" text-red-700">*</p>
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Designation{" "}
                  </p>
                  <select
                    id="designation"
                    required
                    className="border-gray-400 border-[1px] rounded-[5px] w-[59%] dark:placeholder-gray-400 bg-white px-[12px] p-[5px] text-gray-400"
                  >
                    <option disabled selected>
                      Select Option
                    </option>
                    {/* Validate and map the array */}
                    {desOption.length > 0 ? (
                      desOption.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.designation}
                        </option>
                      ))
                    ) : (
                      <option disabled>No options available</option>
                    )}
                  </select>
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Rate Type{" "}
                  </p>
                  <select
                    id="countries"
                    required
                    className="border-gray-400 border-[1px] rounded-[5px] w-[59%]  dark:placeholder-gray-400 bg-white  px-[12px] p-[5px] text-gray-400"
                  >
                    <option selected>Select Option</option>
                    <option value="US">Hourly</option>
                    <option value="US">Salary</option>
                  </select>
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">Email </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Address Line 1{" "}
                  </p>
                  <textarea
                    className="border-[1px] border-gray-300 w-[59%] rounded-[5px] px-[12px] h-[75px] p-[5px] text-gray-400"
                    name="comment"
                    form="usrform"
                    placeholder="Address Line 2"
                    required
                  ></textarea>
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">Picture </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px] text-gray-400"
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    placeholder="browse"
                    
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">City </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="City"
                    required
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Residence Number{" "}
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="Residence Number"
                    required
                  />
                </div>
              </div>
              <div className="w-1/2  p-1 min-w-[382px]">
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">Last Name</p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Mobile Number
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="Mobile Number"
                    required
                    minLength={10}
                    maxLength={10}
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Hourly Rate/Salary
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="Hourly Rate/Salary"
                    required
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Blood Group
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="Blood Group"
                    required
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Address Line 2{" "}
                  </p>
                  <textarea
                    className="border-[1px] border-gray-300 w-[59%] rounded-[5px] px-[12px] h-[75px] p-[5px]"
                    name="comment"
                    form="usrform"
                    placeholder="Address Line 2"
                    
                  ></textarea>
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">Country </p>
                  <select
                    id="countries"
                    className="border-gray-400 border-[1px] rounded-[5px] w-[59%]  dark:placeholder-gray-400 bg-white  px-[12px] p-[5px] text-gray-400"
                  >
                    <option selected disabled>
                      Select Option
                    </option>
                    <option value="US">Afghanistan</option>
                    <option value="US">Bangladesh</option>
                    <option value="US">Cambodia</option>
                    <option value="US">Denmark</option>
                    <option value="US">France</option>
                    <option value="US">Germany</option>
                    <option value="US">India</option>
                  </select>
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Postal Code
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                    type="text"
                    placeholder="Postal Code"
                    required
                    max={9}
                  />
                </div>
                <div className="flex  mb-2 w-full   items-center justify-between pr-[45px] p-[12px]">
                  <p className="flex text-[#595995] font-semibold">
                    Joining Date
                  </p>
                  <input
                    className="w-[59%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px] text-gray-400"
                    type="date"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="w-full p-[10px] flex justify-center">
            <button
              type="submit"
              form="form1"
              className="bg-[#3A6D8C] text-white w-[106px] h-[46px] rounded-[11px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
