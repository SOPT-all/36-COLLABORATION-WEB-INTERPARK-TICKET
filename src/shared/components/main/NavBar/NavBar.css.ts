import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const navWrapper = style({
  display: 'flex',
  gap: '5.3rem',
  width: '37.5rem',
  padding: '0.85rem 3.8rem',
  backgroundColor: vars.color.white,
  justifyContent: 'center',
  position: 'fixed',
  bottom: 0,
  zIndex: 20,
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.2rem',
  cursor: 'pointer',
});

export const iconVariants = styleVariants({
  default: {
    width: '2.4rem',
    height: '2.4rem',
  },
  search: {
    width: '2.4rem',
    height: '2.4rem',
    padding: '0.3rem',
  },
});

export const navTextVariants = styleVariants({
  normal: {
    ...fontStyle('c2_me_10'),
    color: vars.color.gray50,
  },
  bold: {
    ...fontStyle('c1_b_10'),
    color: vars.color.black,
    fontWeight: 700,
  },
});
