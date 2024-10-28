import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineHome } from 'react-icons/md';
// import androidlogo from '../../assets/Android/androidlogo.png';
// import QR from '../../assets/QR.png';

const AppSetting = () => {
  return (
    <div>
      <>
        <div className="flex items-center justify-end py-2 mt-1">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="text-base md:text-xl ml-2">
            Home / Setting / Software Setting / App Setting
          </span>
        </div>
        <div className="min-w-full bg-white p-4 mt-0 rounded-lg">
          <h3 className="text-xl font-extralight mt-0">App Setting</h3>
          <hr className="mt-1" />
          <div className="flex justify-evenly w-full max-w-4xl p-4">
            <div className="flex flex-col items-center">
              <div className="border-2 border-black w-32 h-32 flex flex-col items-center rounded-lg">
                <img  alt="Localhost Server QR" className="w-[150px] h-[150px]" />
              </div>
              <label className="text-[#373853] mt-2">Localhost Server QR Code</label>
            </div>

            <div className="flex flex-col items-center">
              <div className="border-2 border-black w-32 h-32 flex flex-col items-center rounded-lg">
                <img alt="Online Server QR" className="w-[150px] h-[150px]" />
              </div>
              <span className="text-[#373853] mt-2">Online Server QR Code</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="border-2 border-black w-32 h-32 flex flex-col items-center rounded-lg">
                <img  alt="Hotspot IP/URL QR" className="w-[150px] h-[150px]" />
              </div>
              <span className="text-[#373853] mt-2">Hotspot IP/URL QR Code</span>
            </div>
          </div>
          <hr className="mt-1" />
          <div className="flex justify-between mt-2">
            <div className="w-1/2">
              {/* Left Section */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <label htmlFor="localhostUrl" className="text-[#595995] font-medium w-60">Localhost Server URL</label>
                  <input 
                    type="text" 
                    id="localhostUrl" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    placeholder="https://192.168.1.1.153/saleserp_9.7" 
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="onlineUrl" className="text-[#595995] font-medium w-60">Online Server URL</label>
                  <input 
                    type="text" 
                    id="onlineUrl" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    placeholder="https://192.168.1.1.153/saleserp_9.7" 
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="hotspotIp" className="text-[#595995] font-medium w-60">Connected Hotspot IP/URL</label>
                  <input 
                    type="text" 
                    id="hotspotIp" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
                    placeholder="https://192.168.1.1.153/saleserp_9.7" 
                  />
                </div>
              </div>
              <br />
            </div>
            {/* Right Section */}
            <div className="h-36 w-96 bg-gradient-to-r from-[#DDE4F0A6] to-[#DDE4F0A6] rounded-lg flex flex-col items-center">
              <div className="mt-3">
                <label htmlFor="id" className="text-[#629584] px-14">Check our Sales ERP App Demo From</label>
              </div>
              <div className="mt-3">
                <label htmlFor="id" className="text-[#37A000] px-32">Google Play Store</label>
              </div>
              <div className="mt-3 flex justify-center">
                <img  alt="Android Logo" className="w-10 h-10" />
              </div>
            </div>
          </div>
          {/* Adjusted Save Changes Button */}
          <div className="flex justify-center mt-4">
            <button type="button" className="px-4 py-2 bg-[#3A6D8C] text-white rounded-lg">
              Generate
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default AppSetting;
