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

