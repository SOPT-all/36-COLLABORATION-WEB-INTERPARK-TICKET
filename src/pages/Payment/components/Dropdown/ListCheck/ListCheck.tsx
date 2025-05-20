import { useState } from 'react';
import * as styles from './ListCheck.css';
import CheckBlueIcon from '@/shared/assets/icon/ic_check_blue80_18.svg?react';
import CheckGrayIcon from '@/shared/assets/icon/ic_check_gray30_18.svg?react';
import ArrowUpIcon from '@/shared/assets/icon/ic_arrow_up_gray90_24.svg?react';
import ArrowDownIcon from '@/shared/assets/icon/ic_arrow_down_gray90_24.svg?react';

interface ListCheckProps {
  label: string;
  checked?: boolean;
  onChange?: () => void;
  onArrowClick?: () => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 02d19f9 (fix: 스타일 수정)
export default function ListCheck({
  label,
  checked = false,
  onChange,
  onArrowClick,
}: ListCheckProps) {
<<<<<<< HEAD
=======
export default function ListCheck({ label, checked = false, onChange, onArrowClick }: ListCheckProps) {
>>>>>>> 77a4909 (feat: step3 구현)
=======
>>>>>>> 02d19f9 (fix: 스타일 수정)
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckClick = () => {
    onChange?.();
  };

  const handleArrowClick = () => {
    setIsOpen((prev) => !prev);
    onArrowClick?.();
  };

  return (
    <div className={styles.listCheck}>
      <button
        type="button"
        className={styles.listCheckLeft}
        onClick={handleCheckClick}
      >
        {checked ? (
          <CheckBlueIcon width={18} height={18} />
        ) : (
          <CheckGrayIcon width={18} height={18} />
        )}
        <span className={styles.listCheckLabel}>{label}</span>
      </button>

      <button
        type="button"
        className={styles.listCheckArrow}
        onClick={handleArrowClick}
      >
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
    </div>
  );
}
