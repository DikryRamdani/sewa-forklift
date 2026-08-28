import React from 'react';

/**
 * Floating WhatsApp contact button.
 */
export default function WhatsappButton() {
  const whatsappNumber = '6281298765432';
  const defaultMessage = encodeURIComponent('Halo CS Forklift Pratama, saya ingin bertanya tentang persewaan unit forklift.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        backgroundColor: '#25D366',
        color: '#ffffff',
        padding: '12px 20px',
        borderRadius: '50px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px',
        zIndex: 999,
        transition: 'transform 0.2s ease, background-color 0.2s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.backgroundColor = '#128C7E';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1.0)';
        e.currentTarget.style.backgroundColor = '#25D366';
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.402.002 9.761-4.324 9.764-9.642.002-2.578-1.002-5.001-2.83-6.829C16.32 2.308 13.916 1.3 11.517 1.3c-5.409 0-9.771 4.33-9.774 9.648-.001 1.547.418 3.056 1.214 4.382l-.893 3.266 3.359-.876c1.171.64 2.456.974 3.734.976zm11.233-7.514c-.307-.154-1.82-.899-2.102-.999-.283-.1-.49-.15-.694.155-.205.305-.796.999-.975 1.199-.18.201-.359.227-.666.073-.308-.154-1.299-.478-2.478-1.528-.918-.817-1.537-1.827-1.717-2.133-.18-.306-.019-.472.134-.625.138-.138.307-.356.462-.533.153-.178.205-.304.307-.508.103-.203.052-.381-.026-.533-.077-.154-.694-1.676-.95-2.287-.25-.6-.525-.52-.72-.53-.186-.01-.399-.012-.612-.012-.213 0-.56.08-.854.4-.294.32-1.121 1.096-1.121 2.673s1.147 3.1 1.305 3.31c.159.211 2.257 3.447 5.467 4.832.763.329 1.358.525 1.824.673.768.243 1.467.209 2.02.127.615-.093 1.82-.743 2.077-1.46.256-.718.256-1.332.18-1.46-.077-.127-.282-.228-.59-.383z"/>
      </svg>
      Chat WhatsApp
    </a>
  );
}
