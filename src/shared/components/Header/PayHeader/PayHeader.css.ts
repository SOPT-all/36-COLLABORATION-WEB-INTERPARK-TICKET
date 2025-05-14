import { style } from '@vanilla-extract/css';

export const HeaderWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.4rem 1.5rem 1.4rem 1.6rem',
  width: '375px',
  boxSizing: 'border-box',
  backgroundColor: ' #29292D',
  flexShrink: 0,
  position: 'fixed',
  top: 0,
  zIndex: 1,
});

export const HeaderStep = style({
  color: '#FFF',
  fontSize: '1.4rem',
  fontWeight: 600,
  letterSpacing: '0.056rem',
});
