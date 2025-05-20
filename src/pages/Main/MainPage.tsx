import * as styles from './MainPage.css';
import MdPick from './components/MdPick/MdPick';
import GenreSection from './components/Genre/Genre';
import KeyWordSection from './components/KeyWord/KeyWordSection';
import {
  keywordDummyData,
  NOLdummyData,
  plannedDummyData,
} from './mockData/mockData';
import NolPlaySection from './components/NOL PLAY/NolPlaySection';
import PlannedSection from './components/Planned/PlannedSection';
import Footer from '@/shared/components/Footer/Footer';
import HomeHeader from '@/shared/components/Header/HomeHeader/HomeHeader';
import MainBanner from '@/shared/assets/icon/home_card_banner.svg';
import { CATEGORY_ITEMS } from '@/shared/constants/Categories';
import { HomeDivider } from '@/shared/components/Rectangle/Rectangle';
import adBanner from '@/shared/assets/icon/ad_banner.svg';
import bar_navigation from '@/shared/assets/icon/bar_navigation.svg';
import DiscountSection from './components/Discount/Discout';

function MainPage() {
  return (
    <div>
      <HomeHeader />
      <main className={styles.containerWrapper}>
        <img src={MainBanner} className={styles.mainBanner} />
        <div className={styles.categoryGrid}>
          {CATEGORY_ITEMS.map(({ id, name, icon: Icon }) => (
            <div key={id} className={styles.categoryItem}>
              <img src={Icon} className={styles.icon} />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <HomeDivider />

        {/* 장르별 랭킹 */}
        <GenreSection />
        <HomeDivider />

        {/* 할인 중 공연 */}
        <DiscountSection />
        <HomeDivider />

        {/* MD PICK */}
        <MdPick />
        <HomeDivider />

        {/* 이런 키워드 어때요? */}
        <KeyWordSection data={keywordDummyData} />
        <HomeDivider />

        {/* NOL PLAY */}
        <NolPlaySection data={NOLdummyData} />
        <img src={adBanner} />

        {/* 곧 오픈 공연 */}
        <PlannedSection data={plannedDummyData} />
      </main>

      <footer className={styles.footerWrapper}>
        <Footer />
        <img src={bar_navigation} />
      </footer>
    </div>
  );
}

export default MainPage;
