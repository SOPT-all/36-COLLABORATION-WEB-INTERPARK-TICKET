import { useEffect, useMemo, useState, useRef } from 'react';
import * as styles from './Genre.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import { useHomeData } from '../../api/hooks';
import ImageSkeletonList from '../skeleton/ImageSkeletonList';
import type { BasicPerformance, CategoryBase } from '../../api/types';
import InfoCard from '@/pages/Main/components/InfoCard/InfoCard';
import HomeAddButton from '@/pages/Main/components/HomeMoreButton/HomeMoreButton';

interface GenreSectionProps {
  category: CategoryBase<BasicPerformance>;
}

const GenreSection = ({ category }: GenreSectionProps) => {
  const { isFetching } = useHomeData();
  const performances = category.getHomeResponseList ?? [];
  const [selected, setSelected] = useState<string>('');
  const scrollAreaRef = useRef<HTMLDivElement | null>(null); // 스크롤 영역을 참조할 ref

  const keywords = useMemo(() => {
    return category?.keywordList ?? [];
  }, [category]);

  useEffect(() => {
    if (keywords.length > 0 && selected === '') {
      setSelected(keywords[0]);
    }
  }, [keywords, selected]);

  const handleSelect = (keyword: string) => {
    setSelected(keyword);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollAreaRef.current) {
        const scrollArea = scrollAreaRef.current;
        const cardWidth = 14 * 10;
        const scrollPosition = scrollArea.scrollLeft;
        const scrollWidth = scrollArea.scrollWidth;
        const clientWidth = scrollArea.clientWidth;

        if (scrollPosition + clientWidth < scrollWidth) {
          scrollArea.scrollLeft += cardWidth;
        } else {
          scrollArea.scrollLeft = 0;
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [performances.length]);

  return (
    <div>
      <div className={styles.genreSection}>
        <h1 className={styles.genreSectionTitle}>{category.category}</h1>
        <div className={styles.padd}>
          <CategoryTab
            keywords={keywords}
            selected={selected}
            onSelect={handleSelect}
          />
          <div className={styles.scrollArea} ref={scrollAreaRef}>
            {isFetching && <ImageSkeletonList count={5} />}
            {performances.map((genre, idx) => (
              <InfoCard
                key={genre.id}
                isrank={true}
                rank={idx + 1}
                image={genre.imageUrl}
                title={genre.title}
                location={genre.location ?? ''}
                startDate={genre.startDate ?? ''}
                endDate={genre.endDate ?? ''}
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
