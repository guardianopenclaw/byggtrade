import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import FloorExpert from "@/components/FloorExpert";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <About />
        <Gallery />
        <FloorExpert />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
