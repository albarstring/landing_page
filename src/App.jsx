import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Homepage";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp.jsx";
import Solution from "./components/Solution.jsx";
import Stuffs from "./components/Stuffs.jsx";
import Peta from "./components/Peta.jsx";
import FAQ from "./components/FAQ.jsx"; // Make sure FAQ is a default export in FAQ.jsx
import AOS from "aos";
import "aos/dist/aos.css";

// Jika ingin semua komponen dalam satu halaman (tanpa routing)
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <Stuffs />
      <Peta />
      <Whatsapp />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
