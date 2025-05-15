import * as styles from './Calendar.css';

interface DayProps {
  date: number; // 해당 날짜
  isCurrentMonth: boolean; // 현재 월의 날짜인지 여부
  onClick: (date: number) => void; // 클릭 시 동작
}

const Day = ({ date, isCurrentMonth, onClick }: DayProps) => {
  const dayClass = isCurrentMonth ? styles.dayInMonth : styles.dayOutMonth;

  return (
    <div className={`${styles.day} ${dayClass}`} onClick={() => onClick(date)}>
      {date}
    </div>
  );
};

export default Day;
