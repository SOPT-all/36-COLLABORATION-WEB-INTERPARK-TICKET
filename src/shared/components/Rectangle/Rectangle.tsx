import { rectangleVariants } from './Rectangle.css';

interface RectangleProps {
  variant?: 'gray10' | 'gray20';
}

export default function Rectangle({ variant = 'gray10' }: RectangleProps) {
  const variantKey = variant === 'gray10' ? 'gray10_1rem' : 'gray20_0_1rem';
  return <div className={rectangleVariants[variantKey]} />;
}

export const Rectangle94 = () => <Rectangle variant="gray10" />;
export const Rectangle95 = () => <Rectangle variant="gray20" />;
