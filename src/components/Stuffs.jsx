import React, { useMemo } from "react";

const Container = React.memo(({ children, className = "" }) => (
  <div className={`py-10 px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6 ${className}`}>
    {children}
  </div>
));

const Stuffs = React.memo(() => {
  // Pakai cache/memoization untuk data cards
  const spotCards = useMemo(
    () => [
      {
        href: "#kontak",
        img: "/images/image1.webp",
        alt: "Spot Brand 1",
        className: "col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col",
        innerClass: "group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow",
      },
      {
        href: "#kontak",
        img: "/images/image2.webp",
        alt: "Spot Brand 2",
        className: "col-span-2 sm:col-span-1 md:col-span-2 flex flex-col",
        innerClass: "group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4",
        stacked: [
          {
            href: "#kontak",
            img: "/images/image3.webp",
            alt: "Spot Brand 3",
          },
          {
            href: "#kontak",
            img: "/images/image4.webp",
            alt: "Spot Brand 4",
          },
        ],
      },
      {
        href: "#kontak",
        img: "/images/image6.webp",
        alt: "Spot Brand 5",
        className: "col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col",
        innerClass: "group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow",
      },
    ],
    []
  );

  // WhatsApp direct link
  const waLink = "https://wa.me/6281318942676";

  return (
    <>
      <section
        className="flex justify-center items-center my-2 sm:my-4 py-8 sm:py-12 md:py-16"
        aria-label="Let your content speak"
      >
        <div
          className="relative w-full max-w-6xl rounded-2xl flex flex-col md:flex-row items-center px-2 sm:px-6 py-8 sm:py-10 md:py-12 mx-auto overflow-visible"
          style={{
            background: "#B71C1C",
            minHeight: "180px",
            boxShadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)",
          }}
        >
          {/* Left: Ganti gambar bag hand dengan gambar orang (lihat gambar orangnya) */}
          <div className="absolute left-0 bottom-0 z-10 flex items-end h-full">
            <img
              src="/images/megaphone.png"
              alt="Brandio Person"
              className="h-24 xs:h-28 sm:h-36 md:h-44 lg:h-56 object-contain"
              style={{
                minWidth: 48,
                maxWidth: "110px",
                width: "auto",
                marginLeft: "0.5rem",
                marginBottom: "0.5rem",
              }}
              loading="lazy"
            />
          </div>
          {/* Center: Text and Button */}
          <div className="flex-1 flex flex-col items-center justify-center text-center mx-auto z-20">
            <h2
              className="text-white text-base xs:text-lg sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6"
              style={{
                fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                letterSpacing: "0.01em",
                lineHeight: 1.2,
                textShadow: "0 4px 32px rgba(60,80,120,0.10)",
              }}
            >
              Let your content speak
              <br className="hidden md:block" />
              and know who hears it.
            </h2>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-white bg-[#CC262A] hover:bg-[#a61b1f] transition-colors duration-200 shadow-md text-sm sm:text-base"
              style={{
                minWidth: 90,
                boxShadow: "0 4px 16px 0 rgba(60, 80, 120, 0.10)",
              }}
            >
              Let's Do It
            </a>
          </div>
        
          <div className=" md:hidden absolute inset-x-0 bottom-0 flex justify-center z-20 pointer-events-none">
            <img
              src="/images/people2.png"
              alt="Woman with megaphone"
              className="w-[90px]"
              style={{
                marginBottom: "0rem", // naikkan ke atas
                zIndex: 20,
                pointerEvents: "auto",
                marginLeft: "20rem", // geser ke kanan (bukan ke kiri)
              }}
              loading="lazy"
            />
          </div>
          {/* Desktop: show people2.png on the right, as before */}
          <div
            className="
              hidden md:flex
              absolute
              right-0
              -top-32
              flex-col items-end z-20
              w-[260px] lg:w-[320px]
            "
            style={{ pointerEvents: "none" }}
          >
            <div className="relative w-full flex flex-col items-end" style={{ marginTop: "-6.1rem" }}>
              {/* Foto wanita dengan megaphone, badge dipaskan dengan tangan */}
              <img
                src="/images/people2.png"
                alt="Woman with megaphone"
                className="
                  w-full
                  h-auto
                  max-h-[420px] lg:max-h-[520px]
                  object-contain
                  rounded-b-2xl
                "
                style={{
                  marginRight: "0",
                  marginTop: "0",
                  borderBottomLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                  zIndex: 10,
                  pointerEvents: "auto"
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-1 bg-[#CC262A] rounded w-full my-8"></div>
      </div>

      {/* Spot Brand Section */}
      <section className="py-10" id="location">
        {/* Teks dan CTA */}
        <div
          className="flex flex-col items-center text-center justify-center"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ color: "#2B3146" }}
          >
            Comprehensive Advertising Spots
          </h2>
          <p
            className="mt-2 text-xl text-gray-500 mb-8 max-w-2xl"
          >
            Your advertisement will be delivered to all mall audiences through
            the existing audio system, ensuring your brand message is broadcast
            throughout the entire mall area.
          </p>
          <a
            href="#kontak"
            className="inline-block rounded-md border border-transparent bg-[#CC262A] py-3 px-8 text-center font-medium text-white hover:bg-[#b71c1c] transition"
          >
            Consult Now
          </a>
        </div>
        <Container>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full"
          >
            {/* Card 1 */}
            <div className={spotCards[0].className}>
              <a
                href={spotCards[0].href}
                className={spotCards[0].innerClass}
              >
                <img
                  src={spotCards[0].img}
                  alt={spotCards[0].alt}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
            {/* Card 2 + 3 (stacked) */}
            <div className={spotCards[1].className}>
              <a
                href={spotCards[1].href}
                className={spotCards[1].innerClass}
              >
                <img
                  src={spotCards[1].img}
                  alt={spotCards[1].alt}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                {spotCards[1].stacked.map((card, idx) => (
                  <a
                    key={card.alt}
                    href={card.href}
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </a>
                ))}
              </div>
            </div>
            {/* Card 5 */}
            <div className={spotCards[2].className}>
              <a
                href={spotCards[2].href}
                className={spotCards[2].innerClass}
              >
                <img
                  src={spotCards[2].img}
                  alt={spotCards[2].alt}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
});

export default Stuffs;
