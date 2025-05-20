import { vars } from '@styles/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const bankCardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.7rem',
  height: '7rem',
  justifyContent: 'space-between',
  padding: '1.1rem 1.5rem 1.1rem 1.6rem',
  backgroundColor: vars.color.gray10,
  flexShrink: 0,
});

export const bankCardContainer = style({
  display: 'flex',
  gap: '3.7rem',
  alignItems: 'center',
});

export const bankCardText = styleVariants({
  default: {
    color: vars.color.gray70,
    ...fontStyle('b12_sb_12'),
  },
  withMargin: {
    color: vars.color.gray70,
    ...fontStyle('b12_sb_12'),
    marginLeft: '-1.1rem',
  },
});

export const hrWrapper = style({
  padding: '.4rem 0',
});

export const line = style({
  display: 'block',
  height: '.1rem',
  width: '30.6rem',
  backgroundColor: vars.color.gray30,
  border: 'none',
});
