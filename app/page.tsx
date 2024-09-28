import Featurelist from "@/components/Homepage/Featurelist/Featurelist";
import Footer from "@/components/Homepage/Footer/Footer";
import Hero from "@/components/Homepage/Hero/Hero";
import Navbar from "@/components/Homepage/Navbar/Navbar";
import Roadmap from "@/components/Homepage/Roadmap/Roadmap";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featurelist />
      <Roadmap />
      <Footer />
    </div>
  );
}
