import React from "react";

const tabs = [
  {
    label: "Smart Announcer",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="inline-block mr-2">
        <rect x="4" y="8" width="8" height="12" rx="2" fill="#CC262A" />
        <rect x="14" y="4" width="6" height="20" rx="3" fill="#E94B4B" />
        <circle cx="21" cy="14" r="2" fill="#CC262A" />
      </svg>
    ),
    content: (
      <div className="text-gray-700 text-base md:text-lg">
        <h4 className="font-bold text-xl mb-2" style={{ color: "#CC262A" }}>Audio Ads</h4>
        <p>
          Your brand message is broadcast through the mall's audio system, reaching every visitor in the area. Perfect for mass awareness and brand recall.
        </p>
        <ul className="list-disc pl-6 mt-3 text-sm md:text-base">
          <li>High reach to all mall visitors</li>
          <li>Flexible scheduling</li>
          <li>Professional voice over</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Smart Digital Signage",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="inline-block mr-2">
        <rect x="5" y="7" width="18" height="10" rx="2" fill="#CC262A" />
        <rect x="10" y="19" width="8" height="2" rx="1" fill="#E94B4B" />
        <circle cx="14" cy="12" r="2" fill="#E94B4B" />
      </svg>
    ),
    content: (
      <div className="text-gray-700 text-base md:text-lg">
        <h4 className="font-bold text-xl mb-2" style={{ color: "#CC262A" }}>Smart Digital Signage</h4>
        <p>
          Display your creative ads on our digital screens in strategic locations. Capture attention with visuals and motion graphics.
        </p>
        <ul className="list-disc pl-6 mt-3 text-sm md:text-base">
          <li>Eye-catching digital displays</li>
          <li>Flexible content updates</li>
          <li>Prime locations in the mall</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Activation",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="inline-block mr-2">
        <rect x="7" y="7" width="14" height="14" rx="7" fill="#CC262A" />
        <path d="M14 10v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content: (
      <div className="text-gray-700 text-base md:text-lg">
        <h4 className="font-bold text-xl mb-2" style={{ color: "#CC262A" }}>Activation</h4>
        <p>
          Engage directly with your audience through on-ground activation events, product sampling, and interactive experiences.
        </p>
        <ul className="list-disc pl-6 mt-3 text-sm md:text-base">
          <li>Direct customer engagement</li>
          <li>Customizable event concepts</li>
          <li>Boost brand interaction</li>
        </ul>
      </div>
    ),
  },
];

function TabSwitcher() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="w-full">
      <div className="flex justify-center gap-2 md:gap-6 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-colors duration-200
              ${activeTab === idx
                ? "bg-[#CC262A] text-white shadow"
                : "bg-white text-[#CC262A] border border-[#CC262A] hover:bg-[#fbeaea]"}
            `}
            onClick={() => setActiveTab(idx)}
            type="button"
            style={{
              outline: "none",
              boxShadow: activeTab === idx ? "0 4px 16px 0 rgba(204,38,42,0.10)" : undefined,
            }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow p-6 min-h-[160px] transition-all duration-300">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

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
              backgroundImage: "url('/images/image5.webp')",
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
              backgroundImage: "url('/images/image7.webp')",
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
    {/* Switch Tab Section */}
    <section className="py-10" id="solution-tabs">
      <div className="max-w-4xl mx-auto px-4">
        <TabSwitcher />
      </div>
    </section>
  </>
);

export default Solution;