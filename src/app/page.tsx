import { AboutUs } from "@/components/Home/AboutUs";
import { SwiperDemo } from "@/components/Home/SwiperDemo";
import { ServiceTop } from "@/components/Home/ServiceTop";
import { AccordionDemo } from "@/components/Home/AccordionDemo";
import { ServiceSection } from "@/components/Home/ServiceSection";
import { ContactUs } from "@/components/Home/ContactUs";
import { TripleCard } from "@/components/Home/TripleCard";

export default function Home() {
  return (
    <>
      <SwiperDemo />
      <AboutUs />
      <ServiceSection />
      <ServiceTop />
      <AccordionDemo />
      <ContactUs />
    </>
  );
}
