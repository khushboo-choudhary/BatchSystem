import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
