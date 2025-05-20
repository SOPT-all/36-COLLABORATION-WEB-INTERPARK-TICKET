import { useState } from 'react';
import * as styles from './KeyWordSection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import InfoCard from '@/shared/components/main/Perform/InfoCard';
import keyword_sangsang from '@/shared/assets/icon/keyword_sangsang.svg';

export type getHomeResponse = {
  id: number;
  title: string;
  imageUrl: string;
  location: string;
  startDate: string;
  endDate: string;
};

export type KeywordData = {
  category: string;
  keywordList: string[];
  getHomeResponseList: getHomeResponse[];
};

interface Props {
  data: KeywordData;
}

function KeyWordSection({ data }: Props) {
  const [selectedKeyword, setSelectedKeyword] = useState(data.keywordList[0]);

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{data.category}</header>
      <div className={styles.keywordWrapper}>
        <CategoryTab
          keywords={data.keywordList}
          selected={selectedKeyword}
          onSelect={setSelectedKeyword}
          variant="wrap"
        />
      </div>
      <div className={styles.cardWrapper}>
        {data.getHomeResponseList.map((item) => (
          <div key={item.id}>
            <InfoCard
              isrank={false}
              rank={0}
              image={keyword_sangsang}
              title={item.title}
              location={item.location}
              date={`${item.startDate} ~ ${item.endDate}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyWordSection;
