import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDateData } from './api/api';
import * as styles from './SelectDatePage.css';
import type { Performance, DatePageResponse, SeatGrades } from './api/types';
import { QUERY_KEY } from '@/shared/constants/queryKey';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';
import CardContentInfo from '@/shared/components/CardContentInfo/CardContentInfo';
import Calendar from '@/shared/components/Calendar/Calendar';
import RightIcon from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';
import TimerIcon from '@/shared/assets/icon/ic_ wait_blue70_36.svg';
import DateReservationCard from '@/shared/components/DateReservationCard/DateReservationCard';

function SelectDatePage() {
  const [isSelected, setIsSelected] = useState(false);
  const [performanceData, setPerformanceData] = useState<Performance | null>(
    null
  );
  const [seatTypes, setSeatTypes] = useState<SeatGrades | null>(null);
  const [authors, setAuthors] = useState('');
  const [time, setTime] = useState('');
  // API 연동
  const { data, isLoading, isError } = useQuery<DatePageResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getDateData,
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    if (data) {
      setPerformanceData(data.performance);
      setAuthors(data.performance.authors);
      setTime(data.performance.performanceTime);
      setSeatTypes(data.seatGrades);
    }
  }, [data]);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오지 못했어요.</div>;

  const handleSelectDate = (selected: boolean) => {
    setIsSelected(selected); // true로 바뀌는거면! 그러면 이제 예매박스 띄우기
  };

  return (
    <div>
      <SeatHeader title={''} />
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
