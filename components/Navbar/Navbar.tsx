"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation (Hidden on Mobile) */}
        <NavLinks />

        {/* Mobile Navigation (Hidden on Desktop) */}
        <MobileMenu />
      </div>
    </nav>
  );
}