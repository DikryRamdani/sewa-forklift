import React from 'react';
import Button from '../ui/Button';

/**
 * Main navigation bar for page switching.
 *
 * @param {Object} props
 * @param {string} props.currentPage - Currently active page ID
 * @param {Function} props.setCurrentPage - Setter function for active page ID
 */
export default function Navbar({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'product', label: 'Daftar Forklift' },
    { id: 'service', label: 'Layanan Sewa' },
    { id: 'contact', label: 'Hubungi Kami' }
  ];

  return (
    <nav style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
      {/* Brand Logo */}
      <div 
        onClick={() => setCurrentPage('home')}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          cursor: 'pointer' 
        }}
      >
        <span style={{
          backgroundColor: '#f97316',
          color: '#ffffff',
          fontWeight: '800',
          fontSize: '18px',
          width: '36px',
          height: '36px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          FP
        </span>
        <div style={{ textAlign: 'left' }}>
          <span style={{ 
            fontWeight: '700', 
            fontSize: '16px', 
            color: '#111827', 
            display: 'block',
            lineHeight: 1.2
          }}>
            FORKLIFT PRATAMA
          </span>
          <span style={{ 
            fontSize: '11px', 
            color: '#6b7280', 
            display: 'block',
            letterSpacing: '0.5px'
          }}>
            RENTAL & HEAVY EQUIPMENT
          </span>
        </div>
      </div>

      {/* Nav Menu Items */}
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '24px',
        margin: 0,
        padding: 0
      }}>
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setCurrentPage(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 4px',
                  fontSize: '15px',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? '#f97316' : '#4b5563',
                  cursor: 'pointer',
                  borderBottom: isActive ? '2px solid #f97316' : '2px solid transparent',
                  transition: 'all 0.15s ease-in-out'
                }}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* CTA Button */}
      <div>
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => setCurrentPage('contact')}
        >
          Minta Penawaran
        </Button>
      </div>
    </nav>
  );
}
