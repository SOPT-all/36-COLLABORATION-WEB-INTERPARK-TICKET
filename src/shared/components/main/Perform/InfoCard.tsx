import * as styles from './InfoCard.css';

interface Props {
  isrank: boolean;
  rank: number;
  image: string;
  title: string;
  location: string;
  date: string;
}

const InfoCard = ({ isrank, rank, image, title, location, date }: Props) => {
  const rankLayer = isrank ? ` ${styles.rank}` : ``;

  return (
    <div className={styles.InfoCardBox}>
      <div className={styles.relative}>
        <div className={rankLayer}>
          <div className={styles.rankTxt}>{rank}</div>
        </div>
        <img className={styles.InfoCardImg} src={image} alt="공연_포스터" />
      </div>
      <div className={styles.pad_45}>
        <h2 className={styles.InfoCardTitle}>{title}</h2>
        <address className={styles.InfoCardTxt}> {location}</address>
        <time className={styles.InfoCardDate}> {date}</time>
      </div>
    </div>
  );
};

export default InfoCard;
