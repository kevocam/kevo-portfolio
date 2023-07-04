import React, { use, useEffect, useState } from "react";
import js from "../../assets/tecnologies/javascript.svg";
import laravel from "../../assets/tecnologies/laravel.svg";
import react from "../../assets/tecnologies/react.svg";
import vue from "../../assets/tecnologies/vue.svg";
import sass from "../../assets/tecnologies/sass.svg";
import webpack from "../../assets/tecnologies/webpack.svg";
import "./style.scss";

function Tecnologies() {
  return (
    <section className="tecnologies">
      <div className="tecnologies__item">
        <img src={js.src} alt="javascript" />
        <p>JavaScript</p>
      </div>
      <div className="tecnologies__item">
        <img src={laravel.src} alt="Laravel" />
        <p>Laravel</p>
      </div>
      <div className="tecnologies__item">
        <img src={react.src} alt="ReactJs" />
        <p>ReactJS</p>
      </div>
      <div className="tecnologies__item">
        <img src={vue.src} alt="VueJS" />
        <p>VueJS</p>
      </div>
      <div className="tecnologies__item">
        <img src={sass.src} alt="Sass" />
        <p>Sass</p>
      </div>
      <div className="tecnologies__item">
        <img src={webpack.src} alt="Webpack" />
        <p>Webpack</p>
      </div>
    </section>
  );
}

export default Tecnologies;
