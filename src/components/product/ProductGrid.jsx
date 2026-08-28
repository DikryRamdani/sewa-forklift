import React from 'react';
import ProductCard from './ProductCard';

/**
 * Grid layout to show a filtered list of Forklifts.
 *
 * @param {Object} props
 * @param {Array} props.products - List of forklift products
 * @param {string} props.activeCategory - Selected category ID (all, diesel, electric, gasoline)
 * @param {string} props.selectedCapacity - Filter capacity ('all', '3', '5', '10', '15')
 * @param {string} props.selectedBrand - Filter brand ('all', 'Toyota', 'Mitsubishi', etc.)
 * @param {string} props.selectedStatus - Filter status ('all', 'Tersedia')
 * @param {Function} props.onViewDetail - Callback when viewing specs
 * @param {Function} props.onBook - Callback when renting unit
 */
export default function ProductGrid({
  products = [],
  activeCategory = 'all',
  selectedCapacity = 'all',
  selectedBrand = 'all',
  selectedStatus = 'all',
  onViewDetail,
  onBook
}) {
  
  // Filter products based on selections
  const filteredProducts = products.filter((prod) => {
    // 1. Category Filter
    if (activeCategory !== 'all') {
      const matchCat = prod.fuelType.toLowerCase().includes(activeCategory);
      if (!matchCat) return false;
    }

    // 2. Capacity Filter
    if (selectedCapacity !== 'all') {
      if (Number(prod.capacity) !== Number(selectedCapacity)) {
        return false;
      }
    }

    // 3. Brand Filter
    if (selectedBrand !== 'all') {
      if (prod.brand !== selectedBrand) {
        return false;
      }
    }

    // 4. Status Filter
    if (selectedStatus !== 'all') {
      if (prod.status !== selectedStatus) {
        return false;
      }
    }

    return true;
  });

  if (filteredProducts.length === 0) {
    return (
      <div style={{
        padding: '60px 20px',
        border: '1px dashed #d1d5db',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        width: '100%'
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px' }}>
          <circle cx="12" cy="12" r="10" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        <h4 style={{ margin: '0 0 4px 0', color: '#111827', fontSize: '16px', fontWeight: '600' }}>
          Tidak Ada Unit Forklift Cocok
        </h4>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '13.5px' }}>
          Silakan reset filter atau hubungi CS kami untuk memeriksa ketersediaan unit kustom.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '20px',
      width: '100%'
    }}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetail={onViewDetail}
          onBook={onBook}
        />
      ))}
    </div>
  );
}
