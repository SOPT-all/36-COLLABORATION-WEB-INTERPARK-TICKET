import { vars } from '@styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const sheetWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '37.5rem',
  borderRadius: '3rem 3rem 0rem 0rem',
  border: `1px solid ${vars.color.gray20}`,
  boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)',
  borderBottom: 'none',
});

export const line = style({
  display: 'block',
  height: '.1rem',
  width: '37.4rem',
  backgroundColor: vars.color.gray20,
  border: 'none',
});

export const locationtWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '5.7rem',
  padding: '2rem 24.3rem 2rem 2.5rem',
});

export const locationText = style({
  color: vars.color.gray90,
  ...fontStyle('b8_sb_14'),
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '9rem',
  padding: '1.6rem 2.6rem',
  gap: '2rem',
});

export const infoContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const dateContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
});

export const infoText = recipe({
  base: {
    
  },
  variants: {
    state: {
      default: {
        color: vars.color.gray70,
        ...fontStyle('b12_sb_12'),
      },
      select: {
        color: vars.color.gray60,
        ...fontStyle('b14_me_12'),
      },
      placeholder: {
        color: vars.color.gray30,
        ...fontStyle('b14_me_12'),
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

// 좌석 선택 이후
export const bottomArea = style({
  marginTop: '0',
  backgroundColor: vars.color.gray10,
  padding: '1.5rem 2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const priceContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const priceText = style({
  color: vars.color.gray70,
  ...fontStyle('b15_re_12'),
});

globalStyle(`${priceText} strong`, {
  color: vars.color.gray90,
  ...fontStyle('b8_sb_14'),
});

export const buttonGroup = style({
  display: 'flex',
  border: 'none',
  gap: '1.5rem',
});

