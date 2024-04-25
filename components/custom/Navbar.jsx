"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };
  return (
    <nav className="flex items-center bg-black opacity-80 backdrop-blur-lg justify-between z-50 w-full h-16 px-6 py-4 fixed top-0 border-b border-lightgray shadow-light-300 sm:px-12 text-lightgray">
      <div>
        <Link href="/" className='flex items-center gap-2'>
          {/* <Image
            src={"/assets/images/andrewhead.png"}
            alt="Andrew Ransom"
            width={450}
            height={450}
            className="h-7 w-auto mx-auto rounded-full flex items-center"
            style={{
              maxWidth: "100%",
              height: "45px",
            }}
          /> */}
          <h1 className='subheading flex items-center'>Andrew Ransom</h1>
        </Link>
      </div>
      {/* Show links for medium and larger screens */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="hover:text-white py-2">
          Home
        </Link>
        <Link href="/mover-search" className="hover:text-white py-2 px-2">
          Mover Search
        </Link>
        {/* <Link href="/explore-all-movers" className="hover:text-primary-100 py-2">
          Explore All Movers
        </Link> */}
        <Link
          className="text-primary-100 hover:text-white hover:bg-primary-100 py-2 px-0 rounded-full"
          href="https://www.qube-software.com"
        >
          Mover Registration
        </Link>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-full md:hidden h-screen bg-slate-100 px-12 py-6 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div
          onClick={handleNav}
          className="flex justify-between cursor-pointer hover:text-white"
        >
          <Link href="/" className="" onClick={handleLinkClick}>
            <Image
              src="/assets/images/site-logo.png"
              alt="bookqube logo"
              width={100}
              height={100}
              className="h-7 w-auto mx-auto"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-4 pt-16">
          <Link href="/" className="hover:text-white py-4" onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            href="/mover-search"
            className="hover:text-white py-4"
            onClick={handleLinkClick}
          >
            Mover Search
          </Link>
          {/* <Link href="/explore-all-movers" className="hover:text-primary-100 py-4">
            Explore All Movers
          </Link> */}
          <Link
            className="text-primary-100 hover:text-white py-4 hover:bg-primary-100 px-4 rounded-full"
            href="https://www.qube-software.com"
            onClick={handleLinkClick}
          >
            Mover Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
