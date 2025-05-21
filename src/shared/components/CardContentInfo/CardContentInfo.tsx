import * as styles from './CardContentInfo.css';
import ic_circle_gray80_12 from '@/shared/assets/icon/ic_ circle_gray80_12.svg';

// 임시 데이터를 위한 타입 입니다 !
interface PerformanceInfoProps {
  performanceTitle: string;
  performanceLocation: string;
  performanceImage: string;
  performanceGenre: string;
  runningTime: string;
  ageLimit: number;
}

interface Props {
  data: PerformanceInfoProps | null;
}

const CardContentInfo = ({ data }: Props) => {
  if (!data) {
    return <div>공연 정보가 없습니다.</div>;
  }
  const {
    performanceTitle,
    performanceLocation,
    performanceImage,
    performanceGenre,
    runningTime,
    ageLimit,
  } = data;

  return (
    <div className={styles.cardContentInfo}>
      <img
        className={styles.performanceImg}
        src={`https://www.sopt-interpark.shop${performanceImage}`}
        alt={performanceTitle}
      />

      <div className={styles.performanceInfoWrapper}>
        {/* 연극 제목  */}
        <h3 className={styles.performanceTitle}>{performanceTitle}</h3>

        <div className={styles.performaceInfo}>
          {/* 공연장 위치  */}
          <p className={styles.performanceLocationText}>
            {performanceLocation}
          </p>

          {/* 공연 정보  */}
          <p className={styles.performanceInfoText}>
            {/* 공연 장르  */}
            {performanceGenre}
            <img src={ic_circle_gray80_12} alt="구분점" />
            {/* 공연 시간  */}
            {runningTime}
            <img src={ic_circle_gray80_12} alt="구분점" />
            {/* 공연 연령 제한  */}만 {ageLimit}세 이상
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContentInfo;
