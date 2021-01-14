import React from "react";
import Axios from "axios";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      disabled: true,
    });

    Axios.post("http://localhost:3900/api/message", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: true,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log("here");
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Button
              className="display-inline-block"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>
            {this.state.emailSent === true && (
              <p className="d-inline success-message">Message sent!</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline error-message">Message NOT sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
