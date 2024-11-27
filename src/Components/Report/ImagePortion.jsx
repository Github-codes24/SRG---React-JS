import React from 'react';
import Bg1 from "../../assets/ReportImages/Backg1.jpeg";
import Logo from "../../assets/ReportImages/logo1-2.png";
import Logo2 from "../../assets/ReportImages/logo2.png";
import Logo3 from "../../assets/ReportImages/logo3.png";

export default function ImagePortion() {
  return (
    <div className="p-4">
      <div
        className="rounded-[28px] flex flex-wrap lg:flex-nowrap justify-between items-center px-4 py-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(66, 202, 96, 0.21) 0%, rgba(151, 195, 200, 0.32) 50%, rgba(15, 90, 154, 0.3) 100%)",
        }}
      >
        {/* Left Section */}
        <div
          className="flex flex-col items-center justify-center w-full lg:w-auto lg:h-auto rounded-[30px] shadow-md p-4 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${Bg1})` }}
        >
          <div className="flex justify-center items-center h-full">
            <img className="w-2/3 sm:w-1/2 lg:w-40" src={Logo} alt="Logo" />
          </div>
          <div className="flex items-center justify-center mt-5 p-2 w-full bg-[#708EAB6B] rounded-[19px]">
            <img className="h-8 md:h-10 lg:h-12 mr-2" src={Logo3} alt="Logo 3" />
            <img className="h-8 md:h-10 lg:h-12" src={Logo2} alt="Logo 2" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center w-full mt-4 lg:mt-0 lg:ml-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#2E2E48]">
              Address
            </h2>
            <h4 className="text-sm md:text-base lg:text-lg text-[#6A6868]">
              22-Oct-2024
            </h4>
          </div>
          <div className="flex flex-wrap md:flex-nowrap text-[#303077] text-sm md:text-base lg:text-lg">
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <p>Shreerangam, Near Shree Dharma</p>
              <p>Sastha Temple,</p>
              <p>Murikkungal P.O, Vellikulangara,</p>
              <p>Pin: 680699</p>
              <p>Thrissur, Kerala</p>
              <p>India</p>
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              <p>Mail - infosrgiskdly@gmail.com</p>
              <p>Mobile No. - +91 7736793283</p>
              <p className="text-center">+91 8891075320</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
