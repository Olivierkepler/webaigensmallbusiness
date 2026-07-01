import AnnounceBar from "@/components/AnnounceBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Thesis from "@/components/Thesis";
import Proof from "@/components/Proof";
import Method from "@/components/Method";
import Work from "@/components/Work";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnounceBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Thesis />
        <Proof />
        <Method />
        <Work />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
