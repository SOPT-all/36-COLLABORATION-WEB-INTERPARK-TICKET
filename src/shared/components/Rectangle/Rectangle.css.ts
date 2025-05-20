import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { LAYOUT } from '@/shared/styles/layoutConstants';

export const rectangleContainer = styleVariants({
  default: {
    width: '100%',
    padding: `0 ${LAYOUT.PADDING.LG}`,
  },
});

export const rectangleVariants = styleVariants({
  gray10_1rem: {
    width: '100%',
    flexShrink: 0,
    height: '1rem',
    background: vars.color.gray10,
  },
  gray20_0_1rem: {
    width: '100%',
    flexShrink: 0,
    height: '0.1rem',
    background: vars.color.gray20,
  },
});

export const rectangle94 = rectangleVariants.gray10_1rem;
export const rectangle95 = rectangleVariants.gray20_0_1rem;
