import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as styles from './NolPlaySection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import { getHomeData } from '../../api/api';
import type {
  HomeResponse,
  CategoryBase,
  BasicPerformance,
} from '../../api/types';
import nolplay_first from '@/shared/assets/icon/nolplay_first.svg';
import nolplay_video_first from '@/shared/assets/icon/nolplay_video_first.svg';
import left_arrow from '@/shared/assets/icon/ic_arrow_left_gray70_16.svg';
import right_arrow from '@/shared/assets/icon/ic_arrow_right_gray70_16.svg';
import { QUERY_KEY } from '@/shared/constants/queryKey';

const CARD_WIDTH_REM = 28.7;

const NolPlaySection = () => {
  const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const NolPlayCategory = data?.find(
    (category): category is CategoryBase<BasicPerformance> =>
      category.category === 'NOL PLAY'
  );

  const keywords = NolPlayCategory?.keywordList ?? [];
  const performances = NolPlayCategory?.getHomeResponseList ?? [];

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

  const [selected, setSelected] = useState<string>('');
  useEffect(() => {
    if (keywords.length > 0 && selected === '') {
      setSelected(keywords[0]);
    }
  }, [keywords, selected]);

  const handleSelect = (keyword: string) => {
    setSelected(keyword);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오지 못했어요.</div>;

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{NolPlayCategory?.category}</header>
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
              <img src={NOL.imageUrl} />
              <div className={styles.bottomCard}>
                <img src={NOL.imageUrl} className={styles.smallImg} />
                <p className={styles.bottomCardText}>{NOL.title}</p>
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
