import styles from "../styles/travel-journal.module.css";
import pin from "../images/pin.svg";

export default function Card(props) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={props.imageUrl} alt={props.location} />
      <div className={styles.cardContent}>
        <div className={styles.locationInfo}>
          <img className={styles.pin} src={pin} alt="map pin" />
          <h5 className={styles.country}>{props.location}</h5>
          <a className={styles.locationLink} href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className={styles.title}>{props.title}</h2>
        <span className={styles.dates}>{props.startDate} - {props.endDate}</span>
        <p className={styles.description}>{props.description}</p>
      </div>
    </article>
  )
}