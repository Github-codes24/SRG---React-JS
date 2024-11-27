import React from 'react'
import { MdOutlineHome, MdOutlineLocalPrintshop } from 'react-icons/md'
import bg from "../../assets/DashboardImages/WhatsApp Image 2024-10-29 at 11.19.18 AM.jpeg";
import Logo from "../../assets/DashboardImages/logo1 1.png";

const BalanceSheet = () => {
  return (
    <div>
        <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Account Report / Balance Sheet
        </span>
      </div>

      <div className="bg-white p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-4">
            <div className="flex items-center justify-center gap-x-2">
              <label htmlFor="" className='font-semibold text-base text-[#595995]'>
                Start Date
              </label>
              <input type="date" className='border-[#D3D1D1] border px-2 py-1 rounded-md' />
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <label htmlFor="" className='font-semibold text-base text-[#595995]'>
                To Date
              </label>
              <input type="date" className='border-[#D3D1D1] border px-2 py-1 rounded-md' />
            </div>
          </div>
          <button className="px-5 py-1 bg-[#FF6500] text-white rounded-md flex items-center gap-x-1 my-2">
            <MdOutlineLocalPrintshop fontSize={"1.3rem"} /> Print
          </button>
          
        </div>

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

            {/* Table  */}
            <div className="overflow-x-auto my-1">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-1 text-left w-[70%]">Particulars</th>
            <th className="border border-gray-300 px-4 py-1 text-left ">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">Particulars</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">Account Receivant</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">adv exp</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          {/* Continue similarly for each row up to Row 25 */}
          <tr className=''>
            <td className="border border-gray-300 px-4 py-1 text-end text-[#363636] font-semibold">Total Current Assets</td>
            <td className="border border-gray-300 px-4 py-1 outline text-end font-semibold">0.00</td>
          </tr>

          {/* Non current assets */}
            
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] font-semibold">Non Current Assets</td>
            <td className="border border-gray-300 px-4 py-1"></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">Inventory</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">Service Receive</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          
          <tr className=''>
            <td className="border border-gray-300 px-4 py-1 text-end text-[#363636] font-semibold">Total Non Current Assets</td>
            <td className="border border-gray-300 px-4 py-1 outline text-end font-semibold">0.00</td>
          </tr>

            {/* Current Liablities */}

          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] font-semibold">Current Liablities</td>
            <td className="border border-gray-300 px-4 py-1"></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">Account Payable</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text-[#7E829A]">Employee Ledger</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          
          <tr className=''>
            <td className="border border-gray-300 px-4 py-1 text-end text-[#363636] font-semibold">Total Current Liablities</td>
            <td className="border border-gray-300 px-4 py-1 outline text-end font-semibold">0.00</td>
          </tr>

            {/* Non Current Liablites */}

          <tr className=''>
            <td className="border border-gray-300 px-4 py-1 text-start text-[#363636] font-semibold">Non Current Liablities</td>
            <td className="border border-gray-300 px-4 py-1  text-end font-semibold"></td>
          </tr>
          <tr className=''>
            <td className="border border-gray-300 px-4 py-1 text-end text-[#363636] font-semibold">Total Non Current Liablities</td>
            <td className="border border-gray-300 px-4 py-1 outline text-end font-semibold"></td>
          </tr>

            {/* Service Sale */}

          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Current Liablities</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Service Income</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-end font-medium">Total Income</td>
            <td className="border border-gray-300 px-4 py-1 outline text-end">0.00</td>
          </tr>

            {/* Buying a car for the site */}

          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Buying a car for the site</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Default Expense</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Employee Salary</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Petrol Expense</td>
            <td className="border border-gray-300 px-4 py-1"><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-start font-medium">Service Purchase</td>
            <td className="border border-gray-300 px-4 py-1 "><input type="number" className='w-full '/></td>
          </tr>
          <tr className='h-5'>
            <td className="border border-gray-300 px-4 py-1 text[#363636] text-end font-medium">Total Expense</td>
            <td className="border border-gray-300 px-4 py-1 outline text-end">0.00</td>
          </tr>

        </tbody>
      </table>
    </div>

      </div>
    </div>
  )
}

export default BalanceSheet