import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const HeaderWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.1rem 2.4rem',
  maxWidth: '37.5rem',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: vars.color.white,
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
    color: vars.color.black,

    paddingBottom: '0.3rem',
  },
  variants: {
    active: {
      true: {
        ...fontStyle('h5_sb_20'),
        borderBottom: '0.2rem solid #0E0E0E',
      },
      false: {
        ...fontStyle('h6_re_20'),
      },
    },
  },
});
export const logoImg = style({
  width: '6.5rem',
});
