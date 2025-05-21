import { rectangle, paddedContainer } from './Rectangle.css';

interface RectangleProps {
  type: 'divider' | 'spacer' | 'spacerLarge' | 'spacerXLarge' | 'spacerGray20';
  hasPadding?: boolean;
}

export const Rectangle = ({ type, hasPadding = false }: RectangleProps) => {
  const content = <div className={rectangle({ type })} />;

  if (hasPadding) {
    return <div className={paddedContainer}>{content}</div>;
  }

  return content;
};

export const Rectangle94 = () => <Rectangle type="spacer" />;
export const Rectangle95 = () => <Rectangle type="divider" />;
export const Rectangle96 = () => <Rectangle type="spacerXLarge" />;
export const Rectangle97 = () => <Rectangle type="spacerLarge" />;
export const PaddedRectangle95 = () => <Rectangle type="divider" hasPadding />;
export const HomeDivider = () => <Rectangle type="spacerGray20" />;
