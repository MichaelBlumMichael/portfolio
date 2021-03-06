import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-subTitle">{props.subtitle}</p>
      <a className="btn btn-info mt-3" href={props.link} target="_blank">
        {" "}
        View Project{" "}
      </a>
    </animated.div>
  );
}

export default CardInfo;
