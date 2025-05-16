import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
export const HeaderWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.4rem 1.5rem 1.4rem 1.6rem',
  width: '100%',
  maxWidth: '37.5rem',
  boxSizing: 'border-box',
  backgroundColor: vars.color.gray90,
  flexShrink: 0,
  position: 'fixed',
  top: 0,
  zIndex: 1,
});
