import * as styles from './TimeDeal.css';

interface Props {
  text: string;
  time: number;
}
const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};
const TimeDeal = ({ text, time }: Props) => {
  return (
    <span className={styles.TimeDealWrapper}>
      <span className={styles.TimeDealTxt}>{text}</span>
      <span className={styles.TimeDealCount}>{formatTime(time)}</span>
    </span>
  );
};
export default TimeDeal;