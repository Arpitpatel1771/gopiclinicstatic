import Section from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Star, Clock } from "lucide-react";

const data = [
  {
    icon: <Calendar className="h-10 w-10 text-goldAcc text-shadow-lg" />,
    title: "Easy Appointments",
    description:
      "Book your appointment online or call us directly for convenient scheduling.",
  },
  {
    icon: <Clock className="h-10 w-10 text-goldAcc" />,
    title: "Minimal Wait Times",
    description:
      "We respect your time with efficient scheduling and minimal waiting periods.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-goldAcc" />,
    title: "Personalized Care",
    description:
      "Customized treatment plans tailored to your specific skin and hair needs.",
  },
];

export default function Perks() {
  return (
    <Section
      className={"h-fit bg-gray-100 py-8 md:px-8 md:py-12 flex justify-center"}
    >
      <div className="hidden container px-4 md:px-6 md:grid gap-6 grid-cols-1 md:grid-cols-3 place-items-center">
        {data.map((feature, index) => (
          <div
            key={index}
            className="border-none grid gap-4 place-items-center py-4"
          >
            <div className="">{feature.icon}</div>
            <h3 className="text-md mg:text-lg lg:text-xl text-gray-600">
              {feature.title}
            </h3>
            {/* <p className="text-gray-500">{feature.description}</p> */}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:hidden items-center gap-4 justify-start w-fit flex-wrap">
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
    </Section>
  );
}
