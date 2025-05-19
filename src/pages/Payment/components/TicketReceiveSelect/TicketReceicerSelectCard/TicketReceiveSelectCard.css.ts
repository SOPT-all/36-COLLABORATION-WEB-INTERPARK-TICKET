import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginTop: LAYOUT.MARGIN.LG,
});

export const title = style({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: vars.color.gray80,
  letterSpacing: '-0.032rem',
  lineHeight: '2.24rem',
});

export const optionRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10.8rem',
});

export const description = style({
  fontSize: '1rem',
  fontWeight: 500,
  color: vars.color.gray60,
  lineHeight: '2.05rem',
  paddingTop: '1.6rem',
});

export const ticketReceiveCardWrapper = style({
  paddingLeft: '1.8rem',
});
