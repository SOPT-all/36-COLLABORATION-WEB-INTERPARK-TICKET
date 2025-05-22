import { vars } from '@styles/tokens.css';
import { style } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const sectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardWrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 1.8rem',
  width: '100%',
  marginBottom: '2rem',

  overflowX: 'auto',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const cardContainer = style({
  display: 'flex',
  width: '29.8rem',
  gap: '0.8rem',
  padding: '1.2rem 4.9rem 1.2rem 1.3rem',
  border: `0.1rem solid ${vars.color.gray20}`,
  borderRadius: '1rem',
  cursor: 'pointer',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.6rem',
  minWidth: 0,
});

export const dateText = style({
  ...fontStyle('b7_b_14_1'),
  color: vars.color.blue90,
});

export const titleText = style({
  whiteSpace: 'normal',
  maxWidth: '100%',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  ...fontStyle('b8_sb_14'),
  lineHeight: '1.6rem',
});

export const descriptionText = style({
  ...fontStyle('b4_m_16'),
  color: vars.color.gray60,

  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  whiteSpace: 'normal',
});

export const tagGroup = style({
  display: 'flex',
  gap: '0.4rem',
  marginTop: '0.4rem',
});

export const img = style({
  width: '9.525rem',
  height: '12.7rem',
});
