import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const genreSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '3rem 0 3rem 0',
});

export const genreSectionTitle = style({
  ...fontStyle('h5_sb_20'),
  color: vars.color.black,
  marginBottom: '2rem',
  textAlign: 'center',
});

export const pad = style({ paddingLeft: '1.3rem' });

export const scrollArea = style({
  display: 'flex',
  overflow: 'scroll',
  padding: '3rem 1.8rem 0rem 0',
  margin: '0 auto',
  gap: '1rem',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
