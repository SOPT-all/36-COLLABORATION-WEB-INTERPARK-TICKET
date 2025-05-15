import { style } from '@vanilla-extract/css';

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
  backgroundColor: '#fff',
  width: '23rem',
  height: '32rem',
  borderRadius: '10px',
  padding: '2.2rem 3.3rem',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  gap: '2rem',
});

export const PopTitle = style({
  fontSize: '1.4rem',
  fontWeight: 600,
  letterSpacing: '-0.056rem',
  color: '#0E0E0E',
});

export const PopTxt = style({
  fontSize: '1.2rem',
  fontWeight: 500,
  lineHeight: '1.9rem',
  letterSpacing: '-0.024rem',
});
export const PopBtn = style({
  fontSize: '1.4rem',
  color: '#fff',
  fontWeight: 600,
  letterSpacing: '-0.056rem',
  padding: '1.3rem 6.5rem',
  textAlign: 'center',
  backgroundColor: '#363B46',
  borderRadius: '8px',
  marginTop: '2.4rem',
});
