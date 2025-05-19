import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const infoRowTitleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '0.3rem 0 0.4rem 1.5rem',
});

export const infoRowTitleText = style({
  fontFamily: vars.font.family.pretendard,
  fontSize: '1.6rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '2.24rem',
  letterSpacing: '-0.032rem',
  color: vars.color.gray80,
});

export const infoRowSubText = style({
  color: vars.color.gray60,
  fontFamily: vars.font.family.pretendard,
  fontSize: '1.2rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '1.92rem',
  letterSpacing: '-0.024rem',
  marginLeft: 'auto',
  textAlign: 'right',
  paddingRight: '1.5rem',
});
