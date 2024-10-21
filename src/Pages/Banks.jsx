
import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Dashboard/Navbar";
import AddNewBank from "../Components/Bank/AddNewBank";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageBank from "../Components/Bank/ManageBank";
import BankTransaction from "../Components/Bank/BankTransaction";
import BankLedger from "../Components/Bank/BankLedger";

const Dashboard = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Navbar outside of Routes */}
        <Navbar />
        <div className="flex flex-1">
          {/* Sidebar outside of Routes */}
          <Sidebar />
          <div className="flex-1 p-4 bg-gray-100">
            <Routes>
              <Route path="/" element={<AddNewBank />} />
              <Route path="/managebank" element={<ManageBank />} />
              <Route path="/banktransaction" element={<BankTransaction />} />
              <Route path="/bankledger" element={<BankLedger />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
