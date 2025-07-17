'use client';

import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar'; // Adjust the path if necessary
import Hero from './components/Hero/Hero';
import MobileNav from './components/NavBar/MobileNav';

const Page = () => {
  const [showNav, setShowNav] = useState(false);

  // Define the openNav function
  const openNav = () => {
    setShowNav(true); // Or any action you want when the menu is opened
  };
  
  const handleNavShow = () => {
    setShowNav(true); // Show the mobile nav
  };

  const handleNavHide = () => {
    setShowNav(false); // Hide the mobile nav
  };

  return (
    <div>
      {/* Pass openNav function as a prop to Navbar */}
      {/* <Navbar openNav={openNav} /> */}
      <Navbar openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
      {/* Your other content */}
      <Hero />
    </div>
  );
};

export default Page;
