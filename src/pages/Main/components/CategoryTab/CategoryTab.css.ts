import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fontStyle } from '@/shared/styles/fontStyle';
import { vars } from '@/shared/styles/tokens.css';

export const tabWrapper = styleVariants({
  scroll: {
    display: 'flex',
    gap: '0.8rem',
    width: '100%',
    flexShrink: 0,

    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },

  wrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
    width: '100%',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const tabItem = recipe({
  base: {
    borderRadius: '2rem',
    flexShrink: 0,
    border: `0.1rem solid ${vars.color.gray20}`,
    cursor: 'pointer',
  },
  variants: {
    variant: {
      scroll: {
        padding: '0.8rem 1.6rem',
        ...fontStyle('b10_re_14'),
      },
      wrap: {
        padding: '0.9rem 1.4rem',
        ...fontStyle('b10_re_14'),
      },
    },

    selected: {
      true: {
        backgroundColor: vars.color.gray90,
        color: vars.color.white,
        ...fontStyle('b8_sb_14'),
      },

      false: {
        backgroundColor: vars.color.white,
        color: vars.color.gray90,
      },
    },
  },
  compoundVariants: [
    // 필요하다면 여기서 variant + selected 조합별 추가 조정 가능
  ],
});
