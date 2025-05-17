// src/components/common/InfoRowLabel/InfoRowLabel.tsx
import * as styles from './InfoRowTitle.css';

interface InfoRowLabelProps {
  text: string;
  className?: string;
}

export default function InfoRowLabel({ text, className }: InfoRowLabelProps) {
  return (
    <div className={styles.infoRowTitleWrapper}>
      <span className={`${styles.infoRowTitleText} ${className ?? ''}`}>
        {text}
      </span>
    </div>
  );
}
