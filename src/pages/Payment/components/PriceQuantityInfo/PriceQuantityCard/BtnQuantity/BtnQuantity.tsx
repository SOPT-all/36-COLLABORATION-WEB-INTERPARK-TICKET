import { useState } from 'react';
import clsx from 'clsx';
import * as styles from './BtnQuantity.css';
import UpIcon from '@/shared/assets/icon/ic_arrow_up_gray40_14.svg?react';
import DownIcon from '@/shared/assets/icon/ic_arrow_down_gray40_14.svg?react';
import VectorFrame from '@/shared/assets/vector/Vector 27.svg?react';
import Divider from '@/shared/assets/vector/Vector 28.svg?react';

interface BtnQuantityProps {
  count?: number;
  onCountChange?: (newCount: number) => void;
  initial?: number;
}

export default function BtnQuantity({
  count: externalCount,
  onCountChange,
  initial = 0,
}: BtnQuantityProps) {
  const [internalCount, setInternalCount] = useState(initial);

  const count = externalCount !== undefined ? externalCount : internalCount;

  const handleIncrement = () => {
    const newCount = count + 1;
    if (onCountChange) {
      onCountChange(newCount);
    } else {
      setInternalCount(newCount);
    }
  };

  const handleDecrement = () => {
    const newCount = Math.max(0, count - 1);
    if (onCountChange) {
      onCountChange(newCount);
    } else {
      setInternalCount(newCount);
    }
  };

  return (
    <div className={styles.container}>
      <VectorFrame className={styles.bg} />

      <div className={styles.content}>
        <span
          className={clsx(
            styles.count,
            count === 0 ? styles.countGray : styles.countRed
          )}
        >
          {count}
        </span>

        <div className={styles.arrowGroup}>
          <button className={styles.arrowButtonUp} onClick={handleIncrement}>
            <UpIcon />
          </button>
          <Divider className={styles.divider} />
          <button
            className={styles.arrowButtonDown}
            onClick={handleDecrement}
            disabled={count === 0}
          >
            <DownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
