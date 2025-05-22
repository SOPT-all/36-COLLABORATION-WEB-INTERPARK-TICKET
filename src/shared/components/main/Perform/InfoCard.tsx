import * as styles from './InfoCard.css';

interface Props {
  isrank: boolean;
  rank?: number;
  image: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

const InfoCard = ({
  isrank,
  rank,
  image,
  title,
  location,
  startDate,
  endDate,
}: Props) => {
  const rankLayer = isrank ? ` ${styles.rank}` : ``;

  return (
    <section className={styles.InfoCardBox}>
      <div className={styles.relative}>
        <div className={rankLayer}>
          <div className={styles.rankTxt}>{rank}</div>
        </div>
        <img className={styles.InfoCardImg} src={image} alt="공연_포스터" />
      </div>
      <div className={styles.pad_45}>
        <h2 className={styles.InfoCardTitle}>{title}</h2>
        <address className={styles.InfoCardTxt}> {location}</address>
        <time className={styles.InfoCardDate}>
          {startDate} ~ {endDate}
        </time>
      </div>
    </section>
  );
};

export default InfoCard;
