import heroImg from "../images/hero-img.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={heroImg} alt="" />
      <h1 className="hero__title">Online Experiences</h1>
      <p className="hero__text">Join unique interactive activities led by one-of-a-kind hosts&nbsp;—&nbsp;all without leaving home.</p>
    </section>
  )
}