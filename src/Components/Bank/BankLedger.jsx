import React from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'
import { GrTransaction } from 'react-icons/gr'
import { IoIosAddCircle } from 'react-icons/io'
import { MdOutlineHome } from 'react-icons/md'
import { RiBankLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/DashboardImages/logo1 1.png"

const BankLedger = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div className="flex items-center justify-end">
        <MdOutlineHome className="text-2xl" />
        <span className="text-base md:text-xl">Home / Bank / Bank ledger</span>
      </div>
      <div className="buttons gap-2 md:flex items-center justify-between mt-3">
        <p className='text-2xl text-[#878484]'>Bank Ledger</p>
      <div className='flex items-center gap-2'>
      <button className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2" onClick={() => navigate("/")}>
          {" "}
          
           < IoIosAddCircle className='text-2xl'/> Add new Bank
        </button>
        <button className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2" onClick={() => navigate("/banktransaction")}>
          {" "}
          <GrTransaction className="text-2xl" />
          Bank Transaction
        </button>
        <button
          className="bg-[#746BD9] text-white px-1 py-3 rounded-xl flex items-center justify-center gap-2"
          onClick={() => navigate("/managebank")}
        >
          <RiBankLine className="text-2xl" /> Manage Bank
        </button>
      </div>
      </div>

      <form className='md:flex items-center justify-between bg-white p-3 rounded-xl my-2'>
  <div className='flex items-center gap-4 w-full'>
    <label htmlFor="bank" className='text-[#595995] text-base md:text-xl font-semibold'>Bank</label>
    <select id="bank" className='w-1/3 border-[2px] border-[#D3D1D1] h-10 rounded-lg p-2'>
      <option value="">Select One</option>
      <option value="bankOne">Bank One</option>
      <option value="bankTwo">Bank Two</option>
    </select>
  </div>

  <div className=' md:flex items-center'>
    <div className="from flex items-center gap-6">
      <label htmlFor="fromDate" className='text-[#595995] font-semibold text-base md:text-xl'>From</label>
      <input type="date" id="fromDate" className='w-52 border-[2px] p-2 rounded-xl border-[#D3D1D1] h-10' />
    </div>

    <div className="to flex items-center gap-6 w-full">
      <label htmlFor="toDate" className='text-[#595995] font-semibold text-base md:text-xl'>To</label>
      <input type="date" id="toDate" className='w-52 border-[2px] p-2 rounded-xl border-[#D3D1D1] h-10' />
    </div>
  </div>
</form>


      <div className="mt-4 bg-white p-4 rounded-xl">
        <h1 className="text-[#878484] text-xl md:text-2xl font-normal mb-2">
          Bank Ledger
        </h1>
            <div className='flex items-center justify-between my-3'>
              <div className='w-[424px] bg-white flex items-center justify-center p-7 border-[2px] bprder-[#D3D1D1] rounded-xl h-52'>
                <img className='w-64' src={Logo} alt="" />
              </div>
                <div className='flex-col items-center justify-end w-1/2'>
                  <p className='text-center text-[#4B5967] text-2xl'>Address</p>
                  <p className='text-center text-[#4B5967] text-xl'>Plot No. 88  Janki Nagar Wardha Road <br />
                  xyzkjdk@gmail.com <br /> 987456310
                  </p>
                </div>
            </div>
        <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-[#595995]">
            <th className="px-4 py-2 border border-gray-300">Date</th>
            <th className="px-4 py-2 border border-gray-300 text-center">Transaction No.</th>
            <th className="px-4 py-2 border border-gray-300">A/C Type</th>
            <th className="px-4 py-2 border border-gray-300">Bank Name [From]</th>
            <th className="px-4 py-2 border border-gray-300">Bank Name [To]</th>
            <th className="px-4 py-2 border border-gray-300 text-green-600">Receipts</th>
            <th className="px-4 py-2 border border-gray-300 text-red-600">Payments</th>
            <th className="px-4 py-2 border border-gray-300">Balance</th>
          </tr>
        </thead>
        <tbody className="border border-gray-300">
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 border border-gray-300">06-Oct-2024</td>
            <td className="px-4 py-2 border border-gray-300">BNK001</td>
            <td className="px-4 py-2 border border-gray-300">Account Transfer</td>
            <td className="px-4 py-2 border border-gray-300">PNB Bank</td>
            <td className="px-4 py-2 border border-gray-300">PNB Bank</td>
            <td className="px-4 py-2 border border-gray-300">Rs.231.00</td>
            <td className="px-4 py-2 border border-gray-300">0.00</td>
            <td className="px-4 py-2 border border-gray-300">Rs.231.00</td>
            
          </tr>
          <tr className="bg-gray-100 border-t border-gray-300 text-[#595995] font-semibold">
            <td className="px-4 py-2 border border-gray-300"></td>
            <td className="px-4 py-2 border border-gray-300"></td>
            <td className="px-4 py-2 border border-gray-300"></td>
            <td className="px-4 py-2 border border-gray-300 " >Grand Total</td>
            <td className="px-4 py-2 border border-gray-300">Rs. 231.00</td>
            <td className="px-4 py-2 border border-gray-300">0.00</td>
            <td className="px-4 py-2 border border-gray-300">Rs. 231.00</td>
            <td className="px-4 py-2 border border-gray-300">
              Rs 231.00
            </td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default BankLedger