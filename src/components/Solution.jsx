  import React from "react";
  import { useNavigate } from "react-router-dom";

const tabs = [
  {
    label: "Smart Announcer",
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
        className="inline-block mr-2"
      >
        <rect x="4" y="8" width="8" height="12" rx="2" fill="#CC262A" />
        <rect x="14" y="4" width="6" height="20" rx="3" fill="#E94B4B" />
        <circle cx="21" cy="14" r="2" fill="#CC262A" />
      </svg>
    ),
    content: (
      <div className="text-gray-700 text-base md:text-lg">
        <h4 className="font-bold text-xl mb-2" style={{ color: "#CC262A" }}>
          Smart Announcer
        </h4>
        <p>
          Your brand message is broadcast through the mall's audio system,
          reaching every visitor in the area. Perfect for mass awareness and
          brand recall.
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
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
        className="inline-block mr-2"
      >
        <rect x="5" y="7" width="18" height="10" rx="2" fill="#CC262A" />
        <rect x="10" y="19" width="8" height="2" rx="1" fill="#E94B4B" />
        <circle cx="14" cy="12" r="2" fill="#E94B4B" />
      </svg>
    ),
    content: (
      <div className="text-gray-700 text-base md:text-lg">
        <h4 className="font-bold text-xl mb-2" style={{ color: "#CC262A" }}>
          Smart Digital Signage
        </h4>
        <p>
          Display your creative ads on our digital screens in strategic
          locations. Capture attention with visuals and motion graphics.
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
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
        className="inline-block mr-2"
      >
        <rect x="7" y="7" width="14" height="14" rx="7" fill="#CC262A" />
        <path
          d="M14 10v4l3 2"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    content: (
      <div className="text-gray-700 text-base md:text-lg">
        <h4 className="font-bold text-xl mb-2" style={{ color: "#CC262A" }}>
          Activation
        </h4>
        <p>
          Engage directly with your audience through on-ground activation
          events, product sampling, and interactive experiences.
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

// Responsive TabSwitcher: tab buttons scrollable on mobile, horizontal on desktop
function TabSwitcher() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="w-full">
      <div
        className="
          flex
          overflow-x-auto
          md:overflow-visible
          gap-2 md:gap-6
          mb-6
          scrollbar-thin scrollbar-thumb-[#fbeaea] scrollbar-track-transparent
        "
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`
              flex items-center
              px-3 py-2 md:px-4
              rounded-full font-semibold
              transition-colors duration-200
              whitespace-nowrap
              text-sm md:text-base
              ${
                activeTab === idx
                  ? "bg-[#CC262A] text-white shadow"
                  : "bg-white text-[#CC262A] border border-[#CC262A] hover:bg-[#fbeaea]"
              }
              md:w-[384px]
            `}
            onClick={() => setActiveTab(idx)}
            type="button"
            style={{
              outline: "none",
              boxShadow:
                activeTab === idx
                  ? "0 4px 16px 0 rgba(204,38,42,0.10)"
                  : undefined,
              minWidth: "max-content",
              width: "100%",
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

const Solution = () => {
  const navigate = useNavigate();

  // Handler for Track Attention button
  const handleTrackAttention = () => {
    navigate("/form");
  };

  return (
    <>
      <section id="solutions" className="pt-4 pb-2 md:pt-6 md:pb-2 bg-white">
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
              Whether you manage a mall or multiple retail branches, Brandio gives
              you smart tools to stay connected with your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section: width disamakan dengan section di atas */}
      <section className="w-full my-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_16px_0_rgba(44,44,44,0.07)] p-8 flex flex-col items-start w-full min-h-[290px]">
            <div className="flex items-center gap-4 mb-5 w-full">
              <div className="bg-[#FBEAEA] rounded-xl p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 28 28">
                  <rect x="4" y="8" width="8" height="12" rx="2" fill="#CC262A" />
                  <rect x="14" y="4" width="6" height="20" rx="3" fill="#E94B4B" />
                  <circle cx="21" cy="14" r="2" fill="#CC262A" />
                </svg>
              </div>
              <div className="text-[#000000] font-semibold text-base md:text-lg leading-snug">
                Mall Ads ignored?
              </div>
            </div>
            <div className="text-[#2B3146] text-base font-medium mb-6 py-4 w-full">
              Track how many people hear or look
              <br />
              at your messages
            </div>
            <button
              className="mt-auto bg-[#CC262A] text-white font-semibold rounded-full px-5 py-2 flex items-center gap-2 text-sm shadow transition hover:bg-[#b71c1c]"
              type="button"
              onClick={handleTrackAttention}
            >
              Track Attention
              <span>
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M5 8h6M9 5l3 3-3 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_16px_0_rgba(44,44,44,0.07)] p-8 flex flex-col items-start w-full min-h-[290px]">
            <div className="flex items-center gap-4 mb-5 w-full">
              <div className="bg-[#FBEAEA] rounded-xl p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 28 28">
                  <rect x="5" y="7" width="18" height="10" rx="2" fill="#CC262A" />
                  <rect x="10" y="19" width="8" height="2" rx="1" fill="#E94B4B" />
                  <circle cx="14" cy="12" r="2" fill="#E94B4B" />
                </svg>
              </div>
              <div className="text-[#000000] font-semibold text-base md:text-lg leading-snug">
                Promo Screens Not
                <br />
                Working?
              </div>
            </div>
            <div className="text-[#2B3146] text-base font-medium mb-6 py-4 w-full">
              Get real-time viewer counts &
              <br />
              attention analytics
            </div>
            <button
              className="mt-auto bg-[#CC262A] text-white font-semibold rounded-full px-5 py-2 flex items-center gap-2 text-sm shadow transition hover:bg-[#b71c1c]"
              type="button"
              onClick={handleTrackAttention}
            >
              Track Attention
              <span>
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M5 8h6M9 5l3 3-3 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_16px_0_rgba(44,44,44,0.07)] p-8 flex flex-col items-start w-full min-h-[290px]">
            <div className="flex items-center gap-4 mb-5 w-full">
              <div className="bg-[#FBEAEA] rounded-xl p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 28 28">
                  <rect x="7" y="7" width="14" height="14" rx="7" fill="#CC262A" />
                  <path
                    d="M14 10v4l3 2"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-[#000000] font-semibold text-base md:text-lg leading-snug">
                Multi-Outlet Blind Spots?
              </div>
            </div>
            <div className="text-[#2B3146] text-base font-medium mb-6 py-4 w-full">
              Know what works and where in every
              <br />
              branch
            </div>
            <button
              className="mt-auto bg-[#CC262A] text-white font-semibold rounded-full px-5 py-2 flex items-center gap-2 text-sm shadow transition hover:bg-[#b71c1c]"
              type="button"
              onClick={handleTrackAttention}
            >
              Track Attention
              <span>
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M5 8h6M9 5l3 3-3 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
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
};

export default Solution;