import clsx from "clsx";
import { btnBase, btnSelected, btnLabel, btnIcon } from "./Btn.css";

interface BtnProps {
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export default function Btn({ label, icon, isSelected, onClick }: BtnProps) {
  return (
    <button
      type="button"
      className={clsx(btnBase, isSelected && btnSelected)}
      onClick={onClick}
    >
      <div className={btnIcon}>{icon}</div>
      <span className={btnLabel}>{label}</span>
    </button>
  );
}
