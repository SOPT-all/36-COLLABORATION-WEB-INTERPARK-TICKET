import { globalStyle } from '@vanilla-extract/css';
import * as layers from './layer.css';
import { vars } from './tokens.css';

globalStyle('body', {
  '@layer': {
    [layers.reset]: {
      margin: 0,
      backgroundColor: vars.color.gray10,
      fontFamily: vars.font.family.pretendard,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
    },
  },
});

globalStyle('#root', {
  '@layer': {
    [layers.components]: {
      maxWidth: '375px',
      margin: '0 auto',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: vars.color.white,
    },
  },
});
