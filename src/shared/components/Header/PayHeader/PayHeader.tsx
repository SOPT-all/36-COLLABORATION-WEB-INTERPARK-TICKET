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
  let stepIcon;
  switch (step) {
    case 1:
      stepIcon = Step1Icon;
      break;
    case 2:
      stepIcon = Step2Icon;
      break;
    case 3:
      stepIcon = Step3Icon;
      break;
  }

  return (
    <div className={styles.HeaderWrapper}>
      <div onClick={onBackClick}>
        <img src={BackIcon} alt="뒤로가기" />
      </div>
      <div>
        <img src={stepIcon} alt="결제 헤더 step" />
      </div>
      <div onClick={onCloseClick}>
        <img src={CloseIcon} alt="닫기" />
      </div>
    </div>
  );
};

export default PayHeader;
