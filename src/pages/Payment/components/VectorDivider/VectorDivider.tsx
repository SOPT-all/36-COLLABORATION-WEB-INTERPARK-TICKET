import { clsx } from 'clsx';
import { dividerStyle } from './VectorDivider.css';

interface VectorDividerProps {
  variant?: 'gray90' | 'gray20';
  className?: string;
}

export default function VectorDivider({
  variant = 'gray90',
  className,
}: VectorDividerProps) {
  return <div className={clsx(dividerStyle[variant], className)} />;
}
