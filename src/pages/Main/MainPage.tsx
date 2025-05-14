import { h1 } from './MainPage.css';
import PayHeader from '@/shared/components/PayHeader/PayHeader';
function MainPage() {
  return (
    <div>
      <PayHeader step={1} />
      <h1 className={h1}>인터파크 티켓</h1>
    </div>
  );
}

export default MainPage;
