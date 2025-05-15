import { useState } from "react";
import * as styles from "./ListInfo.css.ts";
import ArrowUpIcon from "@/shared/assets/icon/ic_arrow_up_gray90_24.svg?react";
import ArrowDownIcon from "@/shared/assets/icon/ic_arrow_down_gray90_24.svg?react";

interface ListInfoProps {
  label: string;
}

export default function ListInfo({ label }: ListInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button type="button" className={styles.listInfo} onClick={handleToggle}>
      <span className={styles.listInfoText}>{label}</span>
      <span className={styles.listInfoIcon}>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </span>
    </button>
  );
}
