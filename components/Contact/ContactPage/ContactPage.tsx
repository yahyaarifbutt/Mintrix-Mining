import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";
import GoldGlow from "./GoldGlow";


export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden bg-[#f9f9f7] py-24 px-6 relative">
      {/* Decorative Glow */}
      <GoldGlow />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <ContactForm />
        </div>

        <ContactImage />
      </div>
    </main>
  );
}
