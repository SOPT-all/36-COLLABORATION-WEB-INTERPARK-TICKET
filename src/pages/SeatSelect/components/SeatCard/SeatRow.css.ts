import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const seatRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});

export const rowLabel = style({
  width: '0.6rem',
  height: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '0.2rem',
  color: vars.color.blue110,
  ...fontStyle('c3_re_8'),
});

export const spacer = style({
  marginRight: '1.4rem',
});
