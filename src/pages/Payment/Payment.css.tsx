import { style } from '@vanilla-extract/css';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const page = style({
  padding: `${LAYOUT.PADDING.LG} ${LAYOUT.PADDING.MD} ${LAYOUT.PADDING.LG}`,
  display: 'flex',
  flexDirection: 'column',
  gap: LAYOUT.GAP.XL,
});

export const mainContent = style({
  marginTop: '5.6rem', // PayHeader 높이만큼 마진 추가
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const buttonContainer = style({
  marginTop: '6rem', // 마지막 컴포넌트와 7.5rem 간격
  paddingBottom: LAYOUT.PADDING.XL, // 하단 여백 추가
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
