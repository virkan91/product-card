import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.card);
  const dispatch = useDispatch();

  return (
    <nav className="w-full flex justify-between items-center py-4 fixed top-0 z-[99] shadow-md bg-white">
      <ul className="flex justify-center w-full gap-[20px] font-bold">
        <li>
          <Link to="/">Food</Link>
        </li>
        <li>
          <Link to="clothes">Clothes</Link>
        </li>
        <li>
          <Link to="electronics">Electronics</Link>
        </li>
      </ul>
      <button className="absolute right-0 ">
        <Cart />
      </button>
    </nav>
  );
};

export default Navbar;
