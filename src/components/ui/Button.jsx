import Loading from './Loading';
import './ui.css';

/**
 * Reusable Button component styled with white, orange, and gray theme.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label or contents
 * @param {'primary'|'secondary'|'outline'|'danger'|'ghost'} [props.variant='primary'] - Visual style variant
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.loading=false] - If true, displays loading spinner and disables click
 * @param {React.ReactNode} [props.icon] - Optional icon component
 * @param {'left'|'right'} [props.iconPosition='left'] - Placement of the icon
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  const isDisabled = disabled || loading;

  const btnClasses = [
    'ui-btn',
    `ui-btn-${variant}`,
    `ui-btn-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={btnClasses}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <Loading
          size="sm"
          variant={variant === 'primary' || variant === 'danger' ? 'white' : 'primary'}
          style={{ marginRight: children ? '8px' : '0' }}
        />
      )}

      {!loading && icon && iconPosition === 'left' && (
        <span style={{ display: 'inline-flex', marginRight: children ? '8px' : '0' }}>
          {icon}
        </span>
      )}

      {children}

      {!loading && icon && iconPosition === 'right' && (
        <span style={{ display: 'inline-flex', marginLeft: children ? '8px' : '0' }}>
          {icon}
        </span>
      )}
    </button>
  );
}
