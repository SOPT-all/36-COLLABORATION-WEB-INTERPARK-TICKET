import SeatBottomSheet from "@/shared/components/SeatBottomSheet/SeatBottomSheet";


const ComponentTest = () => {

  return (
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          gap: '0.6rem',
        }}
      >
        <SeatBottomSheet
          placeInfo="예스24아트원 2관"
          dateTime="2025.04.29 / 19:30"
          seatInfo=""
          price={66000}
      />

      </div>
  );
};

export default ComponentTest;
