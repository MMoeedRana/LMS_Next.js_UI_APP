"use client";

import React, { useState } from 'react'
import Navbar from '../components/NavBar/Navbar'
import Review from '../components/testimonials/Testimonials';
import MobileNav from '../components/NavBar/MobileNav';

export default function TestimonialsPage() {
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
     <Review />
    </>
  );
};
