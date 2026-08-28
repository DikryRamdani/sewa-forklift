import React, { useState } from 'react';
import ServiceGrid from '../components/service/ServiceGrid';
import Button from '../components/ui/Button';

/**
 * Service Page (Layanan Sewa).
 *
 * @param {Object} props
 * @param {Function} props.setCurrentPage - Route switching callback
 */
export default function Service({ setCurrentPage }) {
  // Simple Accordion State for FAQ
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Bagaimana perhitungan biaya mobilisasi dan demobilisasi?',
      a: 'Biaya mobilisasi dan demobilisasi mencakup ongkos pengantaran unit dari depo/workshop terdekat kami ke lokasi proyek Anda menggunakan truk selfloader atau towing, serta pemulangannya kembali setelah masa sewa berakhir. Biaya ini dibebankan sekali di awal transaksi sewa.'
    },
    {
      q: 'Apakah biaya sewa harian dan bulanan sudah bersih?',
      a: 'Untuk sistem sewa "All-In", tarif sudah mencakup sewa unit, solar (BBM), dan jasa operator ber-SIO. Untuk sewa bulanan / tahunan lepas kunci, biaya belum termasuk BBM, upah operator, dan PPN 11%.'
    },
    {
      q: 'Bagaimana jika unit forklift mengalami kendala teknis saat disewa?',
      a: 'Kami menjamin kelayakan unit. Namun, jika terjadi kendala teknis, tim mekanik stand-by kami akan tiba di lokasi maksimal 2 jam setelah laporan. Jika perbaikan memakan waktu lebih dari 4 jam, kami akan mengirimkan unit forklift pengganti (backup) secara gratis.'
    },
    {
      q: 'Apakah operator dibekali dengan dokumen legalitas lengkap?',
      a: 'Ya, seluruh operator forklift kami berlisensi resmi dan dibekali Surat Izin Operasi (SIO) aktif dari Kemenaker RI serta dibekali BPJS Ketenagakerjaan demi keamanan standar HSE pabrik.'
    }
  ];

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '30px 20px',
      fontFamily: 'var(--sans)',
      textAlign: 'left'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>
          Layanan Sewa & Kemitraan Forklift
        </h1>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '15px', lineHeight: '1.6' }}>
          Forklift Pratama menawarkan skema persewaan fleksibel yang dirancang khusus untuk meningkatkan produktivitas logistik industri, pabrik, dan proyek konstruksi Anda.
        </p>
      </div>

      {/* Services Cards Section */}
      <ServiceGrid
        onSelectService={(service) => {
          // Switch to contact page and pre-fill details or open WhatsApp directly
          const text = `Halo, saya tertarik dengan layanan ${service.title}.`;
          window.open(`https://wa.me/6281298765432?text=${encodeURIComponent(text)}`, '_blank');
        }}
      />

      {/* Rent vs Buy Section */}
      <section style={{
        margin: '56px 0',
        padding: '32px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#111827' }}>
          Kenapa Sewa Lebih Menguntungkan Dibanding Beli Forklift Baru?
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginTop: '20px'
        }}>
          <div>
            <h5 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
              ✓ Tanpa Biaya Depresiasi Nilai Aset
            </h5>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
              Nilai jual forklift menurun setiap tahun. Dengan menyewa, modal usaha Anda (CAPEX) tidak mandek di aset yang terus menyusut nilainya.
            </p>
          </div>
          <div>
            <h5 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
              ✓ Bebas Biaya Perawatan & Maintenance rutin
            </h5>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
              Ganti oli, penggantian ban padat (solid), perbaikan filter hydraulic, dan sparepart sepenuhnya ditanggung oleh Forklift Pratama.
            </p>
          </div>
          <div>
            <h5 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
              ✓ Fleksibel Menyesuaikan Kapasitas Kerja
            </h5>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
              Pekerjaan kargo berubah? Anda bisa menukar forklift 3 Ton ke 10 Ton kapan saja tanpa harus membeli mesin baru.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section style={{ margin: '48px 0' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '22px', fontWeight: '700', color: '#111827', textAlign: 'center' }}>
          Pertanyaan Yang Sering Diajukan (FAQ)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: isOpen ? '#f9fafb' : '#ffffff',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14.5px',
                    color: '#111827',
                    outline: 'none'
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: '18px', color: '#f97316', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.15s' }}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '16px 20px',
                    fontSize: '13.5px',
                    color: '#6b7280',
                    lineHeight: '1.6',
                    borderTop: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
