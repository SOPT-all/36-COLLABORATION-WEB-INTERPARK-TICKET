import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const discountCard = style({
  display: 'flex',
  gap: '1.1rem',
});
export const cardContent = style({
  padding: '0.65rem 0',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});
export const cardImg = style({
  width: '12.8rem',
  height: '16.8rem',
  flexShrink: 0,
  borderRadius: '0.8rem',
});

export const discoutTitle = style({
  ...fontStyle('main_dis_1'),
  color: vars.color.black,
  padding: '0.8rem 0',
});

export const locationtxt = style({
  ...fontStyle('b4_m_16'),
  color: vars.color.black,
  marginBottom: '0.4rem',
});

export const dateTxt = style({
  ...fontStyle('b15_re_12'),
  color: vars.color.gray50,
});

export const descriptionTxt = style({
  color: vars.color.blue90,
  ...fontStyle('b4_m_16'),
  margin: '0.8rem 0 1rem',
});
export const discoutNum = style({
  color: vars.color.red50,
  ...fontStyle('b2_b_16'),
});
export const priceNum = style({
  color: vars.color.black,
  ...fontStyle('b2_b_16'),
});
export const priceDisplay = style({
  display: 'flex',
  gap: '0.1rem',
  alignItems: 'center',
  justifyContent: 'flex-start',
});
