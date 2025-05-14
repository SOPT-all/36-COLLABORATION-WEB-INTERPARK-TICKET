import { fontStyle } from '@/shared/styles/fontStyle';
import { vars } from '@/shared/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const bookingButton = style({
  padding: '0.6rem 1.9rem',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: vars.color.blue90,
  borderRadius: '0.4rem',
  color: vars.color.white,
  ...fontStyle('b8_sb_14'),

  cursor: 'pointer',
});
