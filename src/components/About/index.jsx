import React from "react";
import mercadoPago from "../../assets/mercadoPago.png";
import "./style.scss";
import kevo from "../../assets/kevin_camargo.png";
import hacktziLogo from "../../assets/hacktzi.png";
import mercadopagocertificado from "../../assets/mercadopagocertificado.png";
import { Image } from "antd";

function About() {
  return (
    <div className="about">
      <div className="about__photo">
        {/* <img src={kevo} alt="Kevin Camargo" /> */}
      </div>
      <div className="about__me">
        <p>
          Hace unos años, co-fundé una empresa de desarrollo de software, donde
          tuve la oportunidad de aplicar mis habilidades como programador
          especializado en React, junto con diversas librerías y frameworks
          complementarios. Durante mi tiempo en la empresa, me enfoqué en
          mejorar la presencia digital de empresas públicas y privadas,
          proponiendo e implementando soluciones tecnológicas basadas en
          ReactJS, VueJS y otras herramientas de vanguardia.
        </p>
        <p>
          Mediante el uso de JavaScript, ReactJS y VueJS, colaboré con equipos
          de desarrollo para ofrecer soporte, mantenimiento y crear nuevos
          aplicativos web. Siguiendo las mejores prácticas de desarrollo,
          implementé código limpio y optimizado, realizando pruebas exhaustivas
          para garantizar la calidad y eficiencia de los proyectos.
        </p>
        <p>
          Mi experiencia en el desarrollo de aplicativos web con ReactJS, VueJS
          y otras librerías y frameworks me ha permitido adquirir un profundo
          conocimiento en el diseño de interfaces interactivas, gestión de
          estado con Redux y Vuex, enrutamiento con React Router y Vue Router,
          así como también la integración de APIs externas y el uso de
          herramientas de construcción como Webpack.
        </p>
        <p>
          A lo largo de mi trayectoria, he adquirido habilidades en el
          desarrollo ágil, la resolución de problemas y la colaboración efectiva
          en equipos multidisciplinarios. Además, siempre me mantengo
          actualizado con las últimas tendencias y tecnologías emergentes en el
          ámbito del desarrollo web para ofrecer soluciones innovadoras y de
          calidad.
        </p>
        <p>
          Si estás buscando un programador React con experiencia en diversas
          librerías y frameworks, puedo ofrecerte mi expertise en la creación de
          aplicativos web funcionales, rápidos y atractivos visualmente. Estoy
          comprometido en proporcionar soluciones tecnológicas eficientes que
          cumplan con los objetivos y necesidades de tu proyecto. No dudes en
          contactarme para discutir cómo puedo contribuir al éxito de tu equipo
          o empresa.
        </p>
      </div>
      <div className="about__primes">
        <p className="about__primes--badge">
          <img width="300px" src={mercadopagocertificado.src} alt="" />
          Mercado Pago - Programador certificado
        </p>

        <div className="about__primes--mercado"></div>
      </div>
    </div>
  );
}

export default About;
