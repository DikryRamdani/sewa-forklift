import React, { useState, useRef, useEffect } from 'react';

const unitList = [
  {
    id: 'reach-truck',
    title: 'Electric Reach Truck',
    bg: 'bg-slate-100',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1UAviHuACwQ9jwIQZyOD-nGsqcA2yl8Nz-jCeoHeGWjg0jl0o-U-K5u47kzHX7C8-AhZyL4TMHSvU8TZZ7SP6ASSxzecaEpPLcFcturqbHgCCGgogiGeJ20SauGurbxV1V0M9jNT_PdRvBPIkR5q_AxRXGLObFHnBXLFhCrH36QKmp0667k8NOnh_P2ydOvuy9JvHHx6v-QxpCbEqitpL5j-jHBd9YTpBY8tV8zoFjKj8hNM0n80sP5STc'
  },
  {
    id: 'diesel-terrain',
    title: 'Heavy Diesel Rough Terrain',
    bg: 'bg-slate-100',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1VAsS7_8AGOhGoj2tSOqvIh1Un30Vuu90UH-121dNqAJ9Idg2mtp8rS2-nyeq3vzp2uLYn4_PhuF0UNUKHpCmvRTzzFxqjHLu4YBTJSBPotfx8rkLUDYPm06qtCzSRu2qKvmk6cRo0DKTfsZbwQddpv4LJW3g9qKNy3VEDLlDVhA41V_4s2FMX1LCrV_y31clMBF9IFZFMvnzTJHaBP-TlFZpBkzxxNDB6OorTj6SPfl-hFFqkP6S_SYIw'
  },
  {
    id: 'electric-counterbalance',
    title: 'Electric Counterbalance Forklift',
    bg: 'bg-slate-900',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1WLXfbtQDE6oGHBFJn0DvHIq62DyA208paCZ1VH7d6f9wpM_9rGF_HuHOmBZLQlOcuC853rNmOwtdbpVgrtj-gGiEZeBGsJrF6l7ze3TRGiZKvCU0i-SWGV5LJXnUC5PDRzf9WTUzIDwKGGmiosuXfEgkR9BNjNmP38snneaFgng3psxS5raDmm8WvrHv7GKEUQN0UgYO1cJWgNjcB86lyFnD4UoJsIs-9dmlEWg3HGHfoqADWdaAjCCZA'
  },
  {
    id: 'stacker-pallet',
    title: 'Stacker & Walkie Pallet',
    bg: 'bg-slate-100',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1UAviHuACwQ9jwIQZyOD-nGsqcA2yl8Nz-jCeoHeGWjg0jl0o-U-K5u47kzHX7C8-AhZyL4TMHSvU8TZZ7SP6ASSxzecaEpPLcFcturqbHgCCGgogiGeJ20SauGurbxV1V0M9jNT_PdRvBPIkR5q_AxRXGLObFHnBXLFhCrH36QKmp0667k8NOnh_P2ydOvuy9JvHHx6v-QxpCbEqitpL5j-jHBd9YTpBY8tV8zoFjKj8hNM0n80sP5STc'
  },
  {
    id: 'container-handler',
    title: 'Heavy Container Handler',
    bg: 'bg-slate-100',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1VAsS7_8AGOhGoj2tSOqvIh1Un30Vuu90UH-121dNqAJ9Idg2mtp8rS2-nyeq3vzp2uLYn4_PhuF0UNUKHpCmvRTzzFxqjHLu4YBTJSBPotfx8rkLUDYPm06qtCzSRu2qKvmk6cRo0DKTfsZbwQddpv4LJW3g9qKNy3VEDLlDVhA41V_4s2FMX1LCrV_y31clMBF9IFZFMvnzTJHaBP-TlFZpBkzxxNDB6OorTj6SPfl-hFFqkP6S_SYIw'
  }
];

// Create repeating sets of items for smooth navigation without normalization jumps
const TOTAL_SETS = 20;
const displayList = Array.from({ length: TOTAL_SETS }, (_, setIdx) =>
  unitList.map((item, i) => ({
    ...item,
    uniqueKey: `set${setIdx}-${i}`,
    originalIdx: i
  }))
).flat();

