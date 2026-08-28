import React from 'react';

/**
 * Direct contact information box showing addresses and hours.
 */
export default function ContactInfo() {
  const contactDetails = [
    {
      title: 'Kantor Pusat Cikarang',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      content: 'Ruko Simprug Plaza Blok A1 No. 5, Kawasan Industri Jababeka II, Cikarang Selatan, Bekasi, Jawa Barat 17530'
    },
    {
      title: 'Kantor Cabang Karawang',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      content: 'Kawasan Industri KIIC Kav. 12B, Karawang Barat, Karawang, Jawa Barat 41361'
    },
    {
      title: 'Hotline & WhatsApp CS',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      content: 'Hotline Utama: 0812-9876-5432\nSales Support: 0812-1122-3344'
    },
    {
      title: 'Email & Jam Operasional',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      content: 'Email: sales@sewaforkliftpratama.co.id\nSenin - Sabtu: 08:00 - 17:00 WIB\n(Minggu/Hari Besar Tutup, kecuali booking darurat)'
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      textAlign: 'left'
    }}>
      {contactDetails.map((det, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(249, 115, 22, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            {det.icon}
          </div>
          <div>
            <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: '#111827' }}>
              {det.title}
            </h4>
            <p style={{
              margin: 0,
              fontSize: '13.5px',
              color: '#4b5563',
              lineHeight: '1.6',
              whiteSpace: 'pre-line'
            }}>
              {det.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
