import React from 'react'
import { IoHomeOutline } from "react-icons/io5";

const PrintSetting = () => {
  return (
    <div>  
       <div className="flex items-center p-8 justify-end">
          <IoHomeOutline className=" text-[#3A6D8C]" />
          <span className='text-[#5C5858]' >Home / Setting / Software Setting / Print Setting</span>
        </div>
      <div className="flex justify-center items-center ">
    <div className="bg-white w-[1117px] p-4 rounded-lg shadow-md  ">
      <div className='border-b-2 w-full'>        <h2 className="text-2xl text-[#656565]  font-semibold mb-2">Print Setting</h2>
      </div>

        <form className='p-2'>
            <div className="mb-4 justify-between flex">
                <label className="block text-gray-700 font-bold mb-2">
                    Header<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                    <input
                        type="text"
                        className="border rounded-xl p-1 w-[754px] h-[45px]"
                        value="230"
                    />
                    <span className="ml-2">px</span>
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Footer<span className="text-red-500">*</span>
                </label>
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        className="border rounded-xl p-1 w-[754px] h-[45px]"
                        value="130"
                    />
                    <span className="ml-2">px</span>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-[#3A6D8C] text-white font-normal py-2 px-4 rounded-md"
                >
                    Save Changes
                </button>
            </div>
        </form>
    </div>
</div>
);</div>
  )
}

export default PrintSetting