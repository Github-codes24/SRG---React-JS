import React, { useEffect, useState } from "react";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BASE_URL from "../../api";

const Walletrecharge = () => {
  const [formData, setFormData] = useState({
    walletid: "",
    amount: "",
  });

  const [walletData, setWalletData] = useState([]);
  const navigate = useNavigate();

  // Fetch wallet data from API
  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/wallets/all`); // Replace with your API endpoint
        setWalletData(response.data);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };
    fetchWalletData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateVoucherNumber = () => {
    const characters = "0123456789";
    let voucherNumber = "WR";
    for (let i = 0; i < 3; i++) {
      voucherNumber += characters.charAt(
        Math.floor( characters.length)
      );
    }
    return voucherNumber;
  };

  const handleVoucherClick = () => {
    const generatedVoucher = generateVoucherNumber();
    setFormData((prevData) => ({
      ...prevData,
      voucherNumber: generatedVoucher,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/wallets/recharge`, formData);
      alert("Wallet recharged successfully!");
      setFormData({ walletid: "", amount: "" });
      navigate("/wallet/walletledger");
    } catch (error) {
      console.error("Error recharging wallet:", error);
      alert("Failed to recharge wallet. Please try again.");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">
          Home / Bank / Wallets Recharge
        </span>
      </div>

      <div className="bg-white">
        <div className="flex items-center justify-between my-2 bg-white px-2 py-1">
          <h1 className="text-[#878484] text-2xl">Wallets Recharge</h1>

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
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="bankname"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Voucher Number <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              name="voucherNumber"
              placeholder="Voucher Number"
              value={formData.voucherNumber}
              onClick={handleVoucherClick}
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
              readOnly
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="A/C Name "
              className="w-[200px] text-[#595995] font-semibold"
            >
              Date <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="date"
              placeholder="Date "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>

          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Payment Type"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Payment Type <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Payment Type "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Bank"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Bank  <span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Bank Name"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="On Hand Balance "
              className="w-[200px] text-[#595995] font-semibold"
            >
              On Hand Balance  <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              placeholder="On Hand Balance "
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
          <div className="w-full md:flex items-center justify-between my-4 px-8">
            <label
              htmlFor="Remark"
              className="w-[200px] text-[#595995] font-semibold"
            >
              Remark <span className="text-red-600 text-2xl"></span>
            </label>
            <input
              type="text"
              placeholder="Remark"
              className="w-full h-9 p-2 border border-[#D3D1D1] outline-none rounded"
            />
          </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-[#595995]">
                <th className="border px-4 py-2">Wallet Name</th>
                <th className="border px-4 py-2">Ledger Balance</th>
                <th className="border px-4 py-2">Account Head</th>
                <th className="border px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">
                  <select className="w-full h-full" name="">
                  {walletData.map((wallet,index) => (
                  
                    <option value="CSCSRG" selected key={index}>
                      {wallet.walletName}
                    </option>
                ))}
                  </select>
                </td>
                <td className="border px-4 py-2 text-center bg-gray-200">00</td>
                <td className="border px-4 py-2 text-center bg-gray-200">
                  Wallet Balance
                </td>
                <td className="border px-4 py-2 text-center">
                  <input className="w-full h-full outline-none" type="number" onChange={handleInputChange} name="amount"/>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-100 text-[#595995] font-medium">
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center"></td>
                <td className="border px-4 py-2 text-center">Total</td>
                <td className="border px-4 py-2 text-center bg-gray-200"></td>
              </tr>
              {/* Row 3 */}
            </tbody>
          </table>
          <div className="flex items-center justify-center my-4">
            <button className="px-6 py-2 bg-[#3A6D8C] text-white rounded-lg ">
              Save
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Walletrecharge;
