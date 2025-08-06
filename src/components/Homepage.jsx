import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        data-aos="fade-in"
      >
        {/* Hero Content: Text Left, Lottie Right */}
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl mx-auto z-10 mt-8 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Text Section */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1
              className="text-2xl md:text-6xl font-extrabold mb-2 py-4"
              style={{
                fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                color: "#2B3146",
                letterSpacing: "0.01em",
                textShadow: "0 4px 32px rgba(60,80,120,0.10)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Brandio is a <br className="hidden md:block" /> <span style={{ color: "#CC262A" }}>best</span> partner <br />to <span style={{ color: "#CC262A" }}>growth</span> <br />your brand. 
            </h1>
            <p
              className="text-base md:text-xl max-w-2xl mx-auto md:mx-0 mb-12"
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
              Solusi iklan modern, minimalis, dan elegan untuk bisnis Anda.
              Jangkau lebih banyak pelanggan dengan layanan iklan profesional,
              mulai dari billboard, digital, hingga analitik, di Kota Serang dan
              sekitarnya.
            </p>
            {/* Tombol CTA: Lihat Layanan & Konsultasi Gratis */}
            <div
              className="mt-6 flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6 z-10 w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#layanan"
                className="px-8 py-3 text-white rounded-xl font-semibold shadow-lg transition text-lg"
                style={{
                  backgroundColor: "#CC262A", // Warna merah dari button pada gambar
                  boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)",
                  border: "none",
                }}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Lihat Layanan
              </a>
              <a
                href="#kontak"
                className="px-8 py-3 rounded-xl font-semibold transition text-lg flex items-center hover:bg-[#ffeaea] hover:text-[#b71c1c]"
                style={{ color: "#CC262A" }}
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <span className="flex items-center">
                  Explore Features
                  {/* Arrow bawah di samping kanan teks, dengan animasi bounce, align middle, arrow turun sedikit dan ke kanan, ada space */}
                  <span style={{ display: "inline-flex", alignItems: "center", marginLeft: "0.5rem" }}>
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
                        transform: "translate(4px, 4px)", // ke kanan dan ke bawah sedikit
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
          {/* Lottie Animation Section */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <DotLottieReact
              src="https://lottie.host/fb8a429c-ff2f-40c1-8bcf-8ebd0a61d04b/AglnnGf0sw.lottie"
              loop
              autoplay
              style={{ width: 500, height: 500, maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Icon */}
      <section className="mt-[-3rem]">
      <div className="max-w-3xl mx-auto px-5 mt-4">
        <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
          {/* React */}
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fillRule="evenodd">
              <g transform="matrix(.06928 0 0 .06928 7.367398 13.505331)" fill="none">
                <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff"></circle>
                <g stroke="#00d8ff" strokeWidth="24">
                  <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"></path>
                  <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"></path>
                  <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"></path>
                </g>
              </g>
              <path d="M64.62 38.848l-4.26-6.436c2.153-.19 4.093-1.75 4.093-4.6 0-2.9-2.058-4.756-4.945-4.756h-6.34v15.78h1.964v-6.27h3.147l4.022 6.27zm-5.347-7.997h-4.14v-6.033h4.14c1.87 0 3.147 1.23 3.147 3.005s-1.278 3.03-3.147 3.03zm12.658 8.28c1.87 0 3.407-.615 4.543-1.75l-.852-1.16c-.9.923-2.224 1.443-3.525 1.443-2.46 0-3.975-1.798-4.117-3.95h9.25v-.45c0-3.43-2.035-6.128-5.49-6.128-3.265 0-5.63 2.674-5.63 5.986 0 3.573 2.437 6 5.82 6zm3.55-6.72h-7.5c.095-1.75 1.3-3.81 3.738-3.81 2.603 0 3.738 2.106 3.762 3.81zm13.534 6.436v-7.855c0-2.768-2.01-3.857-4.424-3.857-1.87 0-3.336.615-4.566 1.893l.828 1.23c1.017-1.088 2.13-1.585 3.502-1.585 1.656 0 2.887.875 2.887 2.413v2.058c-.923-1.065-2.224-1.562-3.786-1.562-1.94 0-4 1.207-4 3.762 0 2.484 2.058 3.786 4 3.786 1.538 0 2.84-.544 3.786-1.585v1.3zm-4.92-.994c-1.656 0-2.816-1.04-2.816-2.484 0-1.467 1.16-2.508 2.816-2.508 1.254 0 2.46.473 3.147 1.42v2.153c-.686.946-1.893 1.42-3.147 1.42zm13.5 1.278c2.082 0 3.312-.852 4.188-1.987l-1.183-1.088c-.757 1.017-1.727 1.49-2.9 1.49-2.437 0-3.95-1.893-3.95-4.424s1.514-4.4 3.95-4.4c1.183 0 2.153.45 2.9 1.49l1.183-1.088c-.875-1.136-2.106-1.987-4.188-1.987-3.407 0-5.702 2.603-5.702 5.986 0 3.407 2.295 6 5.702 6zm9.56 0c1.04 0 1.68-.308 2.13-.733l-.52-1.325c-.237.26-.7.473-1.207.473-.78 0-1.16-.615-1.16-1.467v-7.098h2.32V27.42h-2.32v-3.123h-1.775v3.123h-1.893v1.562h1.893v7.477c0 1.704.852 2.674 2.532 2.674z" fill="#00d8ff"></path>
            </svg>
          </div>
          {/* Vercel */}
          <div className="text-gray-400">
            <svg width="82" height="40" viewBox="0 0 148 90" className="text-black">
              <path
                d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
            </svg>
          </div>
          {/* Tailwind */}
          <div className="text-gray-400">
            <svg viewBox="0 0 248 31" className="w-auto h-5 text-slate-900">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                fill="#38bdf8"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          {/* Sanity */}
          <div className="text-gray-400">
            <svg viewBox="0 0 105 22" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em" className="text-[#f03e2f]">
              <title>Sanity</title>
              <path opacity="0.7" d="M78.1793 7.99261V21.0028H73.9031V10.2138L78.1793 7.99261Z" fill="currentColor"></path>
              <path opacity="0.7" d="M20.9511 21.33L30.944 16.1051L29.7121 12.9141L23.1332 15.9821L20.9511 21.33Z" fill="currentColor"></path>
              <path opacity="0.5" d="M73.9031 10.2027L84.7443 4.65477L82.9126 1.5571L73.9031 5.95997V10.2027Z" fill="currentColor"></path>
              <path opacity="0.7" d="M43.3705 6.96233V21.0028H39.2927V1.00714L43.3705 6.96233Z" fill="currentColor"></path>
              <path opacity="0.5" d="M27.1299 6.18617L20.9511 21.33L17.7731 18.5943L25.1353 1.00714L27.1299 6.18617Z" fill="currentColor"></path>
              <path d="M25.1353 1.00714H29.3477L37.1386 21.0028H32.8269L25.1353 1.00714Z" fill="currentColor"></path>
              <path d="M44.0012 1.00714L52.9824 14.6682V21.0028L39.2927 1.00714H44.0012Z" fill="currentColor"></path>
              <path d="M64.9183 1.00714H60.6739V21.0063H64.9183V1.00714Z" fill="currentColor"></path>
              <path d="M73.9031 4.65474H67.37V1.00714H82.5867L84.7443 4.65474H78.1793H73.9031Z" fill="currentColor"></path>
              <path opacity="0.5" d="M97.2754 13.4153V21.0028H93.0629V13.4153" fill="currentColor"></path>
              <path d="M93.0629 13.4152L100.191 1.00714H104.666L97.2754 13.4152H93.0629Z" fill="currentColor"></path>
              <path opacity="0.7" d="M93.063 13.4152L85.7363 1.00714H90.3456L95.3092 9.51008L93.063 13.4152Z" fill="currentColor"></path>
              <path d="M1.96126 3.31479C1.96126 6.09921 3.71145 7.75595 7.21536 8.62956L10.9283 9.47533C14.2444 10.2236 16.2639 12.0822 16.2639 15.1103C16.2897 16.4295 15.8531 17.7173 15.0274 18.7579C15.0274 15.7368 13.4367 14.1044 9.59972 13.1229L5.95409 12.3085C3.03475 11.6541 0.781478 10.1262 0.781478 6.83709C0.766123 5.56693 1.18116 4.32781 1.96126 3.31479" fill="currentColor"></path>
              <path opacity="0.7" d="M52.9824 13.6415V1.00714H57.0602V21.0028H52.9824V13.6415Z" fill="currentColor"></path>
              <path opacity="0.7" d="M12.7458 14.3689C14.3294 15.3643 15.0238 16.7565 15.0238 18.7544C13.713 20.4041 11.4101 21.33 8.70333 21.33C4.14718 21.33 0.958577 19.1268 0.25 15.2982H4.62547C5.18878 17.0559 6.68034 17.8703 8.67144 17.8703C11.1019 17.8703 12.7174 16.5964 12.7493 14.3619" fill="currentColor"></path>
              <path opacity="0.7" d="M4.23567 7.44267C3.5125 7.02045 2.9192 6.41375 2.51873 5.68697C2.11827 4.96019 1.92558 4.14045 1.96113 3.31476C3.22594 1.67891 5.42608 0.679993 8.10804 0.679993C12.7492 0.679993 15.4347 3.08852 16.0972 6.47856H11.8883C11.4242 5.14203 10.2621 4.10136 8.14347 4.10136C5.87957 4.10136 4.33487 5.39611 4.24629 7.44267" fill="currentColor"></path>
            </svg>
          </div>
          {/* Netlify */}
          <div className="text-gray-400">
            <svg width="100" height="64" viewBox="0 0 284 65" fill="currentColor" className="text-black">
              <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
            </svg>
          </div>
        </div>
      </div>
      </section>

      <section
        id="solutions"
        className="py-12 md:py-15 bg-white"
        data-aos="fade-in"
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-[#CC262A] font-semibold text-base md:text-lg mb-2" style={{fontFamily: "'Montserrat', 'Inter', Arial, sans-serif"}}>
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
          <div>
            <p
              className="text-sm md:text-base text-[#2B3146] font-semibold py-6"
              style={{
                fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                maxWidth: "450px",
              }}
            >
              Whether you manage a mall or multiple retail branches, Brandio gives you smart tools to stay connected with your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section
        id="layanan"
        className="py-20 relative"
        style={{ borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem" }}
        data-aos="fade-in"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-2xl md:text-6xl font-extrabold text-left mb-16"
            style={{
              color: "#2B3146",
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span style={{ color: "#F08B50" }}> Layanan Kami</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Smart Audio Ads */}
            <div
              className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
              data-aos="fade-up"
              data-aos-delay="200"
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
                <span className="grid h-20 w-20 place-items-center rounded-full bg-indigo-500 transition-all duration-300 group-hover:bg-indigo-400">
                  {/* IconBox: Speaker/Audio */}
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <rect x="8" y="18" width="10" height="12" rx="2" fill="currentColor" />
                    <polygon points="18,18 30,10 30,38 18,30" fill="currentColor" />
                    <path d="M34 16c2.5 2.5 2.5 13.5 0 16" stroke="#E3EAF6" strokeWidth="2" strokeLinecap="round" />
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
                    Kami sampaikan Iklan Audio anda secara Otomatis, Integerasi dan Masif.
                  </p>
                </div>
              </div>
            </div>
            {/* Smart Digital Signage */}
            <div
              className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
              data-aos="fade-up"
              data-aos-delay="300"
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
                <span className="grid h-20 w-20 place-items-center rounded-full bg-indigo-500 transition-all duration-300 group-hover:bg-indigo-400">
                  {/* IconBox: Digital Signage/Monitor */}
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <rect x="8" y="12" width="32" height="20" rx="4" fill="currentColor" />
                    <rect x="18" y="34" width="12" height="2" rx="1" fill="#E3EAF6" />
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
                    Kami menyampaikan iklan anda dengan lebih menarik dan atraktif, jangkau audiens dengan iklan kreatif bersama BRANDIO.
                  </p>
                </div>
              </div>
            </div>
            {/* (Customer Behavior Analytics tidak ditampilkan sesuai instruksi) */}
          </div>
        </div>
      </section>

      {/* Spot Brand Section */}
      <section className="py-20" id="spot-brand">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* Card 1 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
              <a href="#kontak" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img
                  src="/images/image1.jpg"
                  alt="Spot Brand 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
            {/* Card 2 + 3 (stacked) */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 flex flex-col">
              <a href="#kontak" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                <img
                  src="/images/image2.JPG"
                  alt="Spot Brand 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a href="#kontak" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img
                    src="/images/image3.jpg"
                    alt="Spot Brand 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
                <a href="#kontak" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img
                    src="/images/image4.jpg"
                    alt="Spot Brand 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
              <a href="#kontak" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img
                  src="/images/image6.JPG"
                  alt="Spot Brand 5"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
          </div>
          {/* Teks dan CTA */}
          <div className="flex flex-col items-center text-center justify-center mt-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ color: "#2B3146" }}
            >
              Spot Iklan yang menyeluruh
            </h2>
            <p className="mt-2 text-xl text-gray-500 mb-8 max-w-2xl">
              Iklan anda akan kami sampaikan kepada seluruh audiens di dalam mall menggunakan sistem audio existing, sehingga pesan brand anda akan tersebar di seluruh area mall.
            </p>
            <a
              href="#kontak"
              className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 transition"
            >
              Konsultasikan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Peta Section */}
      <section
        className="py-20 relative"
        style={{
          borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem",
        }}
        data-aos="fade-in"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
            {/* Kiri: Teks */}
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start md:pr-8 mb-8 md:mb-0">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-left mb-6"
                style={{
                  color: "#2B3146",
                  fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                  letterSpacing: "0.01em",
                }}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Lokasi Layanan Kami
              </h2>
              <p
                className="text-gray-500 mb-8 text-lg"
                style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Titik lokasi strategis di Kota Serang dan sekitarnya, siap
                memaksimalkan jangkauan promosi Anda.
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
                data-aos="zoom-in"
                data-aos-delay="200"
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
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  onClick={openDirection}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-[#7BA7D9] transition text-lg"
                  style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)" }}
                  data-aos="zoom-in"
                  data-aos-delay="400"
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
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Titik lokasi strategis di Kota Serang dan sekitarnya, siap
                memaksimalkan jangkauan promosi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="kontak"
        className="py-20 text-[#2B3146] relative"
        style={{
          borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem",
        }}
        data-aos="fade-in"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              color: "#2B3146",
              letterSpacing: "0.01em",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Siap Promosikan Brand Anda?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "#4B5563" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik
            untuk kebutuhan iklan Anda di Kota Serang!
          </p>
          {/* Lottie animation above WhatsApp button */}
          <div className="flex justify-center mb-6">
            <DotLottieReact
              src="https://lottie.host/eed3f706-5f29-4e9a-be7b-5c321b30a4dc/86Z6xMDpDB.lottie"
              loop
              autoplay
              style={{ width: 120, height: 120 }}
            />
          </div>
          <a
            href="https://wa.me/6281318942676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#25D366] text-white font-semibold rounded-full shadow-xl hover:bg-[#1ebe5d] transition text-lg flex items-center justify-center gap-2"
            style={{ boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)" }}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <i className="bx bxl-whatsapp text-2xl"></i>
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
