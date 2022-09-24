import star from "../images/star.svg";
import styles from "../styles/card.module.css"

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img className={styles.image} src={props.coverImg} alt={props.title} />
        { badgeText && <div className={styles.status}>{badgeText}</div> }
      </div>
      <div className={styles.info}>
        <div className={styles.overview}>
          <img className={styles.star} src={star} alt="star" />
          <span className={styles.numOfStars}>{props.stats.rating}</span>
          <span className={styles.numOfReviews}>({props.stats.reviewCount})</span>
          <span className={styles.location}>{props.location}</span>
        </div>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.price}><strong>From ${props.price}</strong> / person</p>
      </div>
    </div>
  )
}