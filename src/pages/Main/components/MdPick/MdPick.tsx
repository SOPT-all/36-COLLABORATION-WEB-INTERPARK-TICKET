import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as styles from './MdPick.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import { getHomeData } from '../../api/api';
import type {
  HomeResponse,
  CategoryBase,
  BasicPerformance,
} from '../../api/types';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import { QUERY_KEY } from '@/shared/constants/queryKey';

const MdPick = () => {
  const { data, isLoading, isError } = useQuery<HomeResponse>({
    queryKey: [QUERY_KEY.HOME],
    queryFn: getHomeData,
  });

  const MDpickCategory = data?.find(
    (category): category is CategoryBase<BasicPerformance> =>
      category.category === 'MD PICK!'
  );

  const keywords = MDpickCategory?.keywordList ?? [];
  const performances = MDpickCategory?.getHomeResponseList ?? [];

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
      <h1 className={styles.genreSectionTitle}>{MDpickCategory?.category}</h1>
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
