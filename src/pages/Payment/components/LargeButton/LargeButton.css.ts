import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const largeButtonContainer = style({
  display: 'flex',
  width: '37.5rem',
  padding: '1.5rem 2.7rem',
  flexDirection: 'column',
});

export const largeButton = recipe({
  base: {
    height: '5rem',
    padding: '1.3rem 6.5rem',
    borderRadius: '0.8rem',
    textAlign: 'center',
    cursor: 'pointer',
    ...fontStyle('b9_sb_14'),
    color: vars.color.white,
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    state: {
      active: {
        backgroundColor: vars.color.blue100,
        pointerEvents: 'auto',
      },
      disabled: {
        backgroundColor: vars.color.gray40,
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    state: 'active',
  },
});
