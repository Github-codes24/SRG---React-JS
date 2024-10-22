import React from "react";

const TodaySalesReport = () => {
  return (
    <div className="bg-white">
      <div className="mt-3 p-3">
        <h4 className=" border-b-2 border-gray-400 p-2">
          Today's Sales Report
        </h4>

        <div className="mt-4">
          <table className="min-w-full border-collapse border-2 border-gray-300">
            <thead>
              <tr>
                <th className="border-2 border-gray-300 p-2 text-left">SL</th>
                <th className="border-2 border-gray-300 p-2 text-left">
                  Customer Name
                </th>
                <th className="border-2 border-gray-300 p-2 text-left">
                  Invoice No
                </th>
                <th className="border-2 border-gray-300 p-2 text-left">
                  Total Amount
                </th>
                <th className="border-2 border-gray-300 p-2 text-left">
                  Paid Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#DBDBDB6B] text-center w-full">
                <td className="p-2"></td>
                <td className=" p-2"></td>
                <td className=" p-2 text-right">Record Not Found</td>
                <td className=" p-2"></td>
                <td className=" p-2"></td>
              </tr>
              <tr className="border-t-2">
                <td className="p-2"></td>
                <td className=" p-2"></td>
                <td className=" p-2 text-right">total</td>
                <td className="border-2 border-gray-300 text-right p-2">
                  Rs 0.00
                </td>
                <td className="border-2 border-gray-300 text-right p-2">
                  Rs 0.00
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodaySalesReport;
