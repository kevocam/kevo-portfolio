import React from "react";
import developer from "../../assets/developer.svg";
import developerLigth from "../../assets/developerLigth.svg";
import developerNigth from "../../assets/developerNigth.svg";
import { motion } from "framer-motion";
import "./style.scss";
import Image from "next/image";
function Hero({ theme }) {
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
          frontend con más de 4 años de experiencia en la creación de sitios web
          y aplicaciones utilizando tecnologías como JavaScript, React.js,
          Vue.js y Laravel. Me apasiona el desarrollo web y me especializo en
          crear experiencias interactivas y atractivas para los usuarios.
        </p>
      </div>
      <Image
        width="500"
        height="500"
        src={imgDeveloper.src}
        className="slide-fwd-center hero__img"
        alt="developer web, programador web "
      />
    </section>
  );
}

export default Hero;
