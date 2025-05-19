import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css.ts';
import { fontStyle } from '@/shared/styles/fontStyle';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px',
});

export const listInfo = style({
  display: 'flex',
  width: LAYOUT.CONTAINER.FULL_WIDTH,
  height: LAYOUT.HEIGHT.SM,
  padding: `${LAYOUT.PADDING.MD} ${LAYOUT.PADDING.MD}`,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
  background: vars.color.white,
});

export const listInfoText = style({
  ...fontStyle('b2_b_16'),
  color: vars.color.gray80,
});

export const listInfoIcon = style({
  display: 'flex',
  width: '2.4rem',
  height: '2.4rem',
  padding: '0.8rem 0.2rem 0.9rem 0.2rem',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  aspectRatio: '1 / 1',
});

export const textFieldsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: LAYOUT.GAP.SM,
  padding: LAYOUT.PADDING.MD,
  background: vars.color.white,
});

export const quantityCardsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: `${LAYOUT.PADDING.NONE} ${LAYOUT.PADDING.MD_PLUS}`,
  background: vars.color.white,
});
