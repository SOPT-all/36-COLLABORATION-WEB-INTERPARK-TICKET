import camping from '@/shared/assets/icon/category_camping.svg';
import classic from '@/shared/assets/icon/category_classic.svg';
import concert from '@/shared/assets/icon/category_concert.svg';
import display from '@/shared/assets/icon/category_display.svg';
import family from '@/shared/assets/icon/category_family.svg';
import musical from '@/shared/assets/icon/category_musical.svg';
import nolcard from '@/shared/assets/icon/category_nolcard.svg';
import sport from '@/shared/assets/icon/category_sport.svg';
import theater from '@/shared/assets/icon/category_theater.svg';
import toping from '@/shared/assets/icon/category_topping.svg';

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

export const CATEGORY_ITEMS: CategoryItem[] = [
  { id: 'musical', name: '뮤지컬', icon: musical },
  { id: 'concert', name: '콘서트', icon: concert },
  { id: 'sports', name: '스포츠', icon: sport },
  { id: 'classic', name: '클래식/무용', icon: classic },
  { id: 'theater', name: '연극', icon: theater },
  { id: 'leisure', name: '레저/캠핑', icon: camping },
  { id: 'kids', name: '아동/가족', icon: family },
  { id: 'exhibition', name: '전시/행사', icon: display },
  { id: 'toping', name: 'toping', icon: toping },
  { id: 'nolCard', name: 'NOLcard', icon: nolcard },
];
