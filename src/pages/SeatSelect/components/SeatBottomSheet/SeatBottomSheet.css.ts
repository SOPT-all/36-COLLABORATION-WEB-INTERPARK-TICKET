import { vars } from '@styles/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fontStyle } from '@/shared/styles/fontStyle';

export const sheetWrapper = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: '100%',
  maxWidth: '37.5rem',
  backgroundColor: vars.color.white,
  borderRadius: '3rem 3rem 0 0',
  boxShadow: '0 0 2px rgba(0,0,0,0.25)',
  transition: 'transform 0.3s ease-in-out',
  zIndex: 1000,
  overflow: 'hidden',
});

export const sheetWrapperExpanded = style({
  transform: 'translate(-50%, 0)',
});

export const sheetWrapperCollapsed = style({
  transform: 'translate(-50%, calc(100% - 14.6rem))',
});

export const line = style({
  display: 'block',
  height: '0.1rem',
  width: '37.4rem',
  backgroundColor: vars.color.gray20,
});

export const locationWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '5.7rem',
  paddingLeft: '2.5rem',
});

export const locationText = style({
  color: vars.color.gray90,
  ...fontStyle('b9_sb_14'),
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
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
  base: {},
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
  backgroundColor: vars.color.gray10,
  padding: '1.5rem 2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out',
});

export const priceContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const priceText = styleVariants({
  normal: {
    color: vars.color.gray70,
    ...fontStyle('b15_re_12'),
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  strong: {
    color: vars.color.gray90,
    ...fontStyle('b8_sb_14'),
  },
});

export const buttonGroup = style({
  display: 'flex',
  gap: '1.5rem',
});
