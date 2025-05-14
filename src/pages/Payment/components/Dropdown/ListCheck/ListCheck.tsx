import { useState } from "react";
import * as styles from "./ListCheck.css";

import CheckBlueIcon from "@/shared/assets/icon/ic_check_blue80_18.svg?react";
import CheckGrayIcon from "@/shared/assets/icon/ic_check_gray30_18.svg?react";
import ArrowUpIcon from "@/shared/assets/icon/ic_arrow_up_gray90_24.svg?react";
import ArrowDownIcon from "@/shared/assets/icon/ic_arrow_down_gray90_24.svg?react";

interface ListCheckProps {
  label: string;
}

export default function ListCheck({ label }: ListCheckProps) {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckClick = () => {
    setChecked((prev) => !prev); 
  };

  const handleArrowClick = () => {
    setIsOpen((prev) => !prev); 
  };

  return (
    <div className={styles.listCheck}>
      <div className={styles.listCheckLeft} onClick={handleCheckClick}>
        <div className={styles.listCheckCheckIcon}>
          {checked ? (
            <CheckBlueIcon width={17} height={12} />
          ) : (
            <CheckGrayIcon width={17} height={12} />
          )}
        </div>
        <span className={styles.listCheckLabel}>{label}</span>
      </div>

      <div className={styles.listCheckArrow} onClick={handleArrowClick}>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>
    </div>
  );
}
