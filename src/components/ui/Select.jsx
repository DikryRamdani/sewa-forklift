import { useId } from 'react';
import './ui.css';

/**
 * Reusable Form Select dropdown component.
 *
 * @param {Object} props
 * @param {string} [props.label] - Optional select label text
 * @param {Array<string|{value: string|number, label: string}>} props.options - Select options (strings or key-label objects)
 * @param {string} [props.error] - Optional validation error message
 * @param {string} [props.helperText] - Optional helper instruction text
 * @param {string} [props.placeholder] - Optional empty placeholder label
 * @param {string} [props.className=''] - Additional class for the select element
 * @param {string} [props.wrapperClassName=''] - Additional class for the outer container
 */
export default function Select({
  label,
  options = [],
  error,
  helperText,
  placeholder,
  className = '',
  wrapperClassName = '',
  disabled = false,
  id: customId,
  ...props
}) {
  const generatedId = useId();
  const selectId = customId || generatedId;

  const selectClasses = [
    'ui-select',
    error ? 'ui-select-error' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`ui-field-group ${wrapperClassName}`.trim()}>
      {label && (
        <label htmlFor={selectId} className="ui-label">
          {label}
        </label>
      )}

      <select
        id={selectId}
        disabled={disabled}
        className={selectClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={
          error
            ? `${selectId}-error`
            : helperText
              ? `${selectId}-helper`
              : undefined
        }
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden={props.required}>
            {placeholder}
          </option>
        )}

        {options.map((option, index) => {
          const isObject = typeof option === 'object' && option !== null;
          const val = isObject ? option.value : option;
          const text = isObject ? option.label : option;

          return (
            <option key={`${val}-${index}`} value={val}>
              {text}
            </option>
          );
        })}
      </select>

      {error && (
        <span id={`${selectId}-error`} className="ui-error-text" role="alert">
          {error}
        </span>
      )}

      {!error && helperText && (
        <span id={`${selectId}-helper`} className="ui-helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
}
