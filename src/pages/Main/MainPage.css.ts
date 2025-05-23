import { style } from '@vanilla-extract/css';
import { fontStyle } from '@styles/fontStyle';
import { vars } from '@styles/tokens.css';

export const containerWrapper = style({
  marginTop: '5.2rem',
});

export const mainBanner = style({
  padding: '1rem 1.9rem 2rem 1.9rem',
});

export const categoryGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '1.6rem',
  padding: '0 1.9rem',
  marginBottom: '3rem',
});

export const categoryItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...fontStyle('b4_m_16'),
  color: vars.color.gray70,
  gap: '0.3rem',
});

export const icon = style({
  cursor: 'pointer',
  width: '3.6rem',
  height: '3.6rem',
});

export const sectionHeader = style({
  ...fontStyle('h5_sb_20'),
  color: vars.color.black,
  padding: '3rem 0 2rem 0',
});

export const footerWrapper = style({
  marginTop: '6rem',
  paddingBottom: '6rem',
});
