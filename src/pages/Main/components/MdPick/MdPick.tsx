import { useEffect, useState } from 'react';
import * as styles from './MdPick.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import { QUERY_KEY } from '@/shared/constants/queryKey';
import { useQuery } from '@tanstack/react-query';
import { getHomeData } from '../../api/api';
import type { HomeResponse, CategoryBase, BasicPerformance } from '../../api/types';

const MdPick = () => {
    const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const genreRankingCategory = data?.find(
    (category): category is CategoryBase<BasicPerformance> =>
      category.category === 'MD PICK!'
  );

  const keywords = genreRankingCategory?.keywordList ?? [];
  const DiscountCategory = genreRankingCategory?.getHomeResponseList ?? [];
  
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
    <div className={styles.genreSection}>
      <h1 className={styles.genreSectionTitle}>{}</h1>
      <CategoryTab
        keywords={keywords}
        selected={selected}
        onSelect={handleSelect}
        variant="wrap"
      />
      <div className={styles.pad}>
        <div className={styles.scrollArea}>
          {/* {DiscountCategory.map((card, index) => (
            <InfoCard
              key={index}
              isrank={card.isrank}
              rank={card.rank}
              image={card.image}
              title={card.title}
              location={card.location}
              date={card.date}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MdPick;
