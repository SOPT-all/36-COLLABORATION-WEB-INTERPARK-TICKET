import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const noticeContainer = style({
  alignSelf: 'stretch',
  color: vars.color.gray70,
  ...fontStyle('b17_b_10'),
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
