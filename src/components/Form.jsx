import React, { useRef, useState } from "react";

const FORMSUBMIT_URL = "https://formsubmit.co/albarnaga123@gmail.com";

const Form = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    // Prepare form data
    const formData = new FormData(formRef.current);

    // Add _next and _captcha fields for formsubmit.co
    formData.append("_next", window.location.href + "?success=1");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitting(false);
        setSuccess(true);
        setShowSuccessPopup(true);
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        if (formRef.current) formRef.current.reset();
        // After 2 seconds, close popup and redirect to homepage
        setTimeout(() => {
          setShowSuccessPopup(false);
          setSuccess(false);
          window.location.href = "/";
        }, 2000);
      } else {
        const data = await response.json();
        setSubmitting(false);
        setError(data.message || "Gagal mengirim pesan.");
      }
    } catch (err) {
      setSubmitting(false);
      setError("Gagal mengirim pesan. Silakan coba lagi nanti.");
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setSuccess(false);
    window.location.href = "/";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center relative">
            <svg
              className="mb-4"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="#22C55E" />
              <path
                d="M16 25.5L22 31.5L32 19.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-lg font-semibold text-gray-900 mb-2 text-center">
              Terima kasih!
            </div>
            <div className="text-gray-700 text-center mb-4">
              Pesan Anda sudah kami terima.
            </div>
            <button
              onClick={handleClosePopup}
              className="bg-[#CC262A] text-white font-semibold rounded-md px-4 py-2 mt-2 transition-colors duration-200 hover:bg-[#b71c1c] focus:outline-none"
            >
              Kembali ke Beranda
            </button>
            <div className="text-xs text-gray-400 mt-2 text-center">
              Anda akan diarahkan ke halaman utama secara otomatis...
            </div>
          </div>
        </div>
      )}
      {/* Left: Contact Info */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Let’s chat about how we can help
        </h2>
        <div className="bg-white rounded-xl shadow border p-5 flex items-center gap-4 max-w-xs">
          <div className="bg-[#CC262A] rounded-full p-2 flex items-center justify-center">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <rect x="4" y="8" width="24" height="16" rx="4" fill="#fff" />
              <rect x="4" y="8" width="24" height="16" rx="4" stroke="#CC262A" strokeWidth="2" />
              <path d="M4 10l12 8 12-8" stroke="#CC262A" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-sm text-gray-700">albarnaga123@gmail.com</div>
          </div>
        </div>
      </div>
      {/* Right: Form */}
      <div>
        <form
          ref={formRef}
          className="bg-white rounded-xl shadow border p-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* Hidden fields for formsubmit.co */}
          <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href + "?success=1" : ""} />
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Nama Lengkap<span className="text-[#CC262A]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Anda"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC262A] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Nama Perusahaan
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Masukkan nama perusahaan Anda"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC262A] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Email Kerja<span className="text-[#CC262A]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Masukkan email kerja Anda"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC262A] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Nomor Telepon<span className="text-[#CC262A]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Masukkan nomor telepon Anda"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC262A] text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">
              Pesan
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan Anda (opsional)"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CC262A] text-sm resize-none"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className={`bg-[#CC262A] text-white font-semibold rounded-md px-4 py-2 mt-2 transition-colors duration-200 ${
              submitting ? "opacity-60 cursor-not-allowed" : "hover:bg-[#b71c1c]"
            }`}
            disabled={submitting}
          >
            {submitting ? "Mengirim..." : "Kirim Pesan"}
          </button>
          {/* Remove inline success message, handled by popup */}
          {error && (
            <div className="text-red-600 text-sm mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
