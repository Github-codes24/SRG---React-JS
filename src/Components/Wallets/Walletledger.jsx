import React, { useEffect, useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BASE_URL from "../../api";

const Walletledger = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [walletName, setWalletName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(`${BASE_URL}/api/wallets/all`);
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Filter data based on search
  const handleSearch = () => {
    const filtered = data.filter((item) => {
      const isNameMatch = walletName
        ? item.walletName.toLowerCase().includes(walletName.toLowerCase())
        : true;
      const isFromDateMatch = fromDate
        ? new Date(item.date) >= new Date(fromDate)
        : true;
      const isToDateMatch = toDate
        ? new Date(item.date) <= new Date(toDate)
        : true;

      return isNameMatch && isFromDateMatch && isToDateMatch;
    });
    setFilteredData(filtered);
  };

  // Calculate grand totals
  const calculateTotals = (field) => {
    return filteredData.reduce(
      (acc, item) => acc + (parseFloat(item[field]) || 0),
      0
    );
  };

  const grandTotalReceipts = calculateTotals("receipt");
  const grandTotalPayments = calculateTotals("payments");
  const grandTotalBalance = calculateTotals("balance");

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Manage Ledger
        </span>
      </div>

      <div className="flex items-center justify-between my-5 bg-white py-3 px-2">
        <div className="">
          <label
            htmlFor="walletname"
            className="text-[#595995] font-medium mx-2"
          >
            Wallet name
          </label>
          <input
            type="text"
            className="py-2 rounded px-3"
            placeholder="Wallet Name"
            value={walletName}
            onChange={(e) => setWalletName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="from" className="font-medium mx-2 text-[#595995]">
            From
          </label>
          <input
            type="date"
            className="py-2 rounded px-3"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="to" className="font-medium mx-2 text-[#595995]">
            To
          </label>
          <input
            type="date"
            className="py-2 rounded px-3"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-[#024CAA] text-white px-5 py-1 rounded">
            <CiSearch fontSize={"1.5rem"} /> Search
          </button>
          <button className="flex items-center gap-1 bg-[#FF6500] text-white px-5 py-1 rounded">
            <FiPrinter fontSize={"1.5rem"} /> Print
          </button>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex items-center justify-between my-2 bg-white px-2 py-1">
          <h1 className="text-[#878484] text-2xl">Wallet Ledger</h1>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-x-2">
            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet")}
            >
              <IoIosAddCircle className="text-2xl" />
              Add Wallet
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletrecharge")}
            >
              <IoIosAddCircle className="text-2xl" />
              Wallet Recharge
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletrefund")}
            >
              <FaRegMoneyBill1 className="text-2xl" />
              Wallet Refund
            </button>

            <button
              className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
              onClick={() => navigate("/wallet/walletledger")}
            >
              <SlNotebook className="text-2xl" />
              Wallet Ledger
            </button>
          </div>
        </div>
        <div className="overflow-x-auto ">
        {loading ? (
            <div className="flex justify-center items-center py-10">
            <div className="loader border-t-4 border-b-4 border-purple-700 w-10 h-10 rounded-full animate-spin"></div>
          </div>
          ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-white border text-[#595995]">
                <th className="py-2 border-b">Date</th>
                <th className="py-2 border-b">Wallet Name</th>
                <th className="py-2 border-b">From Account</th>
                <th className="py-2 border-b">Voucher No.</th>
                <th className="py-2 border-b">Remarks</th>
                <th className="py-2 border-b">Receipt</th>
                <th className="py-2 border-b">Payments</th>
                <th className="py-2 border-b">Balance</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-2 border-b">{item.date || "NA"}</td>
                  <td className="py-2 border-b">{item.walletName || "NA"}</td>
                  <td className="py-2 border-b">{item.fromAccount || "NA"}</td>
                  <td className="py-2 border-b">{item.voucherNo || "NA"}</td>
                  <td className="py-2 border-b">{item.remarks || "NA"}</td>
                  <td className="py-2 border-b">{item.receipt || "NA"}</td>
                  <td className="py-2 border-b">{item.payments || "NA"}</td>
                  <td className="py-2 border-b">{item.balance}</td>
                </tr>
              ))}

              {/* Grand Total Row */}
              <tr className="bg-white font-bold">
                <td className="py-2 border-b text-center" colSpan={5}>
                  Grand Total
                </td>
                <td className="py-2 border-b">
                  {grandTotalReceipts.toFixed(2)}
                </td>
                <td className="py-2 border-b">
                  {grandTotalPayments.toFixed(2)}
                </td>
                <td className="py-2 border-b">
                  {grandTotalBalance.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Walletledger;
