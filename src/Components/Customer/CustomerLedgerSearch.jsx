import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";

const CustomerLedgerSearch = () => {
  const navigate = useNavigate();
  return (
    <div  className="m-5" >
       <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl text-[#5C5858]">
        Home  /  Customer  / Customer Ledger
        </span>
      </div>
      <div className="flex items-center justify-between mt-3 bg-[#F9FAFB] py-3 px-4 rounded shadow pb-10 pt-10">
        <div>
          <label
            htmlFor="walletname"
            className="text-[#595995] font-medium mx-2"
          >
            Customer <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="py-2 rounded px-3 border border-gray-300"
            placeholder="Wallet Name"
          />
        </div>
        <div>
          <label htmlFor="from" className="font-medium mx-2 text-[#595995]">
            From
          </label>
          <input
            type="date"
            className="py-2 rounded px-3 border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="to" className="font-medium mx-2 text-[#595995]">
            To
          </label>
          <input
            type="date"
            className="py-2 rounded px-3 border border-gray-300"
          />
        </div>

        <div className="flex items-center gap-3 ">
          <button className="flex items-center gap-1 bg-[#024CAA] text-white px-5 py-2 rounded-lg hover:bg-[#023A82]">
            <CiSearch fontSize={"1.5rem"} /> Search
          </button>
          <button className="flex items-center gap-1 bg-[#FF6500] text-white px-5 py-2 rounded-lg hover:bg-[#E55C00]">
            <FiPrinter fontSize={"1.5rem"} /> Print
          </button>
        </div>
      </div>

      <div className="bg-white mt-10">
        <div className="flex items-center justify-between my-2 bg-white px-2 py-1">
          <h1 className="text-[#878484] text-2xl">Add Customer</h1>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-x-4">
            <button
              className="bg-[#746BD9] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              onClick={() => navigate("#")}
            >
              <IoIosAddCircle className="text-xl" />
              Add Customer
            </button>

            <button
              className="bg-[#746BD9] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              onClick={() => navigate("#")}
            >
              <MdMiscellaneousServices className="mr-2 h-6 w-6" />
              Manage Customer
            </button>

            <button
              className="bg-[#746BD9] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              onClick={() => navigate("#")}
            >
              <FaRegMoneyBill1 className="text-xl" />
              Credit Customer
            </button>

            <button
              className="bg-[#746BD9] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              onClick={() => navigate("#")}
            >
              <SlNotebook className="text-xl" />
              Paid Customer
            </button>
          </div>
        </div>
<div className=" text-[#878484] border-solid border-2 pb-10">
    <h2 className="m-2">Customer ID : 1</h2>
    <div className="text-[#878484] text-center justify-center ">
    <h2>Arpit Deshpande</h2>
    <h2>Address : Plot No 88 Janki Nagar  Wardha Road </h2>
    <h2>Print Date: 03/10/2024 09:41:22</h2>
    </div>
</div>
        <div className="overflow-x-auto ">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300 text-[#595995]">
                 
                <th className="py-2 px-4 border-r border-gray-300">Date</th>
                <th className="py-2 px-4 border-r border-gray-300">
                Discription
                </th>
                <th className="py-2 px-4 border-r border-gray-300">
                  Voucher No.
                </th>
                <th className="py-2 px-4 border-r border-gray-300">Remarks</th>
                <th className="py-2 px-4 border-r border-gray-300">Receipt</th>
                <th className="py-2 px-4 border-r border-gray-300">Payments</th>
                <th className="py-2 px-4 border-gray-300">Balance</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  
                  date: "2024-10-01",
                  discription: "Wallet A",
                  voucher: "VN001",
                  remarks: "Payment Received",
                  receipt: "RCP001",
                  payments: "Rs 5000.00",
                  balance: "Rs 5000.00",
                },
                // {
                //   id: 2,
                //   date: "2024-10-02",
                //   wallet: "Wallet B",
                //   account: "Account 2",
                //   voucher: "VN002",
                //   remarks: "Transfer",
                //   receipt: "RCP002",
                //   payments: "Rs 2000.00",
                //   balance: "Rs 3000.00",
                // },
                // {
                //   id: 3,
                //   date: "2024-10-03",
                //   wallet: "Wallet A",
                //   account: "Account 1",
                //   voucher: "VN003",
                //   remarks: "Invoice Payment",
                //   receipt: "RCP003",
                //   payments: "Rs 1500.00",
                //   balance: "Rs 4500.00",
                // },
                // {
                //   id: 4,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
                // {
                //   id: 5,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
                // {
                //   id: 6,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
                // {
                //   id: 7,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
                // {
                //   id: 8,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
                // {
                //   id: 9,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
                // {
                //   id: 10,
                //   date: "2024-10-04",
                //   wallet: "Wallet C",
                //   account: "Account 3",
                //   voucher: "VN004",
                //   remarks: "Withdrawal",
                //   receipt: "RCP004",
                //   payments: "Rs 1000.00",
                //   balance: "Rs 3500.00",
                // },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  
                  <td className="py-2 px-4 border border-gray-300">
                    {row.date}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {row.discription}
                  </td>
                  
                  <td className="py-2 px-4 border border-gray-300">
                    {row.voucher}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {row.remarks}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {row.receipt}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {row.payments}
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    {row.balance}
                  </td>
                </tr>
              ))}
              <tr className="bg-white font-semibold text-[#595995]">
                <td className="py-2 px-4 border border-gray-300"></td>
                <td className="py-2 px-4 border border-gray-300"></td>
                <td className="py-2 px-4 border border-gray-300"></td>
                <td className="py-2 px-4 border border-gray-300">
                  Grand Total
                </td>
                <td className="py-2 px-4 border border-gray-300">Rs 7860.00</td>
                <td className="py-2 px-4 border border-gray-300">
                  Rs 728362.00
                </td>
                <td className="py-2 px-4 border border-gray-300">Rs 3869.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerLedgerSearch;
