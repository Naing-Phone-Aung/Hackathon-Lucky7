import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <RightSidebar/>
      <Outlet />
    </>
  );
};

export default MainLayout;
