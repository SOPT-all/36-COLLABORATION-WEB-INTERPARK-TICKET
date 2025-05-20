import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const label = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.black,
});
