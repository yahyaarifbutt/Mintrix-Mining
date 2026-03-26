"use client";

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, you can add your API call here (e.g., Mailchimp or Resend)
    console.log("Newsletter form submitted!");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-full p-2 flex items-center shadow-2xl focus-within:ring-2 focus-within:ring-[#D4AF37]/50 transition-all duration-300"
    >
      <label htmlFor="newsletter-email" className="sr-only">Enter email address</label>
      <input 
        id="newsletter-email"
        type="email" 
        placeholder="Enter email address" 
        required
        className="flex-1 bg-transparent px-4 sm:px-6 py-3 text-gray-900 outline-none placeholder:text-gray-400 text-sm w-full"
      />
      <button 
        type="submit"
        className="bg-[#D4AF37] hover:bg-[#B8962E] text-white px-6 sm:px-10 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37]"
      >
        SUBSCRIBE
      </button>
    </form>
  );
}