import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const rectangleContainer = style({
  width: '100%',
  padding: '0 2rem',
});

export const rectangle95 = style({
  width: '100%',
  height: '0.1rem',
  flexShrink: 0,
  background: vars.color.gray20,
});

export const rectangle94 = style({
  width: '100%',
  height: '1rem',
  flexShrink: 0,
  background: vars.color.gray10,
});
