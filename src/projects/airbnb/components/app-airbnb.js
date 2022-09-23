import "../styles/airbnb.css";

import Header from "./header";
import Hero from "./hero";
import Card from "./card";

import cardPhoto from "../images/experience-1.png";


export default function AppAirbnb() {
  return (
    <div className="airbnb">
      <Header />
      <Hero />
      <Card 
        img={cardPhoto}
        title="Life lessons with Katie Zaferes"
        status="SOLD OUT"
        starRating="5.0"
        numOfReviews={6}
        country="USA"
        price={136}
      />
    </div>
  )
}