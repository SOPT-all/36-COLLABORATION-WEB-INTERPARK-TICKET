import * as styles from './Badge.css';

interface Props extends React.HTMLProps<HTMLDivElement> {
  type: 'Hot' | '단독판매';
}

const Badge = ({ type }: Props) => {
  let badgeType = '';
  switch (type) {
    case 'Hot':
      badgeType = styles.red;
      break;
    case '단독판매':
      badgeType = styles.blue;
      break;
  }

  return <span className={`${styles.BadgeWrapper} ${badgeType}`}>{type}</span>;
};

export default Badge;
