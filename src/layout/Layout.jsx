import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="h-full flex flex-col justify-between ">
      <Navbar />

      <main className="h-full grow-[1]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
