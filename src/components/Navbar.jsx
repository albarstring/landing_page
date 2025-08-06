import React, { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom"; // Removed to avoid error outside <Router>
import logoBrandio from "/images/Logo_brandio2.png";

// Navbar items as in the image
const navItems = [
  { id: "home", name: "Home", sectionId: null },
  { id: "solutions", name: "Solutions", sectionId: "solutions" },
  // Ganti "Features" menjadi "Layanan"
  { id: "features", name: "Layanan", sectionId: "features" },
  { id: "faq", name: "FAQ", sectionId: "faq" },
];

const getActiveNav = (pathname) => {
  if (pathname === "/" || pathname === "/home") return "home";
  return null;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  // const location = useLocation(); // Removed to avoid error outside <Router>
  const navClickedRef = useRef(false);
  const lastScrollY = useRef(0);

  // Update active nav on route change
  // Removed useLocation dependency, fallback to window.location
  useEffect(() => {
    if (!navClickedRef.current) {
      const current = getActiveNav(window.location.pathname);
      if (current) setActive(current);
    }
    navClickedRef.current = false;
    // eslint-disable-next-line
  }, [window.location.pathname]);

  // Scroll spy: update active nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const offset = 120;

      const sections = [
        { id: "home", top: 0 },
        ...navItems
          .filter(item => item.sectionId)
          .map(item => {
            const el = document.getElementById(item.sectionId);
            return {
              id: item.id,
              top: el ? el.getBoundingClientRect().top + window.scrollY : Infinity,
            };
          }),
      ];

      sections.sort((a, b) => a.top - b.top);

      let currentSection = "home";
      for (let i = 0; i < sections.length; i++) {
        if (scrollY + offset >= sections[i].top) {
          currentSection = sections[i].id;
        }
      }

      if (active !== currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [active]);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    let ticking = false;
    const handleShowHideNavbar = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY <= 0) {
            setShowNavbar(true);
          } else if (currentScrollY > lastScrollY.current) {
            // Scroll down
            setShowNavbar(false);
          } else if (currentScrollY < lastScrollY.current) {
            // Scroll up
            setShowNavbar(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleShowHideNavbar, { passive: true });
    return () => window.removeEventListener("scroll", handleShowHideNavbar);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    setActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
      }
    } else {
      const navItem = navItems.find(item => item.id === id);
      const sectionId = navItem?.sectionId;
      navClickedRef.current = true;
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = `/#${sectionId}`;
        }
      }
    }
  };

  // Login button only
  const LoginButton = () => (
    <button
      className="bg-[#CC262A] hover:bg-[#d13d3d] text-white font-semibold rounded-lg px-6 py-2 ml-2 transition-colors duration-200 text-sm"
      style={{ minWidth: 90 }}
    >
      Let's Talk
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-12 py-2 md:py-0 h-[60px]">
        {/* Logo Brandio on the far left */}
        <div className="flex items-center min-w-[120px] sm:min-w-[180px] md:min-w-[260px]">
          <img
            src={logoBrandio}
            alt="Brandio Logo"
            className="h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-40 object-contain mr-2 cursor-pointer"
            onClick={e => {
              e.preventDefault();
              handleNavClick("home");
            }}
          />
        </div>
        {/* Nav items centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                className={`relative bg-transparent border-none outline-none px-2 py-1 text-sm sm:text-base font-medium tracking-wide cursor-pointer transition-colors duration-150
                  ${isActive ? "text-[#E94B4B]" : "text-gray-700 hover:text-[#E94B4B]"}`}
                style={{ boxShadow: "none", background: "none" }}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.name}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 rounded-full transition-all duration-200
                    ${isActive ? "w-4/5 bg-[#E94B4B]" : "w-0 bg-transparent"}`}
                ></div>
              </button>
            );
          })}
        </div>
        {/* Right side: login only */}
        <div className="flex items-center gap-2 ml-2">
          {/* Hide on mobile, show on md+ */}
          <span className="hidden md:inline">
            <LoginButton />
          </span>
        </div>
        {/* Mobile Menu Toggle */}
        <span
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden ml-2 bg-[#E94B4B] hover:bg-[#d13d3d] text-white rounded-full p-2 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {!mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </span>
      </div>
      {/* Mobile Navbar */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full rounded-b-xl z-50 py-4 px-2 sm:px-4 flex flex-col space-y-2 bg-white border-t text-black shadow-lg"
        >
          {/* Logo Brandio centered in mobile menu */}
          <div className="flex flex-col gap-2 items-center">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  className={`relative w-full text-center bg-transparent border-none outline-none py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold tracking-wide cursor-pointer transition-colors duration-150
                    ${isActive ? "text-[#E94B4B]" : "text-gray-800 hover:text-[#E94B4B]"}`}
                  style={{ boxShadow: "none", background: "none" }}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.name}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 rounded-full transition-all duration-200
                      ${isActive ? "w-4/5 bg-[#E94B4B]" : "w-0 bg-transparent"}`}
                  ></div>
                </button>
              );
            })}
          </div>
          {/* Let's Talk button centered in mobile menu */}
          <div className="flex justify-center mt-4">
            <button
              className="bg-[#CC262A] hover:bg-[#d13d3d] text-white font-semibold rounded-lg px-6 py-2 transition-colors duration-200 text-sm"
              style={{ minWidth: 90 }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
