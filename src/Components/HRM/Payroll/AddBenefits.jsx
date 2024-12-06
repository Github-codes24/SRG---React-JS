import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import BASE_URL from "../../../api";

export default function AddBenefits() {
  const [salaryBenefits, setSalaryBenefits] = useState("");
  const [benefitsType, setBenefitsType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    setLoading(true);

    const payload = {
      salaryBenefits,
      benefitsType,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/benefits/createBenefits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Benefits successfully added!");
        setSalaryBenefits("");
        setBenefitsType("");
      } else {
        alert(`Error: ${data.message || "Failed to add benefits"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message || "An error occurred"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-[25%]">
        <div className=" w-full xl:h-[59px] lg:h-[37px] sm:h-[37px] flex justify-end items-center xl:mb-[14px] lg:mb-[6px] sm:mb-[6px] tracking-[2px] xl:text-[21px] pr-[15px] ">
          <IoHomeOutline className="xl:w-[30px] xl:h-[34px] lg:w-[21px] sm:w-[21px] lg:h-[21px] sm:h-[21px] text-[#3A6D8C]" />
          <a className="mt-[4px]" href="">
            Home/
          </a>
          <a className="mt-[4px]" href="">
            HRM/
          </a>
          <a className="mt-[4px]" href="">
            Payroll/
          </a>
          <a className="mt-[4px]" href="">
            Add Benefits
          </a>
        </div>
        <div className="rounded-lg pt-[1px] pb-[30px] bg-white font-bodyPop">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium sm:text-[20px] sm:font-medium font-leftHeading ">
              Add Benefits
            </h3>
          </div>
          <div className="w-full p-[20px]">
            <form onSubmit={handleSubmit} id="form2">
              <div className="flex mb-2 w-full items-center justify-between pr-[45px] p-[12px]">
                <p className="flex text-[#595995] font-semibold text-[22px]">
                  Salary Benefits <p className=" text-red-700">*</p>
                </p>
                <input
                  className="w-[80%] border-gray-400 border-[1px] rounded-[5px] px-[12px] p-[5px]"
                  type="text"
                  placeholder="Salary Benefits"
                  value={salaryBenefits}
                  onChange={(e) => setSalaryBenefits(e.target.value)}
                  required
                />
              </div>
              <div className="flex mb-2 w-full items-center justify-between pr-[45px] p-[12px]">
                <p className="flex text-[#595995] font-semibold text-[22px]">
                  Benefits Type <p className=" text-red-700">*</p>
                </p>
                <select
                  id="countries"
                  className="border-gray-400 border-[1px] rounded-[5px] w-[80%] dark:placeholder-gray-400 bg-white px-[12px] p-[5px] text-gray-400"
                  value={benefitsType}
                  onChange={(e) => setBenefitsType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Type
                  </option>
                  <option value="Add">Add</option>
                  <option value="Deduct">Deduct</option>
                </select>
              </div>
            </form>
          </div>
          <div className="w-full p-[10px] flex justify-center gap-4">
            <button
              type="reset"
              form="form2"
              onClick={() => {
                setSalaryBenefits("");
                setBenefitsType("");
              }}
              className="bg-[#629584] text-white w-[106px] h-[46px] rounded-[11px]"
            >
              Reset
            </button>
            <button
              type="submit"
              form="form2"
              disabled={loading}
              className={`${
                loading ? "bg-gray-500" : "bg-[#3A6D8C]"
              } text-white w-[106px] h-[46px] rounded-[11px]`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
