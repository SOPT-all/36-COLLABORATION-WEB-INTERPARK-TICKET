import { useEffect, useMemo, useState } from 'react';
import * as styles from './KeyWordSection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import type { BasicPerformance, CategoryBase } from '../../api/types';
import InfoCard from '@/pages/Main/components/InfoCard/InfoCard';

interface KeyWordSectionProps {
  category: CategoryBase<BasicPerformance>;
}

function KeyWordSection({ category }: KeyWordSectionProps) {
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
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{category?.category}</header>
      <div className={styles.keywordWrapper}>
        <CategoryTab
          keywords={keywords}
          selected={selected}
          onSelect={handleSelect}
          variant="wrap"
        />
      </div>
      <div className={styles.cardWrapper}>
        {performances.map((AboutKeyword) => (
          <div key={AboutKeyword.id}>
            <InfoCard
              isrank={false}
              image={AboutKeyword.imageUrl}
              title={AboutKeyword.title}
              location={AboutKeyword.location ?? ''}
              startDate={AboutKeyword.startDate ?? ''}
              endDate={AboutKeyword.endDate ?? ''}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyWordSection;
