import * as styles from "./ListPoint.css";
import ArrowDownIcon from "@/shared/assets/icon/ic_arrow_down_gray50_18.svg?react";

interface ListPointProps {
  pointTitle: string;
  pointValue: string;
}

export default function ListPoint({ pointTitle, pointValue }: ListPointProps) {
  return (
    <div className={styles.listPoint}>
      <span className={styles.listPointTitle}>{pointTitle}</span>
      <button type="button" className={styles.listPointAction}>
        <span className={styles.listPointActionLabel}>{pointValue}</span>
        <ArrowDownIcon className={styles.listPointIcon} />
      </button>
    </div>
  );
}

