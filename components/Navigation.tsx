"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavItems = [
  { name: "Pobieramy się", href: "/" },
  { name: "Nasza Historia", href: "/nasza-historia" },
  { name: "Zdjęcia", href: "/zdjecia" },
  { name: "Najważniejsze Informacje", href: "/najwazniejsze-informacje" }
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Closes menu after clicking on link
  };

  return (
    <nav className="relative flex flex-col justify-center items-center text-4xl border-b border-black pb-12">
      {/* Logo */}
      <div className="my-12 flex justify-center items-center">
        <Image
          src={"/LOGO.jpeg"}
          width={250}
          height={250}
          alt="logo"
          className="object-contain"
        />
      </div>

      {/* Title */}
      <div
        className="font-bold text-4xl sm:text-6xl flex flex-col sm:flex-row sm:gap-2 text-center"
        style={{ letterSpacing: "4px" }}
      >
        <span>KARINA</span>
        <span>&</span>
        <span>OSKAR</span>
      </div>

      {/* Hamburger Menu */}
      <div className="absolute top-4 right-4 sm:hidden z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-3xl font-bold focus:outline-none transition-colors duration-300 ${isMenuOpen
            ? "text-white"
            : "text-black"}`}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-10 flex flex-col justify-center items-center text-white transform transition-opacity duration-300 ${isMenuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible"}`}
      >
        {/* Links in menu */}
        <div className="flex flex-col items-center gap-8">
          {NavItems.map(item =>
            <Link
              href={item.href}
              key={item.name}
              onClick={handleLinkClick}
              className="text-2xl sm:text-4xl font-bold hover:underline"
            >
              {item.name}
            </Link>
          )}
        </div>
      </div>

      {/* Menu na większych ekranach */}
      <div className="hidden sm:flex justify-center items-center gap-8 mt-8">
        {NavItems.map(item =>
          <Link
            href={item.href}
            key={item.name}
            className="hover:underline hover:scale-110 transition"
            style={{ fontSize: "18px" }}
          >
            {item.name}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
