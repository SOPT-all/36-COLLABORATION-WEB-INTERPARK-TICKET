import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.3rem 7.3rem 1.3rem 2rem',
  backgroundColor: vars.color.gray10,
});

export const policyWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  alignSelf: 'stretch',
});

export const line = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  ...fontStyle('b4_m_16'),
  color: vars.color.gray50,
});

export const strongText = style({
  color: vars.color.gray70,
});

export const brandInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
  marginTop: '1.2rem',

  ...fontStyle('b12_sb_12'),
  color: vars.color.gray70,
});

export const seperator = style({
  width: '0.1rem',
  height: '1.2rem',
  backgroundColor: vars.color.gray40,
});

export const brandInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
});
