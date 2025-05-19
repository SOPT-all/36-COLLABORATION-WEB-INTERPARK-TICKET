import { style, keyframes } from '@vanilla-extract/css';
import { fontStyle } from '@styles/fontStyle';
import { vars } from '@styles/tokens.css';

export const containerWrapper = style({
  paddingTop: '7.2rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: '4.3rem',
});

export const mainSection = style({
  paddingBottom: '0.8rem',
  borderBottom: `0.1rem solid ${vars.color.gray120}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const monthArea = style({
  display: 'flex',
  gap: '1.4rem',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 1.1rem',
});
export const monthTxt = style({
  ...fontStyle('h5_sb_20'),
  color: vars.color.gray90,
});
export const monthIcon = style({
  width: '1.8rem',
  height: '1.8rem',
});
export const infoArea = style({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
});
export const infoDefault = style({
  color: vars.color.gray80,
  ...fontStyle('b10_re_14'),
  textAlign: 'left',
});
export const waitNoti = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.6rem',
  alignItems: 'center',
  marginTop: '2.2rem',
});
export const waitIcon = style({
  width: '1.8rem',
  height: '1.8rem',
});
export const waitTxt = style({
  ...fontStyle('b14_me_12'),
  color: vars.color.gray80,
});

const slideDown = keyframes({
  '0%': {
    transform: 'translateY(-20px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

export const showArea = style({
  animation: `${slideDown} 0.5s ease-out`,
});
