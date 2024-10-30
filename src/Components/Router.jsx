
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
import LedgerList from "./Master/LedgerList"
import Dashboard from "../Pages/Dashboard"
import OpeningBalance from "./Accounts/OpeningBalance";
import CustomerReceive from "./Accounts/CustomerReceive";
import CashTransfer from "./Accounts/CashTransfer";
import ReceiptVoucher from "./Accounts/ReceiptVoucher";
import PaymentVoucher from "./Accounts/PaymentVoucher";
import ContraVoucher from "./Accounts/ContraVoucher";
import JournalVoucher from "./Accounts/JournalVoucher";
import VoucherApproval from "./Accounts/VoucherApproval";
import PurchaseService from "./Purchase/PurchaseService";
import PurchaseMATM from "./Purchase/PurchaseMATM";
import PurchaseManage from "./Purchase/PurchaseManage";
import ClosingAccount from "./Accounts/ClosingAccount";
import ChartAccount from "./Accounts/ChartAccount";
import AddExpenseItem from "./Expense/AddExpenseItem";
import ManageExpenseItem from "./Expense/ManageExpenseItem";
import AddExpense from "./Expense/AddExpense";
import ExpenseStatment from "./Expense/ExpenseStatment";
import ManageExpense from "./Expense/ManageExpense";
import CashBook from "./AccountReports/CashBook";
import BankBook from "./AccountReports/BankBook";
import GeneralLedger from "./AccountReports/GeneralLedgerReport";
import TrailBalance from "./AccountReports/TrailBalance";
import GeneralLedgerReport from "./AccountReports/GeneralLedgerReport";
import ReportTrialBalance from "./AccountReports/ReportTrialBalance";
import ProfitReport from "./AccountReports/ProfitReport";
import ProfitReport2 from "./AccountReports/ProfitReport2";
import CashFlowReport from "./AccountReports/CashFlowReport";
import CashFlowReport2 from "./AccountReports/CashFlowReport2";


const Routeing = () => {
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
              <Route path="/" element={<Dashboard />} />
              <Route path="/bank" element={<AddNewBank />} />
              <Route path="/bank/managebank" element={<ManageBank />} />
              <Route path="/bank/banktransaction" element={<BankTransaction />} />
              <Route path="/bank/bankledger" element={<BankLedger />} />
              {/* Wallet */}

              <Route path="/wallet" element={<Addwallets />} />
              <Route path="/wallet/managewallet" element={<Managewallet />} />
              <Route path="/wallet/walletledger" element={<Walletledger />} />
              <Route path="/wallet/walletrecharge" element={<Walletrecharge />} />
              <Route path="/wallet/walletrefund" element={<Walletrefund />} />

              {/* Attendance section */}
              
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/attendance/attendancereport" element={<AttendanceReport />} />
              <Route path="/attendance/manageattendance" element={<ManageAttendance />} />

              {/* Return Service */}
              <Route path="/returnservice" element={<CustomerList/>} />
              <Route path="/returnservice/servicereturn" element={<ServiceReturn/>} />
              <Route path="/returnservice/walletreturn" element={<WalletReturn/>} />

              {/* Master */}
            <Route path="/master/" element={<LedgerList/>}/>
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

            {/* Accounts */}
            <Route path="/accounts/openingbalance" element={<OpeningBalance />}/>
            <Route path="/accounts/customerreceive" element={<CustomerReceive />}/>
            <Route path="/accounts/cashtransfer" element={<CashTransfer/>}/>
            <Route path="/accounts/receiptsvoucher" element={<ReceiptVoucher/>}/>
            <Route path="/accounts/paymentvoucher" element={<PaymentVoucher/>}/>
            <Route path="/accounts/contravoucher" element={<ContraVoucher/>}/>
            <Route path="/accounts/journalvoucher" element={<JournalVoucher/>}/>
            <Route path="/accounts/voucherapproval" element={<VoucherApproval/>}/>
            <Route path="/accounts/closingaccount" element={<ClosingAccount/>}/>
            <Route path="/accounts/chartaccount" element={<ChartAccount/>}/>

            {/* Purchase */}
            <Route path="/purchase/purchaseservice" element={<PurchaseService/>}/>
            <Route path="/purchase/purchasematm" element={<PurchaseMATM/>}/>
            <Route path="/purchase/purchasemanage" element={<PurchaseManage/>}/>

            {/* Expense */}
            <Route path="/expense/addexpenseitem" element={<AddExpenseItem/>}/>
            <Route path="/expense/manageexpenseitem" element={<ManageExpenseItem/>}/>
            <Route path="/expense/addexpense" element={<AddExpense/>}/>
            <Route path="/expense/manageexpense" element={<ManageExpense/>}/>
            <Route path="/expense/expensestatment" element={<ExpenseStatment/>}/>

          {/* Account Report */}
          <Route path="/accountreport/cashbook" element={<CashBook/>}/>
          <Route path="/accountreport/bankbook" element={<BankBook/>}/>
          <Route path="/accountreport/generalledger" element={< GeneralLedger />} />
          < Route path="/accountreport/generalledgerreport" element={ < GeneralLedgerReport />} />
          <Route path="/accountreport/trailbalance" element={<TrailBalance/>}/>
          <Route path="/accountreport/reporttrialbalance" element={<ReportTrialBalance/>}/>
          <Route path="/accountreport/profitreport" element={<ProfitReport/>}/>
          <Route path="/accountreport/profitreport2" element={<ProfitReport2/>}/>
          <Route path="/accountreport/cashflowreport" element={<CashFlowReport/>}/>
          <Route path="/accountreport/cashflowreport2" element={<CashFlowReport2/>}/>

            {/* Setting */}
            {/* <Route path="/setting/smsconfigure" element={<SmsConfigure/>}/>
            <Route path="/setting/userpermissionsetting/rolelist" element={<RoleList />}/>
            {/* <Route path="/setting/userpermissionsetting/addrole" element={<AddRole />}/> */}
            {/* <Route path="/setting/userpermissionsetting/userassignrole" element={<UserAsignRole />}/> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Routeing;
