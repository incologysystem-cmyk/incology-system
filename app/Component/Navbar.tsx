"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Desktop dropdown
  const [isPortfolioDesktopOpen, setIsPortfolioDesktopOpen] = useState(false);
  const portfolioDesktopRef = useRef<HTMLLIElement | null>(null);

  // Mobile accordion inside sidebar
  const [isPortfolioMobileOpen, setIsPortfolioMobileOpen] = useState(false);

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        portfolioDesktopRef.current &&
        !portfolioDesktopRef.current.contains(e.target as Node)
      ) {
        setIsPortfolioDesktopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close sidebar on ESC + lock body scroll
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };

    if (isSidebarOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsPortfolioMobileOpen(false);
  };

  const Chevron = ({ open }: { open: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#FFFFFF"
    >
      <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
    </svg>
  );

  return (
    <nav className="text-white px-4 py-4 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setIsSidebarOpen(false)}>
          <img width={200} src="./incologo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 items-center">
          <Link href="/Home">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
          </Link>

          {/* Portfolio Dropdown (Desktop) */}
          <li ref={portfolioDesktopRef} className="relative flex items-center">
            <button
              onClick={() => setIsPortfolioDesktopOpen(!isPortfolioDesktopOpen)}
              className="flex items-center hover:text-gray-300 focus:outline-none"
              type="button"
            >
              Portfolio
              <Chevron open={isPortfolioDesktopOpen} />
            </button>

            {isPortfolioDesktopOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-lg z-20 overflow-hidden">
                <Link
                  href="/mernportfolio"
                  className="block px-4 py-3 hover:bg-gray-800 cursor-pointer"
                >
                  Mern Portfolio
                </Link>
                <Link
                  href="/wordpressportfolio"
                  className="block px-4 py-3 hover:bg-gray-800 cursor-pointer"
                >
                  Wordpress Portfolio
                </Link>
                <Link
                  href="/mobileportfolio"
                  className="block px-4 py-3 hover:bg-gray-800 cursor-pointer"
                >
                  Mobile Portfolio
                </Link>
              </div>
            )}
          </li>

          <Link href="/Servicespage">
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
          </Link>
          <Link href="/Contact">
            <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
          </Link>
          <Link href="/About">
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
          </Link>
        </ul>

        {/* BOOK A FREE CALL Button (Get Template replaced) */}
        <Link href="/book-call" className="hidden sm:block">
          <button className="relative border flex gap-2 justify-center px-5 py-3 rounded-xl bg-black border-gray-700 overflow-hidden">
            BOOK A FREE CALL
            <i />
          </button>
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar + Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition ${
          isSidebarOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        {/* Overlay */}
        <div
          onClick={closeSidebar}
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
            <span className="font-semibold">Menu</span>
            <button onClick={closeSidebar} aria-label="Close menu">
              <X size={26} />
            </button>
          </div>

          {/* Sidebar content */}
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/Home"
              onClick={closeSidebar}
              className="block px-3 py-3 rounded-xl hover:bg-gray-900"
            >
              Home
            </Link>

            {/* Portfolio Accordion */}
            <div className="rounded-xl border border-gray-800 overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-3 py-3 hover:bg-gray-900"
                onClick={() => setIsPortfolioMobileOpen(!isPortfolioMobileOpen)}
                type="button"
              >
                <span>Portfolio</span>
                <Chevron open={isPortfolioMobileOpen} />
              </button>

              {isPortfolioMobileOpen && (
                <div className="border-t border-gray-800">
                  <Link
                    href="/mernportfolio"
                    onClick={closeSidebar}
                    className="block px-6 py-3 hover:bg-gray-900"
                  >
                    Mern Portfolio
                  </Link>
                  <Link
                    href="/wordpressportfolio"
                    onClick={closeSidebar}
                    className="block px-6 py-3 hover:bg-gray-900"
                  >
                    Wordpress Portfolio
                  </Link>
                  <Link
                    href="/mobileportfolio"
                    onClick={closeSidebar}
                    className="block px-6 py-3 hover:bg-gray-900"
                  >
                    Mobile Portfolio
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/Servicespage"
              onClick={closeSidebar}
              className="block px-3 py-3 rounded-xl hover:bg-gray-900"
            >
              Services
            </Link>

            <Link
              href="/Contact"
              onClick={closeSidebar}
              className="block px-3 py-3 rounded-xl hover:bg-gray-900"
            >
              Contact Us
            </Link>

            <Link
              href="/About"
              onClick={closeSidebar}
              className="block px-3 py-3 rounded-xl hover:bg-gray-900"
            >
              About Us
            </Link>

            {/* Sidebar CTA button */}
            <Link href="/book-call" onClick={closeSidebar} className="block pt-2">
              <button className="w-full relative border flex gap-2 justify-center px-5 py-3 rounded-xl bg-black border-gray-700 overflow-hidden">
                BOOK A FREE CALL
                <i />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
