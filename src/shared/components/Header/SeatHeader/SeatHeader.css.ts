import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const HeaderWrapper = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  maxWidth: '37.5rem',
  padding: '1.4rem 1.5rem 1.4rem 1.6rem',
  boxSizing: 'border-box',
  backgroundColor: vars.color.gray90,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
});

export const HeaderTxt = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  ...fontStyle('b9_sb_14'),
  color: vars.color.white,
  textAlign: 'center',
});
