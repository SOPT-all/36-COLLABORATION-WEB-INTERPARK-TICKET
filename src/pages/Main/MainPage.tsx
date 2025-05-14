import { h1 } from './MainPage.css';
import HomeHeader from '@/shared/components/Header/HomeHeader/HomeHeader';
function MainPage() {
  return (
    <div>
      <HomeHeader />
      <h1 className={h1}>인터파크 티켓</h1>
    </div>
  );
}

export default MainPage;
