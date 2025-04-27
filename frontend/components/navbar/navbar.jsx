"use client";

import { useState } from "react";
import NavbarHeader from "./navbar-header";

const navbarItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 text-impBlue backdrop-blur bg-white/60 border-b border-gray-200">
        <NavbarHeader isOpen={isOpen} setIsOpen={handleToggle} />
        <div
          className={`absolute top-0 z-100 mx-auto w-full h-screen bg-radial-[at_50%_20%] from-impBlue from-60% to-impBlue/80 backdrop-blur-md text-white transition-all duration-600 ease-in-out  ${
            isOpen ? "menu-open" : "menu-closed"
          }`}
        >
          <NavbarHeader
            isOpen={isOpen}
            setIsOpen={handleToggle}
            logoSrc="/logo-white.svg"
            hamburgerColor="#fff"
            containerClassName={"border-b border-white/20"}
          />
          <div className="container mx-auto p-8">
            <ul className="flex flex-col space-y-8">
              {navbarItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white text-2xl font-bold hover:text-gray-300"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
