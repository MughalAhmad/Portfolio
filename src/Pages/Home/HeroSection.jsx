import { useState } from "react";
import { Link } from "react-scroll";

export default function HeroSection() {
  const [navActive, setNavActive] = useState(false);
  const closeMenu = () => {
    setNavActive(false);
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ahmad</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          {/* Hello there! 👋 I'm Ahmad,  */}
          A passionate MERN stack developer with a flair for crafting and efficient web applications. 
          My journey in the world of web development has been an exciting exploration of building dynamic and responsive solutions that bring ideas to life.
          </p>
        </div>
        <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
      >
       Get In Touch
      </Link>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/pic1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
