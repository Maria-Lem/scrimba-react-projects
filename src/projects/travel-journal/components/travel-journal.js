import React from "react";
import styles from "../styles/travel-journal.module.css";
import Card from "./card";
import data from "./data";

import Header from "./header";

export default function TravelJournal() {
  const cardElement = data.map(card => {
    return (<Card 
      {...card}
    />)
  })

  return (
    <div className={styles.travelJournal}>
      <Header />
      <main className={styles.main}>
        {cardElement}
      </main>
    </div>
  )
}