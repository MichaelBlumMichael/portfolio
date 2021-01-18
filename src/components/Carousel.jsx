import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Cards from "./Cards";

import Photo1 from "../assets/images/1design.png";
import Photo2 from "../assets/images/2design.png";
import Photo3 from "../assets/images/3design.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Tennis Magnet",
          subtitle:
            "An e-shop website for tennis equipment - PHP Laravel bootstrap css mySQL",
          imgSrc: Photo1,
          link: "http://tennis.michael-blum-playground.com",
          selected: false,
        },
        {
          id: 1,
          title: "Paris Perfect",
          subtitle: "A blog about the city of lights - PHP, css3, mySQL",
          imgSrc: Photo2,
          link: "http://paris.michael-blum-playground.com/",
          selected: false,
        },
        {
          id: 2,
          title: "Movie Search",
          subtitle: "A movie search engin using React, css and an API",
          imgSrc: Photo3,
          link: "https://michaelblummichael.github.io/react-movie-search/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Cards
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row className="justify-content-around">
            {this.makeItems(this.state.items)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Carousel;
