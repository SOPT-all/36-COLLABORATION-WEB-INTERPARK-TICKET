import { useState } from 'react';
import * as styles from './SelectDatePage.css';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';
import CardContentInfo from '@/shared/components/CardContentInfo/CardContentInfo';
import Calendar from '@/shared/components/Calendar/Calendar';
import RightIcon from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';
import TimerIcon from '@/shared/assets/icon/ic_ wait_blue70_36.svg';
import DateReservationCard from '@/shared/components/DateReservationCard/DateReservationCard';

function SelectDatePage() {
  const [isSelected, setIsSelected] = useState(false);
  const performanceData = {
    performanceTitle: '연극제목',
    performanceLocation: '공연장 위치',
    performanceImage:
      'https://tkfile.yes24.com/upload2/PerfBlog/202502/20250206/20250206-52586.jpg',
    performanceGenre: '장르',
    runningTime: '시간',
    ageLimit: 18,
  };
  const performanceTime = '2025년 4월 1일';
  const authors = '작가 이름';

  // 좌석 타입 정보
  const seatTypes = [
    { grade: 'VIP', seatCount: 50, price: 100000 },
    { grade: '일반', seatCount: 100, price: 50000 },
    { grade: '학생', seatCount: 150, price: 20000 },
  ];
  const handleSelectDate = (selected: boolean) => {
    setIsSelected(selected); // true로 바뀌는거면! 그러면 이제 예매박스 띄우기
  };

  return (
    <div>
      <SeatHeader title={''} />
      <main className={styles.containerWrapper}>
        <CardContentInfo data={performanceData} />
        <section className={styles.mainSection}>
          <div className={styles.monthArea}>
            <span className={styles.monthTxt}>2025.04</span>
            <img className={styles.monthIcon} src={RightIcon} alt={'다음 달'} />
          </div>
          <Calendar onDateSelect={handleSelectDate} />
        </section>
        <div className={styles.infoArea}>
          {!isSelected && (
            <div className={styles.infoDefault}>공연 날짜를 선택해주세요</div>
          )}
          {isSelected && (
            <div className={styles.showArea}>
              <DateReservationCard
                performanceTime={performanceTime}
                authors={authors}
                seatTypes={seatTypes}
              />
              <div className={styles.waitNoti}>
                <img
                  className={styles.waitIcon}
                  src={TimerIcon}
                  alt="타이머아이콘"
                />
                <span className={styles.waitTxt}>
                  예매대기 신청은 관람일 3일 전까지만 가능해요!
                </span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default SelectDatePage;
