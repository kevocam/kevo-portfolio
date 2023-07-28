import React, { useState, useEffect } from "react";
import Image from "next/image";

import Portfolio from "../components/Portfolio";
import "../style/style.scss";
import "./style.scss";

const ProgramadorReactPeruDesarrolloWeb = () => {
  const [theme, setTheme] = useState(true);

  const onChangeTheme = (item) => {
    setTheme(item);
  };
  const getWindowSize = () => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return { width: 0, height: 0 };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = windowSize.width < 768;

  return (
    <section className={`theme  ${theme ? "dark-theme" : "light-theme"}`}>
      <h1>
        Desarrollador React en Perú: Impulsando Experiencias Web Increíbles
      </h1>

      <p>
        ¡Bienvenido a mi portafolio! Si estás buscando un desarrollador experto
        en ReactJS, JavaScript y desarrollo web en Perú, estás en el lugar
        adecuado. Aquí encontrarás la solución perfecta para tus proyectos
        digitales. Permíteme mostrarte cómo puedo ayudarte a llevar tus ideas a
        la realidad con servicios profesionales de primer nivel y proyectos web
        impresionantes.
      </p>

      <h2>¿Qué hace que React sea tan especial?</h2>

      <p>
        Antes de sumergirnos en los proyectos emocionantes que he desarrollado,
        déjame contarte por qué React es una de las tecnologías más demandadas y
        poderosas en el desarrollo web. React, también conocido como React.js,
        es una biblioteca de JavaScript de código abierto desarrollada y
        mantenida por Facebook. Esta tecnología revolucionaria ha ganado
        popularidad debido a su eficiencia, escalabilidad y capacidad para
        construir interfaces de usuario interactivas y dinámicas.
      </p>

      <h2>Descubre mi portafolio de proyectos React en Perú</h2>

      <p>
        A continuación, te presento algunos de los proyectos en los que he
        trabajado como desarrollador React en Perú. Cada uno de ellos refleja mi
        pasión por crear experiencias web sorprendentes y altamente funcionales.
      </p>

      <h3>TodoReact - Gestión de tareas</h3>
      <Image
        width={isMobile ? 300 : 500}
        height={isMobile ? 300 : 500}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b1763.appspot.com/o/FireShot%20Capture%20015%20-%20React%20App%20-%20localhost.png?alt=media&token=bab643fc-3bcd-4ff1-a720-eafd07ce4384"
        alt="Captura de pantalla de la aplicación TodoReact"
      />
      <p>
        TodoReact es una aplicación que te ayuda a gestionar tus tareas diarias
        de manera efectiva. Como programador web frontend en Perú, desarrollé
        esta aplicación utilizando React y Sass. Con TodoReact, puedes marcar
        tareas completadas, eliminarlas y buscar tus actividades con facilidad.
        ¿Quieres explorar el proyecto en línea? ¡Haz clic{" "}
        <a rel="nofollow" href="https://todoreact-kevo.netlify.app/">
          aquí
        </a>
        !
      </p>

      <h3>Pasarela para seguro de vida</h3>
      <Image
        width={isMobile ? 300 : 500}
        height={isMobile ? 300 : 500}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b1763.appspot.com/o/seguro4.png?alt=media&token=e32f26ce-0e9c-4b9e-9f95-703e684744e5"
        alt="Captura de pantalla de la aplicación Pasarela para seguro de vida"
      />
      <p>
        Gestiona tu seguro de vida para ti y tu familia con esta pasarela que
        desarrollé como desarrollador web frontend en Perú. Utilicé React y Sass
        para crear una interfaz amigable que simplifica la gestión del seguro
        familiar. ¿Quieres descubrir más sobre este proyecto y acceder a la
        aplicación en línea? Visita el enlace{" "}
        <a rel="nofollow" href="https://cotiseguros-kevo.netlify.app/">
          aquí
        </a>{" "}
        ahora.
      </p>

      <h3>Vue Pokedex</h3>
      <Image
        width={isMobile ? 300 : 500}
        height={isMobile ? 300 : 500}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b1763.appspot.com/o/pokedex1.png?alt=media&token=1c2ee9b3-6365-40c8-9db6-4760d4f2e027"
        alt="Captura de pantalla de la aplicación Vue Pokedex"
      />
      <p>
        ¿Eres un amante de los Pokémon? Entonces Vue Pokedex es perfecto para
        ti. Como desarrollador web frontend en Perú, utilicé Vue.js, Sass, Vue
        Router y Vuex para crear esta emocionante aplicación. Explora la Pokédex
        en línea y descubre todos los detalles de tus Pokémon favoritos. Haz
        clic <a href="https://pokedexvuejsapp.netlify.app/#/">aquí</a> para
        comenzar tu viaje Pokémon.
      </p>

      <h3>Criptomercado VueJS</h3>
      <Image
        width={isMobile ? 300 : 500}
        height={isMobile ? 300 : 500}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b1763.appspot.com/o/criptomercado3.png?alt=media&token=780cd9f8-122b-47c5-9bf3-abde87beb954"
        alt="Captura de pantalla de la aplicación Criptomercado VueJS"
      />
      <p>
        El mundo de las criptomonedas es emocionante y lleno de oportunidades.
        Con Criptomercado VueJS, puedes seguir minuto a minuto la volatilidad de
        las criptomonedas y convertir cualquier criptomoneda a USD y viceversa.
        Como desarrollador web frontend en Perú, utilicé Vue.js, una API y Sass
        para crear esta aplicación. ¡Explora el Criptomercado ahora y mantente
        actualizado en el mundo de las criptomonedas! Ingresa{" "}
        <a rel="nofollow" href="https://criptomarket.netlify.app/">
          aquí
        </a>{" "}
        para comenzar.
      </p>

      <h3>Where is my money?</h3>
      <Image
        width={isMobile ? 300 : 500}
        height={isMobile ? 300 : 500}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b1763.appspot.com/o/whereismymoney2.png?alt=media&token=cf9974c5-0a8d-444a-bc54-8304869f5514"
        alt="Captura de pantalla de la aplicación Where is my money?"
      />
      <p>
        Llevar un control financiero efectivo es crucial, y eso es precisamente
        lo que Where is my money? te permite hacer. Como desarrollador web
        frontend en Perú, utilicé Laravel, Sass y Livewire para crear esta
        aplicación intuitiva. Controla tus gastos e ingresos y mantén un balance
        de tus cuentas de manera privada. ¡Comienza a tomar el control
        financiero visitando <a href="https://whereismymoney.site/">aquí</a>!
      </p>

      <h3>Web para congreso Dau - Holding</h3>
      <Image
        width={isMobile ? 300 : 500}
        height={isMobile ? 300 : 500}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-b1763.appspot.com/o/congresodau5.png?alt=media&token=e82c6ee2-aa29-4557-a72e-6ec14ad30af8"
        alt="Captura de pantalla de la aplicación Web para congreso Dau - Holding"
      />
      <p>
        Junto con un talentoso equipo de diseño, desarrollé una plataforma para
        transmitir el V congreso de Logoterapia y Tanatología Lima - 2021.
        Utilicé Laravel, Livewire, Webpack y Sass para llevar este proyecto a la
        vida. Explora las imágenes y descubre más detalles sobre el congreso Dau
        - Holding. Ingresa <a href="https://webcongresodau.com/">aquí</a> para
        explorar el proyecto.
      </p>

      <h2>¿Listo para comenzar un emocionante viaje de desarrollo?</h2>

      <p>
        Gracias por acompañarme en este recorrido a través de mi portafolio de
        proyectos React en Perú. Si estás interesado en trabajar juntos en tu
        próximo proyecto o tienes alguna pregunta, no dudes en{" "}
        <a href="mailto:kevocam.seo@gmail.com">contactarme</a>. Estoy emocionado
        de conocer tu proyecto y aportar mi experiencia para crear soluciones
        web excepcionales.
      </p>

      <p>
        Recuerda que en el desarrollo React en Perú, la pasión y el compromiso
        marcan la diferencia. ¡Espero saber de ti pronto!
      </p>

      <p>
        <strong>¡Hasta pronto!</strong>
      </p>
    </section>
  );
};

export default ProgramadorReactPeruDesarrolloWeb;
