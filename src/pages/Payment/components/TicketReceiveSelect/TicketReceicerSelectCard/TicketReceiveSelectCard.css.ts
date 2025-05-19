import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { LAYOUT } from '@/shared/styles/layoutConstants';
import { fontStyle } from '@/shared/styles/fontStyle';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: LAYOUT.GAP.MD,
  marginTop: LAYOUT.MARGIN.LG,
});

export const title = style({
  ...fontStyle('b2_b_16'),
  color: vars.color.gray80,
});

export const optionRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: LAYOUT.GAP.XL,
});

export const description = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray60,
  lineHeight: '2.05rem',
  paddingTop: LAYOUT.PADDING.MD,
});

export const ticketReceiveCardWrapper = style({
  paddingLeft: LAYOUT.PADDING.MD,
});
