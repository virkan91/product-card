import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' border-b w-full'>
      <ul className='flex justify-center gap-[20px] font-bold'>
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
    </nav>
  );
}

export default Navbar