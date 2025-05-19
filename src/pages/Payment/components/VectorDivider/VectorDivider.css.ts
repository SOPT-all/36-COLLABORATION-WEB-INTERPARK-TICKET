import { styleVariants } from '@vanilla-extract/css';
import { vars } from '@/shared/styles/tokens.css';

export const dividerStyle = styleVariants({
  gray90: {
    width: '35rem',
    height: '0.1rem',
    backgroundColor: vars.color.gray90,
    margin: '0 auto',
  },
  gray20: {
    width: '34rem',
    height: '1px',
    backgroundColor: vars.color.gray20,
    margin: '0 auto', // ✅ 가운데 정렬
  },
});
