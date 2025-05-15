import * as styles from './Register.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const RegisterButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.registerButton} {...props}>
      {children}
    </button>
  );
};

export default RegisterButton;
