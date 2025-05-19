import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const label = style({
  fontSize: '1.4rem',
  fontWeight: 600,
  color: vars.color.black,
});
