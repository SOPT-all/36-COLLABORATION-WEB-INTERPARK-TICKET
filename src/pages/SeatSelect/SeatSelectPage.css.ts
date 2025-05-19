import { style } from '@vanilla-extract/css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const mainContent = style({
  marginTop: '5.6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5rem',
});
