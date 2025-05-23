import * as styles from './PlannedSection.css';
import { sectionHeader } from '../../MainPage.css';
import type { CategoryBase, PlannedPerformance } from '../../api/types';
import Badge from '@/pages/Main/components/Planned/Badge/Badge';
import HomeAddButton from '@/pages/Main/components/HomeMoreButton/HomeMoreButton';

interface PlannedSectionProp {
  category: CategoryBase<PlannedPerformance>;
}

function PlannedSection({ category }: PlannedSectionProp) {
  const performances = category?.getHomeResponseList ?? [];

  return (
    <section className={styles.sectionWrapper}>
      <header className={sectionHeader}>{category?.category}</header>

      <div className={styles.cardWrapper}>
        {performances.map((planned) => (
          <div className={styles.cardContainer} key={planned.id}>
            <img src={planned.imageUrl} className={styles.img} />
            <div className={styles.textWrapper}>
              <p className={styles.dateText}>{planned.openDate}</p>
              <p className={styles.titleText}>{planned.title}</p>
              <p className={styles.descriptionText}>{planned.description}</p>
              <div className={styles.tagGroup}>
                {planned.tagList.map((tag) => (
                  <Badge key={tag} type={tag} />
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
