import { vars } from '@styles/tokens.css';
import { style } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const button = style({
  display: 'flex',
  width: '33.8rem',
  height: '4.4rem',
  padding: '1.2rem 9.4rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.3rem',
  borderRadius: '0.4rem',
  border: '1px solid',
  borderColor: vars.color.gray20,
  cursor: 'pointer',
});

export const text = style({
  color: vars.color.black,
  ...fontStyle('b7_b_14_1'),
});

export const ARIcon = style({
  width: '1.6rem',
  height: '1.6rem',
});
