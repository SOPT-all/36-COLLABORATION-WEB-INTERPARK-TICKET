import clsx from 'clsx';
import * as styles from './InfoRowTitle.css';

interface InfoRowTitleProps {
  text: string;
  className?: string;
}

export default function InfoRowTitle({ text, className }: InfoRowTitleProps) {
  return (
    <div className={styles.infoRowTitleWrapper}>
      <span className={clsx(styles.infoRowTitleText, className)}>{text}</span>
    </div>
  );
}
