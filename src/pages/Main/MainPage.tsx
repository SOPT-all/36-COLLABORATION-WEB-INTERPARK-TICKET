import { h1 } from './MainPage.css';
import Calendar from '@/shared/components/Calendar/Calendar';
function MainPage() {
  return (
    <div>
      <Calendar />
      <h1 className={h1}>인터파크 티켓</h1>
    </div>
  );
}

export default MainPage;
