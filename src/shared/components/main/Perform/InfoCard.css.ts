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
});

export const InfoCardImg = style({
  width: '100%',
  height: '19rem',
  borderRadius: '0.8rem',
});

export const InfoCardTitle = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.black,
  marginBottom: '0.7rem',
});

export const InfoCardTxt = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray80,
  marginBottom: '0.4rem',
});

export const InfoCardDate = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray70,
});

export const rank = style({
  width: '100%',
  backgroundColor: 'black',
  opacity: '0.5',
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
  zIndex: 1,
  position: 'absolute',
});

export const relative = style({
  position: 'relative',
});
export const pad_45 = style({
  padding: '0 0.45rem',
  width: '100%',
});
