import React from "react";

import { Image } from "antd";
import "./style.scss";

function Card(props) {
  let imgs = props.images;
  const [visible, setVisible] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="card">
      <div className="card__img">
        <Image
          preview={{ visible: false }}
          src={props.cover}
          onClick={() => setVisible(true)}
          alt={props.stack}
        />
        <div style={{ display: "none" }}>
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            {imgs.map((item, index) => (
              <Image key={index} src={item.src} alt={item.alt} />
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="card__content">
        <div className="card__content--title">
          <h3>{props.title}</h3>
        </div>
        <div className="card__content--content">
          <p>{props.description}</p>
        </div>
        <div className="card__content--tech">
          <em>Stack:</em>
          <ul>
            {props.stack.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card__buttons">
        {props.online ? (
          <button
            type="button"
            onClick={() => window.open(props.online, "_blank")}
          >
            Ver online
          </button>
        ) : (
          ""
        )}
        {props.github ? (
          <button
            type="button"
            onClick={() => window.open(props.github, "_blank")}
          >
            Ver repositorio
          </button>
        ) : (
          ""
        )}

        {!props.github && !props.online ? (
          <button type="button" style={{ fontStyle: "italic" }}>
            No disponible
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Card;
