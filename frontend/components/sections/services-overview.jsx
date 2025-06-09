import Section from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ServicesOverview() {
  return (
    <Section
      className={"h-fit py-8 flex flex-col items-center gap-4 justify-center"}
    >
      <h1 className="text-4xl tracking-tight font-bold text-gray-700">
        Our Services
      </h1>
      <h2 className="text-lg text-gray-500 text-center">
        Explore our range of skin and hair treatments designed for you.
      </h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="">
            <div>ASD</div>
          </CarouselItem>
          <CarouselItem className="">
            <div>ASD</div>
          </CarouselItem>
          <CarouselItem className="">
            <div>ASD</div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
