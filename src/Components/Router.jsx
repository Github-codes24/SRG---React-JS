
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
import Attendance from "./HRM/Attendence/Attendance";
import AttendanceReport from "./HRM/Attendence/AttendanceReport";
import ManageAttendance from "./HRM/Attendence/ManageAttendance";
import CustomerList from "./ReturnService/CustomerList";
import ServiceReturn from "./ReturnService/ServiceReturn";
import WalletReturn from "./ReturnService/WalletReturn";
import ManageLedger from "./Master/ManageLedger";
import AddAccountHead from "./Master/AddAccountHead";
import AccountList from "./Master/AccountList";
import AddWebsite from "./Master/AddWebsite";
import AddServiceBranch from "./Master/AddServiceBranch";
import ManageServiceBranch from "./Master/ManageServiceBranch";
import AddServiceCategory from "./Master/AddServiceCategory";
import ManageServiceCategory from "./Master/ManageServiceCategory";
import AddService from "./Master/AddService";
import ManageService from "./Master/ManageService";
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
import BalanceSheet from "./AccountReports/BalanceSheet";
import AccountSummary from "./AccountReports/AccountSummary";
import BusinessLiquidityReport from "./Report/BusinessLiquidityReport";
import ClosingReport from "./Report/ClosingReport";
import DueReports from "./Report/DueReports";
import TodaysReport from "./Report/TodaysReport";
import SalesReport from "./Report/SalesReport";
import UserWiseSalesReport from "./Report/UserWiseSalesReport";
import PurchaseReport from "./Report/PurchaseReport";
import SalesReturn from "./Report/SalesReturn";
import TodaysCustomerReceipt from "./Report/TodaysCustomerReceipt";
import IncomeExReport from "./Report/IncomeExReport";
import ReceiptPaymentReport from "./Report/ReceiptPaymentReport";
import ServiceDetailReport from "./Report/ServiceDetailReport";
import ServiceItemReport from "./Report/ServiceItemDetailes";
import TopCustomerReport from "./Report/TopCustomerReport";
import CreditCustomer from "./Customer/CreditCustomer";
import CustomerAdvance from "./Customer/CustomerAdvance";
import CustomerLedger from "./Customer/CustomerLedger";
import CustomerLedgerSearch from "./Customer/CustomerLedgerSearch";
import PaidCustomer from "./Customer/PaidCustomer";
import ManageServiceProvider from "./Master/ManageServiceProvider";
import AddCustomer from "./Customer/AddCustomer";
import InvoiceList from "../Services/InvoiceList";
import JobCardLedger from "../Services/JobCardLedger";
import JobCardNew from "../Services/JobCardNew";
import M_ATMServiceInvoice from "../Services/M_ATMServiceInvoice";
import ManageServiceInvoice from "../Services/ManageServiceInvoice";
import PaymentCollection from "../Services/PaymentCollection";
import ServiceInvoice from "../Services/ServiceInvoice";
import AddDesignation from "./HRM/HRM1/AddDesignation";
import AddEmployee from "./HRM/HRM1/AddEmployee";
import ManageDesignation from "./HRM/HRM1/ManageDesignation";
import ManageEmployee from "./HRM/HRM1/ManageEmployee";
import AddOfficeLoan from "./HRM/OfficeLoan/AddOfficeLoan";
import AddPayment from "./HRM/OfficeLoan/AddPayment";
import AddPerson from "./HRM/OfficeLoan/AddPerson";
import ManagePerson from "./HRM/OfficeLoan/ManagePerson";
import AddBenefits from "./HRM/Payroll/AddBenefits";
import AddSalarySetup from "./HRM/Payroll/AddSalarySetup";
import EmployeeSalaryPayment from "./HRM/Payroll/EmployeeSalaryPayment";
import ManageBenefits from "./HRM/Payroll/ManageBenefits";
import ManageSalaryGenerate from "./HRM/Payroll/ManageSalaryGenerate";
import ManageSalarySetup from "./HRM/Payroll/ManageSalarySetup";
import SalaryGenerate from "./HRM/Payroll/SalaryGenerate";
import AddLedger from "./Master/AddLedger";
import WebsiteLedger from "./Master/WebsiteLedger";
import SetServiceProvider from "./Master/SetServiceProvider";
import AddRole from "./Setting/AddRole";
import RoleList from "./Setting/RoleList";
import UserAsignRole from "./Setting/UserAsignRole";
import MailSetting from "./Setting/MailSetting";
import PrintSetting from "./Setting/PrintSetting";
import PhraseList from "./Setting/PhraseList";
import UpdateSetting from "./Setting/UpdateSetting";
import AddUser from "./Setting/AddUser";
import AppSetting from "./Setting/AppSetting";
import Language from "./Setting/Language";
import ManageCompany from "./Setting/ManageCompany";
import ManageUser from "./Setting/ManageUser";
import SmsConfigure from "./Setting/SmsConfigure";
import Currency from "./Setting/AddCurrency";
import DateWiseAttendanceReport from "./HRM/Attendence/DataWiseAttendenceReport";
import EmployeeWiseAttendanceReport from "./HRM/Attendence/EmployeeWiseAttendenceReport";


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
              <Route path="/attendance/employeewiseattendencereport" element={<EmployeeWiseAttendanceReport />} />

              {/* Return Service */}
              <Route path="/returnservice" element={<CustomerList/>} />
              <Route path="/returnservice/servicereturn" element={<ServiceReturn/>} />
              <Route path="/returnservice/walletreturn" element={<WalletReturn/>} />

              {/* Master */}
            <Route path="/master" element={<AddLedger/>}/>
            <Route path="/master/ManageLedger" element={<ManageLedger/>}/>
            <Route path="/master/AddAccountHead" element={<AddAccountHead/>}/>
            <Route path="/master/AccountList" element={<AccountList/>}/>
            <Route path="/master/AddWebsite" element={<AddWebsite/>}/>
            <Route path="/master/Websitelist" element={<WebsiteLedger />}/>
            <Route path="/master/AddServiceBranch" element={<AddServiceBranch />}/>
            <Route path="/master/ManageServiceBranch" element={<ManageServiceBranch/>}/>
            <Route path="/master/AddServiceCategory" element={<AddServiceCategory />}/>
            <Route path="/master/ManageServiceCategory" element={<ManageServiceCategory/>}/>
            <Route path="/master/AddService" element={<AddService/>}/>
            
            <Route path="/master/ManageService" element={<ManageService />}/>
            <Route path="/master/Manageserviceprovider" element={<ManageServiceProvider />}/>
            <Route path="/master/setserviceprovider" element={< SetServiceProvider />}/>
            

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
          <Route path="/accountreport/balancesheet" element={<BalanceSheet/>}/>
          <Route path="/accountreport/accountsummary" element={<AccountSummary/>}/>

          {/* Reports */}
          < Route path= "/report/closingreport" element={ <ClosingReport />} />
          < Route path= "/report/todaysreport" element={ <TodaysReport />} />
          < Route path= "/report/servicesalesreport" element={ <SalesReport />} />
          < Route path= "/report/userwisesalesreport" element={ <UserWiseSalesReport />} />
          < Route path= "/report/duereport" element={ <DueReports />} />
          < Route path= "/report/purchasereport" element={ <PurchaseReport />} />
          < Route path= "/report/salesreturn" element={ <SalesReturn />} />
          < Route path= "/report/todaycustomerreceipt" element={ <TodaysCustomerReceipt />} />
          < Route path= "/report/incomenexpenditure" element={ <IncomeExReport />} />
          < Route path= "/report/receiptpaymentreport" element={ <ReceiptPaymentReport />} />
          < Route path= "/report/servicedetailreport" element={ <ServiceDetailReport />} />
          < Route path= "/report/serviceitemreport" element={ <ServiceItemReport />} />
          < Route path= "/report/topcustomerreport" element={ <TopCustomerReport />} />
        
          < Route path= "/report/businessliquidityreport" element={ <BusinessLiquidityReport />} />

          {/* Customers */}
          < Route path="/customer/addcustomer" element={ < AddCustomer /> } />
          <Route path = "/customer/customerlist" element= { <CustomerList /> } />
          < Route path= "/customer/creditcustomer" element={ <CreditCustomer />} />
          < Route path= "/customer/customeradvance" element={ <CustomerAdvance />} />
          < Route path= "/customer/customerledger" element={ <CustomerLedger />} />
          < Route path= "/customer/customerledgersearch" element={ <CustomerLedgerSearch />} />
          < Route path= "/customer/paidcustomer" element={ <PaidCustomer />} />


          {/* Services */}
          < Route path="/service/invoicelist" element={ < InvoiceList /> } />
          < Route path="/service/jobcardledger" element={ < JobCardLedger /> } />
          < Route path="/service/jobcardnew" element={ < JobCardNew /> } />
          < Route path="/service/matmservice" element={ < M_ATMServiceInvoice /> } />
          < Route path="/service/manageserviceinvoice" element={ < ManageServiceInvoice /> } />
          < Route path="/service/paymentcollection" element={ < PaymentCollection /> } />
          < Route path="/service/serviceinvoice" element={ < ServiceInvoice /> } />

          {/* HRM */}
          < Route path="/hrm/adddesignation" element={ < AddDesignation /> } />
          < Route path="/hrm/addemployee" element={ < AddEmployee /> } />
          < Route path="/hrm/managedesignation" element={ < ManageDesignation /> } />
          < Route path="/hrm/manageemployee" element={ < ManageEmployee /> } />

          {/* Attendence */}
          < Route path="/attendence/addexpenseitem" element={ <Attendance  /> } />
          < Route path="/attendence/attendencereport" element={ <AttendanceReport  /> } />
          < Route path="/attendence/manageexpenseitem" element={ <ManageAttendance  /> } />
          < Route path="/attendence/datewiseattendence" element={ <DateWiseAttendanceReport  /> } />
          

          {/* Office Loan */}
          < Route path="/officeloan/addofficeloan" element={ <AddOfficeLoan  /> } />
          < Route path="/officeloan/addpayments" element={ <AddPayment  /> } />
          < Route path="/officeloan/addperson" element={ <AddPerson  /> } />
          < Route path="/officeloan/manageperson" element={ <ManagePerson  /> } />


          {/* Pay ROll */}
          < Route path="/payroll/addbenefits" element={ <AddBenefits /> } />
          < Route path="/payroll/salarysetup" element={ < AddSalarySetup /> } />
          < Route path="/payroll/employeesalarypayment" element={ < EmployeeSalaryPayment /> } />
          < Route path="/payroll/managebenefits" element={ < ManageBenefits /> } />
          < Route path="/payroll/managesalarygenerate" element={ < ManageSalaryGenerate /> } />
          < Route path="/payroll/managesalarysetup" element={ < ManageSalarySetup /> } />
          < Route path="/payroll/salarygenerate" element={ < SalaryGenerate /> } />


          {/* User Permission Setting */}
          < Route path="/setting/userpermissionsetting/addrole" element={ <AddRole /> } />
          < Route path="/setting/userpermissionsetting/roleList" element={ <RoleList /> } />
          < Route path="/setting/userpermissionsetting/userasignrole" element={ <UserAsignRole /> } />
          {/* User Permission Setting */}
          < Route path="/setting/softwaresetting/addcurrency" element={ <Currency /> } />
          < Route path="/setting/softwaresetting/mailsetting" element={ <MailSetting /> } />
          < Route path="/setting/softwaresetting/printsetting" element={ <PrintSetting /> } />
          < Route path="/setting/softwaresetting/phraseList" element={ <PhraseList /> } />
          < Route path="/setting/softwaresetting/updatesetting" element={ <UpdateSetting /> } />
          < Route path="/setting/softwaresetting/addUser" element={ <AddUser /> } />
          < Route path="/setting/softwaresetting/appsetting" element={ <AppSetting /> } />
          < Route path="/setting/softwaresetting/language" element={ <Language /> } />
          < Route path="/setting/softwaresetting/managecompany" element={ <ManageCompany /> } />
          < Route path="/setting/softwaresetting/manageuser" element={ <ManageUser /> } />
          < Route path="/setting/smsconfigure" element={ <SmsConfigure /> } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Routeing;
