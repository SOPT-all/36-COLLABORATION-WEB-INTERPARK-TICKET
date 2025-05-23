import camping from '@/shared/assets/image/category_camping.png';
import classic from '@/shared/assets/image/category_classic.png';
import concert from '@/shared/assets/image/category_concert.png';
import display from '@/shared/assets/image/category_display.png';
import family from '@/shared/assets/image/category_family.png';
import musical from '@/shared/assets/image/category_musical.png';
import nolcard from '@/shared/assets/image/category_nolcard.png';
import sport from '@/shared/assets/image/category_sports.png';
import theater from '@/shared/assets/image/category_theater.png';
import toping from '@/shared/assets/image/category_topping.png';

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
