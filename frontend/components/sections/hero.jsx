import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/sections/section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className={"h-full hero-pattern"}>
      <div className="">
        <div className="overflow-hidden shadow-lg">
          <Image
            src="/gopi-stock-1x1.jpeg"
            alt="Hero Background"
            width={1080}
            height={1080}
            className="object-cover object-[50%_20%] w-full h-72"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="text-3xl tracking-tighter font-bold">
          <p>Expert Hair & Skin Care by</p>
          <p className="text-goldAcc"> Drx Gopi Dholiya</p>
        </div>
        <div className="text-lg tracking-tight">
          Your trusted destination for all hair and skin treatments. Our expert
          dermatologists provide personalized care for all your needs.
        </div>
        <div className="flex gap-4">
          <Button asChild className={"grow-1 hover:cursor-pointer font-bold"}>
            <Link href="tel:+917431011333">Book Appointment</Link>
          </Button>
          <Button
            asChild
            variant={"secondary"}
            className={"grow-1 hover:cursor-pointer font-bold"}
          >
            <Link href="#services">View our Services</Link>
          </Button>
        </div>
      </div>
      {/* <div className="flex flex-col shadow overflow-hidden bg-white">
        <Image
          src="/skin-doctor-stock.jpg"
          alt="Skin Doctor"
          width={1920}
          height={1080}
          className="w-full h-112 object-cover"
        />
      </div> */}
    </Section>
  );
}
