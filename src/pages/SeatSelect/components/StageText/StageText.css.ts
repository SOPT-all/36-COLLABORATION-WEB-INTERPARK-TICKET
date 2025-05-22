import { style } from '@vanilla-extract/css';
import { fontStyle } from '@/shared/styles/fontStyle';
import { vars } from '@/shared/styles/tokens.css';

export const stageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '2rem',
});

export const stageText = style({
  ...fontStyle('h2_sb_30'),
  color: vars.color.gray20,
});

export const stageLine = style({
  width: '17.8rem',
  height: '0.6rem',
  backgroundColor: vars.color.gray20,
});
