import "../styles/airbnb.css";

import Header from "./header";
import Hero from "./hero";
import Card from "./card";
import data from "./data"

export default function AppAirbnb() {
  const cardElement = data.map(item => {
    return (<Card
      key={item.id}
      {...item}
      // coverImg={item.coverImg}
      // title={item.title}
      // status={item.status}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // price={item.price}
      // openSpots={item.openSpots}
    />)
  })
  return (
    <div className="airbnb">
      <Header />
      <Hero />
      <div className="card-container">
        {cardElement}
      </div>
    </div>
  )
}