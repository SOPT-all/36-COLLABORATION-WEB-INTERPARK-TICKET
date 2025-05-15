import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const PopArea = style({
  position: 'fixed',
  top: 0,
  zIndex: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '375px',
  height: '100vh',
});

export const PopContents = style({
  backgroundColor: vars.color.white,
  width: '23rem',
  borderRadius: '10px',
  padding: '2.2rem 3.3rem',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  gap: '2rem',
});

export const PopTitle = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.black,
});

export const PopTxt = style({
  ...fontStyle('b13_me_12_narrow'),
  color: vars.color.gray80,
});
export const PopBtn = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.white,
  padding: '1.3rem 6.5rem',
  textAlign: 'center',
  backgroundColor: vars.color.blue120,
  borderRadius: '8px',
  marginTop: '2.4rem',
});
