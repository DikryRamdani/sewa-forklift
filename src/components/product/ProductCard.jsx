import React from 'react';
import Button from '../ui/Button';

/**
 * Card representing a single Forklift product item.
 *
 * @param {Object} props
 * @param {Object} props.product - Product data object
 * @param {Function} props.onViewDetail - Callback to open product detail view
 * @param {Function} props.onBook - Callback to trigger booking modal
 */
export default function ProductCard({ product, onViewDetail, onBook }) {
  const {
    name,
    brand,
    capacity,
    liftHeight,
    fuelType,
    status,
    priceDay,
    priceMonth
  } = product;

  // Render a clean forklift silhouette using SVG instead of AI gradients or unreliable links
  const renderForkliftIllustration = () => {
    return (
      <div style={{
        height: '140px',
        backgroundColor: '#f3f4f6',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mast/Lift rails */}
          <rect x="75" y="15" width="4" height="60" fill="#4b5563" />
          <rect x="70" y="15" width="2" height="60" fill="#9ca3af" />
          {/* Carriage & forks */}
          <rect x="79" y="45" width="16" height="4" fill="#374151" />
          <rect x="77" y="49" width="3" height="15" fill="#374151" />
          {/* Main Body */}
          <path d="M15 65C15 50 25 45 60 45C68 45 74 52 74 65L74 75L15 75L15 65Z" fill="#f97316" />
          {/* Counterweight detail */}
          <path d="M15 65C15 55 22 50 35 50L35 75L15 75Z" fill="#ea580c" />
          {/* Cabin cage */}
          <path d="M38 45L48 22L65 22L68 45Z" stroke="#374151" strokeWidth="3" fill="none" />
          <line x1="53" y1="22" x2="53" y2="45" stroke="#374151" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="32" cy="75" r="11" fill="#1f2937" />
          <circle cx="32" cy="75" r="5" fill="#e5e7eb" />
          <circle cx="66" cy="75" r="11" fill="#1f2937" />
          <circle cx="66" cy="75" r="5" fill="#e5e7eb" />
        </svg>
        <span style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          fontSize: '11px',
          fontWeight: 'bold',
          color: '#9ca3af',
          textTransform: 'uppercase'
        }}>
          {brand}
        </span>
      </div>
    );
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      textAlign: 'left',
      transition: 'box-shadow 0.2s',
    }}
    className="product-card"
    >
      {renderForkliftIllustration()}

      {/* Product Title */}
      <div>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '600', color: '#111827' }}>
          {name}
        </h3>
        <span style={{ fontSize: '13px', color: '#6b7280' }}>
          Kapasitas: {capacity} Ton • Lift: {liftHeight}m
        </span>
      </div>

      {/* Specifications */}
      <div style={{
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap',
        fontSize: '12px',
      }}>
        <span style={{ backgroundColor: '#f3f4f6', padding: '3px 8px', borderRadius: '4px', color: '#4b5563' }}>
          Bahan Bakar: {fuelType}
        </span>
        <span style={{ backgroundColor: '#f3f4f6', padding: '3px 8px', borderRadius: '4px', color: '#4b5563' }}>
          Unit Siap Kerja
        </span>
      </div>

      {/* Price */}
      <div style={{
        borderTop: '1px solid #e5e7eb',
        paddingTop: '12px',
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }}>
        <div>
          <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Tarif Harian</span>
          <strong style={{ fontSize: '15px', color: '#f97316' }}>{priceDay}</strong>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: '#9ca3af', display: 'block' }}>Tarif Bulanan</span>
          <strong style={{ fontSize: '15px', color: '#4b5563' }}>{priceMonth}</strong>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '4px' }}>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewDetail(product)}
        >
          Spesifikasi
        </Button>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={() => onBook(product)}
          disabled={status !== 'Tersedia'}
        >
          Sewa Sekarang
        </Button>
      </div>
    </div>
  );
}
