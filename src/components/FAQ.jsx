// FAQ Section: Align FAQ content and accordion edges to match the red rounded WhatsApp section

import React from "react";

const FAQ = () => (
  <section
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
          {[
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
          ].map((item, idx) => (
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
                  aria-expanded="false"
                  style={{
                    background: "transparent",
                    borderRadius: "1.5rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                  }}
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const content = btn.nextElementSibling;
                    const expanded = btn.getAttribute("aria-expanded") === "true";
                    btn.setAttribute("aria-expanded", (!expanded).toString());
                    if (!expanded) {
                      content.style.maxHeight = content.scrollHeight + "px";
                      btn.querySelector("svg").classList.add("rotate-180");
                    } else {
                      content.style.maxHeight = "0";
                      btn.querySelector("svg").classList.remove("rotate-180");
                    }
                  }}
                >
                  <span className="flex-1 text-[#2B3146]">{item.question}</span>
                  {/* Arrow down icon, rotates up when expanded */}
                  <svg
                    className="flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200"
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
                  className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                  style={{
                    transition: "max-height 0.3s ease-in-out 0s",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                  }}
                >
                  <div className="pb-5 leading-relaxed flex justify-end">
                    <div className="space-y-2 leading-relaxed text-[#4B5563] text-right md:pr-8 pr-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default FAQ;
