import React from "react";
import "./style.scss";
import { Tabs } from "antd";

const Experience = () => {
  const theme = true;
  let colorText = theme.theme ? "#b1bfc9" : "#697477";

  return (
    <section className="experience">
      <Tabs
        size="large"
        className="tabs"
        style={{ color: colorText, fontSize: "1.6rem" }}
        tabPosition="left"
      >
        <Tabs.TabPane key="1" tab="Globant">
          <h2>Mi experiencia en Globant</h2>
          <p>
            En Globant, trabajo en equipos multidisciplinarios utilizando
            metodologías ágiles para desarrollar soluciones innovadoras. Mi
            enfoque principal ha sido trabajar en proyectos diversos, que van
            desde el desarrollo de aplicaciones con Next.js hasta la
            optimización del SEO de un sitio web de noticias en Nueva York y la
            mejora de la experiencia del usuario en una aseguradora en Chile.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Colaboré en el desarrollo de una aplicación utilizando Next.js,
                brindando una experiencia de usuario rápida y fluida.
              </li>
              <li>
                Realicé ajustes en el SEO de un sitio web de noticias en Nueva
                York, mejorando su visibilidad en los motores de búsqueda y
                aumentando el tráfico orgánico.
              </li>
              <li>
                Implementé mejoras en la experiencia del usuario en una
                aseguradora en Chile, optimizando la navegación, el flujo de
                información y la usabilidad del sitio web.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="ID4 @IoT">
          <h2>Mi experiencia en ID4 @IoT</h2>
          <p>
            Como desarrollador web frontend en Perú, trabajé en ID4 @IoT, donde
            colaboré con el equipo de desarrolladores del rubro financiero para
            dar mantenimiento y desarrollar nuevos proyectos que mejoraran la
            comunicación con su cartera de clientes. Utilicé tecnologías como
            React, Vue.js y otras herramientas modernas para garantizar el
            rendimiento y la eficiencia de los aplicativos web.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Mejoré el rendimiento de los aplicativos en un 25% aplicando
                buenas prácticas de código y migrando los recursos a Firebase.
                Esto permitió una mayor velocidad de carga y una mejor
                experiencia para los usuarios.
              </li>
              <li>
                Colaboré con el equipo de marketing para mejorar en un 40% los
                datos de detalle de visitas en la web, personalizando el script
                de Google Analytics. Esto proporcionó información más precisa
                sobre el comportamiento de los usuarios y ayudó en la toma de
                decisiones estratégicas.
              </li>
              <li>
                Reducí el tiempo de creación de nuevos productos en un 30% al
                desarrollar templates y componentes reutilizables. Esto agilizó
                el proceso de desarrollo y permitió una mayor eficiencia en la
                entrega de proyectos.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="Dau Holding">
          <h2>Mi experiencia en Dau Holding</h2>
          <p>
            En Dau Holding, colaboré con el equipo de diseño para desarrollar
            una plataforma para el II Congreso Internacional de Logoterapia Lima
            Perú - 2021. Participé en la creación de un entorno virtual para el
            congreso, que incluyó la integración de funciones de chat en tiempo
            real y un sistema de gestión de participantes. Utilicé tecnologías
            como React, Laravel, Firebase y otras herramientas avanzadas para
            garantizar el éxito del evento.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Implementé un chat en tiempo real para facilitar la comunicación
                entre los asistentes del congreso. Esto permitió una interacción
                fluida y enriquecedora durante el evento.
              </li>
              <li>
                Mejoré la gestión de los participantes en un 80% al crear un
                dashboard personalizado para la creación, gestión y
                administración de los participantes. Esto simplificó los
                procesos de registro y seguimiento del evento.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="4" tab="WalikyTI">
          <h2>Mi experiencia en WalikyTI</h2>
          <p>
            En WalikyTI, contribuí a mejorar la presencia digital de empresas
            públicas y privadas mediante el desarrollo de software, el
            posicionamiento web y la infraestructura en la nube. Trabajé en
            proyectos de diversa índole, aplicando mis conocimientos en
            tecnologías como React, Vue.js, Laravel y otras herramientas
            modernas para crear soluciones innovadoras y eficientes.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Incrementamos la comunicación entre el equipo y su público
                objetivo mediante la implementación de estrategias de marketing
                digital y el uso de herramientas de colaboración en línea.
              </li>
              <li>
                Integramos una plataforma educativa utilizada por más de 50
                estudiantes diariamente, mejorando el acceso y la interacción
                con el contenido educativo.
              </li>
              <li>
                Desarrollé un generador de mapas a partir de la longitud y
                latitud de las ubicaciones, mejorando en un 100% la precisión y
                usabilidad de la información geográfica. Utilicé la API REST de
                Google Maps para obtener datos actualizados y confiables.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </section>
  );
};

export default Experience;
