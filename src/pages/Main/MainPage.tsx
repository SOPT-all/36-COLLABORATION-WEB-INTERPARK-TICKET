import { h1 } from './MainPage.css';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
function MainPage() {
  return (
    <div>
      <InfoCard
        id={1}
        isrank={true}
        rank={1}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4sdWbbZKwVXt__VVrxg57ZxOXM_aVpKnsg&s"
        title="2023 K-POP WORLD FESTIVAL IN BUSAN"
        location="Busan Asiad Main Stadium"
        date="2023.10.14(토) 18:00"
      />
      <h1 className={h1}>인터파크 티켓</h1>
    </div>
  );
}

export default MainPage;
