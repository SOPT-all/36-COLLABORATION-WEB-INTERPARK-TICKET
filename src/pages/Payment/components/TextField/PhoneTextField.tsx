import { useState, type ChangeEvent } from 'react';
import clsx from 'clsx';
import * as styles from './TextField.css';

interface PhoneTextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function PhoneTextField({
  placeholder,
  value,
  onChange,
}: PhoneTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const formatPhoneNumber = (input: string) => {
    const numbers = input.replace(/\D/g, '');

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    onChange(formattedNumber);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
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
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={13}
      />
    </div>
  );
}
