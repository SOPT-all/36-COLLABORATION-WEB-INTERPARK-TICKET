import { useState } from 'react';
import * as styles from './Genre.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';
import Rectangle95 from '@/shared/components/Rectangle/Rectangle';
const GenreSection = () => {
  const keywords = ['공연', '영화', '전시', '뮤지컬'];

  const [selected, setSelected] = useState<string>('');

  const handleSelect = (keyword: string) => {
    setSelected(keyword);
  };

  const infoCardsData = [
    {
      isrank: true,
      rank: 1,
      image:
        'https://media.bunjang.co.kr/product/323773992_1_1743659275_w%7Bres%7D.jpg',
      title: '뮤지컬 <팬텀>',
      location: '세종문화회관',
      date: '2025.07.25',
    },
    {
      isrank: true,
      rank: 2,
      image:
        'https://media.bunjang.co.kr/product/323773992_1_1743659275_w%7Bres%7D.jpg',
      title: '뮤지컬 <팬텀>',
      location: '세종문화회관',
      date: '2025.07.25',
    },
    {
      isrank: true,
      rank: 3,
      image:
        'https://media.bunjang.co.kr/product/323773992_1_1743659275_w%7Bres%7D.jpg',
      title: '뮤지컬 <팬텀>',
      location: '세종문화회관',
      date: '2025.07.25',
    },
  ];

  return (
    <div>
      <Rectangle95 />
      <div className={styles.genreSection}>
        <h1 className={styles.genreSectionTitle}>장르별 랭킹</h1>
        <div className={styles.padd}>
          {' '}
          <CategoryTab
            keywords={keywords}
            selected={selected}
            onSelect={handleSelect}
          />
          <div className={styles.scrollArea}>
            {infoCardsData.map((card, index) => (
              <InfoCard
                key={index} // 고유한 key값 제공
                isrank={card.isrank}
                rank={card.rank}
                image={card.image}
                title={card.title}
                location={card.location}
                date={card.date}
              />
            ))}
          </div>
        </div>

        <HomeAddButton keyword="뮤지컬 랭킹" />
      </div>
    </div>
  );
};

export default GenreSection;
