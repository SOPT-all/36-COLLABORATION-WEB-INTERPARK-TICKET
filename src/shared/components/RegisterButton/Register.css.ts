import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const registerButton = style({
  padding: '0.5rem 2rem',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.color.blue120,
  borderRadius: '0.4rem',
  color: vars.color.white,
  ...fontStyle('b12_sb_12'),

  cursor: 'pointer',
});
