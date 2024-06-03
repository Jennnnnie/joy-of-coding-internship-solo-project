import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='flex space-x-80 place-content-center m-10 p-5 bg-white dark:bg-black shadow-purple rounded-lg'>
      <Link href='/'>
        <div className='text-textLight dark:text-textDark w-20'>
          <img src='/images/JoyOfCodingLogo.png' alt='JoyOfCodingLogo' />
        </div>
      </Link>
      <ul className='flex space-x-80'>
        <li className='hover:bg-lightPurple hover:rounded-full px-4 py-2 cursor-pointer'>
          <Link href='/dashboard'>
            <div className='text-textLight dark:text-textDark'>Dashboard</div>
          </Link>
        </li>
        <li className='hover:bg-lightPurple hover:rounded-full px-4 py-2 cursor-pointer'>
          <Link href='/projects'>
            <div className='text-textLight dark:text-textDark'>Projects</div>
          </Link>
        </li>
        <li className='hover:bg-lightPurple hover:rounded-full px-4 py-2 cursor-pointer'>
          <Link href='/categories'>
            <div className='text-textLight dark:text-textDark'>Categories</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
