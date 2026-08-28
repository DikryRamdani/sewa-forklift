import React from 'react';

/**
 * Topbar header showing company contact info and business hours.
 */
export default function Header() {
  return (
    <div style={{
      backgroundColor: '#f3f4f6',
      borderBottom: '1px solid #e5e7eb',
      padding: '8px 20px',
      fontSize: '13px',
      color: '#4b5563',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <strong>Hubungi:</strong> 0812-9876-5432 (Fast Response)
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          info@sewaforkliftpratama.co.id
        </span>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <span>Senin - Sabtu: 08.00 - 17.00 WIB</span>
        <span style={{ color: '#f97316', fontWeight: '500' }}>✓ Operator Bersertifikat SIO</span>
      </div>
    </div>
  );
}
