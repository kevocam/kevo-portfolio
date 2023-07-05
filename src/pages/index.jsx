import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import About from "../components/About";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Tecnologies from "../components/Tecnologies";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import "../style/style.scss";
import { Helmet } from "react-helmet";

const Index = () => {
  const [theme, setTheme] = useState(false);
  const onChangeTheme = (item) => {
    setTheme(item);
  };

  return (
    <div className={`theme  ${theme ? "dark-theme" : "light-theme"}`}>
      <Helmet>
        <title>Albert Kevin Camargo Barreda - Front end Developer </title>
        <link rel="canonical" href="https://kevincamargo.com" />
        <meta
          name="description"
          content="🚀🚀🚀 I'm Albert Kevin Camargo Barreda Front end Developer and this is my portafolio. I love JavaScript, ReactJs, VuejS, Laravel"
        />
      </Helmet>
      <Head>
        <title>Kevin Camargo Barreda</title>
      </Head>

      <Header onChange={() => onChangeTheme(!theme)}></Header>
      <Hero theme={theme} />
      <Title title="About me" />
      <About />
      <Title title="Portafolio Front end Developer" />
      <Portfolio />
      <Title title="Experience" />
      <Experience />
      <Title title="Technologies " />
      <Tecnologies />
      <Title title="Let's do it?" />

      <Footer />
    </div>
  );
};

export default Index;
