import { useEffect, useRef } from 'react';
import './ui.css';

/**
 * Reusable Dialog / Modal component.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is visible
 * @param {Function} props.onClose - Callback triggered to close the modal
 * @param {string} [props.title] - Optional title displayed in header
 * @param {React.ReactNode} props.children - Modal content
 * @param {'sm'|'md'|'lg'|'xl'} [props.size='md'] - Max width size profile
 * @param {boolean} [props.closeOnOverlayClick=true] - Close when clicking overlay backdrop
 * @param {string} [props.className=''] - Additional custom CSS class
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  className = '',
}) {
  const overlayRef = useRef(null);

  // Esc key close handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === overlayRef.current) {
      onClose();
    }
  };

  const modalClasses = [
    'ui-modal-content',
    `ui-modal-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={overlayRef}
      className="ui-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'ui-modal-title' : undefined}
    >
      <div className={modalClasses}>
        {/* Modal Header */}
        <div className="ui-modal-header">
          <h3 id="ui-modal-title" className="ui-modal-title">
            {title || 'Information'}
          </h3>
          <button
            type="button"
            className="ui-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="ui-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
