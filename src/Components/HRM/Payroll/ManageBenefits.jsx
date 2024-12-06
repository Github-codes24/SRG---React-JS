import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoHomeOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import BASE_URL from "../../../api";

export default function ManageBenefits() {
  const [benefits, setBenefits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentBenefit, setCurrentBenefit] = useState(null);

  // Fetch all benefits
  const fetchBenefits = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/benefits/getAllBenefits`);
      setBenefits(response.data.data);
    } catch (error) {
      console.error("Error fetching benefits data:", error);
    }
  };

  // Delete a benefit
  const deleteBenefit = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this benefit?");
      if (confirmed) {
        await axios.put(`${BASE_URL}/api/benefits/deleteBenefits/${id}`);
        alert("Benefit deleted successfully!");
        fetchBenefits();
      }
    } catch (error) {
      console.error("Error deleting benefit:", error);
      alert("Failed to delete benefit. Please try again.");
    }
  };

  // Open modal and set current benefit for editing
  const openUpdateModal = (benefit) => {
    setCurrentBenefit(benefit);
    setShowModal(true);
  };

  // Update a benefit
  const updateBenefit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/api/benefits/updateBenefits/${currentBenefit._id}`, {
        salaryBenefits: currentBenefit.salaryBenefits,
        benefitsType: currentBenefit.benefitsType,
      });
      alert("Benefit updated successfully!");
      setShowModal(false);
      fetchBenefits();
    } catch (error) {
      console.error("Error updating benefit:", error);
      alert("Failed to update benefit. Please try again.");
    }
  };

  useEffect(() => {
    fetchBenefits();
  }, []);
  return (
    <div>
      <div className='mb-[11%]'>
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
            Manage Benefits
          </a>
        </div>
        <div className="   rounded-lg pt-[1px] pb-[30px] bg-white ">
          <div className=" h-[53px] border-b-2 border-gray-400 mb-[4px] p-[6px]">
            <h3 className=" flex items-center xl:text-[25px] text-[#878484] lg:text-[20px] lg:font-medium font-leftHeading ">
              Benefit List
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
          <div className="  w-full p-[10px] ">
          <table className="border-collapse border-slate-400 border-2 w-full h-full font-bodyPop text-left">
              <thead>
                <tr className="  text-[#595995]  font-medium  h-[60px]">
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">SL.<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">Benefit<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]"><div className="flex justify-between">Benefit Type<LuArrowUpDown className="w-auto h-[18px]" /></div></th>
                  <th className="border border-slate-300 pl-[8px]">Action</th>
                </tr>
              </thead>
              <tbody className="text-left text-[#636465BD]">
              {benefits.map((benefit, index) => (
<<<<<<< HEAD
                <tr key={index} className="  h-[60px]">
=======
                <tr className="  h-[60px]">
>>>>>>> 4125e96ca6ad18741a9a3478e51425fd1f26b76b
                  <td className="border border-slate-300 pl-[8px]">{index + 1}</td>
                  <td className="border border-slate-300 pl-[8px]">{benefit.salaryBenefits}</td>
                  <td className="border border-slate-300 pl-[8px]">{benefit.benefitsType}</td>
                  <td className="border border-slate-300 pl-[8px]"><div className="flex gap-[4px] w-full justify-left pl-[5px]">
                    <BsPencil onClick={() => openUpdateModal(benefit)} className="bg-[#96CEB4] p-[2px] h-[30px] w-[30px] rounded-[2px] border-[1px] border-[#75A68F]" color="white"/>
                    <FaRegTrashAlt onClick={() => deleteBenefit(benefit._id)} className="bg-[#CB6040] p-[2px] h-[30px] w-[30px] rounded-[2px] border-[#BF2D35] border-[1px]" color="white"/>
                    
                    </div>
                    </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-[100px] flex justify-end items-center pr-[20px]">
            <button className=" border-[2px] xl:w-[100px] sm:w-[80px] rounded-[50px] xl:h-[50px] sm:h-[40px] mr-[4px] border-[#746BD9]">
              <p className="text-[#746BD9]">Previous</p>
            </button>
            <button className="  border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] border-[#746BD9]">
              <p className=" text-[#746BD9]">1</p>
            </button>
            <button className="  border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] border-[#746BD9]">
              <p className=" text-[#746BD9]">2</p>
            </button>
            <button className="  border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] border-[#746BD9]">
              <p className=" text-[#746BD9]">3</p>
            </button>
            <button className="  border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] border-[#746BD9]">
              <p className=" text-[#746BD9]">4</p>
            </button>
            <button className="  border-[2px] rounded-full xl:h-[50px] sm:h-[40px] xl:w-[50px] sm:w-[40px] mr-[4px] border-[#746BD9]">
              <p className=" text-[#746BD9]">5</p>
            </button>
            <button className=" border-[2px] xl:w-[100px] sm:w-[80px] rounded-[50px] xl:h-[50px] sm:h-[40px] border-[#746BD9]">
              <p className=" text-[#746BD9]">Next</p>
            </button>
          </div>
        </div>
      </div>
      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Update Benefit</h2>
            <form onSubmit={updateBenefit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Benefit</label>
                <input
                  type="text"
                  value={currentBenefit.salaryBenefits}
                  onChange={(e) => setCurrentBenefit({ ...currentBenefit, salaryBenefits: e.target.value })}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Benefit Type</label>
                <input
                  type="text"
                  value={currentBenefit.benefitsType}
                  onChange={(e) => setCurrentBenefit({ ...currentBenefit, benefitsType: e.target.value })}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 mr-2 border rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
