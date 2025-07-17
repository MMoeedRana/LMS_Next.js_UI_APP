'use client';

import React, { useState } from 'react';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false);

  const handleNavShow = () => {
    setShowNav(true); // Show the mobile nav
  };

  const handleNavHide = () => {
    setShowNav(false); // Hide the mobile nav
  };

  return (
    <div>
      <Navbar openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </div>
  );
};

export default ResponsiveNav;
