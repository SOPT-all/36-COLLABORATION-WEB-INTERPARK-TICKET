import * as styles from './InfoCard.css';

interface Props {
  id: number;
  isrank: boolean;
  rank: number;
  image: string;
  title: string;
  location: string;
  date: string;
}

const InfoCard = ({
  id,
  isrank,
  rank,
  image,
  title,
  location,
  date,
}: Props) => {
  const rankLayer = isrank ? ` ${styles.rank}` : ``;

  return (
    <div className={styles.InfoCardBox} key={id}>
      <div style={{ position: 'relative' }}>
        <div className={rankLayer}>
          <div className={styles.rankTxt}>{rank}</div>
        </div>
        <img className={styles.InfoCardImg} src={image} alt="공연_포스터" />
      </div>
      <div style={{ padding: '0 0.45rem' }}>
        <div className={styles.InfoCardTitle}>{title}</div>
        <div className={styles.InfoCardTxt}> {location}</div>
        <div className={styles.InfoCardDate}> {date}</div>
      </div>
    </div>
  );
};

export default InfoCard;
