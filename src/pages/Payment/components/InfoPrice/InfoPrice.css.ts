import { style } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const container = style({
  display: 'flex',
  width: '33.9rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  ':first-child': {
    marginTop: '1rem',
  },
  ':last-child': {
    marginBottom: '1rem',
  },
});

export const label = style({
  ...fontStyle('b8_sb_14'),
});

export const value = style({
  ...fontStyle('b2_b_16'),
});
