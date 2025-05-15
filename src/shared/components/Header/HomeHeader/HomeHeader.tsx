import * as styles from './HomeHeader.css';
import SearchIcon from '@/shared/assets/icon/ic_header_search.svg';
import LogoImg from '@/shared/assets/image/img_header_logo.png';

const HomeHeader = () => {
  return (
    <header className={styles.HeaderWrapper}>
      <div>
        <img className={styles.logoImg} src={LogoImg} alt="로고" />
      </div>
      <nav className={styles.HeaderTap}>
        <div className={styles.HeaderTxt({ active: false })}>투어</div>
        <div className={styles.HeaderTxt({ active: true })}>티켓</div>
      </nav>
      <button>
        <img src={SearchIcon} alt="닫기" />
      </button>
    </header>
  );
};

export default HomeHeader;
