import React, { useState } from "react";
import Logo from "../../assets/DashboardImages/logo1 1.png";
// import Profile from "../../assets/DashboardImages/Profile.png";
import {
  RiBankLine,
  RiShoppingCart2Line,
  RiUserSettingsLine,
  RiRepeatLine,
  RiTeamLine,
} from "react-icons/ri";
import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { PiNotebookLight } from "react-icons/pi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { FcServices } from "react-icons/fc";
import { BiSolidUserAccount } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { GiExpense } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import { MdMoneyOff } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const navigate = useNavigate()
  // Individual states for dropdowns
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [masterOpen, setMasterOpen] = useState(false);
  const [customerOpen, setCustomerOpen] = useState(false);
  const [bankOpen, setBankOpen] = useState(false);
  const [walletsOpen, setWalletsOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [accountReportOpen, setAccountReportOpen] = useState(false);
  const [hrmOpen, setHrmOpen] = useState(false);
  const [attendenceOpen, setAttendenceOpen] = useState(false);
  const [payrollOpen, setPayrollOpen] = useState(false);
  const [officeLoanOpen, setOfficeLoanOpen] = useState(false);
  const [returnServiceOpen, setReturnServiceOpen] = useState(false);
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-full bg-[#2E2E48] ">
      <div className="p-4">
        {/* <img src={Logo} alt="logo" /> */}
      </div>
      <aside
        className={`bg-[#2E2E48] text-white h-screen mb-10 p-4 transition-width duration-300 ${
          isExpanded ? "w-64" : "w-16"
        } flex flex-col overflow-hidden`}
      >
        <div className="relative">
          <button
            onClick={toggleSidebar}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-3 shadow-md"
          >
            {isExpanded ? (
              <CgClose className="text-xl" />
            ) : (
              <IoIosArrowForward className="text-xl" />
            )}
          </button>
        </div>

        <ul className="space-y-1 overflow-auto h-auto ">
          {/* Dashboard */}
          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1"
            onClick={() => setDashboardOpen(!dashboardOpen)}
          >
            <div className="flex items-center gap-2">
              <AiOutlineDashboard className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg" onClick={()=> navigate("/")}>Dashboard</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${dashboardOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>

          {/* Master */}
          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1"
            onClick={()=>navigate('/master')}
          >
            <div className="flex items-center gap-2">
              <PiNotebookLight className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg"   >Master</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${masterOpen ? "rotate-180" : ""}`} onClick={() => setMasterOpen(!masterOpen)}
              />
            )}
          </li>
          {masterOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate('/master')}>
                Add Ledger
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate('/master/manageledger')}>
                Manage Ledger
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate('/master/AddAccountHead')}>
                Add Account Head
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/AccountList")}>
                Account List
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/AddWebsite")}>
                Add Website
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/websiteledger")}>
                Website Ledger
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/AddServiceBranch")}>
                Add Service Branch
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/ManageServiceBranch")}>
                Manage Service Branch
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/AddServiceCategory")}>
                Add Service Category
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/AddService")}>
                Add Service
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/ManageService")}>
                Manage Service
              </p>

              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/setserviceprovider")}>
                Set Service Provider
              </p>

              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/master/manageserviceprovider")}>
                Manage Service
              </p>
            </div>
          )}

          {/* Customer */}
          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
            onClick={() => setCustomerOpen(!customerOpen)}
          >
            <div className="flex items-center gap-2">
              <FaRegCircleUser className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg text-white">Customer</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl text-white ${
                  customerOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </li>

          {customerOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/customer/addcustomer")}>
                Add Customer
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/customer/customerlist")}>
                Customer List
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/customer/creditcustomer")}>
                Credit Customer
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/customer/paidcustomer")}>
                Paid Customer
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/customer/customerledger")}>
                Customer Ledger
              </p>
              <p className=" py-3 px-4 rounded-lg cursor-pointer" onClick={()=>navigate("/customer/customeradvance")}>
                Customer Advance
              </p>
            </div>
          )}

          {/* Bank */}
          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
            onClick={() => setBankOpen(!bankOpen)}
          >
            <div className="flex items-center gap-2">
              <RiBankLine className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg" onClick={()=>navigate("/bank")}>Bank</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${bankOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {bankOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={() => navigate("/bank")}>
                Add New Bank
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=> navigate("/bank/managebank")}>
                Manage Bank
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=> navigate("/bank/banktransaction")}>
                Bank Transaction
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=> navigate("/bank/bankledger")}>
                Bank Ledger
              </p>
            </div>
          )}

          {/* Wallets */}
          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
            onClick={() => setWalletsOpen(!walletsOpen)}
          >
            <div className="flex items-center gap-2 " onClick={()=>navigate("/wallet")}>
              <MdAccountBalanceWallet className="text-2xl text-[#62D0F1]"  />
              {isExpanded && <p className="text-lg">Wallets</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${walletsOpen ? "rotate-180" : ""}`}

              />

            )}
          </li>
          {walletsOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/wallet")}>
                Add Wallets
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/wallet/managewallet")}>
                Manage Wallets
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/wallet/walletrecharge")}>
                Wallet Recharge
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/wallet/walletrefund")}>
                Wallet Refund
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/wallet/walletledger")}>
                Wallet Ledger
              </p>
            </div>
          )}

          {/* Purchase */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
            onClick={() => setPurchaseOpen(!purchaseOpen)}
          >
            <div className="flex items-center gap-2 " onClick={()=>navigate("/purchase/purchaseservice")}>
              <BiPurchaseTag className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Purchase</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${purchaseOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {purchaseOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/purchase/purchaseservice")}>
                Purchase Invoice Services
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/purchase/purchasematm")}>
                Purchase Invoice MATM
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/purchase/purchasemanage")}>
                Manage Purchase
              </p>
            </div>
          )}

          {/* Service */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            <div className="flex items-center gap-2 ">
              <FcServices className="text-2xl text-[#62D0F1]" onClick={()=>navigate("")} />
              {isExpanded && <p className="text-lg">Service</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${serviceOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {serviceOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer"  onClick={()=>navigate("/service/jobcardnew")}>
                Job Card New
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/service/jobcardledger")}>
                Job Card Ledger
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/service/serviceinvoice")}>
                Service Invoice
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/service/matmservice")}>
                MATM Service Invoice
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/service/manageserviceinvoice")}>
                Manage Service Invoice
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/service/paymentcollection")}>
                Payment Collection
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/service/invoicelist")}>
                Invoice List All
              </p>
            </div>
          )}

          {/* Accounts */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
            onClick={() => setAccountsOpen(!accountsOpen)}
          >
            <div className="flex items-center gap-2 " onClick={()=>navigate("/accounts/chartaccount")}>
              <BiSolidUserAccount className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Accounts</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${accountsOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {accountsOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/chartaccount")}>
                Chart of Account
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/openingbalance")}>
                Opening Balance{" "}
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/customerreceive")}>
                Customer Receive
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/cashtransfer")}>
                Cash To Cash Transfer
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/receiptsvoucher")}>
                Receipt Voucher
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/paymentvoucher")}>
                Payment Voucher
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/contravoucher")}>
                Contra Voucher
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/journalvoucher")}>
                Journal Voucher
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/voucherapproval")}>
                Voucher Approved
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accounts/closingaccount")}>
                Daily Closing Account
              </p>
            </div>
          )}

          {/* Reports */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setReportOpen(!reportOpen)}
          >
            <div className="flex items-center gap-2 ">
              <TbReportAnalytics className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Reports</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${reportOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {reportOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/closingreport")} >
                Closing Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/todaysreport")}>
                Todays Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/servicesalesreport")}>
                Service Sales Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/userwisesalesreport")}>
                User Wise Sales Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/duereport")}>
                Due Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/purchasereport")}>
                Purchase Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Sales Return
              </p>

              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Todays Customer Reciept
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Income & Expenditure Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Receipts & Payment Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Service Detailed Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Service Item Details Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Top Customer
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/report/")}>
                Business Liquidity
              </p>
            </div>
          )}

          {/*Account Reports */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setAccountReportOpen(!accountReportOpen)}
          >
            <div className="flex items-center gap-2 ">
              <TbReportAnalytics className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Account Reports</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${reportOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {accountReportOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer"  onClick={()=>navigate("/accountreport/cashbook")}>
                Cash Book 
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer"  onClick={()=>navigate("/accountreport/bankbook")}>
                Bank Book
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport/generalledger")}>
                General Ledger
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport/trialbalance")}>
                Trail Balance
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport/profitreport")}>
                Profit Loss
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport/cashflowreport")}>
                Cash Flow Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport/")}>
                Balance Sheet
              </p>

              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Account Summery
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Income & Expenditure Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Receipts & Payment Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Service Detailed Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Service Item Details Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Top Customer
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/accountreport")}>
                Business Liquidity
              </p>
            </div>
          )}
          {/* Human REsource */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setHrmOpen(!hrmOpen)}
          >
            <div className="flex items-center gap-2 ">
              <GiExpense className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Human Resource</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${hrmOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {hrmOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={ () => navigate("/hrm/adddesignation") }>
                Add Designation
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={ () => navigate("/hrm/managedesignation") }>
                Manage Designation
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={ () => navigate("/hrm/addemployee") }>
                Add Employee
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={ () => navigate("/hrm/manageemployee") }>
                Manage Employee
              </p>
            </div>
          )}

          {/* Attendance */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setAttendenceOpen(!attendenceOpen)}
          >
            <div className="flex items-center gap-2 ">
              <CgProfile className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Attendence</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${attendenceOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {attendenceOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/attendence/addexpenseitem")}>
                Attendence
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/attendence/manageexpenseitem")}>
                Manage Attendence
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/attendence/addexpense")}>
                Attendence Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/attendence/datewiseattendence")}>
                Date Wise Attendence Report
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/attendence/employyewiseattendence")}>
                Employee Wise Attendence
              </p>
            </div>
          )}

          {/* Payroll */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setPayrollOpen(!payrollOpen)}
          >
            <div className="flex items-center gap-2 ">
              <GiExpense className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Payroll</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${payrollOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {payrollOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/addbenefits")}>
                Add Benefits
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/managebenefits")}>
                Manage Benefits
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/salarysetup")}>
                Salary Setup
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/managesalarysetup")}>
                Manage Salary Setup
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/salarygenerate")}>
                Salary Generate
              </p>

              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/employeesalarypayment")}>
                Employee Salary Payment
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/payroll/managesalarygenerate")}>
                Manage Salary Generate
              </p>
            </div>
          )}

          {/* Office Loan */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setOfficeLoanOpen(!officeLoanOpen)}
          >
            <div className="flex items-center gap-2 ">
              <ImOffice className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Office Loan</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${officeLoanOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {officeLoanOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/officeloan/addperson")}>
                Add Person
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/officeloan/manageperson")}>
                Manage Person
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/officeloan/addofficeloan")}>
                Add Office Loan
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/officeloan/addpayments")}>
                Add Payments
              </p>
            </div>
          )}

          {/* Return Service */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setReturnServiceOpen(!returnServiceOpen)}
          >
            <div className="flex items-center gap-2 " onClick={() =>navigate("/returnservice")}>
              <FaServicestack className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Return Service</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${returnServiceOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {returnServiceOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={() => navigate("/returnservice/servicereturn")}>
                Service Return
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={() =>navigate("/returnservice/")}>
                Customer Return List
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Add Employee
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={() =>navigate("/returnservice/walletreturn")}>
                Wallet Return List
              </p>
            </div>
          )}

          {/* Expense Service */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setExpenseOpen(!expenseOpen)}
          >
            <div className="flex items-center gap-2 ">
              <MdMoneyOff className="text-2xl text-[#62D0F1]"  onClick={()=>navigate("/expense/addexpenseitem")} />
              {isExpanded && <p className="text-lg">Expense</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${expenseOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {expenseOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/expense/addexpenseitem")}>
                Add Expense Item
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/expense/manageexpenseitem")}>
                Manage Expense Item
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/expense/addexpense")}>
                Add Expense
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/expense/manageexpense")}>
                Manage Expense
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer" onClick={()=>navigate("/expense/expensestatment")}>
                Expense Statement
              </p>
            </div>
          )}

          {/* Setting */}

          <li
            className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
            onClick={() => setSettingOpen(!settingOpen)}
          >
            <div className="flex items-center gap-2 ">
              <SlSettings className="text-2xl text-[#62D0F1]" />
              {isExpanded && <p className="text-lg">Setting</p>}
            </div>
            {isExpanded && (
              <IoIosArrowDown
                className={`text-xl ${settingOpen ? "rotate-180" : ""}`}
              />
            )}
          </li>
          {settingOpen && isExpanded && (
            <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                SMS Configure
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                User Permission Setting
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Add Roll
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Roll List
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                User Assign Roll
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Manage Company
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Add User
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Manage Users
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Language
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Add Currency
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Update Setting
              </p>

              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Print Setting
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                Mail Setting
              </p>
              <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
                App Setting
              </p>
            </div>
          )}
        </ul>

        <div>
          <div className="flex justify-center">
            <div>
              {/* <img src={Profile} alt="proflie" /> */}
            </div>
            <div></div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

