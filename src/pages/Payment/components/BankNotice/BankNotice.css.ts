import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const noticeContainer = style({
  alignSelf: 'stretch',
  color: vars.color.gray70,
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '1.1rem',
  padding: '0 2rem',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
});

export const noticeItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  '::before': {
    content: '•',
    fontSize: '1.2rem',
    lineHeight: '1rem',
  },
});
