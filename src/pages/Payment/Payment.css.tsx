import { style } from '@vanilla-extract/css';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const page = style({
  padding: `${LAYOUT.PADDING.LG} ${LAYOUT.PADDING.MD} ${LAYOUT.PADDING.LG}`,
  display: 'flex',
  flexDirection: 'column',
  gap: LAYOUT.GAP.XL,
});

export const mainContent = style({
  marginTop: '5.6rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const buttonContainer = style({
  marginTop: '6rem',
  paddingBottom: LAYOUT.PADDING.XL,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
