import React from 'react'
import { MdOutlineHome } from 'react-icons/md'

const ManageCompany = () => {
  return (
    <div>
        <>
        <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl text-[#3A6D8C]" />
        <span className="text-base md:text-xl">
          Home / Setting / Software Setting / Manage Company
        </span>
      </div>
      <div className="bg-white p-4 rounded-lg mt-1">
        <div className="flex justify-between items-center space-x-4">
          <h3 className="text-xl font-extralight">Manage Company</h3>
        </div>
            <hr className='mt-2'/>
            <div className="overflow-x-hidden mt-2">
    <table className="min-w-full bg-white border border-gray-300">
        <thead>
            <tr className=" text-gray-700">
                <th className="py-4 px-6 border text-[#595995] border-gray-300">SL.</th>
                <th className="py-4 px-6 border text-[#595995] border-gray-300">Company Name</th>
                <th className="py-4 px-6 border text-[#595995] border-gray-300">Website</th>
                <th className="py-4 px-6 border text-[#595995] border-gray-300">Mobile</th>
                <th className="py-4 px-6 border text-[#595995] border-gray-300">WhatsApp No</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="py-28 px-6 border border-gray-300">1</td>
                <td className="py-28 px-6 border border-gray-300">Example Company</td>
                <td className="py-28 px-6 border border-gray-300">www.example.com</td>
                <td className="py-28 px-6 border border-gray-300">+1234567890</td>
                <td className="py-28 px-6 border border-gray-300">+0987654321</td>
            </tr>
         
        </tbody>
    </table>
</div>
<div className="overflow-x-scroll mt-2">
    </div>
     </div>
        </>
      
    </div>
  )
}

export default ManageCompany
