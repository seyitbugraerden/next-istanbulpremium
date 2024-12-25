import { AboutUs } from "@/components/Home/AboutUs";
import { ServiceSection } from "@/components/Home/ServiceSection";
import { ServiceTop } from "@/components/Home/ServiceTop";
import { SwiperDemo } from "@/components/Home/SwiperDemo";

export default function Home() {
  return (
    <>
      <SwiperDemo />
      <AboutUs />
      <ServiceSection />
      <ServiceTop />
    </>
  );
}
