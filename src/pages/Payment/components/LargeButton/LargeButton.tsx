import * as styles from './LargeButton.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

const LargeButton = ({ children, isActive = true, ...props }: Props) => {
  return (
    <div className={styles.largeButtonContainer}>
      <button
        type="button"
        className={styles.largeButton({
          state: isActive ? 'active' : 'disabled',
        })}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default LargeButton;
