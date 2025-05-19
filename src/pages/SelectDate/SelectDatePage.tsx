import * as styles from './SelectDatePage.css';
import SeatHeader from '@/shared/components/Header/SeatHeader/SeatHeader';
import CardContentInfo from '@/shared/components/CardContentInfo/CardContentInfo';
import Calendar from '@/shared/components/Calendar/Calendar';
import RightIcon from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';
function SelectDatePage() {
  const performanceData = {
    performanceTitle: '연극제목',
    performanceLocation: '공연장 위치',
    performanceImage:
      'https://tkfile.yes24.com/upload2/PerfBlog/202502/20250206/20250206-52586.jpg',
    performanceGenre: '장르',
    runningTime: '시간',
    ageLimit: 18,
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
          <Calendar />
        </section>
        <div className={styles.infoArea}>
          <div className={styles.infoDefault}>공연 날짜를 선택해주세요</div>
        </div>
      </main>
    </div>
  );
}

export default SelectDatePage;
