import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-[40px] max-w-[1200px] mx-auto ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
