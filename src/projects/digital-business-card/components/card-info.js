import React from "react";
import email from "../images/email.svg";
import linkedIn from "../images/linkedIn.svg";

export default function CardInfo(props) {
  return (
    <div className="card__info">
      <h3 className="card__name">{props.name}</h3>
      <h6 className="card__profession">{props.profession}</h6>
      <p className="card__website">{props.website}</p>
      <div className="card__social-links_primary">
        <button className="card__social-link_primary">
          <img className="card__social-link-icon_primary" src={email} alt="email logo" />
          Email
        </button>
        <button className="card__social-link_primary">
          <img className="card__social-link-icon_primary" src={linkedIn} alt="LinkedIn logo" />
          LinkedIn
        </button>
      </div>
      <h4 className="card__subtitle">About</h4>
      <p className="card__text">{props.text.about}</p>
      <h4 className="card__subtitle">Interests</h4>
      <p className="card__text">{props.text.interests}</p>
    </div>
  )
}