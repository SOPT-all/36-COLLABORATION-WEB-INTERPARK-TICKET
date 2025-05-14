import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
export const HeaderWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.1rem 2.4rem',
  width: '375px',
  boxSizing: 'border-box',
  backgroundColor: ' #FFF',
  flexShrink: 0,
  position: 'fixed',
  top: 0,
  zIndex: 1,
});
export const HeaderTap = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '2.5rem',
  alignItems: 'center',
});
export const HeaderTxt = recipe({
  base: {
    color: '#0E0E0E',
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: '2.3rem',
    letterSpacing: '-0.04rem',

    paddingBottom: '0.3rem',
  },
  variants: {
    active: {
      true: {
        fontWeight: 600,
        borderBottom: '0.2rem solid #0E0E0E',
      },
      false: {
        fontWeight: 400,
      },
    },
  },
});
export const logoImg = style({
  width: '6.5rem',
});
