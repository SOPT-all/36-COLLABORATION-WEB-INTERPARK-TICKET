import { useEffect, useMemo, useState } from 'react';
import * as styles from './Genre.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import type { BasicPerformance, CategoryBase } from '../../api/types';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';
interface GenreSectionProps {
  category: CategoryBase<BasicPerformance>;
}

const GenreSection = ({ category }: GenreSectionProps) => {
  const performances = category.getHomeResponseList ?? [];
  const [selected, setSelected] = useState<string>('');

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
          <div className={styles.scrollArea}>
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
