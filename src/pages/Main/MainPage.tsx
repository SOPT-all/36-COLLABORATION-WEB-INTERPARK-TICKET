import { h1 } from './MainPage.css';
import PopUp from '@/shared/components/Popup/Popup';
function MainPage() {
  return (
    <div>
      <PopUp />
      <h1 className={h1}>인터파크 티켓</h1>
    </div>
  );
}

export default MainPage;
