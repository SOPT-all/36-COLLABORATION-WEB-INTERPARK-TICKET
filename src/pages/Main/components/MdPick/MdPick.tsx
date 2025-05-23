import { useEffect, useMemo, useState } from 'react';
import * as styles from './MdPick.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import type { CategoryBase, BasicPerformance } from '../../api/types';
import InfoCard from '@/pages/Main/components/InfoCard/InfoCard';

interface MdPickProps {
  category: CategoryBase<BasicPerformance>;
}

const MdPick = ({ category }: MdPickProps) => {
  const performances = category?.getHomeResponseList ?? [];
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
    <div className={styles.genreSection}>
      <h1 className={styles.genreSectionTitle}>{category?.category}</h1>
      <CategoryTab
        keywords={keywords}
        selected={selected}
        onSelect={handleSelect}
        variant="wrap"
      />
      <div className={styles.pad}>
        <div className={styles.scrollArea}>
          {performances.map((md) => (
            <InfoCard
              key={md.id}
              isrank={false}
              image={md.imageUrl}
              title={md.title}
              location={md.location ?? ''}
              startDate={md.startDate ?? ''}
              endDate={md.endDate ?? ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MdPick;
