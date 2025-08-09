import React, { useEffect } from "react";

const Hero = () => {
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

  // Helper: wrap content in Spot Brand's width container
  const Container = ({ children, className = "" }) => (
    <div
      className={`py-10 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6 ${className}`}
    >
      {children}
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        data-aos="fade-in"
      >
        <Container>
          <div
            className="flex flex-col-reverse md:flex-row items-center justify-center w-full z-10 mt-[-2.5rem] md:mt-[-3.5rem]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Text Section */}
            <div
              className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8"
              data-aos="fade-right"
              data-aos-delay="200"
              style={{ position: "relative", top: "-59px" }}
            >
              <h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 py-2"
                style={{
                  fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                  color: "#2B3146",
                  letterSpacing: "0.01em",
                  textShadow: "0 4px 32px rgba(60,80,120,0.10)",
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Brandio is a <br className="hidden md:block" />{" "}
                <span style={{ color: "#CC262A" }}>best</span> partner <br />
                to <span style={{ color: "#CC262A" }}>growth</span> <br />
                your brand.
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-12"
                style={{
                  fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
                  color: "#4B5563",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  marginTop: "1rem",
                }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Capture your market smartly with US
              </p>

              {/* CTA Buttons */}
              <div
                className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start z-10 w-full"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a
                  href="#layanan"
                  className="px-8 py-3 text-white rounded-xl font-semibold shadow-lg transition text-lg"
                  style={{
                    backgroundColor: "#CC262A",
                    boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)",
                    border: "none",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  View Services
                </a>
                <a
                  href="#features"
                  className="px-8 py-3 rounded-xl font-semibold transition text-lg flex items-center hover:bg-[#ffeaea] hover:text-[#b71c1c]"
                  style={{ color: "#CC262A" }}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <span className="flex items-center">
                    Explore Features
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <svg
                        className="animate-bounce"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#CC262A"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          transform: "translate(4px, 4px)",
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Image Section (replace Lottie with /images/people3.webp) */}
            <div
              className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0"
              data-aos="fade-left"
              data-aos-delay="200"
              style={{ minWidth: 0, position: "relative", top: "-32px" }}
            >
              {/* Mobile: show bigger image, Desktop: show much bigger image */}
              <div className="w-full flex justify-center items-center">
                {/* Mobile */}
                <div className="block md:hidden w-full max-w-[450px] sm:max-w-[520px] h-auto" style={{ marginTop: "16px" }}>
                  <img
                    src="/images/people3.webp"
                    alt="People"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
                {/* Desktop */}
                <div className="hidden md:block w-full max-w-[1100px] xl:max-w-[2000px] h-auto" style={{ marginTop: "-24px" }}>
                  <div style={{ transform: "translateX(32px)" }}>
                    <img
                      src="/images/people3.webp"
                      alt="People"
                      style={{
                        width: "100%",
                        height: "auto",
                        minHeight: 400,
                        minWidth: 700,
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>      

      <section className="mt-[-9rem]">
        <div className="flex flex-wrap justify-center gap-10 py-8 w-full">
          {/* Example: Feather icons as inline SVGs, very lightweight */}
          <span title="Lightning Fast" className="flex flex-col items-center w-40">
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
            </svg>
            <span className="text-xs mt-2">AI and IOT Based</span>
          </span>
          <span title="Secure" className="flex flex-col items-center w-40">
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 17v.01" />
              <path d="M17 8V7a5 5 0 0 0-10 0v1" />
              <rect width="18" height="11" x="3" y="11" rx="2" />
            </svg>
            <span className="text-xs mt-2">Secure</span>
          </span>
          <span title="Easy Integration" className="flex flex-col items-center w-40">
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 11 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span className="text-xs mt-2">Easy Integration</span>
          </span>
          <span title="Customizable" className="flex flex-col items-center w-40">
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="text-xs mt-2">Customizable</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
