import { h1 } from './MainPage.css';
import Header from '@/shared/components/Header/Header';

function MainPage() {
  return (
    <div>
      <Header title="연극프라이드" />
      <h1 className={h1}>인터파크 티켓</h1>
    </div>
  );
}

export default MainPage;
