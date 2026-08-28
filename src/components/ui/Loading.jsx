import './ui.css';

/**
 * Reusable Loading spinner/indicator component.
 *
 * @param {Object} props
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Loading indicator size
 * @param {'primary'|'secondary'|'white'} [props.variant='primary'] - Color theme
 * @param {'spinner'|'dots'|'pulse'} [props.type='spinner'] - Visual animation style
 * @param {string} [props.text] - Optional loading message to display
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function Loading({
  size = 'md',
  variant = 'primary',
  type = 'spinner',
  text,
  className = '',
  ...props
}) {
  const variantColor = {
    primary: 'var(--accent)',
    secondary: 'var(--text)',
    white: '#ffffff',
  }[variant] || 'var(--accent)';

  const containerClasses = [
    'ui-loading-container',
    className
  ].filter(Boolean).join(' ');

  const renderIndicator = () => {
    switch (type) {
      case 'dots':
        return (
          <div
            className={`ui-dots ui-dots-${size}`}
            style={{ color: variantColor }}
            {...props}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      case 'pulse':
        return (
          <div
            className={`ui-pulse ui-pulse-${size}`}
            style={{ color: variantColor }}
            {...props}
          />
        );
      case 'spinner':
      default:
        return (
          <div
            className={`ui-spinner ui-spinner-${size}`}
            style={{ color: variantColor }}
            {...props}
          />
        );
    }
  };

  if (text) {
    return (
      <div className={containerClasses} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        {renderIndicator()}
        <span className="ui-loading-text" style={{ fontSize: size === 'sm' ? '14px' : '16px', color: 'var(--text)' }}>
          {text}
        </span>
      </div>
    );
  }

  return renderIndicator();
}
