import { vars } from '@styles/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fontStyle } from '@/shared/styles/fontStyle';

export const sectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const keywordWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  padding: '0 1.8rem',
  marginBottom: '3rem',
});

export const cardWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1.8rem 0 1.8rem',
  width: '100%',

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
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});

export const bottomCard = style({
  display: 'flex',
  width: '29.8rem',
  height: '8.4rem',
  gap: '1.3rem',
  padding: '1.1rem 4.2rem 1.1rem 1.3rem',
  border: `0.1rem solid ${vars.color.gray20}`,
  borderRadius: '0rem 0rem 1rem 1rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const bottomCardText = style({
  ...fontStyle('b7_b_14_1'),
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minWidth: 0,
});
