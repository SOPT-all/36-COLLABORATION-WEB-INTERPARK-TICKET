import * as styles from './StageText.css';

const StageText = () => {
  return (
    <section className={styles.stageContainer} aria-label="Stage">
      <p className={styles.stageText}>STAGE</p>
      <div className={styles.stageLine} />
    </section>
  );
};

export default StageText;
