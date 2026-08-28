import React from 'react';

/**
 * Footer layout component.
 *
 * @param {Object} props
 * @param {Function} props.setCurrentPage - Function to set active page ID
 */
export default function Footer({ setCurrentPage }) {
  return (
    <footer style={{
      backgroundColor: '#f9fafb',
      borderTop: '1px solid #e5e7eb',
      color: '#4b5563',
      fontFamily: 'var(--sans)',
      fontSize: '14px',
      padding: '48px 20px 24px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '32px',
        textAlign: 'left'
      }}>
        {/* Company Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              backgroundColor: '#f97316',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '16px',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              FP
            </span>
            <span style={{ fontWeight: '700', fontSize: '15px', color: '#111827' }}>
              FORKLIFT PRATAMA
            </span>
          </div>
          <p style={{ lineHeight: '1.6', color: '#6b7280', fontSize: '13.5px' }}>
            Mitra sewa forklift terpercaya di Indonesia. Menyediakan unit forklift prima dengan kapasitas 3 s.d 15 Ton untuk area Jabodetabek, Karawang, dan sekitarnya.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 style={{ color: '#111827', fontWeight: '600', margin: '0 0 16px 0', fontSize: '15px' }}>
            Navigasi Cepat
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['home', 'product', 'service', 'contact'].map((page) => {
              const label = {
                home: 'Beranda Utama',
                product: 'Katalog Forklift',
                service: 'Paket & Layanan',
                contact: 'Hubungi Kontak'
              }[page];
              return (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#6b7280',
                      cursor: 'pointer',
                      fontSize: '13.5px',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#f97316'}
                    onMouseOut={(e) => e.target.style.color = '#6b7280'}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 style={{ color: '#111827', fontWeight: '600', margin: '0 0 16px 0', fontSize: '15px' }}>
            Kantor Operasional
          </h4>
          <p style={{ margin: '0 0 8px 0', fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
            <strong>Cikarang:</strong> Kawasan Industri Jababeka II, Cikarang Selatan, Bekasi 17530
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
            <strong>Karawang:</strong> Jl. Raya KIIC Blok B, Karawang Barat 41361
          </p>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#6b7280', lineHeight: '1.5' }}>
            <strong>Call Center:</strong> 0812-9876-5432
          </p>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div style={{
        maxWidth: '1000px',
        margin: '40px auto 0',
        paddingTop: '20px',
        borderTop: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        fontSize: '12.5px',
        color: '#9ca3af'
      }}>
        <span>© {new Date().getFullYear()} Forklift Pratama. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span>Syarat & Ketentuan</span>
          <span>Kebijakan Privasi</span>
        </div>
      </div>
    </footer>
  );
}
