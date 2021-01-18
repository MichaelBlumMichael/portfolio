import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hello, my name is Michael. I'm a full stack web developer with
          knowledge in React, NodeJS, Express JS, PHP, Laravel, MongoDB, and
          mySQL.
        </p>

        <p>
          My goal is to work at a place where I can learn and grow as a
          developer. I really look forward to work with a great team of people
          with a lot of experience and collaborate together.
        </p>

        <p>
          I'm constantly learning new things. currently those things include
          gaining more experience with MongoDB, React, Express JS, and Node JS.
        </p>
        <p>
          check out my project on my <Link to="/">Home Page!</Link>
        </p>
      </Content>
    </div>
  );
}

export default About;
