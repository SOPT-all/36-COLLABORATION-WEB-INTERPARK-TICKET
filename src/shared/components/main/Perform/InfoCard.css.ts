import { style } from '@vanilla-extract/css';

export const InfoCardBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '14.2rem',
  gap: '1.4rem',
});

export const InfoCardImg = style({
  width: '100%',
  height: '19rem',
  borderRadius: '0.8rem',
});

export const InfoCardTitle = style({
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: '2rem',
  letterSpacing: '-0.028rem',
  color: '#0E0E0E',
  marginBottom: '0.7rem',
});

export const InfoCardTxt = style({
  fontSize: '1.2rem',
  fontWeight: 400,
  letterSpacing: '0.036rem',
  color: '#3B3F44',
  marginBottom: '0.4rem',
});

export const InfoCardDate = style({
  fontSize: '1.2rem',
  fontWeight: 400,
  letterSpacing: '0.036rem',
  color: '#7E7E7E',
});

export const rank = style({
  width: '100%',
  backgroundColor: 'black',
  opacity: '0.5',
  borderRadius: '0.8rem',
  position: 'absolute',
  height: '19rem',
  top: '0',
});
export const rankTxt = style({
  color: '#FFF',
  fontSize: '3.8rem',
  fontWeight: 600,
  lineHeight: '4.5rem',
  letterSpacing: '-0.152rem',
  paddingLeft: '1.1rem',
  marginTop: 'auto',
  height: '100%',
  width: '100%',
  alignContent: 'flex-end',
  zIndex: 1,
});
