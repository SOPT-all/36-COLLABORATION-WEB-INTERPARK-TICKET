import { style } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';
import { vars } from '@/shared/styles/tokens.css';

export const tabWrapper = style({
  display: 'flex',
  overflowX: 'auto',
  gap: '0.8rem',
  width: '100%',

  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  flexShrink: 0,
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

const baseTabStyle = {
  ...fontStyle('b8_sb_14'),
  padding: '0.8rem 1.6rem',
  borderRadius: '2rem',
  flexShrink: 0,
  border: `0.1rem solid ${vars.color.gray20}`,
};

export const tabItem = {
  default: style({
    ...baseTabStyle,
    backgroundColor: vars.color.white,
    color: vars.color.gray90,
  }),
  selected: style({
    ...baseTabStyle,
    backgroundColor: vars.color.gray90,
    color: vars.color.white,
  }),
};
