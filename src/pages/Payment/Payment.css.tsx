import { style } from '@vanilla-extract/css';
import { LAYOUT } from '@/shared/styles/layoutConstants';
import { vars } from '@/shared/styles/tokens.css';

export const page = style({
  padding: `${LAYOUT.PADDING.LG} ${LAYOUT.PADDING.MD} ${LAYOUT.PADDING.LG}`,
  display: 'flex',
  flexDirection: 'column',
  gap: LAYOUT.GAP.SS,
  fontFamily: vars.font.family.pretendard,
});

export const mainContent = style({
  marginTop: LAYOUT.HEIGHT.SM,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: `calc(100vh - ${LAYOUT.HEIGHT.SM})`,
  position: 'relative',
  backgroundColor: vars.color.white,
});

export const buttonContainer = style({
  marginTop: LAYOUT.MARGIN.XL,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  position: 'sticky',
  bottom: 0,
  background: vars.color.white,
  padding: `${LAYOUT.PADDING.MD} 0`,
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: vars.color.white,
});
