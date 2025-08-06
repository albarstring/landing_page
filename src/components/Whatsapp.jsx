// The error "[plugin:vite:import-analysis] Failed to resolve import '@lottiefiles/react-lottie-player'" means the package is not installed.
// To fix: Remove the import and usage of Player, or replace with a fallback (e.g. static image or nothing).

// If you want to keep the animation, install the package with:
//   npm install @lottiefiles/react-lottie-player
// Or, for now, just use a static image as a placeholder.

const Container = ({ children, className = "" }) => (
  <div
    className={`py-10 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6 ${className}`}
  >
    {children}
  </div>
);

function Whatsapp() {
  return (
    <section
      id="kontak"
      className="py-2 text-[#2B3146] relative rounded-3xl"
      style={{
        borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem",
      }}
    >
      <Container className="max-w-3xl px-4 text-center">
        <div className="bg-[#CC262A] rounded-3xl shadow-lg p-2 md:p-4 relative overflow-hidden">
          {/* Decorative Boxicons */}
          <i
            className="bx bx-bullseye absolute top-4 left-4 text-white"
            style={{
              fontSize: 48,
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-megaphone absolute bottom-4 right-4 text-white"
            style={{
              fontSize: 56,
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-broadcast absolute top-1/2 left-0 -translate-y-1/2 text-white"
            style={{
              fontSize: 40,
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-bar-chart-alt-2 absolute bottom-2 left-1/2 -translate-x-1/2 text-white"
            style={{
              fontSize: 60,
              opacity: 0.4,
              zIndex: 1,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-bulb absolute top-6 right-6 text-white"
            style={{
              fontSize: 32,
              opacity: 0.45,
              zIndex: 1,
              pointerEvents: "none",
              rotate: "12deg",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-rocket absolute bottom-6 left-6 text-white"
            style={{
              fontSize: 36,
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: "none",
              rotate: "-8deg",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-star absolute top-[20%] right-[20%] text-white"
            style={{
              fontSize: 28,
              opacity: 0.4,
              zIndex: 1,
              pointerEvents: "none",
              rotate: "8deg",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-volume-full absolute bottom-[20%] left-[20%] text-white"
            style={{
              fontSize: 30,
              opacity: 0.45,
              zIndex: 1,
              pointerEvents: "none",
              rotate: "-10deg",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-message-dots absolute top-[33%] right-4 text-white"
            style={{
              fontSize: 26,
              opacity: 0.4,
              zIndex: 1,
              pointerEvents: "none",
              rotate: "6deg",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-like absolute bottom-[33%] left-4 text-white"
            style={{
              fontSize: 26,
              opacity: 0.4,
              zIndex: 1,
              pointerEvents: "none",
              rotate: "-6deg",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-user-voice absolute top-1/2 right-0 -translate-y-1/2 text-white"
            style={{
              fontSize: 40,
              opacity: 0.5,
              zIndex: 1,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="bx bx-network-chart absolute bottom-1 right-1/2 translate-x-1/2 text-white"
            style={{
              fontSize: 40,
              opacity: 0.35,
              zIndex: 1,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          ></i>
          {/* End Decorative Boxicons */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-2 text-white relative z-10"
            style={{
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Siap Promosikan Brand Anda?
          </h2>
          <p
            className="mb-4 text-base text-white w-90 mx-auto text-center relative z-10"
          >
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran
            terbaik
            <br />
            untuk kebutuhan iklan Anda di Kota Serang!
          </p>
          {/* Fallback: Static WhatsApp image instead of Lottie animation */}
          <div className="flex justify-center mb-4 relative z-10">
            <div className="bg-[#e9f9f1] rounded-full p-1 flex items-center justify-center relative overflow-visible">
              <i
                className="bx bx-chat absolute -top-2 -left-2 text-[#25D366]"
                style={{
                  fontSize: 24,
                  opacity: 0.5,
                  zIndex: 2,
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              ></i>
              <i
                className="bx bx-send absolute -bottom-2 -right-2 text-[#25D366]"
                style={{
                  fontSize: 20,
                  opacity: 0.5,
                  zIndex: 2,
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              ></i>
              {/* Static WhatsApp logo as fallback */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={{ width: 48, height: 48 }}
                loading="lazy"
              />
            </div>
          </div>
          <a
            href="https://wa.me/6281318942676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-1.5 bg-[#25D366] text-white font-semibold rounded-full shadow-xl hover:bg-[#1ebe5d] transition text-base items-center text-center justify-center gap-2 relative z-10"
            style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)" }}
          >
            <i className="bx bxl-whatsapp text-xl"></i>{" "}
            Hubungi via WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Whatsapp;