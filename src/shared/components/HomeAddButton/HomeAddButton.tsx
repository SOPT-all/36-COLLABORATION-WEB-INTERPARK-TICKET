import * as styles from './HomeAddButton.css';
import ArrowRight from "@assets/icon/ic_arrow_right_gray70_16.svg";

type ViewMoreProps = {
  keyword: string; // 뮤지컬 랭킹, 할인티켓, 오픈 예정 공연
};


const HomeAddButton = ({ keyword }: ViewMoreProps) => {

  return (
    <div>
      <button className={styles.button}>
          <p className={styles.text}>{keyword} 전체보기</p>
          <img src={ArrowRight} alt='ARIcon' className={styles.ARIcon} />
      </button>
    </div>
  )
};

export default HomeAddButton;
