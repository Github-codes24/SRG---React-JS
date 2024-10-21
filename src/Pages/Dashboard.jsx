import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Navbar from '../Components/Dashboard/Navbar'

const Dashboard = () => {
  return (

    <div className="h-screen flex flex-col">
    
    <Navbar />

    <div className="flex flex-1">
      
      <Sidebar />
      
      <div className="flex-1 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
        <p>This is the main content area.</p>
      </div>
    </div>
  </div>
)
}

export default Dashboard