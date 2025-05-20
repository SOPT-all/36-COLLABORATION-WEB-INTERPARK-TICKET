// 공통 부분, NOL PLAY
export interface BaseHome {
  id: number;
  title: string;
  imageUrl: string;
}

// 장르별 랭킹, MD PICK!, 이런 키워드는 어때요?
export interface BasicPerformance extends BaseHome {
  location?: string;
  startDate?: string;
  endDate?: string;
}

export interface DiscountPerformance extends BaseHome {
  location: string;
  endDate: string;
  discountRate: number;
  price: number;
  description: string;
  openDate: string;
}

export type tagType = 'HOT' | '단독판매';

// 곧 오픈하는 공연!
export interface PlannedPerformance extends BaseHome {
  startDate: string;
  endDate: string;
  description: string;
  tagList: tagType[];
}

export interface CategoryBase<T> {
  category: string;
  keywordList?: string[];
  getHomeResponseList: T[];
}

export type Category =
  | CategoryBase<BasicPerformance>
  | CategoryBase<DiscountPerformance>
  | CategoryBase<PlannedPerformance>;

export type HomeResponse = Category[];
