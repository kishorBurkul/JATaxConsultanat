import React, { useState } from 'react';
import Slider from './Slider';
import ServicesSection from './Services';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <>
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-20" src="assets/homepage/logo.jpeg" alt="Your Company"/>
            <h3 className="text-white ml-2">  J A Gaikwad & Associates</h3>
            
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-5">
              <a href="#" className="bg-gray-900  hover:bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">HOME</a>
              <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">ABOUT US</a>
              <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">SERVICES</a>
              <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CONTACT US</a>
              
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Us</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</a>

          
        </div>
      </div>
    </nav>
    {/* <Slider/> */}
    
   </>
  );
};

export default Header;
