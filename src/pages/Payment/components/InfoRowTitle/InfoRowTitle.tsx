
import * as styles from './InfoRowTitle.css';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';

interface InfoRowTitleProps {
  text: string;
  subText?: string;
  showCheckbox?: boolean;
  checked?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
  checkboxLabel?: string;
}

export default function InfoRowTitle({ 
  text, 
  subText,
  showCheckbox = false, 
  checked = false, 
  onCheckboxChange,
  checkboxLabel 
}: InfoRowTitleProps) {
  return (
    <div className={styles.infoRowTitle}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{text}</h2>
        {subText && <span className={styles.subText}>{subText}</span>}
      </div>
      {showCheckbox && (
        <CustomCheckbox
          checked={checked}
          onChange={onCheckboxChange}
          label={checkboxLabel}
        />
      )}
    </div>
  );
}
