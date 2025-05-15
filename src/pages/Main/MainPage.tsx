import SeatBottomSheet from "@/shared/components/SeatBottomSheet/SeatBottomSheet";
import { h1 } from "./MainPage.css";

function MainPage() {
  return (
    <div>
      <h1 className={h1}>인터파크 티켓</h1>
      <SeatBottomSheet
        placeInfo="예스24아트원 2관"
        dateTime="2025.04.29 / 19:30"
        seatInfo="R석 1층 F열 17"
        price={66000}
      />
    </div>
  );
}

export default MainPage;
