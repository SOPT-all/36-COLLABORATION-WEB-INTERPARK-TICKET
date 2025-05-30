import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const infoRowTitle = style({
  display: 'flex',
  width: '34.5rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,
});

export const titleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  flex: 1,
});

export const title = style({
  ...fontStyle('b2_b_16'),
  color: vars.color.gray80,
  textAlign: 'left',
});

export const infoRowTitleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '0.3rem 0 0.4rem 1.5rem',
});

export const infoRowTitleText = style({
  ...fontStyle('b2_b_16'),
  color: vars.color.gray80,
});

export const infoRowSubText = style({
  ...fontStyle('b12_sb_12'),
  color: vars.color.gray60,
  marginLeft: 'auto',
  textAlign: 'right',
  paddingRight: '1.5rem',
});

export const subText = style({
  ...fontStyle('b12_sb_12'),
  color: vars.color.gray60,
  textAlign: 'right',
  marginLeft: 'auto',
});
