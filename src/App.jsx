import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Homepage";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp.jsx";
import Solution from "./components/Solution.jsx";
import Stuffs from "./components/Stuffs.jsx";
import Peta from "./components/Peta.jsx";
import FAQ from "./components/FAQ.jsx";
import Form from "./components/Form.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Sekarang menggunakan router, Form.jsx di route terpisah
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Solution />
              <Stuffs />
              <Peta />
              <Whatsapp />
              <FAQ />
            </>
          }
        />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
