import Hero from "@/components/sections/hero";
import Perks from "@/components/sections/perks";
import ServicesOverview from "@/components/sections/services-overview";
import ContactUs from "@/components/sections/contact-us";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <ServicesOverview />
      <ContactUs />
      <Footer />
    </>
  );
}
