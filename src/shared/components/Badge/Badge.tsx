import * as styles from './Badge.css';
import type { tagType } from '@/pages/Main/api/types';

interface BadgeProps {
  type: tagType;
}

const Badge = ({ type }: BadgeProps) => {
  return <span className={styles.badgeWrapper({ type })}>{type}</span>;
};

export default Badge;
