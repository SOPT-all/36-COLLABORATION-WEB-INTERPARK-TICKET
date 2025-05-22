import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  width: '2.4rem',
  height: '2.4rem',
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderTop: `4px solid ${vars.color.blue120}`,
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});
