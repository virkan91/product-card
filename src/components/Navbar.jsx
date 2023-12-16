import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from './Cart'

const Navbar = () => {
  const cart = useSelector((state) => state.cart.card)
  const dispatch = useDispatch()

  return (
    <nav className='border-b w-full flex justify-evenly py-3'>
      <ul className='flex justify-center gap-[20px] font-bold'>
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
      <button>
        <Cart />
      </button>
    </nav>
  );
}

export default Navbar