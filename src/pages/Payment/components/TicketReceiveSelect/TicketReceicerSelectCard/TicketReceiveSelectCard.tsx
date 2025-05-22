import * as styles from './TicketReceiveSelectCard.css';
import SelectOptionButton from '../SelectOptionButton/SelectOptionButton';
import InfoRowLabel from '@/pages/Payment/components/InfoRowTitle/InfoRowTitle';

interface TicketReceiveSelectCardProps {
  selected: '현장수령' | '배송';
  onSelect: (method: '현장수령' | '배송') => void;
}

export default function TicketReceiveSelectCard({
  selected,
  onSelect,
}: TicketReceiveSelectCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <InfoRowLabel text="티켓 수령 방법 선택" />
      </div>

      <div className={styles.ticketReceiveCardWrapper}>
        <div className={styles.optionRow}>
          <SelectOptionButton
            label="현장수령"
            selected={selected === '현장수령'}
            onClick={() => onSelect('현장수령')}
          />
          <SelectOptionButton
            label="배송(3220)"
            selected={selected === '배송'}
            onClick={() => onSelect('배송')}
          />
        </div>

        {selected === '현장수령' && (
          <p className={styles.description}>
            티켓현장수령은 예매번호를 통해 관람 당일 티켓 수령 후 입장합니다.
          </p>
        )}
      </div>
    </div>
  );
}
