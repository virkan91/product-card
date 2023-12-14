import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Foot</Link>
        </li>
        <li>
          <Link to="clothes">Clothes</Link>
        </li>
        <li>
          <Link to="electronics">Electronics</Link>
        </li>
      </ul>

      <Outlet />

      <footer>2023 &copy; Created by Virkan</footer>
    </div>
  );
};

export default Layout;
