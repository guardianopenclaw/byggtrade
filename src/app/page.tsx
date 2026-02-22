import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Awards from "@/components/Awards";
import Benefits from "@/components/Benefits";
import RoomCalculator from "@/components/RoomCalculator";
import About from "@/components/About";
import Inspiration from "@/components/Inspiration";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Awards />
        <Benefits />
        <RoomCalculator />
        <About />
        <Inspiration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
