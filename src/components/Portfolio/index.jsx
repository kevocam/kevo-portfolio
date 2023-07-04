import React from "react";
import data from "../../hooks/InitialState.js";
import "./style.scss";
import { Image } from "antd";
import Card from "../Card";
import Item from "antd/lib/list/Item";

const Portfolio = () => {
  const [visible, setVisible] = React.useState(false);
  const [img1, setImg1] = React.useState("");
  const [img2, setImg2] = React.useState("");

  return (
    <section className="portfolio">
      {data.map((item, index) => (
        <Card
          key={index}
          cover={item.cover}
          title={item.project}
          description={item.description}
          images={item.images}
          stack={item.stack}
          online={item.online}
          github={item.github}
        />
      ))}
    </section>
  );
};

export default Portfolio;
