import React from 'react';
import Button from '../ui/Button';

/**
 * Card representing a single service type (e.g. Daily, Monthly, Maintenance).
 *
 * @param {Object} props
 * @param {Object} props.service - Service data object
 * @param {Function} props.onSelectService - Callback to select or inquire about service
 */
export default function ServiceCard({ service, onSelectService }) {
  const { title, desc, icon, features, ctaText } = service;

  // Custom icon map to render clean SVG shapes
  const renderServiceIcon = () => {
    switch (icon) {
      case 'daily':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case 'monthly':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'yearly':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case 'relocation':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
            <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4" />
            <circle cx="7.5" cy="18.5" r="2.5" />
            <circle cx="16.5" cy="18.5" r="2.5" />
          </svg>
        );
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      transition: 'transform 0.2s',
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Icon header */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        backgroundColor: 'rgba(249, 115, 22, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        {renderServiceIcon()}
      </div>

      {/* Content */}
      <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: '700', color: '#111827' }}>
        {title}
      </h3>
      <p style={{ margin: '0 0 20px 0', fontSize: '13.5px', color: '#6b7280', lineHeight: '1.6', flexGrow: 1 }}>
        {desc}
      </p>

      {/* Features bullet list */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '0 0 24px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        fontSize: '13px',
        color: '#4b5563'
      }}>
        {features.map((feat, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant="outline"
        size="md"
        onClick={() => onSelectService(service)}
      >
        {ctaText || 'Minta Penawaran'}
      </Button>
    </div>
  );
}
