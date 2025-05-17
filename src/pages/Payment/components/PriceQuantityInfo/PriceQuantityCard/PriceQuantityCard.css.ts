import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const cardWrapper = style({
  display: 'flex',
  width: '37.5rem',
  height: '8.6rem',
  flexShrink: 0,
  background: vars.color.white,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const textWrapper = style({
  display: 'flex',
  width: '9.5rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.2rem',
  flexShrink: 0,
  marginLeft: '1.9rem',
});

export const label = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: '1.2rem',
  fontWeight: '400',
  color: vars.color.gray70,
  letterSpacing: '0.036rem',
});

export const price = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: '2rem',
  fontWeight: '700',
  color: vars.color.black,
  lineHeight: '140%',
  letterSpacing: '-0.04rem',
});

export const PriceQuantityWrapper = style({
  marginTop: '2rem',
  marginBottom: '0.9rem',
});
