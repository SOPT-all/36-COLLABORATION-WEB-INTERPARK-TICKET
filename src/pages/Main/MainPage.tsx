import * as styles from './MainPage.css';
import GenreSection from './components/Genre/Genre';
import HomeHeader from '@/shared/components/Header/HomeHeader/HomeHeader';
import MainBanner from '@/shared/assets/icon/home_card_banner.svg';
import { CATEGORY_ITEMS } from '@/shared/constants/Categories';

function MainPage() {
  return (
    <div>
      <HomeHeader />
      <main className={styles.containerWrapper}>
        <img src={MainBanner} className={styles.mainBanner} />

        <div className={styles.categoryGrid}>
          {CATEGORY_ITEMS.map(({ id, name, icon: Icon }) => (
            <div key={id} className={styles.categoryItem}>
              <img src={Icon} />
              <span>{name}</span>
            </div>
          ))}
        </div>

        <GenreSection />
      </main>
    </div>
  );
}

export default MainPage;
