import { style } from '@vanilla-extract/css';

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
  gap: '1.2rem',
  padding: '0 1.8rem',
  width: '100%',
  marginBottom: '3rem',

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
