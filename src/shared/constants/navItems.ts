import nav_home from '@/shared/assets/icon/nav_home.svg';
import nav_category from '@/shared/assets/icon/nav_category.svg';
import nav_search from '@/shared/assets/icon/nav_search.svg';
import nav_my from '@/shared/assets/icon/nav_my.svg';

export interface NavItem {
  id: string;
  name: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', name: '홈', icon: nav_home },
  { id: 'category', name: '카테고리', icon: nav_category },
  { id: 'search', name: '검색', icon: nav_search },
  { id: 'my', name: '마이', icon: nav_my },
];
