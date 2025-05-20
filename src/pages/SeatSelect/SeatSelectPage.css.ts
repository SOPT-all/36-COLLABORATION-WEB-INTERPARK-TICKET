import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const mainContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5.4rem',
  backgroundColor: vars.color.gray80,
  gap: '2rem',
});

export const seatSelectWrapper = style({
  display: 'flex',
  width: '100%',
  maxHeight: '2.8rem',
  justifyContent: 'flex-start',
  gap: '0.6rem',
  marginLeft: '1.8rem',
  marginTop: '2rem',
  marginBottom: '9rem',
});

export const waitIcon = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '7.8rem',
  marginRight: '1.8rem',
  marginBottom: '2.3rem',
  alignSelf: 'flex-end',
});
