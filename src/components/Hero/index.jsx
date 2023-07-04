import React from "react";
import developer from "../../assets/developer.svg";
import developerLigth from "../../assets/developerLigth.svg";
import developerNigth from "../../assets/developerNigth.svg";
import { motion } from "framer-motion";
import "./style.scss";

function Hero({ theme }) {
  console.log("theme;", theme);
  let imgDeveloper = developerLigth;
  let colorText = theme ? "#b1bfc9" : "#0669f7";
  if (theme) {
    imgDeveloper = developerNigth;
  } else {
    imgDeveloper = developerLigth;
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__content--hi">
          Hi <span className="hero__content--hand">👋</span>, {"I'm"}
        </p>
        <div className="hero__content--title">
          <h2>FrontEnd Developer</h2>
        </div>
        <p className="hero__content--call">and make amazing webs!</p>
        <p className="hero__content--description">
          Front end developer con más de 2 años de experiencia desarrollando
          productos digitales con JavaScript, VueJs, ReactJs y Laravel.
        </p>
      </div>
      <img
        src={imgDeveloper.src}
        className="slide-fwd-center hero__img"
        alt="developer web"
      />
    </section>
  );
}

export default Hero;
