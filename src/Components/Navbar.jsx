import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <span className="font-bold text-xl">Logo</span>
        </div>
        <div className="space-x-4">
          <Link to='/' className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to='/adduser' className="text-gray-300 hover:text-white">
            Add User
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
