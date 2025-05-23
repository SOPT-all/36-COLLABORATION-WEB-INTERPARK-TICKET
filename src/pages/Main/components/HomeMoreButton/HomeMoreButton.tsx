import ArrowRight from '@assets/icon/ic_arrow_right_gray70_16.svg';
import * as styles from './HomeMoreButton.css';

type KeywordType = '뮤지컬 랭킹' | '할인티켓' | '오픈 예정 공연';
interface ViewMoreProps {
  keyword: KeywordType;
}

const HomeAddButton = ({ keyword }: ViewMoreProps) => {
  return (
    <button className={styles.button}>
      <p className={styles.text}>{keyword} 전체보기</p>
      <img src={ArrowRight} alt="ARIcon" className={styles.ARIcon} />
    </button>
  );
};

export default HomeAddButton;
