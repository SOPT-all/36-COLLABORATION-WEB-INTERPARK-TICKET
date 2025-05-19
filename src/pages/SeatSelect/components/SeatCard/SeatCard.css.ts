import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
export const seatCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24rem',
  height: 'fit-content',
  border: `2px solid ${vars.color.gray20}`,
  background: vars.color.white,
  padding: '1.8rem 2.6rem',
});

export const seatGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const spacer = style({
  height: '0.5rem',
});
