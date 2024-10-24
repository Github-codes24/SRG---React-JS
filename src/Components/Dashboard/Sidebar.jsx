import React, { useState } from 'react';
import { RiBankLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuWallet2 } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import { RiRepeatLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; 
import { AiOutlineDashboard } from "react-icons/ai";
import { PiNotebookLight } from 'react-icons/pi';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { GiExpense } from 'react-icons/gi';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true); 

  
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`bg-[#2E2E48] text-white h-full p-4 transition-width duration-300 ${isExpanded ? 'w-64' : 'w-16'} flex flex-col`}>
      <div className="relative">
        {/* Toggle Button */}
        <button 
          onClick={toggleSidebar} 
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 shadow-md"
        >
          {isExpanded ? <IoIosArrowBack className="text-xl" /> : <IoIosArrowForward className="text-xl" />}
        </button>
        
        {/* Logo Section */}
        <div className="flex items-center justify-center py-4">
          {isExpanded ? (
            <h1 className="text-2xl font-bold"></h1> 
          ) : (
            <span className="text-2xl font-bold"></span> 
          )}
        </div>
      </div>

      <ul className='my-2'>
        <li className="flex rounded-2xl border px-2 py-2 my-1  border-[#8B8BC945] items-center justify-between">
          <li className='flex items-center gap-2'>
            <AiOutlineDashboard className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Dashboard</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>

        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <PiNotebookLight className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Master</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        
        
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <FaRegCircleUser className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Customer</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <RiBankLine className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Bank</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <LuWallet2 className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Wallets</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <RiShoppingCart2Line className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Purchase</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <RiUserSettingsLine className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Service</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <MdAccountBalanceWallet className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Accounts</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <TbReportAnalytics className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Report</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <RiTeamLine className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>HRM</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <RiRepeatLine className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Return Services</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <GiExpense className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Expense</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        <li className="flex rounded-2xl border px-2 py-2 my-1 border-[#8B8BC945] items-center justify-between">
          <li className='flex  items-center gap-2 '>
            <FaRegCircleUser className='text-2xl text-[#62D0F1]' />
            {isExpanded && <p className='text-lg'>Attendence</p>}
          </li>
          {isExpanded && <IoIosArrowDown className='text-xl' />}
        </li>
        
      </ul>
    </aside>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import Logo from "../../assets/DashboardImages/logo1 1.png";
// // import Profile from "../../assets/DashboardImages/Profile.png";
// import {
//   RiBankLine,
//   RiShoppingCart2Line,
//   RiUserSettingsLine,
//   RiRepeatLine,
//   RiTeamLine,
// } from "react-icons/ri";
// import {
//   IoIosArrowDown,
//   IoIosArrowBack,
//   IoIosArrowForward,
// } from "react-icons/io";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { PiNotebookLight } from "react-icons/pi";
// import { MdAccountBalanceWallet } from "react-icons/md";
// import { BiPurchaseTag } from "react-icons/bi";
// import { FcServices } from "react-icons/fc";
// import { BiSolidUserAccount } from "react-icons/bi";
// import { TbReportAnalytics } from "react-icons/tb";
// import { GiExpense } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { SlSettings } from "react-icons/sl";
// import { MdMoneyOff } from "react-icons/md";
// import { FaServicestack } from "react-icons/fa6";
// import { ImOffice } from "react-icons/im";
// import { CgClose } from "react-icons/cg";

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   // Individual states for dropdowns
//   const [dashboardOpen, setDashboardOpen] = useState(false);
//   const [masterOpen, setMasterOpen] = useState(false);
//   const [customerOpen, setCustomerOpen] = useState(false);
//   const [bankOpen, setBankOpen] = useState(false);
//   const [walletsOpen, setWalletsOpen] = useState(false);
//   const [purchaseOpen, setPurchaseOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);
//   const [accountsOpen, setAccountsOpen] = useState(false);
//   const [reportOpen, setReportOpen] = useState(false);
//   const [accountReportOpen, setAccountReportOpen] = useState(false);
//   const [hrmOpen, setHrmOpen] = useState(false);
//   const [attendenceOpen, setAttendenceOpen] = useState(false);
//   const [payrollOpen, setPayrollOpen] = useState(false);
//   const [officeLoanOpen, setOfficeLoanOpen] = useState(false);
//   const [returnServiceOpen, setReturnServiceOpen] = useState(false);
//   const [expenseOpen, setExpenseOpen] = useState(false);
//   const [settingOpen, setSettingOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="h-full bg-[#2E2E48]">
//       <div className="p-4">
//         <img src={Logo} alt="logo" />
//       </div>
//       <aside
//         className={`bg-[#2E2E48] text-white h-screen mb-10 p-4 transition-width duration-300 ${
//           isExpanded ? "w-64" : "w-16"
//         } flex flex-col overflow-hidden`}
//       >
//         <div className="relative">
//           <button
//             onClick={toggleSidebar}
//             className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-3 shadow-md"
//           >
//             {isExpanded ? (
//               <CgClose className="text-xl" />
//             ) : (
//               <IoIosArrowForward className="text-xl" />
//             )}
//           </button>
//         </div>

