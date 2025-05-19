import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const cardWrapper = style({
  display: 'flex',
  width: LAYOUT.CONTAINER.FULL_WIDTH,
  height: LAYOUT.HEIGHT.LG,
  flexShrink: 0,
  background: vars.color.white,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${LAYOUT.PADDING.MD}`,
});

export const textWrapper = style({
  display: 'flex',
  width: '9.5rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: LAYOUT.GAP.XS,
  flexShrink: 0,
});

export const buttonWrapper = style({
  marginRight: '2px',
});

export const label = style({
  ...fontStyle('b15_re_12'),
  color: vars.color.gray70,
});

export const price = style({
  ...fontStyle('h5_sb_20'),
  color: vars.color.black,
});
