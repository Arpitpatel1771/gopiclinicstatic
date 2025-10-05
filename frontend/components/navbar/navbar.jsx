"use client";

import { useState } from "react";
import NavbarHeader from "./navbar-header";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navbarItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  // { name: "Results", href: "/#results" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const phone = process.env.NEXT_PUBLIC_CLINIC_PHONE || "";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="sticky top-0 z-50 text-impBlue backdrop-blur-2xl bg-white/75 border-b border-gray-200 block md:hidden">
        <NavbarHeader
          isOpen={isOpen}
          setIsOpen={handleToggle}
          containerClassName={"container h-16 px-4"}
        />
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
            containerClassName={"border-b border-white/20 h-16 px-4"}
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
      {/* Non Mobile Navbar */}
      <nav className="sticky h-20 top-0 z-50 text-impBlue backdrop-blur-2xl bg-white/75 border-b border-gray-200 hidden md:block">
        <div className="mx-auto flex gap-8 justify-between items-center h-20 px-6 max-w-7xl">
          <Link
            href="#home"
            className="flex gap-4 items-center-safe hover:cursor-pointer"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={55}
              height={55}
              className={`inline-block`}
            />
            <span className="font-bold tracking-tight text-2xl">
              Asian Skin Clinic
            </span>
          </Link>
          <div className="grow-2 flex justify-end lg:justify-start items-center pl-4">
            {navbarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-impBlue tracking-tight text-lg hover:text-goldAcc px-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Button asChild className={"hover:cursor-pointer font-bold"}>
              <Link href={`tel:${phone}`}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
