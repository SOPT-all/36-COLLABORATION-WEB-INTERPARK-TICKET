import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const container = style({
  position: 'relative',
  width: '7.2rem',
  height: '5.6rem',
  flexShrink: 0,
});

export const bg = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

export const content = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.8rem 0.68rem 1.9rem 1.3rem',
});

export const count = style({
  fontSize: '1.6rem',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const countRed = style({
  color: vars.color.red70,
});

export const countGray = style({
  color: vars.color.gray30,
});

export const arrowGroup = style({
  display: 'flex',
  width: '2.6rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  gap: '0.4rem',
});

export const arrowButtonUp = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.4rem',
  padding: 0,
});

export const arrowButtonDown = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.4rem',
  padding: 0,
});

export const divider = style({
  width: '2.6rem',
  height: '1px',
  display: 'block',
});
