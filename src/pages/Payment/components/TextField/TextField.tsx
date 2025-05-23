import { type ChangeEvent } from 'react';
import clsx from 'clsx';
import * as styles from './TextField.css';
import { useFocusInput } from './hooks/useFocusInput';

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  numbersOnly?: boolean;
}

export default function TextField({
  placeholder,
  value,
  onChange,
  maxLength,
  numbersOnly,
}: TextFieldProps) {
  const { isFocused, handleFocus, handleBlur } = useFocusInput();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (numbersOnly) {
      if (/^\d*$/.test(newValue)) {
        onChange(newValue);
      }
    } else {
      onChange(newValue);
    }
  };

  return (
    <div
      className={clsx(
        styles.textField,
        (isFocused || value) && styles.textFieldFocused
      )}
    >
      <input
        className={clsx(styles.input, value && styles.inputHasText)}
        type={numbersOnly ? 'tel' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={() => handleBlur(value)}
        maxLength={maxLength}
      />
    </div>
  );
}
