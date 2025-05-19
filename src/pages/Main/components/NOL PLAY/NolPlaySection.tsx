import { useState } from 'react';
import * as styles from './NolPlaySection.css';
import { sectionHeader } from '../../MainPage.css';
import CategoryTab from '../CategoryTab/CategoryTab';
import nolplay_first from '@/shared/assets/icon/nolplay_first.svg';
import nolplay_video_first from '@/shared/assets/icon/nolplay_video_first.svg';

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

const NolPlaySection = ({ data }: Props) => {
  const [selectedKeyword, setSelectedKeyword] = useState(data.keywordList[0]);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>NOL PLAY</header>
      <div className={styles.keywordWrapper}>
        <CategoryTab
          keywords={data.keywordList}
          selected={selectedKeyword}
          onSelect={setSelectedKeyword}
        />
      </div>
      <div className={styles.cardWrapper}>
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
    </section>
  );
};

export default NolPlaySection;
