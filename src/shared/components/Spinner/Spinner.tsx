import * as styles from './Spinner.css';

const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} role="status" aria-label="로딩 중" />;
    </div>
  );
};

export default Spinner;
