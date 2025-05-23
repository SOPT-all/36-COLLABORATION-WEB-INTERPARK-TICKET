import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css.ts';
import { fontStyle } from '@/shared/styles/fontStyle';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const listPoint = style({
  display: 'flex',
  width: '37.5rem',
  padding: `1.3rem ${LAYOUT.PADDING.MD_PLUS}`,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
});

export const listPointTitle = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.gray60,
});

export const listPointAction = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const listPointActionLabel = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.blue60,
});

export const listPointIcon = style({
  width: '1.8rem',
  height: '1.8rem',
  aspectRatio: '1 / 1',
});
