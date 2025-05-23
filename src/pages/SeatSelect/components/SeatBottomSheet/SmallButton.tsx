import * as styles from './SmallButton.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'confirm' | 'retry' | 'next';
}

const SmallButton = ({ children, variant = 'confirm', ...props }: Props) => {
  return (
    <button className={styles.smallButton({ variant })} {...props}>
      {children}
    </button>
  );
};

export default SmallButton;
