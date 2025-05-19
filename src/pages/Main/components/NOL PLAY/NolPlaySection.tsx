import { useState } from 'react';
import * as styles from './NolPlaySection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import nolplay_first from '@/shared/assets/icon/nolplay_first.svg';
import nolplay_video_first from '@/shared/assets/icon/nolplay_video_first.svg';
import left_arrow from '@/shared/assets/icon/ic_arrow_left_gray70_16.svg';
import right_arrow from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';

export type Performance = {
  id: number;
  title: string;
  imageUrl: string;
};

export type NolPlayData = {
  category: string;
  keywordList: string[];
  performanceList: Performance[];
};

interface Props {
  data: NolPlayData;
}

const CARD_WIDTH_REM = 28.7;

const NolPlaySection = ({ data }: Props) => {
  const [selectedKeyword, setSelectedKeyword] = useState(data.keywordList[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalCards = data.performanceList.length;
  const maxPage = Math.max(0, Math.ceil(totalCards) - 1);

  const getOffset = (page: number): number => {
    return CARD_WIDTH_REM * page;
  };

  const handlePage = (dir: 'prev' | 'next') => {
    setCurrentPage((prev) =>
      dir === 'prev' ? Math.max(prev - 1, 0) : Math.min(prev + 1, maxPage)
    );
  };

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{data.category}</header>
      <div className={styles.keywordWrapper}>
        <CategoryTab
          keywords={data.keywordList}
          selected={selectedKeyword}
          onSelect={setSelectedKeyword}
        />
      </div>

      <div className={styles.cardWrapper}>
        <div
          className={styles.cardTrack}
          style={{
            transform: `translateX(-${getOffset(currentPage)}rem)`,
          }}
        >
          {data.performanceList.map((item) => (
            <div className={styles.cardContainer} key={item.id}>
              <img src={nolplay_video_first} />
              <div className={styles.bottomCard}>
                <img src={nolplay_first} />
                <p className={styles.bottomCardText}>{item.title}</p>
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
