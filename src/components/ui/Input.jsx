import { useId } from 'react';
import './ui.css';

/**
 * Reusable Form Input component.
 *
 * @param {Object} props
 * @param {string} [props.label] - Optional field label text
 * @param {string} [props.error] - Optional validation error message
 * @param {string} [props.helperText] - Optional helper instruction text
 * @param {React.ReactNode} [props.icon] - Optional prepended or appended icon
 * @param {'left'|'right'} [props.iconPosition='left'] - Position of the icon
 * @param {string} [props.className=''] - Additional class for the input element
 * @param {string} [props.wrapperClassName=''] - Additional class for the outer container
 */
export default function Input({
  label,
  error,
  helperText,
  icon,
  iconPosition = 'left',
  className = '',
  wrapperClassName = '',
  disabled = false,
  type = 'text',
  id: customId,
  ...props
}) {
  const generatedId = useId();
  const inputId = customId || generatedId;

  const inputClasses = [
    'ui-input',
    error ? 'ui-input-error' : '',
    icon ? `ui-input-has-icon-${iconPosition}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`ui-field-group ${wrapperClassName}`.trim()}>
      {label && (
        <label htmlFor={inputId} className="ui-label">
          {label}
        </label>
      )}

      <div className="ui-input-wrapper">
        {icon && iconPosition === 'left' && (
          <div className="ui-input-icon ui-input-icon-left">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          type={type}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          {...props}
        />

        {icon && iconPosition === 'right' && (
          <div className="ui-input-icon ui-input-icon-right">
            {icon}
          </div>
        )}
      </div>

      {error && (
        <span id={`${inputId}-error`} className="ui-error-text" role="alert">
          {error}
        </span>
      )}

      {!error && helperText && (
        <span id={`${inputId}-helper`} className="ui-helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
}
