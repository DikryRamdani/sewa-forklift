import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ui.css';

/**
 * Reusable Alert Toast notification component.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the toast is visible
 * @param {string|React.ReactNode} props.message - Notification message
 * @param {'info'|'success'|'warning'|'error'} [props.type='info'] - Status type
 * @param {number} [props.duration=3000] - Duration in milliseconds before auto-dismissal (0 to disable)
 * @param {Function} props.onClose - Callback triggered when the toast closes
 * @param {string} [props.className=''] - Additional custom CSS class
 */
export default function Toast({
  isOpen,
  message,
  type = 'info',
  duration = 3000,
  onClose,
  className = '',
}) {
  // Handle auto-close timer
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  // Custom status icons
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        );
    }
  };

  const toastElement = (
    <div className="ui-toast-container" role="status" aria-live="polite">
      <div className={`ui-toast ui-toast-${type} ${className}`.trim()}>
        <span className="ui-toast-icon">{getIcon()}</span>
        <div className="ui-toast-content">{message}</div>
        <button
          type="button"
          className="ui-toast-close"
          onClick={onClose}
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
    </div>
  );

  // Render to document body so it floats above all layout hierarchies
  return createPortal(toastElement, document.body);
}
