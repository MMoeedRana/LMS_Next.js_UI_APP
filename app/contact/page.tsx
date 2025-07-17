"use client";

import React, { useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import ContactPage from '../components/Contact/Contact';
import Offer from '../components/Contact/Offer';
import MobileNav from '../components/NavBar/MobileNav';

export default function featuresPage() {
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
     <ContactPage />
     <Offer />
    </>
  );
};
