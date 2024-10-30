import React from "react";
import { MdOutlineHome, MdOutlineLocalPrintshop } from "react-icons/md";
import bg from "../../assets/DashboardImages/WhatsApp Image 2024-10-29 at 11.19.18 AM.jpeg";
import Logo from "../../assets/DashboardImages/logo1 1.png";
const CashFlowReport2 = () => {
  return (
    <div>
      <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Account Report / Cash Flow Reprts
        </span>
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

        <p className="text-xl text-center">Cash Flow Statment</p>
        <p className="text-center text-[#787878]">On 2024-09-01 To 2024-09-29</p>
        <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-[#363636] font-semibold" style={{ width: '70%' }}>
              Particulars
            </th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 text-center text-[#363636] font-semibold">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Opening Cash and Equivalent:</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 1" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Total Opening Cash & Cash Equivalent 
Cashflow from Operating Activities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 2" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Cash generator from Operating Activity before Changing in Opereating Assets & Liabilities
Cashflow Non Operating Activities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 3" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Cash generator from Non Operating Activity before Changing in Opereating Assets & Liabilities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 4" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Increase/Decrease in Operating Assets & Liabilities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 5" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Total Increase/Decrease</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 6" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Net Cash From Operating/Non Operating Activities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 7" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Cash Flow from Investing Activities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 8" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Net Cash Used Investing Activities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 9" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Cash Flow from Fanancing Activities</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 10" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Net Cash Used Fanancing Activities </td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 11" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Net Cash Inflow/Outflow(Profit Loss 0)</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 12" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Closing cash & Cash Equivalent:</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 13" />
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Total Closing Cash & Cash Equivalent</td>
            <td className="px-4 py-2 border border-gray-300">
              <input type="number" className="border border-gray-300 p-1 w-full rounded" placeholder="Enter amount 14" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        <hr />
        <div className="flex items-center justify-evenly text-base">
            <p>Prepared By</p>
            <p>Account</p>
            <p>Authorized Signature</p>
            <p>Chairman</p>
        </div>
        <div className="flex items-center justify-center my-5">
        <button className="px-5 py-1 bg-[#FF6500] text-white rounded-md flex items-center gap-x-1 my-2">
            <MdOutlineLocalPrintshop fontSize={"1.3rem"} /> Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashFlowReport2;
