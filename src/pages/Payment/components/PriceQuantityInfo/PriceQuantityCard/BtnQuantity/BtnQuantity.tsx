import { useState } from 'react';
import * as styles from './BtnQuantity.css';

import UpIcon from '@/shared/assets/icon/ic_arrow_up_gray40_14.svg?react';
import DownIcon from '@/shared/assets/icon/ic_arrow_down_gray40_14.svg?react';
import VectorFrame from '@/shared/assets/vector/Vector 27.svg?react';
import Divider from '@/shared/assets/vector/Vector 28.svg?react';

import clsx from 'clsx';

interface BtnQuantityProps {
  initial?: number;
}

export default function BtnQuantity({ initial = 0 }: BtnQuantityProps) {
  const [count, setCount] = useState(initial);

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
          <button
            className={styles.arrowButtonUp}
            onClick={() => setCount((prev) => prev + 1)}
          >
            <UpIcon />
          </button>
          <Divider className={styles.divider} />
          <button
            className={styles.arrowButtonDown}
            onClick={() => setCount((prev) => Math.max(0, prev - 1))}
          >
            <DownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
