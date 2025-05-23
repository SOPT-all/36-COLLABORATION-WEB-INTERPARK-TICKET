import { useEffect, useMemo, useState } from 'react';
import * as styles from './NolPlaySection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import type { CategoryBase, BasicPerformance } from '../../api/types';
import left_arrow from '@/shared/assets/icon/ic_arrow_left_gray70_16.svg';
import right_arrow from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';

const CARD_WIDTH_REM = 28.7;
interface NolPlaySectionProps {
  category: CategoryBase<BasicPerformance>;
}

const NolPlaySection = ({ category }: NolPlaySectionProps) => {
  const performances = category?.getHomeResponseList ?? [];
  const [selected, setSelected] = useState<string>('');

  const keywords = useMemo(() => {
    return category?.keywordList ?? [];
  }, [category]);

  const [currentPage, setCurrentPage] = useState(0);
  const totalCards = performances.length;
  const maxPage = Math.max(0, Math.ceil(totalCards) - 1);

  const getOffset = (page: number): number => {
    return CARD_WIDTH_REM * page;
  };

  const handlePage = (dir: 'prev' | 'next') => {
    setCurrentPage((prev) =>
      dir === 'prev' ? Math.max(prev - 1, 0) : Math.min(prev + 1, maxPage)
    );
  };

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
        />
      </div>

      <div className={styles.cardWrapper}>
        <div
          className={styles.cardTrack}
          style={{
            transform: `translateX(-${getOffset(currentPage)}rem)`,
          }}
        >
          {performances.map((NOL) => (
            <div className={styles.cardContainer} key={NOL.id}>
              <img src={NOL.imageUrl} className={styles.Img} />
              <div className={styles.bottomCard}>
                <img src={NOL.imageUrl} className={styles.smallImg} />
                <div className={styles.textWrapper}>
                  <p className={styles.bottomCardText}>{NOL.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pageGroup}>
        <button
          className={styles.button}
          onClick={() => handlePage('prev')}
          disabled={currentPage === 0}
        >
          <img src={left_arrow} />
        </button>

        <p className={styles.number}>
          <span className={styles.numberText({ kind: 'current' })}>
            {currentPage + 1}
          </span>
          <span className={styles.numberText({ kind: 'divider' })}> / </span>
          <span className={styles.numberText({ kind: 'total' })}>
            {maxPage + 1}
          </span>
        </p>

        <button
          className={styles.button}
          onClick={() => handlePage('next')}
          disabled={currentPage === maxPage}
        >
          <img src={right_arrow} />
        </button>
      </div>
    </section>
  );
};

export default NolPlaySection;
