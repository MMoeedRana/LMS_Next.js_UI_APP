"use client";

import React, { useState } from 'react'
import Feature from '../components/Feature/Feature'
import Navbar from '../components/NavBar/Navbar'
import MobileNav from '../components/NavBar/MobileNav';

export default function FeaturesPage() {
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
     <Feature />
    </>
  );
};
