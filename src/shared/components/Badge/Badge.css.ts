import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const badgeWrapper = recipe({
  base: {
    padding: '0.4rem 0.5rem',
    textAlign: 'center',
    borderRadius: '0.4rem',
    ...fontStyle('c1_b_10'),
  },
  variants: {
    type: {
      Hot: {
        color: vars.color.red30,
        backgroundColor: vars.color.red10,
      },
      단독판매: {
        color: vars.color.blue90,
        backgroundColor: vars.color.blue10,
      },
    },
  },
  defaultVariants: {
    type: 'Hot',
  },
});
