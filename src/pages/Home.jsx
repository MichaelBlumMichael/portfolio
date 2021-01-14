import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
function Home(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        gitHub={props.gitHub}
      />
      <Carousel />
    </div>
  );
}

export default Home;
