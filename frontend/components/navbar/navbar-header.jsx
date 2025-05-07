"use client";

import Image from "next/image";
import { Slant as Hamburger } from "hamburger-react";
import { Lora, Inter } from "next/font/google";
import Link from "next/link";

const lora = Lora({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function NavbarHeader({
  isOpen,
  setIsOpen,
  containerClassName,
  logoImgClassName,
  logoTextClassName,
  hamburgerClassName,
  hamburgerColor = "#000",
  logoSrc = "/logo.svg",
}) {
  return (
    <div
      className={`container mx-auto h-16 flex text-2xl font-bold justify-between items-center px-4 ${containerClassName}`}
    >
      <Link href="#" className="flex items-end hover:cursor-pointer">
        <Image
          src={logoSrc}
          alt="Logo"
          width={40}
          height={40}
          className={`inline-block ${logoImgClassName}`}
        />
        <span
          className={`${lora.className} ${logoTextClassName} antialiased leading-none align-bottom relative left-[-0.25rem]`}
        >
          sian Skin Clinic
        </span>
      </Link>
      <div className={`md:hidden ${hamburgerClassName}`}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={20}
          easing="ease-in-out"
          rounded
          color={hamburgerColor}
        />
      </div>
    </div>
  );
}
