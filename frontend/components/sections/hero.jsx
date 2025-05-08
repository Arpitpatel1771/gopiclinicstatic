import Section from "@/components/sections/section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <Section className={"h-fit hero-pattern md:px-8 md:py-12"}>
      <div className="block md:hidden">
        <div className="">
          <div className="overflow-hidden shadow-lg">
            <Image
              src="/gopi-stock-1x1.jpeg"
              alt="Hero Background"
              width={1080}
              height={1080}
              className="object-cover object-[50%_20%] w-full"
            />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="text-3xl tracking-tighter font-bold">
            <p>Expert Hair & Skin Care by</p>
            <p className="text-goldAcc"> Drx Gopi Dholiya</p>
          </div>
          {/* <div className="text-lg tracking-tight hidden md:block">
          Your trusted destination for all hair and skin treatments. Our expert
          dermatologists provide personalized care for all your needs.
        </div> */}
          <div className="text-lg tracking-tight">
            Personalized hair and skin care that helps you feel confident, and
            ready for anything.
          </div>
          <div className="flex gap-4 flex-wrap">
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
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-12">
        <div className="p-4 flex flex-col gap-4 justify-center">
          <div className="text-4xl lg:text-5xl tracking-tighter font-bold">
            <p>Expert Hair & Skin Care&nbsp;by</p>
            <p className="text-goldAcc"> Drx Gopi Dholiya</p>
          </div>
          <div className="text-lg lg:text-xl tracking-tight">
            Trusted by hundreds for her gentle approach and results-driven care
            —&nbsp;Drx&nbsp;Gopi&nbsp;Dholiya is here to help you feel your
            best.
          </div>
          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              size={"lg"}
              className={"grow-1 hover:cursor-pointer font-bold"}
            >
              <Link href="tel:+917431011333">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size={"lg"}
              variant={"secondary"}
              className={"grow-1 hover:cursor-pointer font-bold"}
            >
              <Link href="#services">View our Services</Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4 justify-start w-fit flex-wrap">
            <div className="flex items-center gap-4 grow-1 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-[#fccc7b] text-[#fccc7b]"
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 flex gap-1 grow-1 justify-center">
              <span className="font-bold">4.9/5</span> on{" "}
              <a className="underline" href="https://g.co/kgs/iZY6joX">
                Google&nbsp;Reviews
              </a>
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="relative w-fit">
            <Image
              src="/gopi-stock-1x1.jpeg"
              alt="Dermatologist Photo"
              width={1080}
              height={1080}
              className="object-cover w-fit max-h-[500px] z-5 rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 z-10 bg-white rounded-lg shadow-lg border p-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full border-2 border-goldAcc bg-yellow-50">
                  <CheckCircle className="h-6 w-6 text-goldAcc" />
                </div>
                <div>
                  <p className="font-medium">Certified Specialist</p>
                  <p className="text-sm text-gray-500">
                    Experienced Dermatologist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