export default function Home() {
  // Start permanently at index 15 (where center card displays its text)
  const [currentIndex, setCurrentIndex] = useState(15);
  const [withTransition, setWithTransition] = useState(false);
  const [containerWidth, setContainerWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200));
  const [cardWidth, setCardWidth] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 640 ? 290 : 350));
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isNavigating = useRef(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unit: 'electric-reach-truck',
    duration: 'bulanan',
    location: '',
    notes: ''
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (cardRefs.current[0]) {
        setCardWidth(cardRefs.current[0].offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Enable smooth animation after initial layout measurement
    const timer = setTimeout(() => {
      setWithTransition(true);
    }, 100);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  const handlePrev = () => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setTimeout(() => {
      isNavigating.current = false;
    }, 260);

    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setTimeout(() => {
      isNavigating.current = false;
    }, 260);

    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleDotClick = (dotIdx) => {
    if (isNavigating.current) return;
    isNavigating.current = true;
    setTimeout(() => {
      isNavigating.current = false;
    }, 260);

    const currentDot = ((currentIndex % 5) + 5) % 5;
    let diff = dotIdx - currentDot;
    if (diff > 2) diff -= 5;
    if (diff < -2) diff += 5;
    if (diff === 0) return;

    setWithTransition(true);
    setCurrentIndex((prev) => prev + diff);
  };

  const handleCardClick = (idx) => {
    if (idx === currentIndex) return;
    if (isNavigating.current) return;
    isNavigating.current = true;
    setTimeout(() => {
      isNavigating.current = false;
    }, 260);

    setWithTransition(true);
    setCurrentIndex(idx);
  };

  const handleTransitionEnd = () => {
    // No normalization jump - keep index permanent and continuous
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
    setWithTransition(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartX.current;
    const deltaY = currentY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 8) {
      setDragOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setWithTransition(true);

    if (dragOffset < -50) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > 50) {
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  // Math for exact centering of active card in container
  const gap = 24;
  const step = cardWidth + gap;
  const cardCenter = currentIndex * step + cardWidth / 2;
  const translateX = containerWidth / 2 - cardCenter + dragOffset;
  const activeDot = ((currentIndex % 5) + 5) % 5;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Permintaan penawaran Anda telah kami terima. Tim SewaForklift akan menghubungi Anda dalam waktu < 15 menit.');
  };

  return (
    <main className="flex-1 w-full">
      {/* 1. HERO SECTION (Deep Navy & Vibrant Orange #f97316) */}
      <section className="relative bg-gradient-to-b from-[#070d1e] via-[#0b152d] to-[#0f1d3e] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
                Sewa Forklift Industri <span className="text-[#f97316]">Tanpa Ribet</span> &amp; Terpercaya
              </h1>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-xl">
                Solusi rental forklift electric dan diesel berizin resmi SILO Depnaker. Siap kirim cepat ke lokasi Anda dengan jaminan unit prima tanpa downtime.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white text-sm font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-orange-950/30 transition-all active:scale-[0.98]"
                  href="#product"
                >
                  <span className="material-symbols-outlined text-[20px]">forklift</span>
                  <span>Lihat Unit</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 bg-[#132042]/90 hover:bg-[#1a2c5a] text-white border border-[#1e305e] text-sm font-semibold px-6 py-3.5 rounded-lg transition-all"
                  href="#contact"
                >
                  <span className="material-symbols-outlined text-[#f97316] text-[20px]">support_agent</span>
                  <span>Konsultasi Sewa</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1e305e] w-full max-w-md">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#f97316]">500+</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Unit Siap Pakai</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#f97316]">99.4%</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#f97316]">24/7</div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">Siap Kirim &amp; Servis</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#1e305e] shadow-2xl bg-[#0b152d]">
                <img
                  alt="Unit Forklift Gudang SewaForklift"
                  className="w-full h-80 sm:h-[400px] object-cover object-center"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WLXfbtQDE6oGHBFJn0DvHIq62DyA208paCZ1VH7d6f9wpM_9rGF_HuHOmBZLQlOcuC853rNmOwtdbpVgrtj-gGiEZeBGsJrF6l7ze3TRGiZKvCU0i-SWGV5LJXnUC5PDRzf9WTUzIDwKGGmiosuXfEgkR9BNjNmP38snneaFgng3psxS5raDmm8WvrHv7GKEUQN0UgYO1cJWgNjcB86lyFnD4UoJsIs-9dmlEWg3HGHfoqADWdaAjCCZA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e]/85 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: PREVIEW TENTANG KAMI / OUR SERVICES (Clean White Background) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200 scroll-mt-20" id="services">
        <span id="tentang" className="sr-only" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b152d] tracking-tight leading-tight mb-4">
                Mitra Andal Solusi Material Handling &amp; Rental Industri
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Berdiri sejak 2010, PT Sewa Forklift Indonesia menghadirkan unit alat berat modern dengan standar keselamatan kerja tertinggi untuk mendukung kelancaran operasional gudang, pabrik, manufaktur, dan pelabuhan.
              </p>
              <a className="inline-flex items-center gap-2 font-display font-semibold text-sm text-[#f97316] hover:text-[#ea580c] transition-colors group" href="#kontak-info">
                <span>Pelajari Lebih Lanjut Tentang Kami</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Poin 1 */}
                <div className="bg-white border border-slate-200/90 p-5 rounded-xl hover:border-[#f97316]/50 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#f97316] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl">verified_user</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0b152d] mb-1.5">Legalitas Resmi SILO</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Seluruh unit tersertifikasi laik operasi Depnaker &amp; opsi operator berlisensi resmi SIO Kemnaker.
                  </p>
                </div>
                {/* Poin 2 */}
                <div className="bg-white border border-slate-200/90 p-5 rounded-xl hover:border-[#f97316]/50 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#f97316] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl">engineering</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0b152d] mb-1.5">Teknisi &amp; Swap 4 Jam</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Respon darurat &lt; 2 jam dan garansi pergantian unit cepat demi mencegah downtime operasional Anda.
                  </p>
                </div>
                {/* Poin 3 */}
                <div className="bg-white border border-slate-200/90 p-5 rounded-xl hover:border-[#f97316]/50 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#f97316] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-2xl">pin_drop</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0b152d] mb-1.5">Cakupan Depo Nasional</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jaringan hub di Cikarang, Karawang, Surabaya, &amp; Medan menjamin kecepatan mobilisasi unit ke lokasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 3: CAROUSEL DENGAN CONTINUOUS LOOP (Biru Navy & Oren #f97316) */}
      <section className="py-20 bg-[#f1f5fa] overflow-hidden scroll-mt-20" id="product">
        <span id="unit" className="sr-only" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 text-center sm:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b152d] tracking-tight">Unit &amp; Produk Forklift Pilihan</h2>
          </div>

          {/* Relative Carousel Wrapper with Floating Controls */}
          <div className="relative group/carousel">
            {/* Floating Previous Button */}
            <button
              type="button"
              aria-label="Unit Sebelumnya"
              onClick={handlePrev}
              className="absolute -left-3 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-[#0b152d] hover:text-[#f97316] shadow-xl border border-slate-200 hover:border-[#f97316]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm focus:outline-none"
              id="carousel-prev"
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl">chevron_left</span>
            </button>

            {/* Floating Next Button */}
            <button
              type="button"
              aria-label="Unit Selanjutnya"
              onClick={handleNext}
              className="absolute -right-3 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-[#0b152d] hover:text-[#f97316] shadow-xl border border-slate-200 hover:border-[#f97316]/40 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 backdrop-blur-sm focus:outline-none"
              id="carousel-next"
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl">chevron_right</span>
            </button>

            {/* Horizontal Continuous Loop Carousel Container */}
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden py-10 select-none cursor-grab active:cursor-grabbing"
              id="product-carousel"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Sliding Track with smooth transform */}
              <div
                className="flex items-center gap-6"
                style={{
                  transform: `translate3d(${translateX}px, 0, 0)`,
                  transition: withTransition
                    ? 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
                    : 'none',
                  willChange: 'transform'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {displayList.map((item, idx) => {
                  const isActive = idx === currentIndex;

                  return (
                    <div
                      key={item.uniqueKey}
                      ref={(el) => (cardRefs.current[idx] = el)}
                      onClick={() => handleCardClick(idx)}
                      className={`carousel-card flex-none w-[290px] sm:w-[350px] bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-500 flex flex-col cursor-pointer ${
                        isActive
                          ? 'scale-105 sm:scale-110 z-10 shadow-2xl ring-2 ring-[#f97316] opacity-100'
                          : 'scale-95 opacity-70 shadow-md hover:opacity-85'
                      }`}
                    >
                      <div className={`relative h-64 sm:h-72 overflow-hidden ${item.bg}`}>
                        <img
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 pointer-events-none select-none"
                          src={item.img}
                          draggable="false"
                        />
                      </div>
                      <div
                        className={`card-details flex flex-col items-center text-center justify-between flex-grow gap-4 transition-all duration-500 overflow-hidden ${
                          isActive
                            ? 'opacity-100 max-h-48 p-5'
                            : 'opacity-0 pointer-events-none max-h-0 py-0'
                        }`}
                      >
                        <h3 className="font-display text-lg font-bold text-[#0b152d] leading-snug">
                          {item.title}
                        </h3>
                        <a
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-md transition-all active:scale-[0.98]"
                          href="#contact"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Buka Spesifikasi</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Circular Indicators (5 unique product dots) */}
            <div className="flex items-center justify-center gap-2 mt-4" id="carousel-dots">
              {unitList.map((_, dotIdx) => {
                const isCurrentActive = activeDot === dotIdx;
                return (
                  <button
                    key={dotIdx}
                    type="button"
                    aria-label={`Pilih unit ${dotIdx + 1}`}
                    onClick={() => handleDotClick(dotIdx)}
                    className={`rounded-full transition-all duration-300 ${
                      isCurrentActive
                        ? 'w-7 h-2.5 bg-[#f97316]'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 4: FORM PEMESANAN / BOOKING CEPAT (White & Deep Navy) */}
      <section className="py-20 bg-white scroll-mt-20" id="contact">
        <span id="pesan" className="sr-only" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b152d] tracking-tight mb-3">
              Formulir Pemesanan &amp; Sewa Cepat
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Isi data kebutuhan rental Anda, tim fleet specialist kami akan mengirimkan kalkulasi penawaran resmi dalam waktu &lt; 15 menit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
            {/* Main Booking Form */}
            <div className="lg:col-span-8 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0b152d] mb-2" htmlFor="nama-pic">
                      Nama Lengkap / Perusahaan (PT/CV) *
                    </label>
                    <input
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0b152d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"
                      id="nama-pic"
                      placeholder="Contoh: PT Surya Logistik Mandiri"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0b152d] mb-2" htmlFor="kontak-wa">
                      Nomor WhatsApp / Telepon PIC *
                    </label>
                    <input
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0b152d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"
                      id="kontak-wa"
                      placeholder="Contoh: 0812-3456-7890"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0b152d] mb-2" htmlFor="tipe-unit">
                      Tipe Unit yang Dibutuhkan *
                    </label>
                    <select
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0b152d] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"
                      id="tipe-unit"
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    >
                      <option value="electric-reach-truck">Electric Reach Truck (1.5 - 2.5 Ton)</option>
                      <option value="diesel-rough-terrain">Heavy Diesel Forklift (3 - 16 Ton)</option>
                      <option value="electric-counterbalance">Electric Counterbalance Forklift</option>
                      <option value="stacker-pallet">Stacker &amp; Pallet Mover</option>
                      <option value="container-handler">Heavy Container Handler</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0b152d] mb-2" htmlFor="durasi-sewa">
                      Estimasi Durasi Sewa *
                    </label>
                    <select
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0b152d] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"
                      id="durasi-sewa"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    >
                      <option value="harian">Sewa Harian / Shift Khusus</option>
                      <option value="bulanan">Sewa Bulanan (Fleksibel)</option>
                      <option value="tahunan">Kontrak Tahunan FML (Full Maintenance)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b152d] mb-2" htmlFor="lokasi-proyek">
                    Lokasi Proyek / Kawasan Industri *
                  </label>
                  <input
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0b152d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"
                    id="lokasi-proyek"
                    placeholder="Contoh: Kawasan Industri MM2100, Cikarang Barat"
                    required
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0b152d] mb-2" htmlFor="catatan">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-[#0b152d] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"
                    id="catatan"
                    placeholder="Informasi tambahan: kebutuhan mast (tinggi angkat), dengan operator/tanpa operator, attachment khusus (clamp/rotator), dll."
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <div>
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] active:bg-[#c2410c] text-white font-display font-bold text-sm tracking-wide uppercase py-3.5 px-6 rounded-lg shadow-md transition-all active:scale-[0.99]"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    <span>Kirim Permintaan Sewa Sekarang</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Alternatif Kontak Langsung & Hotline (Deep Navy Card) */}
            <div className="lg:col-span-4 space-y-4" id="kontak-info">
              <div className="bg-[#070d1e] text-white rounded-2xl p-6 border border-[#132042] shadow-md">
                <h3 className="font-display font-bold text-xl mb-3">Butuh Respon Segera?</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Hubungi langsung spesialis unit kami melalui hotline atau WhatsApp untuk pengecekan ketersediaan unit hari ini.
                </p>
                <div className="space-y-3">
                  <a
                    className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all shadow"
                    href="https://wa.me/6281199887722"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-xl">chat</span>
                    <div>
                      <div className="text-[11px] opacity-80 uppercase tracking-wider">WhatsApp Fleet Support</div>
                      <div className="font-bold">+62 811-9988-7722</div>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-3 bg-[#132042] hover:bg-[#1a2c5a] text-white border border-[#1e305e] px-4 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all"
                    href="tel:02189803344"
                  >
                    <span className="material-symbols-outlined text-[#f97316] text-xl">call</span>
                    <div>
                      <div className="text-[11px] opacity-80 uppercase tracking-wider">Hotline Jakarta &amp; Hub</div>
                      <div className="font-bold">(021) 8980-3344</div>
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-3 bg-[#132042] hover:bg-[#1a2c5a] text-white border border-[#1e305e] px-4 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all"
                    href="mailto:rental@sewaforklift.id"
                  >
                    <span className="material-symbols-outlined text-[#f97316] text-xl">mail</span>
                    <div>
                      <div className="text-[11px] opacity-80 uppercase tracking-wider">Email Quotation</div>
                      <div className="font-bold">rental@sewaforklift.id</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-orange-50/80 border border-orange-200/80 rounded-xl p-4 text-xs text-[#0b152d] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#f97316] text-lg shrink-0">info</span>
                <span>Semua permohonan sewa korporasi dilengkapi surat penawaran resmi, invoice PPN, serta SLA unit pengganti 4 jam.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
