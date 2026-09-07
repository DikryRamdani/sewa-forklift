import React from 'react';

/**
 * Utility Top Bar from Stitch Template
 */
export default function Header() {
  return (
    <div className="bg-[#070d1e] text-slate-300 text-xs border-b border-[#132042] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f97316] text-[16px]">call</span>
            <span>Hotline: <strong className="text-white font-medium">(021) 8980-3344</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400 text-[16px]">chat</span>
            <span>WA: <strong className="text-white font-medium">+62 811-9988-7722</strong></span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-1 text-slate-300">
            <span className="material-symbols-outlined text-[#f97316] text-[16px]">verified</span>
            <span className="hidden md:inline">Terverifikasi</span> ISO 9001:2015 &amp; Depnaker
          </div>
        </div>
      </div>
    </div>
  );
}
