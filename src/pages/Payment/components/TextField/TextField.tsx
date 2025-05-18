import { useState, type ChangeEvent } from 'react';
import clsx from 'clsx';
import * as styles from './TextField.css';

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
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // 텍스트가 있으면 포커스가 없어도 포커스 스타일 유지
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
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
