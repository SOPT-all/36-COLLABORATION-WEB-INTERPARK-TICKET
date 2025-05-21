import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const InfoCardBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '14.2rem',
  gap: '1.4rem',
  flexShrink: 0,
  cursor: 'pointer',
});

export const InfoCardImg = style({
  width: '100%',
  height: '19rem',
  borderRadius: '0.8rem',
});

export const InfoCardTitle = style({
  ...fontStyle('b7_b_14_1'),
  color: vars.color.black,
  marginBottom: '0.7rem',

  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
});

export const InfoCardTxt = style({
  ...fontStyle('b15_re_12'),
  color: vars.color.gray80,
  marginBottom: '0.4rem',

  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  whiteSpace: 'normal',
});

export const InfoCardDate = style({
  ...fontStyle('b15_re_12'),
  color: vars.color.gray60,
});

export const rank = style({
  width: '100%',
  borderRadius: '0.8rem',
  position: 'absolute',
  height: '19rem',
  top: '0',
});

export const rankTxt = style({
  color: vars.color.white,
  ...fontStyle('h1_sb_38'),
  paddingLeft: '1.1rem',
  marginTop: 'auto',
  height: '100%',
  width: '100%',
  alignContent: 'flex-end',
  zIndex: 10,
  position: 'absolute',
  textShadow: '0 0 4px rgba(0,0,0,0.7)',
});

export const relative = style({
  position: 'relative',
});

export const pad_45 = style({
  padding: '0 0.45rem',
  width: '100%',
});
