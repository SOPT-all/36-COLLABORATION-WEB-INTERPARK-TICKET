import * as styles from './PayHeader.css';
import BackIcon from '@/shared/assets/icon/ic_back_white_24.svg';
import CloseIcon from '@/shared/assets/icon/ic_close_white_24.svg';
import Step1Icon from '@/shared/assets/icon/ic_header_1_step.svg';
import Step2Icon from '@/shared/assets/icon/ic_header_2_step.svg';
import Step3Icon from '@/shared/assets/icon/ic_header_3_step.svg';
interface Props extends React.HTMLProps<HTMLDivElement> {
  step: 1 | 2 | 3;
  onBackClick?: () => void;
  onCloseClick?: () => void;
}

const PayHeader = ({ step, onBackClick, onCloseClick }: Props) => {
  const stepIcons = {
    1: Step1Icon,
    2: Step2Icon,
    3: Step3Icon,
  } as const;
  const stepIcon = stepIcons[step];

  return (
    <header className={styles.HeaderWrapper}>
      <button onClick={onBackClick}>
        <img src={BackIcon} alt="뒤로가기" />
      </button>
      <div>
        <img src={stepIcon} alt="결제 헤더 step" />
      </div>
      <div onClick={onCloseClick}>
        <img src={CloseIcon} alt="닫기" />
      </div>
    </header>
  );
};

export default PayHeader;
