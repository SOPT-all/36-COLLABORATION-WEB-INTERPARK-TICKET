import { useState } from "react";
import CheckedIcon from "@/shared/assets/icon/checkbox_fill.svg?react";
import UncheckedIcon from "@/shared/assets/icon/checkbox_unfill.svg?react";

interface CustomCheckboxProps {
  checked?: boolean; 
  defaultChecked?: boolean; 
  onChange?: (checked: boolean) => void; 
}

export default function CustomCheckbox({
  checked,
  defaultChecked = false,
  onChange,
}: CustomCheckboxProps) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isChecked = isControlled ? checked : internalChecked;

  const handleClick = () => {
    const newValue = !isChecked;
    if (!isControlled) setInternalChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isChecked}
      aria-label={isChecked ? "선택됨" : "선택 안 됨"}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      {isChecked ? (
        <CheckedIcon width={24} height={24} aria-hidden="true" focusable="false" />
      ) : (
        <UncheckedIcon width={24} height={24} aria-hidden="true" focusable="false" />
      )}
    </button>
  );
}
