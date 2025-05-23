import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const smallButton = recipe({
  base: {
    width: '15.4rem',
    padding: '1.3rem 6.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.8rem',
    border: 'none',
    cursor: 'pointer',
    color: vars.color.white,
    whiteSpace: 'nowrap',
    ...fontStyle('b8_sb_14'),
  },
  variants: {
    variant: {
      confirm: {
        backgroundColor: vars.color.blue120,
      },
      retry: {
        backgroundColor: vars.color.gray40,
      },
      next: {
        backgroundColor: vars.color.blue100,
      },
    },
  },
  defaultVariants: {
    variant: 'confirm',
  },
});
