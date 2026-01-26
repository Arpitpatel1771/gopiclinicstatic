import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_CLINIC_PHONE || "";
  const intPhone = "91" + phone
  const instahandle = process.env.NEXT_PUBLIC_INSTA_HANDLE || "";
  return (
    <footer className="hidden md:block w-full h-fit py-30 px-20 bg-impBlue">
      <div className="w-fit flex flex-col items-start justify-center gap-8 text-white">
        <Link
          href="#home"
          className="flex gap-4 items-start md:items-end hover:cursor-pointer"
        >
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={55}
            height={55}
            className={`inline-block`}
          />
          <span className="font-bold tracking-tight text-2xl md:text-4xl ">
            Asian Skin Clinic
          </span>
        </Link>
        <div className="flex flex-row gap-6 items-center justify-start">
          <a href={`tel:${phone}`}><Phone className="w-9 h-9 cursor-pointer hover:text-blue-500 hover:fill-blue-500" /></a>
          <a href={`https://wa.me/${intPhone}`}><FaWhatsapp className="w-10 h-10 hover:text-green-600" /></a>
          <a href={`https://instagram.com/${instahandle}`}><FaInstagram className="w-10 h-10 hover:text-pink-700" /></a>
        </div>
        <Link href="#home"><div className="flex w-fit px-2 py-2 rounded-full border-2 bg-transparent hover:cursor-pointer hover:bg-goldAcc hover:border-goldAcc hover:text-impBlue"><ArrowUp /></div></Link>
      </div>
    </footer>
  );
}
