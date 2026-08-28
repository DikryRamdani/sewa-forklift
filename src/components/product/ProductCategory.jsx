import React from 'react';

/**
 * Category buttons/cards grid for selecting forklift categories.
 *
 * @param {Object} props
 * @param {string} props.activeCategory - Selected category name
 * @param {Function} props.onChangeCategory - Callback to select category
 */
export default function ProductCategory({ activeCategory, onChangeCategory }) {
  const categories = [
    { id: 'all', label: 'Semua Unit', desc: 'Semua bahan bakar & kapasitas', icon: '🚜' },
    { id: 'diesel', label: 'Forklift Diesel', desc: 'Handal untuk outdoor & beban berat', icon: '⛽' },
    { id: 'electric', label: 'Forklift Electric', desc: 'Ramah lingkungan & bebas emisi', icon: '⚡' },
    { id: 'gasoline', label: 'Gasoline & LPG', desc: 'Torsi handal dengan tingkat emisi rendah', icon: '💨' }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      margin: '24px 0'
    }}>
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <div
            key={cat.id}
            onClick={() => onChangeCategory(cat.id)}
            style={{
              backgroundColor: isActive ? 'rgba(249, 115, 22, 0.05)' : '#ffffff',
              border: isActive ? '2px solid #f97316' : '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textAlign: 'left',
              boxShadow: isActive ? '0 4px 6px -1px rgba(249, 115, 22, 0.1)' : 'none'
            }}
            onMouseOver={(e) => {
              if (!isActive) e.currentTarget.style.borderColor = '#9ca3af';
            }}
            onMouseOut={(e) => {
              if (!isActive) e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{cat.icon}</div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: '600', color: '#111827' }}>
              {cat.label}
            </h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', lineHeight: '1.4' }}>
              {cat.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
