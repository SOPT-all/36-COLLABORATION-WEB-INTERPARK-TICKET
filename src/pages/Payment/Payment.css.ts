import { style } from '@vanilla-extract/css';
import { LAYOUT } from '@/shared/styles/layoutConstants';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

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

export const checkboxContainer = style({
  paddingLeft: LAYOUT.PADDING.MD_PLUS,
  paddingTop: LAYOUT.PADDING.XL,
});

export const centerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const bankInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const receiptContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '0 2rem',
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '0 2rem',
});

export const submitButtonContainer = style({
  marginTop: '6rem',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const methodContainer = style({
  width: '34.5rem',
});

export const errorMessage = style({
  color: vars.color.red10,
  textAlign: 'center',
  marginTop: '1rem',
  ...fontStyle('b10_re_14'),
});

export const methodTitleSpacing = style({
  marginBottom: '1.3rem',
});
