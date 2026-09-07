import React from 'react';

/**
 * Footer layout component from Stitch Template
 */
export default function Footer() {
  return (
    <footer className="bg-[#070d1e] text-slate-400 border-t border-[#132042] w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-xs">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="SewaForklift Logo"
                className="h-9 w-auto object-contain rounded"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WruDBx3B-OYCikInvG3lLNwEHXwB31ipW60oAUYZ2lVl1Otu37GxJxY6PqHsMq8RW-2Yfkmfx2j1-qJ1fEdMXvdWOKSG5mPPXHmX7vqXz9O1aXsS_O8CGZGYJ12hflxbtXsGkGR3sSqLqpiRj1yCNZi0bcA9a8hxl8M_b2cMDEfPCi7pi6XBqWzXshATBqLKxl0NpU-R3kz-d-duiWvwxz19I7mnNFMjQB9Q-5H__KaWPJ3IQrKkLrrWY"
              />
              <span className="font-display font-bold text-lg text-white">
                Sewa<span className="text-[#f97316]">Forklift</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Penyedia rental unit forklift listrik, diesel, stacker, dan peralatan material handling bersertifikasi Depnaker dengan jaminan uptime 99.4% untuk sektor industri &amp; logistik.
            </p>
            <div className="text-slate-500">
              Depo &amp; Bengkel Induk: Kawasan Industri Jababeka II, Cikarang, Jawa Barat.
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              <li><a className="hover:text-[#f97316] transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-[#f97316] transition-colors" href="#product">Product</a></li>
              <li><a className="hover:text-[#f97316] transition-colors" href="#services">Our Services</a></li>
              <li><a className="hover:text-[#f97316] transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Layanan Hub */}
          <div>
            <h4 className="font-display text-white font-bold text-sm uppercase tracking-wider mb-4">Hub Layanan</h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>• Cikarang - Karawang</li>
              <li>• Jakarta - Tangerang - Banten</li>
              <li>• Surabaya - Gresik - Pasuruan</li>
              <li>• Medan &amp; Pelabuhan Belawan</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#132042] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2025 PT Sewa Forklift Indonesia. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 Certified</span>
            <span>SILO Depnaker Legalitas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
