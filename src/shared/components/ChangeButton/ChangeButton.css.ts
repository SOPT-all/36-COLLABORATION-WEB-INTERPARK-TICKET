import { style } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';
import { vars } from '@/shared/styles/tokens.css';

export const changeButton = style({
  width: '4rem',
  boxSizing: 'border-box',
  padding: '0.2rem 0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: vars.color.blue100,
  borderRadius: '0.6rem',
  color: vars.color.gray10,
  ...fontStyle('c3_re_8'),

  cursor: 'pointer',
});