//         <ul className="space-y-1 overflow-auto h-auto ">
//           {/* Dashboard */}
//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1"
//             onClick={() => setDashboardOpen(!dashboardOpen)}
//           >
//             <div className="flex items-center gap-2">
//               <AiOutlineDashboard className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Dashboard</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${dashboardOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>

//           {/* Master */}
//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1"
//             onClick={() => setMasterOpen(!masterOpen)}
//           >
//             <div className="flex items-center gap-2">
//               <PiNotebookLight className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Master</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${masterOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {masterOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Ledger
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Ledger
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Account Head
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Account List
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Website
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Website Ledger
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Service Branch
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Service Branch
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Service Category
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Service
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Service
//               </p>

//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Set Service Provider
//               </p>

//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Service
//               </p>
//             </div>
//           )}

//           {/* Customer */}
//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
//             onClick={() => setCustomerOpen(!customerOpen)}
//           >
//             <div className="flex items-center gap-2">
//               <FaRegCircleUser className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg text-white">Customer</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl text-white ${
//                   customerOpen ? "rotate-180" : ""
//                 }`}
//               />
//             )}
//           </li>

//           {customerOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Customer
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Customer List
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Credit Customer
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Paid Customer
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Customer Ledger
//               </p>
//               <p className=" py-3 px-4 rounded-lg cursor-pointer">
//                 Customer Advance
//               </p>
//             </div>
//           )}

//           {/* Bank */}
//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
//             onClick={() => setBankOpen(!bankOpen)}
//           >
//             <div className="flex items-center gap-2">
//               <RiBankLine className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Bank</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${bankOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {bankOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add New Bank
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Bank
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Bank Transaction
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Bank Ledger
//               </p>
//             </div>
//           )}

//           {/* Wallets */}
//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
//             onClick={() => setWalletsOpen(!walletsOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <MdAccountBalanceWallet className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Wallets</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${walletsOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {walletsOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Wallets
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Wallets
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Wallet Recharge
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Wallet Refund
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Wallet Ledger
//               </p>
//             </div>
//           )}

//           {/* Purchase */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
//             onClick={() => setPurchaseOpen(!purchaseOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <BiPurchaseTag className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Purchase</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${purchaseOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {purchaseOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Purchase Invoice Services
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Purchase Invoice MATM
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Purchase
//               </p>
//             </div>
//           )}

//           {/* Service */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
//             onClick={() => setServiceOpen(!serviceOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <FcServices className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Service</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${serviceOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {serviceOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Job Card New
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Job Card Ledger
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Invoice
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 MATM Service Invoice
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Service Invoice
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Payment Collection
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Invoice List All
//               </p>
//             </div>
//           )}

//           {/* Accounts */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D]"
//             onClick={() => setAccountsOpen(!accountsOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <BiSolidUserAccount className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Accounts</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${accountsOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {accountsOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Chart of Account
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Opening Balance{" "}
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Customer Receive
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Cash To Cash Transfer
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Reciept Voucher
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Payment Voucher
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Contra Voucher
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Journal Voucher
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Voucher Approved
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Daily Closing Account
//               </p>
//             </div>
//           )}

