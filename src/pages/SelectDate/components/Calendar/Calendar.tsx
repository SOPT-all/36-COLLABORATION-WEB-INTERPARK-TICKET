import { useState } from 'react';
import Day from './Day';
import * as styles from './Calendar.css';

const Calendar = ({
  onDateSelect,
}: {
  onDateSelect: (selected: boolean) => void;
}) => {
  const currentDate = new Date(2025, 3, 1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const getDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 0);
    return date.getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1);
    return date.getDay();
  };

  const handleDayClick = (date: number) => {
    // 클릭된 날짜 서버의 날짜 데이터랑 동일하면!! 받아오기 할거임!!!
    setSelectedDate(date);
    onDateSelect(true);
  };

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysInMonth = getDaysInMonth(month + 1, year);
  const firstDay = getFirstDayOfMonth(month, year);

  const today = 29;
  const soldOutDates = [30];

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentMonth = true;
    const isToday = i === today;
    const isSoldOut = soldOutDates.includes(i);

    days.push(
      <Day
        key={i}
        date={i}
        isCurrentMonth={isCurrentMonth}
        onClick={handleDayClick} // onClick 핸들러 전달
        isToday={isToday}
        isSoldOut={isSoldOut}
        isSelected={i === selectedDate}
      />
    );
  }

  const blanks = [];
  for (let i = 0; i < firstDay; i++) {
    blanks.push(<div key={i} className={styles.blankDay}></div>);
  }

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarHeader}>
        <span>일</span>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
      </div>
      <div className={styles.calendarBody}>
        {blanks}
        {days}
      </div>
    </div>
  );
};

export default Calendar;
