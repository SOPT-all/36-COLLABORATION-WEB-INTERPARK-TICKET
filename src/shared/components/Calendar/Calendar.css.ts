import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const calendarWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '34.7rem',
  backgroundColor: vars.color.white,
  borderRadius: '0.6rem',
  boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.1)`,
});

export const calendarHeader = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  textAlign: 'center',
  fontWeight: 'bold',
  color: vars.color.gray70,
  marginBottom: '0.5rem',
});
export const calendarHeaderTxt = style({
  color: vars.color.gray70,
  ...fontStyle('cale_12'),
  width: '4.2rem',
});
export const calendarBody = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '0.3rem',
});

export const blankDay = style({
  height: '2rem',
  width: '2rem',
});

export const day = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.2rem',
  height: '4.2rem',
  cursor: 'pointer',
  textAlign: 'center',
  padding: '0.8rem 0.9rem 1rem 0.9rem',
  color: vars.color.gray30,
  ...fontStyle('h6_re_20'),
});

export const dayInMonth = style({
  backgroundColor: vars.color.white,
  ':hover': {
    backgroundColor: vars.color.gray10,
  },
});

export const dayOutMonth = style({
  backgroundColor: vars.color.gray20,
  color: vars.color.gray50,
});
