import HomeAddButton from "@/shared/components/HomeAddButton/HomeAddButton";

const ComponentTest = () => {

  return (
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          gap: '0.6rem',
        }}
      >
        <HomeAddButton keyword="할인티켓" />

      </div>
  );
};

export default ComponentTest;
