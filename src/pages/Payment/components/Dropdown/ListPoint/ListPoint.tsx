import ArrowDownIcon from "@/shared/assets/icon/ic_arrow_down_gray50_18.svg?react";
import * as styles from "./ListPoint.css";

interface ListPointProps {
  leftLabel: string;
  rightLabel: string;
}

export default function ListPoint({ leftLabel, rightLabel }: ListPointProps) {
  return (
    <div className={styles.listPoint}>
      <span className={styles.listPointLeft}>{leftLabel}</span>
      <div className={styles.listPointRight}>
        <span className={styles.listPointRightText}>{rightLabel}</span>
        <ArrowDownIcon className={styles.listPointIcon} />
      </div>
    </div>
  );
}
