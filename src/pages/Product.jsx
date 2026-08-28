import React, { useState, useEffect } from 'react';
import ProductCategory from '../components/product/ProductCategory';
import ProductCategorySidebar from '../components/product/ProductCategorySidebar';
import ProductGrid from '../components/product/ProductGrid';
import ProductDetail from '../components/product/ProductDetail';

/**
 * Product Catalog Page.
 *
 * @param {Object} props
 * @param {Array} props.products - List of all forklift products
 * @param {Function} props.onBookProduct - Callback to rent a unit
 * @param {Object} [props.initialSelectedDetail] - Optional pre-selected product detail view
 */
export default function Product({ products = [], onBookProduct, initialSelectedDetail = null }) {
  // Page Sub-State (Grid list vs Spec Detail sheet)
  const [selectedProduct, setSelectedProduct] = useState(initialSelectedDetail);

  useEffect(() => {
    setSelectedProduct(initialSelectedDetail);
  }, [initialSelectedDetail]);

  // Filters State
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCapacity, setSelectedCapacity] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSelectedCapacity('all');
    setSelectedBrand('all');
    setSelectedStatus('all');
  };

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '30px 20px',
      fontFamily: 'var(--sans)'
    }}>
      
      {/* If Detail spec is active */}
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onBook={onBookProduct}
        />
      ) : (
        /* Otherwise show Catalog Grid & Filters */
        <div>
          {/* Header */}
          <div style={{ textAlign: 'left', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>
              Katalog Sewa Unit Forklift
            </h1>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '15px' }}>
              Jelajahi berbagai tipe forklift siap pakai dari produsen terkemuka. Unit terjamin prima dengan harga kompetitif.
            </p>
          </div>

          {/* Horizontal Category Cards Selector */}
          <ProductCategory
            activeCategory={activeCategory}
            onChangeCategory={(cat) => setActiveCategory(cat)}
          />

          {/* Sidebar & Grid Main Layout */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            marginTop: '24px',
            alignItems: 'flex-start',
            flexWrap: 'wrap'
          }}>
            {/* Left Filter Sidebar */}
            <div style={{ flex: '1 1 220px' }}>
              <ProductCategorySidebar
                selectedCapacity={selectedCapacity}
                setSelectedCapacity={setSelectedCapacity}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Right Product Grid */}
            <div style={{ flex: '3 1 600px' }}>
              <ProductGrid
                products={products}
                activeCategory={activeCategory}
                selectedCapacity={selectedCapacity}
                selectedBrand={selectedBrand}
                selectedStatus={selectedStatus}
                onViewDetail={(product) => setSelectedProduct(product)}
                onBook={onBookProduct}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
