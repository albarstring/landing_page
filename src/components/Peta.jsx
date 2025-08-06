
// Export the component as default to fix the import error in App.jsx
import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Fallback Container component if ./Container is missing
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

const Peta = () => {
  // Koordinat tujuan: Mall of Serang
  const destinationLat = -6.118911693867718;
  const destinationLng = 106.17933717537157;

  // Inisialisasi AOS (Animate On Scroll)
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
        });
      });
    }
  }, []);

  // Fungsi untuk membuka Google Maps Direction
  const openDirection = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;
          window.open(url, "_blank");
        },
        () => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
          window.open(url, "_blank");
        }
      );
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
      window.open(url, "_blank");
    }
  };

  // Peta Section
  return (
    <section
      className="py-2 relative"
      style={{
        borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem",
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
          {/* Kiri: Teks */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start md:pr-8 mb-8 md:mb-0">
            <h2
              className="text-xl md:text-2xl font-extrabold text-left mb-6"
              style={{
                color: "#CC262A",
                fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              Our Service Locations
            </h2>
            <p
              className="text-gray-500 mb-8 text-lg"
              style={{ fontFamily: "'Inter', Arial, sans-serif" }}
            >
              Strategic locations in Serang City and surrounding areas, ready
              to maximize your promotional reach.
            </p>
            <div className="my-4 flex justify-start">
              <DotLottieReact
                src="https://lottie.host/fcfaccfe-45e4-4c23-ba27-43712e18a804/aztsYCNTvX.lottie"
                loop
                autoplay
                style={{ width: 200, height: 200 }}
              />
            </div>
          </div>
          {/* Kanan: Peta, Tombol, dan Teks bawah */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div
              className="overflow-hidden rounded-3xl shadow-lg w-full"
              style={{ minHeight: 300 }}
            >
              <iframe
                title="Lokasi Google Maps Mall of Serang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.087588236844!2d106.17933717537157!3d-6.118911693867718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418ad5ed6343b3%3A0xdcca547b25249e48!2sMall%20Of%20Serang!5e0!3m2!1sen!2sid!4v1754382178363!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 300, borderRadius: "1.5rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              className="flex justify-center mt-6 w-full"
            >
              <button
                onClick={openDirection}
                className="flex items-center gap-2 px-6 py-3 bg-[#CC262A] text-white rounded-full font-semibold shadow-lg hover:bg-[#ae3d3f] transition text-lg"
                style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-9.456 3.181a1 1 0 00-.063 1.885l7.197 2.88a1 1 0 00.894-.063l7.197-4.32a1 1 0 00.063-1.885l-7.197-2.88a1 1 0 00-.635-.006z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                Arahkan ke Lokasi
              </button>
            </div>
            <p
              className="text-center text-gray-500 mt-6 w-full"
              style={{ fontFamily: "'Inter', Arial, sans-serif" }}
            >
              Titik lokasi strategis di Kota Serang dan sekitarnya, siap
              memaksimalkan jangkauan promosi Anda.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Peta;