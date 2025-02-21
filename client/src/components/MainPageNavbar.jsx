import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Home, Info, Contact, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wallet className="h-8 w-8" />
              <span className="text-xl font-bold">CryptoFund</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-indigo-200">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-indigo-200">
              <Contact className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 hover:text-indigo-200">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="flex items-center space-x-1 hover:text-indigo-200">
              <UserPlus className="h-5 w-5" />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;