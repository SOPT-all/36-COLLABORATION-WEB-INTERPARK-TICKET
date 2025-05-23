import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDateData } from './api/hooks';
import * as styles from './SelectDatePage.css';
import { formatTime } from './utils/utils';
import type { Performance, SeatGrades } from './api/types';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';
import CardContentInfo from '@/pages/SelectDate/components/CardContentInfo/CardContentInfo';
import Calendar from '@/pages/SelectDate/components/Calendar/Calendar';
import RightIcon from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';
import TimerIcon from '@/shared/assets/icon/ic_ wait_blue70_36.svg';
import DateReservationCard from '@/pages/SelectDate/components/DateReservationCard/DateReservationCard';
import Spinner from '@/shared/components/Spinner/Spinner';
function SelectDatePage() {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [performanceData, setPerformanceData] = useState<Performance | null>(
    null
  );
  const [seatTypes, setSeatTypes] = useState<SeatGrades[] | null>(null);
  const [authors, setAuthors] = useState('');
  const [time, setTime] = useState('');
  // API 연동
  const { data, isLoading, isError } = useDateData();

  useEffect(() => {
    if (data) {
      setPerformanceData(data.performance);
      setAuthors(data.performance.authors);
      // 시간은 오전오후 구분해줘야해서 포맷팅하깅!
      const formattedTime = formatTime(data.performance.performanceTime);
      setTime(formattedTime);
      setSeatTypes(data.seatGrades);
    }
  }, [data]);

  if (isLoading) return <Spinner />;
  if (isError) return <div>데이터를 불러오지 못했어요.</div>;

  const handleSelectDate = (selected: boolean) => {
    setIsSelected(selected); // true로 바뀌는거면! 그러면 이제 예매박스 띄우기
  };
  const handleBackClick = () => {
    navigate('/');
  };
  return (
    <div>
      <SeatHeader title={''} onBackClick={handleBackClick} />
      <main className={styles.containerWrapper}>
        <CardContentInfo data={performanceData || null} />
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
                performanceTime={time}
                authors={authors}
                seatTypes={seatTypes || null}
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
