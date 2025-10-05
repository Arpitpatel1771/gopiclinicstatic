"use client";

import Section from "@/components/sections/section";
import BeforeAfterSlider from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const our_services = [
  {
    title: "Pimple Treatment",
    before_image: "/gopi-stock-1x1.jpeg",
    after_image: "/skin-doctor-stock.jpg",
    desc: "Effective treatments to reduce and prevent acne, leaving your skin clear and healthy.",
  },
  {
    title: "Pimple Treatment",
    before_image: "/gopi-stock-1x1.jpeg",
    after_image: "/skin-doctor-stock.jpg",
    desc: "Effective treatments to reduce and prevent acne, leaving your skin clear and healthy.",
  },
  {
    title: "Pimple Treatment",
    before_image: "/gopi-stock-1x1.jpeg",
    after_image: "/skin-doctor-stock.jpg",
    desc: "Effective treatments to reduce and prevent acne, leaving your skin clear and healthy.",
  },
  {
    title: "Pimple Treatment",
    before_image: "/gopi-stock-1x1.jpeg",
    after_image: "/skin-doctor-stock.jpg",
    desc: "Effective treatments to reduce and prevent acne, leaving your skin clear and healthy.",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6  flex flex-col items-center w-full max-w-md border">
      <BeforeAfterSlider
        firstImage={{ imageUrl: service.before_image, alt: "Before" }}
        secondImage={{ imageUrl: service.after_image, alt: "After" }}
        className="overflow-hidden rounded-lg h-[200px] w-full"
        currentPercentPosition={50}
        delimiterIconStyles={{
          width: "40px",
          height: "40px",
          backgroundSize: "cover",
          borderRadius: "none",
          backgroundImage:
            "url(https://staging.svgrepo.com/show/408895/left-right.svg)",
        }}
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-700">
        {service.title}
      </h3>
      <p className="mt-2 text-gray-500 text-center">{service.desc}</p>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <Section
      id="services"
      className="h-fit py-8 flex flex-col items-center gap-4 justify-center scroll-mt-16 md:scroll-mt-18"
    >
      <h1 className="text-4xl tracking-tight font-bold text-gray-700">
        Our Services
      </h1>
      <h2 className="text-lg text-gray-500 text-center">
        Explore our range of skin and hair treatments designed for you.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-items-center mt-8">
        {our_services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </Section>
  );
}
