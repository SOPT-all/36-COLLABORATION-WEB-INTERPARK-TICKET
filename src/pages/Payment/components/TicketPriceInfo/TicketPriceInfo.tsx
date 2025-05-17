// TicketPriceInfo.tsx
import * as styles from './TicketPriceInfo.css';
import InfoRowLabel from '../InfoRowTitle/InfoRowTitle';
import VectorDivider from '../VectorDivider/VectorDivider';

export default function TicketPriceInfo() {
  return (
    <div className={styles.ticketPriceWrapper}>
      <InfoRowLabel text="티켓 가격 정보" />
      <VectorDivider variant="gray90" />
    </div>
  );
}
