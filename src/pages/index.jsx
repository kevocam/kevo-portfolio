import React, { useEffect, useState } from "react";
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

const index = () => {
  const [theme, setTheme] = useState(false);
  const [time, setTime] = useState("");
  const [banner, setBanner] = useState("");
  const [bannerTheme, setBannerTheme] = useState("");

  const getHour = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const isDarkMode = hour > 18;

    setTheme(isDarkMode);

    setBanner(`It's:${hour} : ${minutes}`);
    return hour;
  };

  useEffect(() => {
    setTime(getHour());
  }, []);

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
        <meta
          name="google-site-verification"
          content="DIeMLt1q07BpoRydeD0fBiWPcIVSu2KZz_WYiNvfyIQ"
        />
        <title>Kevin Camargo Barreda</title>
      </Head>

      <Header
        banner={banner}
        bannerTheme={bannerTheme}
        onChange={() => onChangeTheme(!theme)}
      ></Header>
      <Hero theme={theme} />
      <Title title="About me" />
      <About />
      <Title title="Portafolio Front end Developer" />
      <Portfolio />
      <Title src="/programador-react-peru-desarrollo-web" title="Experience" />
      <Experience />
      <Title title="Technologies " />
      <Tecnologies />
      <Title title="Let's do it?" />

      <Footer />
    </div>
  );
};

export default index;
