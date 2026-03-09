import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Plans from "@/components/Plans";
import Store from "@/components/Store";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Plans />
        <Store />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
