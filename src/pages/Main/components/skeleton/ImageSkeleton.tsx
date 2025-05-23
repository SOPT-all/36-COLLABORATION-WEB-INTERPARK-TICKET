import * as styles from "./Skelton.css"

const ImageSkeleton = () => {
    return (
        <div className={styles.InfoCardBox}>
            <img className={styles.InfoCardImg} />
            <div className={styles.pad_45}>
                <h2 className={styles.InfoCardTitle} />
                <address className={styles.InfoCardTxt} />
                <time className={styles.InfoCardDate} />
            </div>
        </div>
    );
};


export default ImageSkeleton;
