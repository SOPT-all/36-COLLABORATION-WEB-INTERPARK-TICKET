import { btnBase, btnSelected, btnLabel } from "./Btn.css";
import clsx from "clsx";

interface BtnProps {
  label: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick?: () => void;
}

export default function BtnBank({
  label,
  icon,
  isSelected,
  onClick,
}: BtnProps) {
  return (
    <button
      className={clsx(btnBase, isSelected && btnSelected)}
      onClick={onClick}
    >
      <div style={{ width: "2.8rem", height: "2.8rem" }}>{icon}</div>
      <span className={btnLabel}>{label}</span>
    </button>
  );
}
