import React from "react";
import CardInfo from "./CardInfo";
function Cards(props) {
  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="g-card-image pointer"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Cards;
