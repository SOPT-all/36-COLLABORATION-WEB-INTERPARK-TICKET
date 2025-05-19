import { useState } from "react";
import CheckedIcon from "@/shared/assets/icon/checkbox_fill.svg?react";
import UncheckedIcon from "@/shared/assets/icon/checkbox_unfill.svg?react";

export default function CustomCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      onClick={() => setChecked(!checked)}
      aria-pressed={checked}
      style={{ background: "none", border: "none", padding: 0 }}
    >
      {checked ? (
        <CheckedIcon width={24} height={24} aria-hidden />
      ) : (
        <UncheckedIcon width={24} height={24} aria-hidden />
      )}
    </button>
  );
}
