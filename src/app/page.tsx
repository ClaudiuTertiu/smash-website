import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Joc from "@/components/Joc";
import Contact from "@/components/Contact";
import Booking from "@/components/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Facilities />
      <Pricing />
      <Schedule />
      <Gallery />
      <Joc />
      <Booking />
      <Contact />
    </main>
  );
}
