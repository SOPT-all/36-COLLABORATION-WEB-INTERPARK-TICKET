import { useState } from "react";
import * as styles from "./ListCheckMiddle.css.ts";

import CheckBlueIcon from "@/shared/assets/icon/ic_check_blue80_18.svg?react";
import CheckGrayIcon from "@/shared/assets/icon/ic_check_gray30_18.svg?react";
import ArrowUpIcon from "@/shared/assets/icon/ic_arrow_up_gray90_24.svg?react";
import ArrowDownIcon from "@/shared/assets/icon/ic_arrow_down_gray90_24.svg?react";

interface ListCheckMiddleProps {
  label: string;
}

export default function ListCheckMiddle({ label }: ListCheckMiddleProps) {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckClick = () => {
    setChecked((prev) => !prev);
  };

  const handleArrowClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.listCheckMiddle}>
      <button
        type="button"
        className={styles.listCheckMiddleLeft}
        onClick={handleCheckClick}
      >
        <div className={styles.listCheckMiddleIcon}>
          {checked ? (
            <CheckBlueIcon width={17} height={12} />
          ) : (
            <CheckGrayIcon width={17} height={12} />
          )}
        </div>
        <span className={styles.listCheckMiddleLabel}>{label}</span>
      </button>

      <button
        type="button"
        className={styles.listCheckMiddleArrow}
        onClick={handleArrowClick}
      >
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </button>
    </div>
  );
}

