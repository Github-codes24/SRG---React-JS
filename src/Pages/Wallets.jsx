// import React from 'react'
// import { Route, Router, Routes } from 'react-router-dom'
// import Navbar from '../Components/Dashboard/Navbar'
// import Sidebar from '../Components/Dashboard/Sidebar'
// import Walletrefund from '../Components/Wallets/Walletrefund'
// import Walletrecharge from '../Components/Wallets/Walletrecharge'
// import Walletledger from '../Components/Wallets/Walletledger'
// import Managewallet from '../Components/Wallets/Managewallet'
// import Addwallets from '../Components/Wallets/Addwallets'

// const Wallets = () => {
//   return (
//     <div>
//         <Router>
//       <div className="h-screen flex flex-col">
//         {/* Navbar outside of Routes */}
//         <Navbar />
//         <div className="flex flex-1">
//           {/* Sidebar outside of Routes */}
//           <Sidebar />
//           <div className="flex-1 p-4 bg-blue-200">
//             <Routes>
//               <Route path="/addwallet" element={<Addwallets />} />
//               <Route path="/managewallet" element={<Managewallet />} />
//               <Route path="/walletledger" element={<Walletledger />} />
//               <Route path="/walletrecharge" element={<Walletrecharge />} />
//               <Route path="/walletrefund" element={<Walletrefund />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//     </div>
//   )
// }

// export default Wallets