
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Thesis from "@/components/Thesis";
import Work from "@/components/Work";
import Proof from "@/components/Proof";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chabot";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <Method />

        {/* Development Process */}
        <Thesis />

        {/* Selected Work */}
        <Work />

        {/* About WebAIgen */}
        <Proof />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      <Footer />

      <Chatbot />
    </>
  );
}
