import { style } from '@vanilla-extract/css';
import { fontStyle } from '@styles/fontStyle';
import { vars } from '@styles/tokens.css';

export const h1 = style({
  ...fontStyle('h1_sb_38'),
  color: vars.color.blue50,
});
