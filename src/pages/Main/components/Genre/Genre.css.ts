import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';
export const genreSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 0 3rem 0',
});

export const padd = style({
  paddingLeft: '1.8rem',
});

export const genreSectionTitle = style({
  ...fontStyle('h5_sb_20'),
  color: vars.color.black,
  marginBottom: '2rem',
  textAlign: 'center',
});

export const scrollArea = style({
  display: 'flex',
  overflow: 'scroll',
  padding: '2rem 1.8rem 2rem 0',
  gap: '1.2rem',
  alignItems: 'flex-start',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
