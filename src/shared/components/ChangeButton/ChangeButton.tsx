import * as styles from './ChangeButton.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ChangeButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.changeButton} {...props}>
      {children}
    </button>
  );
};

export default ChangeButton;
