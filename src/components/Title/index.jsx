import React from "react";
import "./style.scss";

function Title(props) {
  return (
    <div className="title">
      <div className="title__lineAfter"></div>
      <h2 className="title__text">
        {props.src ? <a href={props.src}>{props.title}</a> : props.title}
      </h2>
      <div className="title__lineBefore"></div>
    </div>
  );
}

export default Title;
