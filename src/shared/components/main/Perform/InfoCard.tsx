import * as styles from './InfoCard.css';

interface Props extends React.HTMLProps<HTMLDivElement> {
  image: string;
  title: string;
  location: string;
  date: string;
}

const InfoCard = ({ image, title, location, date }: Props) => {
  return (
    <div className={styles.InfoCardBox}>
      <div style={{ position: 'relative' }}>
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
