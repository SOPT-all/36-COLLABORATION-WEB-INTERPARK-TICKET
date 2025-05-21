import * as styles from './TicketPriceInfo.css';
import InfoRowLabel from '../InfoRowTitle/InfoRowTitle';
import VectorDivider from '../VectorDivider/VectorDivider';

export default function TicketPriceInfo() {
  return (
    <div className={styles.ticketPriceWrapper}>
      <div className={styles.titleWrapper}>
      <InfoRowLabel text="티켓 가격 정보" />
      </div>
      <VectorDivider variant="gray90" />
    </div>
  );
}
