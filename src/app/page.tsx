import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Inspiration from "@/components/Inspiration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Benefits />
        <About />
        <Inspiration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
