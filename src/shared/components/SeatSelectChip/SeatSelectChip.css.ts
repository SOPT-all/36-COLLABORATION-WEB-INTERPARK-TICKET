import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
import { style } from '@vanilla-extract/css';

export const seatSelectChip = recipe({
  base: {
    display: 'flex',
    padding: '0.5rem 1.4rem',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',

    borderRadius: '3rem',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
  },
  variants: {
    isSelected: {
      true: {
        border: `1px solid ${vars.color.blue90}`,
        backgroundColor: 'rgba(220, 234, 248, 0.10)',
      },
      false: {
        border: `1px solid ${vars.color.gray70}`,
        backgroundColor: 'rgba(41, 41, 45, 0.5)',
      },
    },
  },
  defaultVariants: {
    isSelected: false,
  },
});

export const seatText = style({
  ...fontStyle('b10_re_14'),
  color: vars.color.gray20,
});
