"use client";

import React, { useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Price from '../components/Price/Price';
import MobileNav from '../components/NavBar/MobileNav';

export default function PricePage() {
  const [showNav, setShowNav] = useState(false);

  // Define the openNav function

  const handleNavShow = () => {
    setShowNav(true); // Show the mobile nav
  };

  const handleNavHide = () => {
    setShowNav(false); // Hide the mobile nav
  };

  return (
    <>
    <Navbar openNav={handleNavShow} />
    <MobileNav showNav={showNav} closeNav={handleNavHide} />
     <Price />
    </>
  );
};
