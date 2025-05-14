import { fontStyle } from '@/shared/styles/fontStyle';
import { vars } from '@/shared/styles/tokens.css';
import { style } from '@vanilla-extract/css';

export const cardContentInfo = style({
  display: 'flex',
  width: '33.9rem',
  height: '11rem',
  padding: '1rem 1.2rem',
  borderRadius: '0.6rem',
  backgroundColor: vars.color.white,
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
  gap: '1.6rem',
  cursor: 'pointer',
});

export const performanceInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1.6rem',
});

export const performanceTitle = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.black,
});

export const performaceInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const performanceLocationText = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray80,
});

export const performanceInfoText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.1rem',
  ...fontStyle('b13_me_12_narrow'),
  color: vars.color.gray70,
});
