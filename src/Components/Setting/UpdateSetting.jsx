import React from 'react'
import { MdOutlineHome } from 'react-icons/md';
// import image31 from "../Setting/settings/image31.png"
// import logo12 from "../Setting/settings/logo12.png"

// import logo13 from "../Setting/settings/logo13.png"

const UpdateSetting = () => {
  return (
    <div className=''>
       <div className="flex items-center justify-end py-6 ">
          <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
          <span className="  ml-2">
          Home / Setting / Software Setting / Update Setting
          </span>
        </div> <div className="flex items-center justify-center">
    <div className=" w-[1117px] bg-white p-8 rounded-lg shadow-md  ">
      <div className='border-b-2'>
        <h2 className="text-2xl font-semibold mb-2 text-[#656565]">Update Setting</h2>
        </div>
        <form className='flex-col p-4 '>
            <div className=" flex justify-between mb-4">
                <label className="block text-gray-700 font-medium mb-2">Logo <span className="text-red-500">*</span></label>
                <div className=" items-center">
                <input type="file" className='border w-[745px] h-[40px] rounded-md p-1' />
                    {/* <img src={logo13} alt="Logo" className="mt-2"/> */}
                   
                    <br />

                </div>
                
            </div>
            <div className=" flex justify-between mb-4">
                <label className="block text-gray-700 font-medium mb-2">Sale Logo <span className="text-red-500">*</span></label>
                <div className=" items-center">
                <input type="file" className='border w-[745px] rounded-md h-[40px] p-1' />
                    {/* <img src={logo12} alt="Logo" className="  mt-2"/> */}
                   
                    <br />

                </div>
                
            </div>
            <div className=" flex justify-between mb-4">
                <label className="block text-gray-700 font-medium mb-2">Fevicon <span className="text-red-500">*</span></label>
                <div className=" items-center">
                <input type="file" className='border rounded-md w-[745px] h-[40px] p-1' />
                    {/* <img  src={image31} alt="Logo" className="mt-2 h-[103px] w-[105px]"/> */}
                   
                    <br />

                </div>
                
            </div>
            <div className=" flex justify-between items-center mb-4">
                <label className="block text-gray-700 font-medium mb-2">Currency <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="Rupees Rs." readOnly />
            </div>
            <div className="flex justify-between items-center mb-4">
                <label className="block text-gray-700 font-medium mb-2">Time Zone <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="Asia/Karachi" readOnly />
            </div>
            <div className=" flex justify-between items-center mb-4">
                <label className="block text-gray-700 font-medium mb-2">Currency Position <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="Left" readOnly />
            </div>
            <div className="mb-4 flex justify-between items-center">
                <label className="block text-gray-700 font-medium mb-2">Footer Text <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="Copyright© 2024 Websutibility. All rights reserved." readOnly />
            </div>
            <div className=" flex justify-between items-center mb-4">
                <label className="block text-gray-700 font-medium mb-2">Language <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="English" readOnly />
            </div>
            <div className="mb-4 flex justify-between items-center">
                <label className="block text-gray-700 font-medium mb-2">LTR/RTR <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="LTR" readOnly />
            </div>
            <div className="mb-4 flex justify-between items-center">
                <label className="block text-gray-700 font-medium mb-2">Discount Type <span className="text-red-500">*</span></label>
                <input type="text" className="w-[745px] bg-gray-100 text-gray-500 px-4 py-2 rounded" value="Fixed Dis." readOnly />
          
            </div>
           
        </form>
        <div className='flex justify-center items-center py-4 ml-[40%] rounded-lg text-white bg-[#3A6D8C] w-[135px]'><button className=''>Save Changes</button></div>
    </div>
</div>
</div>
  )
}

export default UpdateSetting