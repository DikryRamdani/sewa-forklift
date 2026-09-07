import React from 'react';
import Button from '../ui/Button';

/**
 * Detailed specifications sheet and terms view for a single Forklift unit.
 *
 * @param {Object} props
 * @param {Object} props.product - The product data object
 * @param {Function} props.onClose - Callback to go back or close
 * @param {Function} props.onBook - Callback to trigger booking form
 */
export default function ProductDetail({ product, onClose, onBook }) {
  if (!product) return null;

  const {
    name,
    brand,
    capacity,
    liftHeight,
    fuelType,
    status,
    priceDay,
    priceMonth,
    desc
  } = product;

  // Set mock technical specs based on capacity
  const getTechnicalSpecs = () => {
    return [
      { specName: 'Produsen / Brand', specVal: brand },
      { specName: 'Beban Maksimum', specVal: `${capacity} Ton (1000kg x ${capacity})` },
      { specName: 'Tinggi Angkat Maksimum', specVal: `${liftHeight} Meter` },
      { specName: 'Tipe Bahan Bakar', specVal: fuelType },
      { specName: 'Turning Radius (Radius Putar)', specVal: capacity <= 3 ? '2.4 Meter' : capacity <= 5 ? '2.9 Meter' : '3.8 Meter' },
      { specName: 'Tipe Transmisi', specVal: capacity <= 3 ? 'Torque Converter (Automatic)' : 'Manual / Powershift' },
      { specName: 'Load Center', specVal: '500 mm' }
    ];
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
      textAlign: 'left'
    }}>
      {/* Back Button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#4b5563',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer',
          padding: 0,
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '20px'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Kembali ke Katalog
      </button>

      {/* Main Info Columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px'
      }}>
        {/* Left Side: Graphic Placeholder */}
        <div>
          <div style={{
            height: '240px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="75" y="15" width="4" height="60" fill="#4b5563" />
              <rect x="70" y="15" width="2" height="60" fill="#9ca3af" />
              <rect x="79" y="45" width="16" height="4" fill="#374151" />
              <rect x="77" y="49" width="3" height="15" fill="#374151" />
              <path d="M15 65C15 50 25 45 60 45C68 45 74 52 74 65L74 75L15 75L15 65Z" fill="#f97316" />
              <path d="M15 65C15 55 22 50 35 50L35 75L15 75Z" fill="#ea580c" />
              <path d="M38 45L48 22L65 22L68 45Z" stroke="#374151" strokeWidth="3" fill="none" />
              <circle cx="32" cy="75" r="11" fill="#1f2937" />
              <circle cx="66" cy="75" r="11" fill="#1f2937" />
            </svg>
          </div>
        </div>

        {/* Right Side: Specifications & Booking */}
        <div>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '700', color: '#111827' }}>
            {name}
          </h2>
          <p style={{ margin: '0 0 20px 0', color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
            {desc || `Unit forklift berkualitas tinggi dari ${brand} dengan efisiensi bahan bakar yang optimal dan performa angkat yang presisi. Sangat cocok digunakan untuk pergudangan, manufaktur, dan penataan kargo logistik.`}
          </p>

          <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '600', color: '#374151' }}>
            Spesifikasi Teknis
          </h3>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13.5px',
            color: '#4b5563',
            marginBottom: '24px'
          }}>
            <tbody>
              {getTechnicalSpecs().map((spec, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '8px 4px', fontWeight: '500', color: '#111827', width: '45%' }}>
                    {spec.specName}
                  </td>
                  <td style={{ padding: '8px 4px', color: '#4b5563' }}>
                    {spec.specVal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pricing Box */}
          <div style={{
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block', textTransform: 'uppercase' }}>Harga Sewa Harian</span>
              <strong style={{ fontSize: '18px', color: '#f97316' }}>{priceDay}</strong>
            </div>
            <div>
              <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block', textTransform: 'uppercase' }}>Harga Sewa Bulanan</span>
              <strong style={{ fontSize: '18px', color: '#111827' }}>{priceMonth}</strong>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button
              variant="primary"
              size="lg"
              style={{ flex: 2 }}
              onClick={() => onBook(product)}
              disabled={status !== 'Tersedia'}
            >
              Sewa Unit Sekarang
            </Button>
            <Button
              variant="secondary"
              size="lg"
              style={{ flex: 1 }}
              onClick={() => {
                const message = encodeURIComponent(`Halo CS, saya tertarik menyewa unit ${name} kapasitas ${capacity} Ton.`);
                window.open(`https://wa.me/6281298765432?text=${message}`, '_blank');
              }}
            >
              Tanya CS via WA
            </Button>
          </div>
        </div>
      </div>
      
      {/* Terms & Conditions Section */}
      <section style={{ marginTop: '40px', borderTop: '1px solid #e5e7eb', paddingTop: '24px' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#111827' }}>
          Ketentuan Sewa Forklift
        </h3>
        <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13.5px', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.6' }}>
          <li>Harga di atas belum termasuk biaya pengiriman (mobilisasi & demobilisasi) unit ke lokasi proyek.</li>
          <li>Opsi sewa "All-In" sudah mencakup gaji operator bersertifikat SIO dan bahan bakar solar/listrik.</li>
          <li>Kerusakan unit akibat kelalaian operasional penyewa sepenuhnya menjadi tanggung jawab penyewa jika sewa lepas kunci.</li>
          <li>Pemesanan disarankan dilakukan minimal H-3 sebelum tanggal pelaksanaan pengerjaan proyek.</li>
        </ul>
      </section>
    </div>
  );
}
