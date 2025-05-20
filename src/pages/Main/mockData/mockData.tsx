import { type NolPlayData } from '../components/NOL PLAY/NolPlaySection';
import type { KeywordData } from '../components/KeyWord/KeyWordSection';
import type { PlannedData } from '../components/Planned/PlannedSection';

export const NOLdummyData: NolPlayData = {
  category: 'NOL PLAY',
  keywordList: [
    '추천영상',
    '뮤지컬',
    '콘서트',
    '스포츠',
    '전시/행사',
    '클래식',
  ],
  performanceList: [
    {
      id: 501,
      title:
        "[NOL 티켓 월요라이즈 S4] Ep.6 뮤지컬 ‘하트셉수트' - 신의정,전신의정,전신의정,전신의정,전",
      imageUrl: 'https://example.com/images/little_women.png',
    },
    {
      id: 502,
      title: "[NOL 티켓 월요라이즈 S4] Ep.6 뮤지컬 ‘하트셉수트' - 신의정,전...",
      imageUrl: 'https://example.com/images/wicked.png',
    },
    {
      id: 503,
      title: "[NOL 티켓 월요라이즈 S4] Ep.6 뮤지컬 ‘하트셉수트' - 신의정,전...",
      imageUrl: 'https://example.com/images/wicked.png',
    },
  ],
};

export const keywordDummyData: KeywordData = {
  category: '이런 키워드는 어때요?',
  keywordList: ['👍🏻재관람률높은', '🧸아이와함께', '🤡대학로 연극 추천'],
  getHomeResponseList: [
    {
      id: 6,
      title: '히든 콘서트',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      location: 'YES24 라이브홀',
      startDate: '2025-07-01',
      endDate: '07-01',
    },
    {
      id: 7,
      title: '히든 콘서트',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      location: 'YES24 라이브홀',
      startDate: '2025-07-01',
      endDate: '07-01',
    },
    {
      id: 8,
      title: '히든 콘서트',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      location: 'YES24 라이브홀',
      startDate: '2025-07-01',
      endDate: '07-01',
    },
  ],
};

export const plannedDummyData: PlannedData = {
  category: '곧 오픈하는 공연',
  getHomeResponseList: [
    {
      id: 9,
      title: '연극<카포네 트릴로지>',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      startDate: '2025.06.01',
      description: '공연 연장 및 마지막 티켓 오픈',
      tagList: ['HOT', '단독판매'],
    },
    {
      id: 10,
      title:
        '[Play & stay] 2025 Weverse Con dkdkdkdkdkdkdkdkkdsasadasdadadasdsk',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      startDate: '2025.08.01',
      description: '일반 예매',
      tagList: ['HOT', '단독판매'],
    },
    {
      id: 11,
      title:
        '[Play & stay] 2025 Weverse Con dkdkdkdkdkdkdkdkkdsasadasdadadasdsk',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      startDate: '2025.08.01',
      description: '일반 예매',
      tagList: ['HOT', '단독판매'],
    },
    {
      id: 12,
      title: '[Play & stay] 2025...',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      startDate: '2025.08.01',
      description: '일반 예매',
      tagList: ['HOT', '단독판매'],
    },
    {
      id: 13,
      title: '[Play & stay] 2025...',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      startDate: '2025.08.01',
      description: '일반 예매',
      tagList: ['HOT', '단독판매'],
    },
    {
      id: 14,
      title: '[Play & stay] 2025...',
      imageUrl:
        'https://github.com/user-attachments/assets/1941e016-153e-44ef-9383-b44996094ef8',
      startDate: '2025.08.01',
      description: '일반 예매',
      tagList: ['HOT', '단독판매'],
    },
  ],
};
