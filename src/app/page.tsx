import { AboutUs } from "@/components/Home/AboutUs";
import { SwiperDemo } from "@/components/Home/SwiperDemo";
import { ServiceTop } from "@/components/Home/ServiceTop";
import { AccordionDemo } from "@/components/Home/AccordionDemo";
import { ServiceSection } from "@/components/Home/ServiceSection";

export default function Home() {
  return (
    <>
      <SwiperDemo />
      <AboutUs />
      <ServiceSection />
      <ServiceTop />
      <AccordionDemo />
    </>
  );
}
