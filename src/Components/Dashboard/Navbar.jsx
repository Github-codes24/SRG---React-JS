import React from "react";
import Logo from "../../assets/DashboardImages/logo1 1.png";
import alarm from "../../assets/DashboardImages/Vector (4).png";
import setting from "../../assets/DashboardImages/Group 390.png";
import weight from "../../assets/DashboardImages/weight_icons.png";
import payment from "../../assets/DashboardImages/payment.png";
import matm from "../../assets/DashboardImages/matm.png";
import invoice_list from "../../assets/DashboardImages/invoice list.png";
import purchase from "../../assets/DashboardImages/Purchase.png";
import customer from '../../assets/DashboardImages/customer.png'

const Navbar = () => {
  return (
    <div className="flex bg-white mx-2  items-center justify-between">
      {/* Logo */}
      <nav
        className="
     text-white p-4 flex bg"
      >
        <h1 className="text-xl font-bold ">
          <img src={Logo} alt="" />
        </h1>
      </nav>
      {/* Navbars */}
      <div className=" hidden md:flex items-center gap-4">
        <div className="flex items-center border border-[#9E95FF] py-3 px-2 gap-3 rounded-xl text-[#9E95FF]">
          <img src={weight} alt="" />
          <p>Service Invoice</p>
        </div>
        <div className="flex items-center border border-[#9E95FF] py-3 px-2 gap-3 rounded-xl text-[#9E95FF] ">
          <img src={matm} alt="" />
          <p>MATM Invoice</p>
        </div>
        <div className="flex items-center border border-[#9E95FF] py-3 px-2 gap-3 rounded-xl text-[#9E95FF]">
          <img src={purchase} alt="" />
          <p>Purchase</p>
        </div>
        <div className="flex items-center border border-[#9E95FF] py-3 px-2 gap-3 rounded-xl text-[#9E95FF]">
          <img src={payment} alt="" />
          <p>Payment Collection</p>
        </div>
        <div className="flex items-center border border-[#9E95FF] py-3 px-2 gap-3 rounded-xl text-[#9E95FF]">
          <img src={invoice_list} alt="" />
          <p>Invoice List</p>
        </div>
        <div className="flex items-center border border-[#9E95FF] py-3 px-2 gap-3 rounded-xl text-[#9E95FF]">
          <img src={customer} alt="" />
          <p>Customer Receive</p>
        </div>
      </div>

      {/* Setting  */}
      <div className="flex items-center gap-x-4">
        <img src={alarm} alt="" />
        <img src={setting} alt="" />
      </div>
    </div>
  );
};

export default Navbar;


