import React from "react";
import { MdOutlineHome } from "react-icons/md";

const GeneralLedger = () => {
  return (
    <div>
      <div className="flex items-center justify-end mb-1">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl ml-2">
          Home / Account Report / Trial Balance
        </span>
      </div>
        

    </div>
  );
};

export default GeneralLedger;
