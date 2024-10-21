
import Sidebar from "../Components/Dashboard/Sidebar";
import Navbar from "../Components/Dashboard/Navbar";
import AddNewBank from "../Components/Bank/AddNewBank";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageBank from "../Components/Bank/ManageBank";
import BankTransaction from "../Components/Bank/BankTransaction";
import BankLedger from "../Components/Bank/BankLedger";
import Addwallets from "./Wallets/Addwallets";
import Managewallet from "./Wallets/Managewallet";
import Walletledger from "./Wallets/Walletledger";
import Walletrecharge from "./Wallets/Walletrecharge";
import Walletrefund from "./Wallets/Walletrefund";
import Attendance from "./Attendence/Attendance";
import AttendanceReport from "./Attendence/AttendanceReport";
import ManageAttendance from "./Attendence/ManageAttendance";
import CustomerList from "./ReturnService/CustomerList";
import ServiceReturn from "./ReturnService/ServiceReturn";
import WalletReturn from "./ReturnService/WalletReturn";
import ManageLedger from "./Master/ManageLedger";
import AddAccountHead from "./Master/AddAccountHead";
import AccountList from "./Master/AccountList";
import AddWebsite from "./Master/AddWebsite";
import Websitelist from "./Master/Websitelist";
import AddServiceBranch from "./Master/AddServiceBranch";
import ManageServiceBranch from "./Master/ManageServiceBranch";
import AddServiceCategory from "./Master/AddServiceCategory";
import ManageServiceCategory from "./Master/ManageServiceCategory";
import AddService from "./Master/AddService";
import ServiceSlab from "./Master/ServiceLab";
import ManageService from "./Master/ManageService";

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
              <Route path="/addwallet" element={<Addwallets />} />

              {/* Wallet */}

              <Route path="/managewallet" element={<Managewallet />} />
              <Route path="/walletledger" element={<Walletledger />} />
              <Route path="/walletrecharge" element={<Walletrecharge />} />
              <Route path="/walletrefund" element={<Walletrefund />} />

              {/* Attendance section */}
              
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/attendance/attendancereport" element={<AttendanceReport />} />
              <Route path="/attendance/manageattendance" element={<ManageAttendance />} />

              {/* Return Service */}
              <Route path="/returnservice/customerlist" element={<CustomerList/>} />
              <Route path="/returnservice/servicereturn" element={<ServiceReturn/>} />
              <Route path="/returnservice/walletreturn" element={<WalletReturn/>} />

              {/* Master */}
            <Route path="/master/ManageLedger" element={<ManageLedger/>}/>
            <Route path="/master/AddAccountHead" element={<AddAccountHead/>}/>
            <Route path="/master/AccountList" element={<AccountList/>}/>
            <Route path="/master/AddWebsite" element={<AddWebsite/>}/>
            <Route path="/master/Websitelist" element={<Websitelist />}/>
            <Route path="/master/AddServiceBranch" element={<AddServiceBranch />}/>
            <Route path="/master/ManageServiceBranch" element={<ManageServiceBranch/>}/>
            <Route path="/master/AddServiceCategory" element={<AddServiceCategory />}/>
            <Route path="/master/ManageServiceCategory" element={<ManageServiceCategory/>}/>
            <Route path="/master/AddService" element={<AddService/>}/>
            <Route path="/master/ServiceSlab" element={<ServiceSlab />}/>
            <Route path="/master/ManageService" element={<ManageService />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
