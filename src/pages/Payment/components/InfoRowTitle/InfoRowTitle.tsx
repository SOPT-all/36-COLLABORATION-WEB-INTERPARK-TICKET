import * as styles from './InfoRowTitle.css';

interface InfoRowTitleProps {
  text: string;
  className?: string;
  subText?: string;
}

export default function InfoRowTitle({
  text,
  className,
  subText,
}: InfoRowTitleProps) {
  return (
    <div className={styles.infoRowTitleWrapper}>
      <span className={`${styles.infoRowTitleText} ${className ?? ''}`}>
        {text}
      </span>
      {subText && <span className={styles.infoRowSubText}>{subText}</span>}
    </div>
  );
}
