// src/components/common/InfoRowLabel/InfoRowLabel.css.ts
import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const infoRowTitleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%', // ✅ stretch 대신 명확한 너비 사용
  padding: '0.3rem 0 0.4rem 1.5rem', // ✅ 오른쪽 패딩 제거
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
