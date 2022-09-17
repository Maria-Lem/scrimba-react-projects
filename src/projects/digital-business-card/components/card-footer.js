import React from "react";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

let icons = [ twitter, facebook, instagram, github ];

export default function CardFooter() {
  return (
    <ul className="card__social-links_secondary">
      {icons.map(icon => <li className="card__social-link_secondary"><img src={icon} alt="social link icon" /></li>)}
    </ul>
  )
}