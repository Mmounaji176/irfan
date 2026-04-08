import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Niveaux from "./components/Niveaux";
import Admissions from "./components/Admissions";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Niveaux />
      <Admissions />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
