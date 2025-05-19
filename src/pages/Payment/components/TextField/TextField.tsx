import { type ChangeEvent } from 'react';
import clsx from 'clsx';
import * as styles from './TextField.css';
import { useFocusInput } from '../../hooks/useFocusInput';

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextField({
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  const { isFocused, handleFocus, handleBlur } = useFocusInput();

  return (
    <div
      className={clsx(
        styles.textField,
        (isFocused || value) && styles.textFieldFocused
      )}
    >
      <input
        className={clsx(styles.input, value && styles.inputHasText)}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onFocus={handleFocus}
        onBlur={() => handleBlur(value)}
      />
    </div>
  );
}
