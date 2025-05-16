import * as styles from './Badge.css';

interface Props {
  type: 'Hot' | '단독판매';
}

const Badge = ({ type }: Props) => {
  return <span className={styles.badgeWrapper({ type })}>{type}</span>;
};

export default Badge;
