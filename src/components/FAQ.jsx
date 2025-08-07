import React, { useState } from "react";

// Move FAQ data outside the component for clarity
const faqData = [
  {
    question: "How secure is my insurance information?",
    answer:
      "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    question: "How can I customize my insurance coverage?",
    answer:
      "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    question: "Is there a waiting period for insurance claims?",
    answer:
      "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
];

const FAQ = () => {
  // Use state to manage which accordions are open (multiple can be open)
  const [openIndexes, setOpenIndexes] = useState([]);

  // State for subscribe form
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handler for toggling accordion
  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  // Simple email validation
  const validateEmail = (email) => {
    // Basic regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Simulate async subscribe (replace with real API if needed)
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      // Simulate success
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="faq"
        className="py-2 w-full flex justify-center items-start"
        style={{
          background: "transparent",
        }}
      >
        {/* Samakan posisi width nya dengan Peta.jsx */}
        <div
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            // Menyamakan dengan Container di Peta.jsx
          }}
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start justify-between">
            {/* Left: FAQ Title */}
            <div className="flex flex-col text-left md:w-1/2 w-full md:pr-8">
              <p className="inline-block font-semibold text-[#CC262A] mb-4">
                FAQ
              </p>
              <p className="sm:text-4xl text-2xl font-medium text-[#2B3146]">
                Everything You Need to Know <br /> About Brandio
              </p>
            </div>
            {/* Right: Accordion */}
            <ul className="md:w-1/2 w-full">
              {faqData.map((item, idx) => {
                const isOpen = openIndexes.includes(idx);
                return (
                  <li key={idx} className="mb-4 last:mb-0">
                    <div
                      className="w-full border-t md:text-lg border-[#CC262A]/10 rounded-3xl bg-white shadow-lg transition-all hover:shadow-2xl"
                      style={{
                        marginBottom: "0.5rem",
                        boxShadow: "0 4px 24px 0 rgba(44, 62, 80, 0.10)",
                        borderRadius: "1.5rem",
                      }}
                    >
                      <button
                        type="button"
                        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left rounded-3xl focus:outline-none"
                        aria-expanded={isOpen}
                        style={{
                          background: "transparent",
                          borderRadius: "1.5rem",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                        }}
                        onClick={() => handleToggle(idx)}
                      >
                        <span className="flex-1 text-[#2B3146]">{item.question}</span>
                        {/* Arrow down icon, rotates up when expanded */}
                        <svg
                          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 8l4 4 4-4"
                            stroke="#2B3146"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <div
                        className="transition-all duration-300 ease-in-out overflow-hidden"
                        style={{
                          transition: "max-height 0.3s ease-in-out 0s",
                          maxHeight: isOpen ? "500px" : "0",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                        }}
                      >
                        <div className={`pb-5 leading-relaxed flex justify-end ${isOpen ? "" : "hidden md:flex"}`}>
                          <div className="space-y-2 leading-relaxed text-[#4B5563] text-right md:pr-8 pr-4">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        className="w-full flex justify-center items-center py-10 sm:py-14"
        style={{
          background: "#B71C1C",
          borderRadius: "1.5rem", // match FAQ's border radius (rounded-3xl = 1.5rem)
          marginTop: "2rem",
          maxWidth: "80rem", // max-w-7xl = 1280px = 80rem
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mx-auto">
          <p className="text-white text-sm font-medium mb-2" style={{ opacity: 0.85 }}>
            Our Subscribe
          </p>
          <h2
            className="text-white font-bold text-2xl sm:text-3xl mb-3"
            style={{
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              lineHeight: 1.2,
            }}
          >
            Subscribe for Smarter Retail<br className="hidden sm:block" /> Insights
          </h2>
          <p
            className="text-white text-sm sm:text-base mb-6 max-w-2xl"
            style={{
              opacity: 0.9,
              fontFamily: "'Inter', Arial, sans-serif",
            }}
          >
            Learn how to improve customer engagement and in-store communication with the latest tools and trends – straight from the Brandio team.
          </p>
          <form
            className="w-full max-w-md flex items-center bg-white rounded-full shadow-md px-2 py-1"
            style={{
              boxShadow: "0 4px 24px 0 rgba(44, 62, 80, 0.10)",
            }}
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-full text-sm focus:outline-none bg-transparent"
              style={{
                minWidth: 0,
                background: "transparent",
              }}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setError("");
                setSuccess(false);
              }}
              disabled={submitting}
            />
            <button
              type="submit"
              className="ml-2 px-6 py-2 bg-[#CC262A] text-white font-semibold rounded-full transition hover:bg-[#a81a1a] text-sm flex items-center justify-center"
              style={{
                boxShadow: "0 2px 8px 0 rgba(44, 62, 80, 0.10)",
                minWidth: 110,
                opacity: submitting ? 0.7 : 1,
                cursor: submitting ? "not-allowed" : "pointer",
              }}
              disabled={submitting}
            >
              {submitting ? (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
          {/* Feedback message */}
          <div className="w-full max-w-md mt-3 min-h-[24px]">
            {success && (
              <div className="text-green-100 bg-green-600/80 rounded-full px-4 py-2 text-sm font-medium transition-all">
                Thank you for subscribing!
              </div>
            )}
            {error && (
              <div className="text-red-100 bg-red-600/80 rounded-full px-4 py-2 text-sm font-medium transition-all">
                {error}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
