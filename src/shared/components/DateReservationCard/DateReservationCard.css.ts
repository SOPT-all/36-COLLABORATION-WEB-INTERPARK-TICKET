import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const reservationCardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.9rem',
  boxSizing: 'border-box',
  backgroundColor: vars.color.blue10,
  borderRadius: '0.6rem',
});

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '6.7rem',
  padding: '1.4rem 1.4rem',
});

export const performInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const dateText = style({
  color: vars.color.blue120,
  ...fontStyle('b2_b_16'),
});

export const authorsText = style({
  color: vars.color.gray60,
  ...fontStyle('b14_me_12'),
});

export const line = style({
  display: 'block',
  height: '.1rem',
  width: '33.8rem',
  backgroundColor: vars.color.gray20,
  border: 'none',
});

// 좌석 정보
export const seatInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.4rem 1.4rem',
  gap: '1rem',
});

export const seatHeader = style({
  color: vars.color.gray80,
  ...fontStyle('b8_sb_14'),
});

export const seatInfoContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const gradeText = style({
  color: vars.color.gray60,
  ...fontStyle('b14_me_12'),
});

export const seatContentContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const seatCountText = style({
  color: vars.color.blue90,
  ...fontStyle('b14_me_12'),
});

export const priceText = style({
  color: vars.color.gray90,
  ...fontStyle('b8_sb_14'),
});
