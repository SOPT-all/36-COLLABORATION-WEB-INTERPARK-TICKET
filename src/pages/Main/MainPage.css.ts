import { style } from '@vanilla-extract/css';
import { fontStyle } from '@styles/fontStyle';
import { vars } from '@styles/tokens.css';

export const h1 = style({
  ...fontStyle('h1_sb_38'),
  color: vars.color.blue50,
});

export const sectionHeader = style({
  ...fontStyle('h5_sb_20'),
  color: vars.color.black,
  padding: '3rem 0 2rem 0',
});
