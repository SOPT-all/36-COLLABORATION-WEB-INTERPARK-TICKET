import * as styles from './InfoPrice.css';

interface InfoPriceProps {
  label: string;
  value: string;
  valueColor?: string;
  labelColor?: string;
}

export default function InfoPrice({ label, value, valueColor, labelColor }: InfoPriceProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label} style={{ color: labelColor }}>{label}</span>
      <span className={styles.value} style={{ color: valueColor }}>{value}</span>
    </div>
  );
} 