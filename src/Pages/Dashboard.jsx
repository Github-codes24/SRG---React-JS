import BestServiceSalesChart from "../Components/Dashboard/ChartGraph";
import ExpenseStatementChart from "../Components/Dashboard/ExpenseStatmentChart";
import SalesGraph from "../Components/Dashboard/SalesGraph";
import TotalCustomers from "../Components/Dashboard/Sub-Dashboard/TotalCustomers";
import TotalSales from "../Components/Dashboard/Sub-Dashboard/TotalSales";
import TotalServices from "../Components/Dashboard/Sub-Dashboard/TotalServices";
import TotalWallets from "../Components/Dashboard/Sub-Dashboard/TotalWallets";
import TodayOverview from "../Components/Dashboard/TodayOverview";
import TodaySalesReport from "../Components/Dashboard/TodaySalesReport";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="flex-1 p-4 bg-[#8B8BC945]">
          <div className="flex gap-8 my-6">
            <TotalCustomers />
            <TotalServices />
            <TotalWallets />
            <TotalSales />
          </div>

          <div className="flex gap-3">
            <BestServiceSalesChart />
            <ExpenseStatementChart />
          </div>
          <div className="mt-4 flex gap-3">
            <SalesGraph />
            <TodayOverview />
          </div>

          <div>
            <TodaySalesReport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
