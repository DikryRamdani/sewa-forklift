import React, { useState } from 'react';

/**
 * Main Navbar from Stitch Template
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a className="flex items-center gap-3 group" href="#">
          <img
            alt="SewaForklift Logo"
            className="h-11 w-auto object-contain rounded"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WruDBx3B-OYCikInvG3lLNwEHXwB31ipW60oAUYZ2lVl1Otu37GxJxY6PqHsMq8RW-2Yfkmfx2j1-qJ1fEdMXvdWOKSG5mPPXHmX7vqXz9O1aXsS_O8CGZGYJ12hflxbtXsGkGR3sSqLqpiRj1yCNZi0bcA9a8hxl8M_b2cMDEfPCi7pi6XBqWzXshATBqLKxl0NpU-R3kz-d-duiWvwxz19I7mnNFMjQB9Q-5H__KaWPJ3IQrKkLrrWY"
          />
          <span className="font-display font-bold text-xl tracking-tight text-[#0b152d] leading-none group-hover:text-[#f97316] transition-colors">
            Sewa<span className="text-[#f97316]">Forklift</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#0b152d]">
          <a className="hover:text-[#f97316] transition-colors" href="#">Home</a>
          <a className="hover:text-[#f97316] transition-colors" href="#product">Product</a>
          <a className="hover:text-[#f97316] transition-colors" href="#services">Our Services</a>
          <a className="hover:text-[#f97316] transition-colors" href="#contact">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-[0.99]"
            href="#contact"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Hubungi Kami</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#0b152d] hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a
            className="block text-sm font-semibold text-[#0b152d] hover:text-[#f97316] py-2"
            href="#"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            className="block text-sm font-semibold text-[#0b152d] hover:text-[#f97316] py-2"
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product
          </a>
          <a
            className="block text-sm font-semibold text-[#0b152d] hover:text-[#f97316] py-2"
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Services
          </a>
          <a
            className="block text-sm font-semibold text-[#0b152d] hover:text-[#f97316] py-2"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
