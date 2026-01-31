import { Header } from "@/components/villa/Header";
import { Hero } from "@/components/villa/Hero";
import { About } from "@/components/villa/About";
import { Gallery } from "@/components/villa/Gallery";
import { Amenities } from "@/components/villa/Amenities";
import { Location } from "@/components/villa/Location";
import { PracticalInfo } from "@/components/villa/PracticalInfo";
import { Contact } from "@/components/villa/Contact";
import { Footer } from "@/components/villa/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Location />
        <PracticalInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
