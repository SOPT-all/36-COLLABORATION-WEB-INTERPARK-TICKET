import { useState } from 'react';
import * as styles from './CustomCheckbox.css';
import CheckedIcon from '@/shared/assets/icon/checkbox_fill.svg?react';
import UncheckedIcon from '@/shared/assets/icon/checkbox_unfill.svg?react';

interface CustomCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export default function CustomCheckbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  className,
}: CustomCheckboxProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    const newValue = !isChecked;
    if (!isControlled) setInternalChecked(newValue);
    onChange?.(newValue);
  };

  const renderCheckbox = () => (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isChecked}
      aria-label={isChecked ? '선택됨' : '선택 안 됨'}
      className={`${styles.checkboxButton} ${className || ''}`}
    >
      {isChecked ? (
        <CheckedIcon
          className={styles.checkboxIcon}
          aria-hidden="true"
          focusable="false"
        />
      ) : (
        <UncheckedIcon
          className={styles.checkboxIcon}
          aria-hidden="true"
          focusable="false"
        />
      )}
    </button>
  );

  if (label) {
    return (
      <div className={styles.checkboxWithLabelContainer} onClick={handleClick}>
        {renderCheckbox()}
        <span
          className={`${styles.checkboxLabel} ${isChecked ? styles.checkedLabel : styles.uncheckedLabel}`}
        >
          {label}
        </span>
      </div>
    );
  }

  return renderCheckbox();
}
