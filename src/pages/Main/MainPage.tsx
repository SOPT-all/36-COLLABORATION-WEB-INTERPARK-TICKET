import { h1 } from './MainPage.css';
import DateReservationCard from '@/shared/components/DateReservationCard/DateReservationCard';

const seatData = [
  { grade: 'R석', seatCount: 48, price: 66000 },
  { grade: 'S석', seatCount: 32, price: 55000 },
];

function MainPage() {
  return (
    <div>
      <h1 className={h1}>인터파크 티켓</h1>
      <DateReservationCard
        performanceTime="오후 7:30"
        authors="이형훈, 김이준, 홍금비, 박성현"
        seatTypes={seatData}
      />
    </div>
  );
}

export default MainPage;
