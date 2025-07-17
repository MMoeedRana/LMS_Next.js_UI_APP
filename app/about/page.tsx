"use client";

import React, { useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Review from '../components/testimonials/Testimonials';
import WhyChoose from '../components/about/WhyChoose';
import Analyticsfeature from '../components/about/Analyticsfeature';
import MobileNav from '../components/NavBar/MobileNav';

export default function testimonialsPage() {
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
    <>
    <Navbar openNav={openNav} />
    <Navbar openNav={handleNavShow} />
    <MobileNav showNav={showNav} closeNav={handleNavHide} />
    <Analyticsfeature />
     <WhyChoose />
    </>
  );
};
