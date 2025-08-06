const Footer = () => {
  return (
    <footer className="bg-white mt-10">
      <div className="px-4 pt-10 pb-8 mx-auto max-w-screen-xl md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand + Description */}
          <div className="md:w-[28%] flex-shrink-0 flex flex-col items-start">
            <a
              href="/"
              aria-label="Go home"
              title="Brandio"
              className="inline-flex items-center mb-2 mt-[-3rem] md:ml-[-4rem] ml-[-2.5rem]" // Geser lebih kiri lagi
            >
              <img
                src="/images/Logo_brandio2.png"
                alt="Brandio Logo"
                className="w-56 h-36 object-contain"
              />
            </a>
            <p className="text-sm text-gray-800 leading-relaxed mt-[-3rem]">
              Brandio is a smart system to automate in-store announcements and digital content, while tracking who actually sees or hears them. It helps retail businesses communicate smarter, stay compliant across locations, and makes every message count.
            </p>
          </div>
          {/* Menu Columns */}
          <div className="flex flex-1 flex-wrap md:flex-nowrap gap-8 justify-between">
            {/* Solutions */}
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900 mb-2">Solutions</p>
              <ul className="space-y-1 text-sm text-gray-800">
                <li>For Shopping Malls</li>
                <li>For Mini Markets</li>
                <li>For Retail Chains</li>
              </ul>
            </div>
            {/* Product */}
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900 mb-2">Product</p>
              <ul className="space-y-1 text-sm text-gray-800">
                <li>Smart Announcer</li>
                <li>Smart Digital Signage</li>
              </ul>
            </div>
            {/* Overview */}
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900 mb-2">Overview</p>
              <ul className="space-y-1 text-sm text-gray-800">
                <li>Home</li>
                <li>Solution</li>
                <li>Features</li>
                <li>FAQ</li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900 mb-2">Contact</p>
              <div className="flex items-center space-x-2 text-sm text-gray-800 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth={1.5} fill="none" />
                </svg>
                <span>business@sanasthan.io</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
