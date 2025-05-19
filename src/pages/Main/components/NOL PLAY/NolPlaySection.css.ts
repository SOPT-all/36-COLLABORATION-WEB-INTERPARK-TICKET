import { vars } from '@styles/tokens.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fontStyle } from '@/shared/styles/fontStyle';

export const sectionWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const keywordWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  padding: '0 1.8rem',
  marginBottom: '3rem',
});

export const cardWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1.8rem',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
});

export const cardTrack = style({
  display: 'flex',
  gap: '1rem',
  transition: 'transform 0.4s ease-in-out',
  width: 'max-content',
});

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  transition: 'transform 0.4s ease-in-out',
  width: '29.8rem',
});

export const bottomCard = style({
  display: 'flex',
  width: '29.8rem',
  height: '8.4rem',
  gap: '1.3rem',
  padding: '1.1rem 4.2rem 1.1rem 1.3rem',
  border: `0.1rem solid ${vars.color.gray20}`,
  borderRadius: '0rem 0rem 1rem 1rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const bottomCardText = style({
  display: '-webkit-box',
  ...fontStyle('b7_b_14_1'),
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
});

export const pageGroup = style({
  display: 'flex',
  marginTop: '2rem',
  padding: '0 7.95rem',
  justifyContent: 'space-between',
  gap: '3.5rem',
  marginBottom: '3rem',
});

export const button = style({
  padding: '1.1rem 0',
  width: '6rem',
  height: '3.8rem',
  borderRadius: '0.4rem',
  border: `1px solid ${vars.color.gray20}`,
  textAlign: 'center',
  cursor: 'pointer',
});

export const number = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
  maxWidth: '2.3rem',
});

export const numberText = recipe({
  base: {
    ...fontStyle('b7_b_14_1'),
  },
  variants: {
    kind: {
      current: {
        color: vars.color.black,
      },
      total: {
        color: vars.color.gray60,
      },
      divider: {
        color: vars.color.gray60,
      },
    },
  },
});
