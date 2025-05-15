import type { ChangeEvent } from 'react';
import clsx from 'clsx';
import * as styles from './Text-Field.css';

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
  return (
    <div className={styles.textField}>
      <input
        className={clsx(styles.input, value && styles.inputHasText)}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
}
