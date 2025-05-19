import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css.ts';

export const textField = style({
  display: 'flex',
  width: '33.6rem',
  height: '5rem',
  padding: '1.6rem 1.5rem',
  alignItems: 'center',
  flexShrink: 0,
  background: vars.color.gray10,
  borderRadius: '0.4rem',
  border: `1px solid ${vars.color.gray20}`,
  transition: 'border 0.2s',
  selectors: {
    '&:focus-within': {
      border: `1px solid ${vars.color.blue90}`,
    },
  },
});

export const input = style({
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: vars.font.family.pretendard,
  fontSize: vars.font.b8_sb_14.size,
  fontWeight: vars.font.b8_sb_14.weight as any,
  lineHeight: vars.font.b8_sb_14.lineHeight,
  letterSpacing: vars.font.b8_sb_14.letterSpacing,
  color: vars.color.gray30,
  selectors: {
    '&::placeholder': {
      color: vars.color.gray30,
      fontWeight: vars.font.b8_sb_14.weight as any,
    },
  },
});

export const inputHasText = style({
  color: vars.color.gray90,
});
