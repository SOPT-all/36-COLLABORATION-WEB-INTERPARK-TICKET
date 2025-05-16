import * as styles from './Footer.css';
import icArrowDown from '@/shared/assets/icon/ic_arrow_down_gray60_12.svg';
import icBrand from '@/shared/assets/icon/ic_card_brand.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.policyWrapper}>
        <div className={styles.line}>
          <span>이용약관</span>
          <span className={styles.seperator} />
          <span>위치기반서비스 이용약관</span>
          <span className={styles.seperator} />
          <span className={styles.strongText}>개인정보 처리방침</span>
        </div>

        <div className={styles.line}>
          <span>여행자보험 가입안내</span>
          <span className={styles.seperator} />
          <span>여행약관</span>
          <span className={styles.seperator} />
          <span>분쟁해결기준</span>
        </div>
      </div>

      <div className={styles.brandInfoWrapper}>
        <span className={styles.brandInfo}>
          (주)놀유니버스 사업자 정보
          <img src={icArrowDown} alt="사업자 정보 열기" />
        </span>
        <img src={icBrand} alt="브랜드 로고" />
      </div>
    </div>
  );
};

export default Footer;
