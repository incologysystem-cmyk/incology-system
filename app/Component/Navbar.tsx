"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Desktop dropdown state
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

  return (
    <nav className="text-white px-4 py-6 relative z-[100]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" onClick={() => setIsSidebarOpen(false)} className="z-50">
          <img width={180} src="./incologo.png" alt="Logo" className="hover:opacity-80 transition-opacity" />
        </Link>

        {/* Desktop Menu - Pill Design */}
        <ul className="hidden lg:flex space-x-2 border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl px-8 rounded-full py-2.5 items-center">
          <Link href="/">
            <li className="hover:text-gray-300 transition-colors px-3 py-1 cursor-pointer text-sm font-medium">Home</li>
          </Link>

          {/* Portfolio Dropdown (Desktop) */}
          <li 
            ref={portfolioDesktopRef} 
            className="relative group py-1" // Added padding to increase hover area
            onMouseEnter={() => setIsPortfolioDesktopOpen(true)}
            onMouseLeave={() => setIsPortfolioDesktopOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1 text-sm font-medium transition-colors hover:text-gray-300 focus:outline-none ${
                isPortfolioDesktopOpen ? "text-white" : ""
              }`}
              type="button"
            >
              Portfolio
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${isPortfolioDesktopOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {/* Premium Desktop Dropdown Menu */}
            {/* FIXED: Removed mt-4 and added pt-4 to create a transparent bridge */}
            <div 
              className={`absolute top-full left-0 pt-4 w-60 z-50 transition-all duration-200 ${
                isPortfolioDesktopOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="py-2">
                  {[
                    { name: "Mern Portfolio", href: "/mernportfolio" },
                    { name: "Wordpress Portfolio", href: "/wordpressportfolio" },
                    { name: "Mobile Portfolio", href: "/mobileportfolio" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsPortfolioDesktopOpen(false)}
                      className="block px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>

          <Link href="/Servicespage">
            <li className="hover:text-gray-300 transition-colors px-3 py-1 cursor-pointer text-sm font-medium">Services</li>
          </Link>
          <Link href="/Contact">
            <li className="hover:text-gray-300 transition-colors px-3 py-1 cursor-pointer text-sm font-medium">Contact Us</li>
          </Link>
          <Link href="/About">
            <li className="hover:text-gray-300 transition-colors px-3 py-1 cursor-pointer text-sm font-medium">About Us</li>
          </Link>
        </ul>

        {/* BOOK A FREE CALL Button */}
        <a href="mailto:incologysystem@gmail.com" className="hidden sm:block">
          <button className="relative group border border-white/20 px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-transparent hover:text-white transition-all duration-300 overflow-hidden">
            <span className="relative z-10">BOOK A FREE CALL</span>
          </button>
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar + Overlay */}
      <div
        className={`fixed inset-0 z-[110] lg:hidden transition-all duration-300 ${
          isSidebarOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={closeSidebar}
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
            <span className="text-xl font-bold tracking-tight">Navigation</span>
            <button 
              onClick={closeSidebar} 
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <X size={26} />
            </button>
          </div>

          <div className="px-4 py-6 space-y-2 overflow-y-auto h-[calc(100%-80px)]">
            <Link href="/" onClick={closeSidebar} className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-lg">
              Home
            </Link>

            {/* Portfolio Accordion (Mobile) */}
            <div className={`rounded-2xl border transition-colors duration-300 ${isPortfolioMobileOpen ? "border-white/20 bg-white/5" : "border-white/5"}`}>
              <button
                className="w-full flex justify-between items-center px-4 py-4"
                onClick={() => setIsPortfolioMobileOpen(!isPortfolioMobileOpen)}
                type="button"
              >
                <span className="text-lg">Portfolio</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${isPortfolioMobileOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isPortfolioMobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-4 px-2 space-y-1">
                  {[
                    { name: "Mern Portfolio", href: "/mernportfolio" },
                    { name: "Wordpress Portfolio", href: "/wordpressportfolio" },
                    { name: "Mobile Portfolio", href: "/mobileportfolio" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSidebar}
                      className="block px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/Servicespage" onClick={closeSidebar} className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-lg">
              Services
            </Link>
            <Link href="/Contact" onClick={closeSidebar} className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-lg">
              Contact Us
            </Link>
            <Link href="/About" onClick={closeSidebar} className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-lg">
              About Us
            </Link>

            <div className="pt-6 px-2">
              <a href="mailto:incologysystem@gmail.com" onClick={closeSidebar}>
                <button className="w-full py-4 rounded-2xl bg-white text-black font-bold shadow-xl hover:bg-gray-200 transition-colors">
                  BOOK A FREE CALL
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}