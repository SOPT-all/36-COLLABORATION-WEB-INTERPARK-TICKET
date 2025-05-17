import * as styles from './Calendar.css';

interface DayProps {
  date: number;
  isCurrentMonth: boolean;
  onClick: (date: number) => void;
  isToday: boolean;
  isSoldOut: boolean;
}

const Day = ({
  date,
  isCurrentMonth,
  onClick,
  isToday,
  isSoldOut,
}: DayProps) => {
  let dayClass = isCurrentMonth
    ? `${styles.dayInMonth} ${styles.day}`
    : `${styles.dayOutMonth} ${styles.day}`;

  if (isToday) {
    dayClass = `${dayClass} ${styles.today}`;
  }

  const isSunday = new Date(2025, 3, date).getDay() === 0;
  const dayStyle = isSunday ? `${dayClass} ${styles.sunday}` : dayClass;

  return (
    <div className={dayStyle} onClick={() => onClick(date)}>
      {date}
      {isToday && <span className={styles.todayText}>today</span>}
      {isSoldOut && <span className={styles.soldOutText}>soldOut</span>}
    </div>
  );
};

export default Day;
