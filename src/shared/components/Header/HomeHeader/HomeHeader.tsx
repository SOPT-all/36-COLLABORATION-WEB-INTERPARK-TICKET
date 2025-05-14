import * as styles from './HomeHeader.css';
import SearchIcon from '@/shared/assets/icon/ic_header_search.svg';
import LogoImg from '@/shared/assets/image/img_header_logo.png';
interface Props extends React.HTMLProps<HTMLDivElement> {}

const HomeHeader = ({}: Props) => {
  return (
    <div className={styles.HeaderWrapper}>
      <div>
        <img className={styles.logoImg} src={LogoImg} alt="뒤로가기" />
      </div>
      <div className={styles.HeaderTap}>
        <div className={styles.HeaderTxt({ active: false })}>투어</div>
        <div className={styles.HeaderTxt({ active: true })}>티켓</div>
      </div>
      <div>
        <img src={SearchIcon} alt="닫기" />
      </div>
    </div>
  );
};

export default HomeHeader;
