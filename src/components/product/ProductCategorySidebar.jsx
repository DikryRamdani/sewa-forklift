import React from 'react';
import Button from '../ui/Button';

/**
 * Filter sidebar for filtering forklifts by capacity, brand, and status.
 */
export default function ProductCategorySidebar({
  selectedCapacity,
  setSelectedCapacity,
  selectedBrand,
  setSelectedBrand,
  selectedStatus,
  setSelectedStatus,
  onClearFilters
}) {
  const capacities = [
    { id: 'all', label: 'Semua Kapasitas' },
    { id: '3', label: '3 Ton' },
    { id: '5', label: '5 Ton' },
    { id: '10', label: '10 Ton' },
    { id: '15', label: '15 Ton' }
  ];

  const brands = [
    { id: 'all', label: 'Semua Merk' },
    { id: 'Toyota', label: 'Toyota' },
    { id: 'Mitsubishi', label: 'Mitsubishi' },
    { id: 'Caterpillar', label: 'Caterpillar' },
    { id: 'Komatsu', label: 'Komatsu' }
  ];

  const statuses = [
    { id: 'all', label: 'Semua Status' },
    { id: 'Tersedia', label: 'Tersedia saja' }
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      textAlign: 'left',
      minWidth: '220px'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#111827' }}>Filter Unit</h3>
        <button
          type="button"
          onClick={onClearFilters}
          style={{
            background: 'none',
            border: 'none',
            color: '#f97316',
            fontSize: '12.5px',
            cursor: 'pointer',
            padding: 0
          }}
        >
          Reset Filter
        </button>
      </div>

      {/* Filter Kapasitas */}
      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
          Kapasitas Beban
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {capacities.map((cap) => {
            const isSel = selectedCapacity === cap.id;
            return (
              <label key={cap.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', cursor: 'pointer', color: '#4b5563' }}>
                <input
                  type="radio"
                  name="capacity"
                  checked={isSel}
                  onChange={() => setSelectedCapacity(cap.id)}
                  style={{ accentColor: '#f97316' }}
                />
                {cap.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Filter Merk */}
      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
          Produsen / Merk
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {brands.map((brand) => {
            const isSel = selectedBrand === brand.id;
            return (
              <label key={brand.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', cursor: 'pointer', color: '#4b5563' }}>
                <input
                  type="radio"
                  name="brand"
                  checked={isSel}
                  onChange={() => setSelectedBrand(brand.id)}
                  style={{ accentColor: '#f97316' }}
                />
                {brand.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Filter Status */}
      <div>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
          Ketersediaan
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {statuses.map((st) => {
            const isSel = selectedStatus === st.id;
            return (
              <label key={st.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', cursor: 'pointer', color: '#4b5563' }}>
                <input
                  type="radio"
                  name="status"
                  checked={isSel}
                  onChange={() => setSelectedStatus(st.id)}
                  style={{ accentColor: '#f97316' }}
                />
                {st.label}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
