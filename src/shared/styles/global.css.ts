import { globalStyle } from '@vanilla-extract/css';
import * as layers from './layer.css';
import { vars } from './tokens.css';

globalStyle('html, body', {
  '@layer': {
    [layers.reset]: {
      width: '100vw',
      height: '100vh',
      margin: 0,

      overflowX: 'hidden',
      overscrollBehaviorY: 'none',
      touchAction: 'manipulation',

      backgroundColor: vars.color.gray10,
      fontFamily: vars.font.family.pretendard,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
    },
  },
});

globalStyle('body', {
  '@layer': {
    [layers.components]: {
      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'env(safe-area-inset-bottom)',
    },
  },
});

globalStyle('img, svg', {
  userSelect: 'none',
  ...({ WebkitUserDrag: 'none' } as any),
});

globalStyle('#root', {
  '@layer': {
    [layers.components]: {
      width: '100%',
      maxWidth: '37.5rem',
      margin: '0 auto',
      minHeight: '100vh',
      backgroundColor: vars.color.white,

      borderRadius: '1rem',
      boxShadow: '0 0.8rem 2rem rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    },
  },
});
