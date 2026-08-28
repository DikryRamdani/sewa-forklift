import React from 'react';

/**
 * Embedded map component for operational branches.
 */
export default function ContactMap() {
  // Free, standard Google Maps embed placeholder centered near Jababeka Cikarang Industrial Area
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.94056230538!2d107.10099507936166!3d-6.284501625907409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984d720b029ff%3A0x334468f7004f1de7!2sJababeka%20Industrial%20Estate!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid';

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
      textAlign: 'left'
    }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '700', color: '#111827' }}>
        Area Jangkauan Utama (Workshop & Depo Unit)
      </h3>
      <div style={{
        width: '100%',
        height: '350px',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb'
      }}>
        <iframe
          title="Forklift Pratama Workshop Location"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p style={{ margin: '12px 0 0 0', fontSize: '12.5px', color: '#6b7280', lineHeight: '1.4' }}>
        * Melayani mobilisasi unit forklift ke seluruh area Jakarta, Bekasi (Jababeka, MM2100, Delta Silicon, EJIP), Karawang (KIIC, Suryacipta), Purwakarta, Subang, Serang, dan Tangerang.
      </p>
    </div>
  );
}
