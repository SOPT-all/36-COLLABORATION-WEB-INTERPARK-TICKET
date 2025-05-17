import { globalStyle } from '@vanilla-extract/css';
import * as layers from './layer.css';

globalStyle(
  '*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))',
  {
    '@layer': {
      [layers.reset]: {
        all: 'unset',
        display: 'revert',
      },
    },
  }
);

globalStyle('*, *::before, *::after', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
    },
  },
});

globalStyle('html', {
  '@layer': {
    [layers.reset]: {
      fontSize: '62.5%',
      MozTextSizeAdjust: 'none',
      WebkitTextSizeAdjust: 'none',
      textSizeAdjust: 'none',
    },
  },
});

globalStyle('ol, ul, menu, summary', {
  '@layer': {
    [layers.reset]: {
      listStyle: 'none',
    },
  },
});

globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  // @ts-expect-error: -webkit-line-break is a non-standard property
  '@layer': {
    [layers.reset]: {
      MozUserModify: 'read-write',
      WebkitUserModify: 'read-write',
      overflowWrap: 'break-word',
      WebkitLineBreak: 'after-white-space',
      WebkitUserSelect: 'auto',
    },
  },
});
