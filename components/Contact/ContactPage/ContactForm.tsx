export default function ContactForm() {
  return (
    <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-[#D1A741]/20 relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
        Get in Touch
      </h2>
      <p className="text-gray-500 mb-10 leading-relaxed">
        Have questions or want to discuss a project? Fill out the form below and we’ll get back to you promptly.
      </p>

      <form className="flex flex-col gap-6">
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            id="name"
            placeholder=" "
            className="peer border border-gray-200 p-4 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#CEA741] focus:border-transparent shadow-sm text-gray-900 transition"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[#CEA741] peer-focus:text-sm bg-white px-1"
          >
            Your Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer border border-gray-200 p-4 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-[#CEA741] focus:border-transparent shadow-sm text-gray-900 transition"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[#CEA741] peer-focus:text-sm bg-white px-1"
          >
            Your Email
          </label>
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            id="message"
            placeholder=" "
            className="peer border border-gray-200 p-4 rounded-2xl h-48 w-full focus:outline-none focus:ring-2 focus:ring-[#CEA741] focus:border-transparent shadow-sm text-gray-900 transition resize-none"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-[#CEA741] peer-focus:text-sm bg-white px-1"
          >
            Your Message
          </label>
        </div>

        <button className="bg-gradient-to-r from-[#D1A741] to-[#CEA741] text-[#0b0f0d] py-4 rounded-2xl font-bold uppercase tracking-wide hover:from-[#e0b84f] hover:to-[#f5d76e] shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}
