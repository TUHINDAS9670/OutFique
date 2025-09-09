import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import AdminSidebar from "./AdminSidebar";
import UserManagement from "./UserManagement";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsSidebar(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-24 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      {/* sidebar */}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSidebarOpen ? "translate-x-0" :"-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        {/* sidebar */}
        <AdminSidebar/>
      </div>
      {/* main content */}
      <div className="flex-grow p-6 overflow-auto">
        {/* <UserManagement/> */}
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
