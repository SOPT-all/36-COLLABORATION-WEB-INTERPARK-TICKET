import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const listInfo = style({
  display: 'flex',
  width: '100%',
  height: '5.6rem',
  padding: '1.6rem 1.8rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: vars.color.white,
  border: 'none',
  cursor: 'pointer',
});

export const listInfoText = style({
  ...fontStyle('b2_b_16'),
  color: vars.color.gray90,
});

export const listInfoIcon = style({
  display: 'flex',
  alignItems: 'center',
});

export const content = style({
  background: vars.color.white,
});

export const textFieldsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '0 1.8rem 1.6rem',
});

export const quantityCardsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '0 1.65rem 1.6rem',
  background: vars.color.white,
});
