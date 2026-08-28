import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';

/**
 * Contact Us Page (Hubungi Kami).
 *
 * @param {Object} props
 * @param {Function} props.triggerToast - Function to show notification alert
 */
export default function Contact({ triggerToast }) {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '30px 20px',
      fontFamily: 'var(--sans)',
      textAlign: 'left'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', margin: '0 0 8px 0' }}>
          Hubungi Layanan Sales & Support
        </h1>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '15px', lineHeight: '1.6' }}>
          Apakah Anda memiliki pertanyaan atau ingin berkonsultasi mengenai armada forklift yang cocok untuk proyek Anda? Tim sales kami siap melayani kebutuhan Anda dengan ramah dan profesional.
        </p>
      </div>

      {/* Main Grid Split */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        alignItems: 'start'
      }}>
        {/* Left Column: Direct Info & Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <ContactInfo />
          <ContactMap />
        </div>

        {/* Right Column: Inquiry Input Form */}
        <div>
          <ContactForm onSubmitSuccess={triggerToast} />
        </div>
      </div>
    </div>
  );
}
