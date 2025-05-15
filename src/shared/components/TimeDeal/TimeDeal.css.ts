import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const TimeDealWrapper = style({
  flexDirection: 'row',
  gap: 0,
  alignItems: 'center',
  display: 'inline-flex',
});
export const TimeDealTxt = style({
  padding: '0.3rem 0.5rem',
  ...fontStyle('b12_sb_12'),
  color: vars.color.white,
  backgroundColor: vars.color.red30,
  borderRadius: '0.6rem 0 0 0.6rem',
  border: ` 1px solid  ${vars.color.red20}`,
});

export const TimeDealCount = style({
  padding: '0.3rem 0.5rem',
  ...fontStyle('b12_sb_12'),
  color: vars.color.red30,
  borderRadius: ' 0 0.6rem 0.6rem 0',
  border: ` 1px solid  ${vars.color.red20}`,
  borderLeft: 'none',
});
