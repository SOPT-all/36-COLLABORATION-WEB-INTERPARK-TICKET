import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const popArea = style({
  position: 'fixed',
  top: 0,
  zIndex: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '375px',
  height: '100%',
});

export const popContents = style({
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
});

export const popIcon = style({
  marginBottom: '2rem',
});

export const popTitle = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.black,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1.8rem',
});

export const popTxt = style({
  ...fontStyle('b13_me_12_narrow'),
  color: vars.color.gray80,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '4.4rem',
});

export const popBtn = style({
  ...fontStyle('b8_sb_14'),
  color: vars.color.white,
  padding: '1.3rem 6.5rem',
  textAlign: 'center',
  backgroundColor: vars.color.blue120,
  borderRadius: '8px',
  cursor: 'pointer',
});
