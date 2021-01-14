import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Michael Blum",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "YOU ASK - I DELIVER",
        subTitle:
          "If you are looking for a web developer who is responsible, hard working and always willing to learn and grow - I am your guy!",
        text: "Check out my projects below",
      },
      about: {
        title: "About me",
      },
      contact: {
        title: "Let's talk...",
      },
    };
  }

  render() {
    return (
      <HashRouter basename="/">
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom shadow-lg"
            bg="transparent"
            expand="lg"
          >
            <Link className="nav-link" to="/">
              <Navbar.Brand className="brand">Michael Blum</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbar-hamburger"></Navbar.Toggle>
            <Navbar.Collapse aria-controls="navbar-hamburger">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <About
                title={this.state.about.title}
                subTitle={this.state.about.subtitle}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <Contact
                title={this.state.contact.title}
                subTitle={this.state.contact.subtitle}
                text={this.state.contact.text}
              />
            )}
          />
          <Footer></Footer>
        </Container>
      </HashRouter>
    );
  }
}

export default App;
