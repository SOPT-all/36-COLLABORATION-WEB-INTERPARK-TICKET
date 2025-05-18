import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const seat = style({
  width: '1rem',
  height: '1rem',
  borderRadius: '0.2rem 0.2rem 0rem 0rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: 'background-color 0.1s',
  cursor: 'pointer',

  border: `0.5px solid ${vars.color.gray70}`,
  backgroundColor: vars.color.white,
});

export const seatVariant = recipe({
  base: seat,
  variants: {
    grade: {
      R: {
        backgroundColor: vars.color.purple50,
        border: 'none',
      },
      S: {
        backgroundColor: vars.color.green,
        border: 'none',
      },
    },
    isSelected: {
      true: {
        backgroundColor: vars.color.blue90,
        color: vars.color.white,
        ...fontStyle('c4_re_6'),
        border: 'none',
      },
    },
    isInactive: {
      true: {
        backgroundColor: vars.color.gray30,
        pointerEvents: 'none',
        border: 'none',
      },
    },
  },
});
