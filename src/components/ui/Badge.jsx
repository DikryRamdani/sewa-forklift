import './ui.css';

/**
 * Reusable Badge / Label Tag component.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Tag content
 * @param {'primary'|'secondary'|'outline'|'success'|'warning'|'danger'} [props.variant='primary'] - Color variant
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function Badge({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const badgeClasses = [
    'ui-badge',
    `ui-badge-${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}
