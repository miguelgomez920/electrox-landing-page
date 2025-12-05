import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductsSection from "./components/ProductsSection";
import Benefits from "./components/BenefitsSection";
import CollectionSection from "./components/CollectionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


import Peticion from "./components/Peticion";
import Peticion2 from "./components/Peticion2";


function App() {
 
  return (
    // bg-gradient-to-b from-black via-[#0b0b0b] to-black
    <div className="min-h-screen bg-linear-to-b from-black via-[#0b0b0b] to-black ">
      <Navbar/> 
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <Hero/>
        <Benefits/>
        <CategorySection/>
        <ProductsSection/>
        <CollectionSection productIDs={[5, 2, 3]} />
        <TestimonialsSection/>
        <ContactSection/>
        {/* <Peticion/>
        <Peticion2/> */}
      </main>

        <Footer/>

   </div>
  );
}

export default App;
