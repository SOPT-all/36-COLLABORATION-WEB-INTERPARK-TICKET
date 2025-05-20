import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/tokens.css';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const paddedContainer = style({
  width: '100%',
  padding: `0 ${LAYOUT.PADDING.LG}`,
});

const baseRectangle = style({
  width: '100%',
  flexShrink: 0,
});

export const rectangle = recipe({
  base: baseRectangle,

  variants: {
    type: {
      divider: {
        height: '0.1rem',
        background: vars.color.gray20,
      },
      spacer: {
        height: '1rem',
        background: vars.color.gray10,
      },
      spacerLarge: {
        height: '2rem',
        background: vars.color.white,
      },
      spacerXLarge: {
        height: '3rem',
        background: vars.color.white,
      },
    },
    padding: {
      none: {},
      md: {
        paddingLeft: LAYOUT.PADDING.LG,
        paddingRight: LAYOUT.PADDING.LG,
      },
    },
  },

  defaultVariants: {
    padding: 'none',
  },
});

export const rectangle95 = style({
  width: '35rem',
  height: '0.2rem',
  flexShrink: 0,
  background: vars.color.gray90,
});

export const rectangle94 = style({
  width: '100%',
  height: '1rem',
  flexShrink: 0,
  background: vars.color.gray10,
});

export const rectangle96 = style({
  width: '100%',
  height: '3rem',
  flexShrink: 0,
  background: vars.color.white,
});

export const rectangle97 = style({
  width: '35rem',
  height: '0.2rem',
  flexShrink: 0,
  background: vars.color.gray90,
});

export const rectangle95PaddedContainer = style({
  width: '100%',
  paddingLeft: '1.65rem',
  paddingRight: '1.65rem',
});

export const rectangle95Padded = style({
  width: '100%',
  height: '0.1rem',
  flexShrink: 0,
  background: vars.color.gray20,
});
