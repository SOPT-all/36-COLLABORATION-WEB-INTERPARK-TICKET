import * as styles from './MainPage.css';
import MdPick from './components/MdPick/MdPick';
import GenreSection from './components/Genre/Genre';
import KeyWordSection from './components/KeyWord/KeyWordSection';
import NolPlaySection from './components/NOL PLAY/NolPlaySection';
import PlannedSection from './components/Planned/PlannedSection';
import DiscountSection from './components/Discount/Discout';
import { useHomeData } from './api/hooks';
import {
  type BaseHome,
  type BasicPerformance,
  type Category,
  type CategoryBase,
  type DiscountPerformance,
  type PlannedPerformance,
} from './api/types';
import Footer from '@/shared/components/Footer/Footer';
import HomeHeader from '@/shared/components/Header/HomeHeader/HomeHeader';
import MainBanner from '@/shared/assets/icon/home_card_banner.svg';
import { CATEGORY_ITEMS } from '@/shared/constants/Categories';
import { HomeDivider } from '@/shared/components/Rectangle/Rectangle';
import adBanner from '@/shared/assets/icon/ad_banner.svg';
import Spinner from '@/shared/components/Spinner/Spinner';
import NavBar from '@/pages/Main/components/NavBar/NavBar';

function MainPage() {
  const { data, isLoading, isError } = useHomeData();

  if (isLoading) return <Spinner />;
  if (isError || !data) return <div>에러 발생!</div>;

  function findCategory<T extends BaseHome>(
    data: Category[],
    categoryName: string
  ): CategoryBase<T> | undefined {
    return data.find(
      (category): category is CategoryBase<T> =>
        category.category === categoryName
    );
  }

  const GenreCategory = findCategory<BasicPerformance>(data, '장르별 랭킹');
  const disCountCategory = findCategory<DiscountPerformance>(
    data,
    '할인 중인 공연은 어때요?'
  );
  const MDpickCategory = findCategory<BasicPerformance>(data, 'MD PICK!');
  const AboutKewordCategory = findCategory<BasicPerformance>(
    data,
    '이런 키워드는 어때요?'
  );
  const NolPlayCategory = findCategory<BasicPerformance>(data, 'NOL PLAY');
  const plannedCategory = findCategory<PlannedPerformance>(
    data,
    '곧 오픈하는 공연'
  );

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

        {GenreCategory && <GenreSection category={GenreCategory} />}
        <HomeDivider />

        {disCountCategory && <DiscountSection category={disCountCategory} />}
        <HomeDivider />

        {MDpickCategory && <MdPick category={MDpickCategory} />}
        <HomeDivider />

        {AboutKewordCategory && (
          <KeyWordSection category={AboutKewordCategory} />
        )}
        <HomeDivider />

        {NolPlayCategory && <NolPlaySection category={NolPlayCategory} />}
        <img src={adBanner} />

        {plannedCategory && <PlannedSection category={plannedCategory} />}
      </main>

      <footer className={styles.footerWrapper}>
        <Footer />
      </footer>

      <NavBar />
    </div>
  );
}

export default MainPage;
