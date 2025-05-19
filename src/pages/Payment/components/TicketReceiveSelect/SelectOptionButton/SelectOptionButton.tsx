import * as styles from './SelectOptionButton.css';
import CheckOn from '@/shared/assets/icon/ic_select_fill.svg?react';
import CheckOff from '@/shared/assets/icon/ic_select_unfill.svg?react';

interface Props {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function SelectOptionButton({
  label,
  selected,
  onClick,
}: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {selected ? <CheckOn /> : <CheckOff />}
      <span className={styles.label}>{label}</span>
    </button>
  );
}
