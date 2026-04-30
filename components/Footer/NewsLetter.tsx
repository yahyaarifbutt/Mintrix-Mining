"use client";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter form submitted!");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative flex items-center w-full max-w-sm group"
    >
      <label htmlFor="newsletter-email" className="sr-only">Enter email address</label>
      <input 
        id="newsletter-email"
        type="email" 
        placeholder="Enter your email" 
        required
        className="w-full bg-[#111111] border border-white/10 px-4 py-2.5 pr-28 rounded-lg text-white outline-none placeholder:text-[#555555] text-xs transition-all duration-300 focus:border-[#CEA741]/50 focus:bg-[#151515]"
      />
      <button 
        type="submit"
        className="absolute right-1 top-1 bottom-1 bg-[#CEA741] hover:bg-[#b59235] text-[#0A0A0A] px-4 rounded-md font-semibold text-[10px] sm:text-xs tracking-wider transition-colors focus-visible:outline-none flex items-center"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}