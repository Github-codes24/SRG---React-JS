import React from "react";
import { MdOutlineHome } from "react-icons/md";
import bg from "../../assets/DashboardImages/WhatsApp Image 2024-10-29 at 11.19.18 AM.jpeg";
import Logo from "../../assets/DashboardImages/logo1 1.png";

const AccountSummary = () => {
  return (
    <div className="overflow-y-auto">
      <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Account Report / Account Summary
        </span>
      </div>

      <div className="">
        <div>
          <div
            className=" rounded-[28px] 2xl:h-[319px] 2xl:w-full 2xl:pl-[41px] 2xl:py-[19px] flex justify-between items-center 2xl:pr-[53px] xl:p-[11px] xl:pr-[33px] xl:pl-[25] lg:p-[11px] lg:pr-[14px] lg:pl-[25] lg:h-[278px]  md:p-[11px]  md:pr-[14px] md:pl-[25] md:h-[278px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(66, 202, 96, 0.21) 0%, rgba(151, 195, 200, 0.32) 50%, rgba(15, 90, 154, 0.3) 100%)",
            }}
          >
            <div
              className="div1 2xl:h-full 2xl:w-[528px] p-[22px] rounded-[30px] bg-cover bg-no-repeat shadow-md shadow-stone-500 xl:w-[405px] xl:h-[240px] lg:w-[334px] lg:h-[201px] lg:p-[20px] md:w-[334px] md:h-[201px] md:p-[20px] "
              style={{ backgroundImage: `${bg}` }}
            >
              <div className=" 2xl:h-[143px] w-full  flex justify-center items-center xl:h-[115px] lg:h-[115px] md::h-[115px] ">
                <img className=" h-[108px]]" src={Logo} alt="" />
              </div>
              <div className=" 2xl:h-[63px] w-full 2xl:mt-[28px]  rounded-[19px] flex justify-center items-center p-[5px] xl:h-[53px] xl:mt-[19px] lg:h-[41px] lg:mt-[15px] md:h-[41px] md:mt-[15px] bg-[#708EAB6B]">
                <img className="h-full mr-[3px]" src={Logo} alt="" />
              </div>
            </div>
            <div className="div2 2xl:w-[618px] p-px xl:w-[485px] xl:h-[235px] lg:w-[361px] lg:h-[184px] md:w-[361px] md:h-[184px]">
              <div className=" text-center flex justify-between h-[73px] xl:h-[57px] lg:h-[30px]">
                <div className=" h-full w-[56%]">
                  <h2 className=" 2xl:text-[37px] text-right xl:text-[35px] text-[#2E2E48] font-medium ">
                    Address
                  </h2>
                </div>
                <div className="w-1/5 xl:flex xl:items-center  lg:flex lg:items-center md:flex md:items-center">
                  <h4 className=" 2xl:text-[20px] text-right xl:text-[16px] lg:text-[12px] md:text-[12px] text-[#6A6868]">
                    22-Oct-2024
                  </h4>
                </div>
              </div>
              <div className="flex 2xl:text-[17px] xl:text-[14px] lg:text-[11px] md:text-[11px]  text-[#303077]">
                <div className=" w-1/2 text-left font-medium">
                  <p>Shreerangam, Near Shree Dharma</p>
                  <p>Sastha Temple,</p>
                  <p>Murikkungal P.O, Vellikulangara,</p>
                  <p>Pin : 680699</p>
                  <p>Thrissur, Kerala</p>
                  <p>India</p>
                </div>
                <div className=" w-1/2 text-left font-medium">
                  <p>Mail - infosrgiskdly@gmail.com</p>
                  <p></p>
                  <p>Mobile No.- +91 7736793283</p>
                  <p className=" text-center">+91 8891075320</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#C6D9E6] my-2">
          <p className="text-center p-1 text-xl uppercase font-semibold">
            Account Summary
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-1">
                    Date : From
                  </td>
                  <td className="border border-gray-300 px-4 py-1">1-Mar-24</td>
                  <td className="border border-gray-300 px-4 py-1">To</td>
                  <td className="border border-gray-300 px-4 py-1">1-Mar-24</td>
                  <td className="border border-gray-300 px-4 py-1">
                    <button className="px-3 py-1 bg-[#303077] rounded-md text-white">
                      Search
                    </button>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-1 text-[#303077]">
                    Account Section
                  </td>
                  <td className="border border-gray-300 px-4 py-1">Cash</td>
                  <td className="border border-gray-300 px-4 py-1">Bank</td>
                  <td className="border border-gray-300 px-4 py-1">Wallet</td>
                  <td className="border border-gray-300 px-4 py-1 text-blue-700 font-semibold">
                    Total
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Payments Summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Cash Payment
                    </td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 text-red-500 font-semibold">
                      0
                    </td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1 text-blue-700 font-semibold">
                      0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Opening Balance summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Opening Cash Blance
                    </td>
                    <td className="border border-gray-300 px-4 py-1">2000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">2000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Opening Bank Blance
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">5000</td>
                    <td className="border border-gray-300 px-4 py-1">5000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Opening Wallet Blance
                    </td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold uppercase text-red-500">
                      Total Opening Balance summary
                    </td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">2000</td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Sales Summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Cash Sale
                    </td>
                    <td className="border border-gray-300 px-4 py-1">500</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Bank Sale
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Wallet Balance
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold uppercase text-red-500">
                      Total sales
                    </td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">2000</td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Purchase */}
            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                purchase Summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Cash Purchase{" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-1">500</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Bank Purchase{" "}
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Wallet Purchase
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold uppercase text-red-500">
                      Total Purchase
                    </td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">2000</td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Transaction Summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Bank Transfer
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      Bank Deposit
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Receipt summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Advance From Customer
                    </td>
                    <td className="border border-gray-300 px-4 py-1">500</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Credit Received
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Excess Cash Receipt
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Excess Cash Receipt
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold uppercase text-red-500">
                      Total Receipt
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">4000</td>
                    <td className="border border-gray-300 px-4 py-1">1000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Credit Summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Outstanding Credit
                    </td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      Credit pending
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      50
                    </td>
                  </tr>
                  <tr className="bg-white text-red-500">
                    <td className="border border-gray-300 px-4 py-1  font-semibold uppercase">
                      Total credit
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      0
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Expense Summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Office Expense
                    </td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold ">
                      Home Expense
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1 ">
                      50
                    </td>
                  </tr>
                  
                  <tr className="bg-white ">
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      Chitty Expense
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1 ">
                      0
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="border border-gray-300 px-4 py-1  font-semibold uppercase text-red-500">
                      Total Expense
                    </td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1  ">
                      100
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Closing Balance summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Closing Cash Balance
                    </td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                    <td className="border border-gray-300 px-4 py-1">1500</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold ">
                      Closing Bank Balance
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1 ">
                      150
                    </td>
                  </tr>
                  
                  <tr className="bg-white ">
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      Closing Wallet Balance
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1 ">
                      0
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="border border-gray-300 px-4 py-1  font-semibold uppercase text-red-500">
                      total closing balance
                    </td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1  ">
                      100
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <p className="text-xl uppercase font-semibold text-center ">
                Profit / Loss summary
              </p>
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold">
                      Total Revenue (Sales + Receipts)
                    </td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                    <td className="border border-gray-300 px-4 py-1">1500</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">100</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-1 font-semibold ">
                      Total Purchase + Expense
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1 ">
                      150
                    </td>
                  </tr>
                  
                  <tr className="bg-white ">
                    <td className="border border-gray-300 px-4 py-1  font-semibold">
                      Net Profit/ Loss
                    </td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1 ">
                      0
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <td className="border border-gray-300 px-4 py-1  font-semibold ">
                      PROFIT [Sales - Purchase]
                    </td>
                    <td className="border border-gray-300 px-4 py-1">50</td>
                    <td className="border border-gray-300 px-4 py-1">0</td>
                    <td className="border border-gray-300 px-4 py-1"></td>
                    <td className="border border-gray-300 px-4 py-1  ">
                      100
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
