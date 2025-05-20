import * as styles from './DiscountCard.css';
import DiscountCard from './DiscoutCard';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';
import Rectangle95 from '@/shared/components/Rectangle/Rectangle';
const DiscountSection = () => {
  const discountCardsData = [
    {
      id: 1,
      title: 'Summer Sale',
      discount: 20,
      price: 10000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEFvOd7aYqqEMQ-bpfaCsVrHfArpyql2E2w&s',
      location: '서울',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      description: '여름 세일, 다양한 상품 20% 할인!',
    },
    {
      id: 2,
      title: 'Summer Sale',
      discount: 20,
      price: 10000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEFvOd7aYqqEMQ-bpfaCsVrHfArpyql2E2w&s',
      location: '서울',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      description: '여름 세일, 다양한 상품 20% 할인!',
    },
    {
      id: 3,
      title: 'Summer Sale',
      discount: 20,
      price: 10000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEFvOd7aYqqEMQ-bpfaCsVrHfArpyql2E2w&s',
      location: '서울',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      description: '여름 세일, 다양한 상품 20% 할인!',
    },
    {
      id: 4,
      title: 'Summer Sale',
      discount: 20,
      price: 10000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEFvOd7aYqqEMQ-bpfaCsVrHfArpyql2E2w&s',
      location: '서울',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      description: '여름 세일, 다양한 상품 20% 할인!',
    },
    {
      id: 5,
      title: 'Summer Sale',
      discount: 20,
      price: 10000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEFvOd7aYqqEMQ-bpfaCsVrHfArpyql2E2w&s',
      location: '서울',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      description: '여름 세일, 다양한 상품 20% 할인!',
    },
    {
      id: 6,
      title: 'Summer Sale',
      discount: 20,
      price: 10000,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEFvOd7aYqqEMQ-bpfaCsVrHfArpyql2E2w&s',
      location: '서울',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
      description: '여름 세일, 다양한 상품 20% 할인!',
    },
  ];

  return (
    <div>
      <Rectangle95 />
      <div className={styles.discountSection}>
        <h1 className={styles.sectionTitle}>할인 중인 공연은 어때요?</h1>

        <div className={styles.scrollArea}>
          {discountCardsData.map((discountData, index) => (
            <DiscountCard
              key={index}
              id={discountData.id}
              title={discountData.title}
              discount={discountData.discount}
              price={discountData.price}
              imageUrl={discountData.imageUrl}
              location={discountData.location}
              startDate={discountData.startDate}
              endDate={discountData.endDate}
              description={discountData.description}
            />
          ))}
        </div>
        <HomeAddButton keyword="할인티켓" />
      </div>
    </div>
  );
};

export default DiscountSection;
