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
        <Tabs.TabPane key="1" tab="ID4 @IoT">
          <h2>Mi experiencia en ID4 @IoT</h2>
          <p>
            Apoyé al equipo de desarrolladores del rubro financiero a dar
            mantenimiento y desarrollar nuevos proyectos que ayuden a mejorar la
            comunicación con su cartera de clientes.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Mejoré el rendimiento de los aplicativos en un 25% aplicando
                buenas prácticas de código y migrando los recursos a Firebase.
              </li>
              <li>
                Colaboré con el equipo de marketing mejorando en un 40% los
                datos de detalle de visitas en la web, personalizando el script
                de Google Analytics.
              </li>
              <li>
                Reducí el tiempo de creación de nuevos productos en un 30%,
                desarrollando templates y componentes reutilizables.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Dau Holding">
          <h2>Mi experiencia en Dau Holding</h2>
          <p>
            Junto al equipo de diseño desarrollamos una plataforma para
            desarrollar el "II Congreso Internacional de Logoterapia Lima Perú -
            2021". Contamos con más de 50 expositores, más de 300 alumnos, y 3
            salas habilitadas para 3 días de evento.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Implementé un chat en tiempo real para la comunicación entre los
                asistentes.
              </li>
              <li>
                Mejoré la gestión de los participantes en un 80% al crear un
                dashboard para la creación, gestión y administración de los
                participantes.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="WalikyTI">
          <h2>Mi experiencia en WalikyTI</h2>
          <p>
            Mejoramos la presencia digital de empresas públicas y privadas
            brindando apoyo en desarrollo de software, posicionamiento web e
            infraestructura en la nube.
          </p>
          <br />
          <div>
            <h3>Logros destacados:</h3>
            <ul>
              <li>
                Incrementamos la comunicación entre el equipo y su público
                específico.
              </li>
              <li>
                Integramos una plataforma educativa utilizada por más de 50
                estudiantes diariamente.
              </li>
              <li>
                Desarrollé un generador de mapas a partir de su longitud y
                latitud, mejorando en un 100% la ubicación, utilizando la API
                REST de Google Maps.
              </li>
            </ul>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </section>
  );
};

export default Experience;
