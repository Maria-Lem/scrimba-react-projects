import star from "../images/star.svg";
import styles from "../styles/card.module.css"

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img className={styles.image} src={props.img} alt={props.title} />
        <div className={styles.status}>{props.status}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.overview}>
          <img className={styles.star} src={star} alt="star" />
          <span className={styles.numOfStars}>{props.starRating}</span>
          <span className={styles.numOfReviews}>({props.numOfReviews})</span>
          <span className={styles.country}>{props.country}</span>
        </div>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.price}><strong>From ${props.price}</strong> / person</p>
      </div>
    </div>
  )
}