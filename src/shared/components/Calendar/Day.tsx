import * as styles from './Calendar.css';

interface DayProps {
  date: number;
  isCurrentMonth: boolean;
  onClick: (date: number) => void;
  isToday: boolean;
  isSoldOut: boolean;
  isSelected: boolean;
}

const Day = ({
  date,
  isCurrentMonth,
  onClick,
  isToday,
  isSoldOut,
  isSelected,
}: DayProps) => {
  let dayClass = isCurrentMonth
    ? `${styles.dayInMonth} ${styles.day}`
    : `${styles.dayOutMonth} ${styles.day}`;

  let todayClass = `${styles.todayText}`;
  if (isToday) {
    dayClass = `${dayClass} ${styles.today}`;
  }

  if (isSelected) {
    dayClass = `${dayClass} ${styles.selected}`;
    todayClass = `${styles.todayText} ${styles.todaySelected}`;
  }

  const isSunday = new Date(2025, 3, date).getDay() === 0;
  const dayStyle = isSunday ? `${dayClass} ${styles.sunday}` : dayClass;

  return (
    <button
      className={dayStyle}
      onClick={() => onClick(date)} // 클릭 시 onClick 전달
      disabled={isSoldOut || !isToday}
    >
      {date}
      {isToday && <span className={todayClass}>today</span>}
      {isSoldOut && <span className={styles.soldOutText}>soldOut</span>}
    </button>
  );
};

export default Day;
