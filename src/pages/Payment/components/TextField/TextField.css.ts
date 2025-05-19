import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { LAYOUT } from '@/shared/styles/layoutConstants';
import { fontStyle } from '@/shared/styles/fontStyle';

export const textField = style({
  display: 'flex',
  width: '100%',
  height: LAYOUT.HEIGHT.SM,
  padding: `${LAYOUT.PADDING.MD} ${LAYOUT.PADDING.MD_PLUS}`,
  alignItems: 'center',
  flexShrink: 0,
  background: vars.color.gray10,
  borderRadius: LAYOUT.BORDER_RADIUS.MD,
  border: `1px solid ${vars.color.gray20}`,
  transition: 'border 0.2s',
});

export const textFieldFocused = style({
  border: `1px solid ${vars.color.blue90}`,
});

export const input = style({
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: vars.color.gray30,
  ...fontStyle('b8_sb_14'),
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
