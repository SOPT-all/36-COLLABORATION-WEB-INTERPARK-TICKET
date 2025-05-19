import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { LAYOUT } from '@/shared/styles/layoutConstants';
import { fontStyle } from '@/shared/styles/fontStyle';

export const wrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginTop: LAYOUT.MARGIN.LG,
});

export const titleWrapper = style({
  paddingLeft: '1.5rem',
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
  ...fontStyle('c2_me_10'),
  color: vars.color.gray60,
  lineHeight: '2.05rem',
  paddingTop: '1.6rem',
});

export const ticketReceiveCardWrapper = style({
  paddingLeft: '1.8rem',
});
