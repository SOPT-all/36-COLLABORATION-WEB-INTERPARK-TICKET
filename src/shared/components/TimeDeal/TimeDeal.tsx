import * as styles from './TimeDeal.css';

interface Props {
  text: string;
  time: string;
}
const TimeDeal = ({ text, time }: Props) => {
  return (
    <span className={styles.TimeDealWrapper}>
      <span className={styles.TimeDealTxt}>{text}</span>
      <span className={styles.TimeDealCount}>{time}</span>
    </span>
  );
};
export default TimeDeal;
