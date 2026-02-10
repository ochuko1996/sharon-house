"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Visit Us", href: "/visit" },
    { name: "Live & Media", href: "/media" },
    { name: "Events", href: "/events" },
    { name: "Ministries", href: "/ministries" },
    { name: "Give", href: "/give" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/sharonhouselogo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <div className="hidden md:block">
              <div className="font-bold text-lg text-[#1A1A1A] leading-tight">
                Sharon House
              </div>
              <div className="text-xs text-[#6FAF2E] font-medium">
                Family International Church
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[#1A1A1A] hover:text-[#6FAF2E] font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6FAF2E] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/give"
              className="px-6 py-3 bg-[#C62828] text-white font-semibold rounded-full hover:bg-[#A52020] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Give Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#6FAF2E] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-[#1A1A1A] hover:text-[#6FAF2E] hover:bg-[#F5F5F5] font-medium transition-all duration-200 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/give"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-[#C62828] text-white font-semibold rounded-full hover:bg-[#A52020] text-center transition-all duration-300"
              >
                Give Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
