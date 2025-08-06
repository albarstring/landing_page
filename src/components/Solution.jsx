import React from "react";

const Solution = () => (
  <>
    <section
      id="solutions"
      className="pt-4 pb-2 md:pt-6 md:pb-2 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="md:ml-[-24px]">
          {/* Tambah margin kiri di desktop */}
          <div
            className="text-[#CC262A] font-semibold text-base md:text-lg mb-2"
            style={{ fontFamily: "'Montserrat', 'Inter', Arial, sans-serif" }}
          >
            Solution
          </div>
          <h2
            className="text-2xl md:text-2xl font-extrabold mb-2"
            style={{
              color: "#2B3146",
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Perfect Solution For <br /> Your Business
          </h2>
        </div>
        <div className="flex justify-end">
          <p
            className="text-sm md:text-base text-[#2B3146] font-semibold py-6"
            style={{
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              maxWidth: "450px",
            }}
          >
            Whether you manage a mall or multiple retail branches, Brandio
            gives you smart tools to stay connected with your customers.
          </p>
        </div>
      </div>
    </section>

    {/* Layanan Section */}
    <section
      id="layanan"
      className="py-6 relative"
      style={{ borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Smart Audio Ads */}
          <div
            className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            style={{
              backgroundImage: "url('/images/image5.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Blur glass effect on hover */}
            <span
              className="absolute inset-0 z-0 transition-all duration-300 pointer-events-none
                bg-white/10
                group-hover:backdrop-blur-lg group-hover:bg-white/30"
              style={{
                borderRadius: "inherit",
              }}
            ></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#CC262A] transition-all duration-300 group-hover:bg-[#b71c1c]">
                {/* IconBox: Speaker/Audio */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-10 w-10 text-white transition-all"
                >
                  <rect
                    x="8"
                    y="18"
                    width="10"
                    height="12"
                    rx="2"
                    fill="currentColor"
                  />
                  <polygon
                    points="18,18 30,10 30,38 18,30"
                    fill="currentColor"
                  />
                  <path
                    d="M34 16c2.5 2.5 2.5 13.5 0 16"
                    stroke="#E3EAF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white/90">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#ffff" }}
                >
                  Smart Audio Ads
                </h3>
                <p>
                  We deliver your audio ads automatically, seamlessly integrated, and at scale.
                </p>
              </div>
            </div>
          </div>
          {/* Smart Digital Signage */}
          <div
            className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            style={{
              backgroundImage: "url('/images/image7.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Blur glass effect on hover */}
            <span
              className="absolute inset-0 z-0 transition-all duration-300 pointer-events-none
                bg-white/10
                group-hover:backdrop-blur-lg group-hover:bg-white/30"
              style={{
                borderRadius: "inherit",
              }}
            ></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[#CC262A] transition-all duration-300 group-hover:bg-[#b71c1c]">
                {/* IconBox: Digital Signage/Monitor */}
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 48 48"
                  className="h-10 w-10 text-white transition-all"
                >
                  <rect
                    x="8"
                    y="12"
                    width="32"
                    height="20"
                    rx="4"
                    fill="currentColor"
                  />
                  <rect
                    x="18"
                    y="34"
                    width="12"
                    height="2"
                    rx="1"
                    fill="#E3EAF6"
                  />
                  <circle cx="24" cy="22" r="3" fill="#E3EAF6" />
                </svg>
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white/90">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#fff" }}
                >
                  Smart Digital Signage
                </h3>
                <p>
                  We deliver your advertisements in a more engaging and attractive way—reach your audience with creative ads together with BRANDIO.
                </p>
              </div>
            </div>
          </div>
          {/* (Customer Behavior Analytics tidak ditampilkan sesuai instruksi) */}
        </div>
      </div>
    </section>
  </>
);

export default Solution;