//           {/* Reports */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setReportOpen(!reportOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <TbReportAnalytics className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Reports</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${reportOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {reportOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Closing Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Todays Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Sales Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 User Wise Sales Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Due Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Purchase Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Sales Return
//               </p>

//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Todays Customer Reciept
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Income & Expenditure Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Receipts & Payment Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Detailed Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Item Details Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Top Customer
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Business Liquidity
//               </p>
//             </div>
//           )}

//           {/*Account Reports */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setAccountReportOpen(!accountReportOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <TbReportAnalytics className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Account Reports</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${reportOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {accountReportOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Cash Book
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Bank Book
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 General Ledger
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Trail Balance
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Profit Loss
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Cash Flow Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Balance Sheet
//               </p>

//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Account Summery
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Income & Expenditure Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Receipts & Payment Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Detailed Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Item Details Report
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Top Customer
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Business Liquidity
//               </p>
//             </div>
//           )}
//           {/* Human REsource */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setHrmOpen(!hrmOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <GiExpense className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Human Resource</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${hrmOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {hrmOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Designation
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Designation
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Employee
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Employee
//               </p>
//             </div>
//           )}

//           {/* Attendance */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setAttendenceOpen(!attendenceOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <CgProfile className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Attendence</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${attendenceOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {attendenceOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Designation
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Designation
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Employee
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Employee
//               </p>
//             </div>
//           )}

//           {/* Payroll */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setPayrollOpen(!payrollOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <GiExpense className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Payroll</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${payrollOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {payrollOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Benefits
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Benefits
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Salary Setup
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Salary Setup
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Salary Generate
//               </p>

//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Employee Salary Payment
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Salary Generate
//               </p>
//             </div>
//           )}

//           {/* Office Loan */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setOfficeLoanOpen(!officeLoanOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <ImOffice className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Office Loan</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${officeLoanOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {officeLoanOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Person
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Person
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Office Loan
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Payments
//               </p>
//             </div>
//           )}

//           {/* Return Service */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setReturnServiceOpen(!returnServiceOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <FaServicestack className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Return Service</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${returnServiceOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {returnServiceOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Service Return
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Customer Return List
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Employee
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Wallet Return List
//               </p>
//             </div>
//           )}

//           {/* Expense Service */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setExpenseOpen(!expenseOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <MdMoneyOff className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Expense</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${expenseOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {expenseOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Expense Item
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Expense Item
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Expense
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Expense
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Expense Statement
//               </p>
//             </div>
//           )}

//           {/* Setting */}

//           <li
//             className="flex items-center justify-between cursor-pointer rounded-2xl border-2 border-[#7A7A97] px-2 py-1 bg-[#2E2E48] hover:bg-[#6B688D] no-scrollbar"
//             onClick={() => setSettingOpen(!settingOpen)}
//           >
//             <div className="flex items-center gap-2 ">
//               <SlSettings className="text-2xl text-[#62D0F1]" />
//               {isExpanded && <p className="text-lg">Setting</p>}
//             </div>
//             {isExpanded && (
//               <IoIosArrowDown
//                 className={`text-xl ${settingOpen ? "rotate-180" : ""}`}
//               />
//             )}
//           </li>
//           {settingOpen && isExpanded && (
//             <div className=" bg-[#6F6C90] rounded-2xl text-white text-sm text-center ">
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 SMS Configure
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 User Permission Setting
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Roll
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Roll List
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 User Assign Roll
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Company
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add User
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Manage Users
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Language
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Add Currency
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Update Setting
//               </p>

//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Print Setting
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 Mail Setting
//               </p>
//               <p className=" py-3 px-4 border-b-2 border-[#2E2E48] cursor-pointer">
//                 App Setting
//               </p>
//             </div>
//           )}
//         </ul>

//         <div>
//           <div className="flex justify-center">
//             <div>
//               {/* <img src={Profile} alt="proflie" /> */}
//             </div>
//             <div></div>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Sidebar;

