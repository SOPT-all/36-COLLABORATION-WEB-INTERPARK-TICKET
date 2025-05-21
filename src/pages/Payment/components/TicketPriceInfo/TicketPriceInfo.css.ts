import { style } from '@vanilla-extract/css';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const ticketPriceWrapper = style({
  marginTop: LAYOUT.MARGIN.LG,
  marginBottom: '0.9rem',
  width: '100%',
});

export const titleWrapper = style({
  paddingLeft: '1.5rem',
  marginBottom: '1.3rem',
});
