import { style } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';
import { fontStyle } from '@/shared/styles/fontStyle';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const checkbox = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const label = style({
  fontSize: '1.4rem',
  color: vars.color.gray80,
});

export const checkboxIcon = style({
  width: '1.5rem',
  height: '1.5rem',
});

export const checkboxWithLabelContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const checkboxLabel = style({
  ...fontStyle('b4_m_16'),
  cursor: 'pointer',
});

export const checkedLabel = style({
  color: vars.color.blue100,
});

export const uncheckedLabel = style({
  color: vars.color.gray60,
});
