import React from "react";
import cardPhoto from "../images/card-photo.png";
import CardInfo from "./card-info";
import CardFooter from "./card-footer";
import "../styles/digital-business-card.css";

export default function Card() {
  return (
    <div className="card">
      <img className="card__photo" src={cardPhoto} alt="Laura Smith" />
      <CardInfo 
        name="Laura Smith" 
        profession="Frontend Developer" 
        website="laurasmith.website"
        text={{
          about: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
          interests: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        }}
      />
      <CardFooter />
    </div>
  )
}