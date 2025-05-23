import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

const pulse = keyframes({
  "0%": { opacity: 1 },
  "30%": { opacity: 0.2 },  
  "70%": { opacity: 0.2 },
  "100%": { opacity: 1 },
});

export const InfoCardBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '14.2rem',
  gap: '1.4rem',
});

export const InfoCardImg = style({
  width: '14.2rem',
  height: '19rem',
  borderRadius: '0.8rem',
  backgroundColor: vars.color.gray80,
  animation: `${pulse} 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const InfoCardTitle = style({
  marginBottom: '0.7rem',
  backgroundColor: vars.color.gray80,
  width: '13.3rem',
  height: '4rem',
  borderRadius: '0.5rem',
  animation: `${pulse} 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const InfoCardTxt = style({
  backgroundColor: vars.color.gray70,
  marginBottom: '0.4rem',
  width: '13.3rem',
  height: '1.4rem',
  borderRadius: '0.5rem',
  animation: `${pulse} 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const InfoCardDate = style({
  backgroundColor: vars.color.gray60,
  width: '10.3rem',
  height: '1.4rem',
  borderRadius: '0.5rem',
  animation: `${pulse} 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});

export const pad_45 = style({
  padding: '0 0.45rem',
  width: '100%',
  animation: `${pulse} 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});



