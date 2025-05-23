import { useState } from 'react';

interface UseFocusInputReturn {
  isFocused: boolean;
  handleFocus: () => void;
  handleBlur: (value: string) => void;
}

export function useFocusInput(): UseFocusInputReturn {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (value: string) => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return { isFocused, handleFocus, handleBlur };
}
