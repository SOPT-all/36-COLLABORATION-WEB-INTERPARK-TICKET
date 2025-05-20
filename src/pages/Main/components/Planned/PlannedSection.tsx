import * as styles from './PlannedSection.css';
import { sectionHeader } from '../../MainPage.css';
import planned_expected_first from '@/shared/assets/icon/planned_expected_first.svg';
import Badge from '@/shared/components/Badge/Badge';
import HomeAddButton from '@/shared/components/HomeMoreButton/HomeMoreButton';

export type TagType = 'HOT' | '단독판매';

export type getHomeResponse = {
  id: number;
  title: string;
  imageUrl: string;
  startDate: string;
  description: string;
  tagList: TagType[];
};

export type PlannedData = {
  category: string;
  getHomeResponseList: getHomeResponse[];
};

interface Props {
  data: PlannedData;
}

function PlannedSection({ data }: Props) {
  const tagMap: Record<TagType, 'Hot' | '단독판매'> = {
    HOT: 'Hot',
    단독판매: '단독판매',
  };

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{data.category}</header>

      <div className={styles.cardWrapper}>
        {data.getHomeResponseList.map((item) => (
          <div className={styles.cardContainer}>
            <img src={planned_expected_first} />
            <div className={styles.textWrapper}>
              <p className={styles.dateText}>{item.startDate}</p>
              <p className={styles.titleText}>{item.title}</p>
              <p className={styles.descriptionText}>{item.description}</p>
              <div className={styles.tagGroup}>
                {item.tagList.map((tag) => (
                  <Badge key={tag} type={tagMap[tag]} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <HomeAddButton keyword={'오픈 예정 공연'} />
    </section>
  );
}

export default PlannedSection;
