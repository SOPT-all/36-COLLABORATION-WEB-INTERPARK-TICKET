import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const container = style({
  display: 'flex',
  width: '25rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
});

export const title = style({
  ...fontStyle('b2_b_16'),
  color: vars.color.gray80,
});

export const infoGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  alignSelf: 'stretch',
});

export const row = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2rem',
});

export const label = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.gray80,
});

export const value = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray80,
});

export const valueWithButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const valueText = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray80,
});

export const iconButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
});
