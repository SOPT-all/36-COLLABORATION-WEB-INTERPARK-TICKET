// src/components/common/VectorDivider/VectorDivider.tsx
import { dividerStyle } from './VectorDivider.css';
import { clsx } from 'clsx';

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
