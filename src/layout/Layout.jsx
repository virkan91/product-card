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

      <footer> Created by &copy;Virkan 2023</footer>
    </div>
  );
};

export default Layout;
