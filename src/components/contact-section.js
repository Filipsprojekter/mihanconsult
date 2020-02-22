import React from "react";
import "./contact-section.css";

class ContactSection extends React.Component {
  state = {
    ContactName: "",
    ContactEmail: "",
    ContactMessage: "",
    textareaHeight: {}
  };

  onTextChange = event => {
    this.setState({
      textareaHeight: { height: event.target.scrollHeight + "px" }
    });
  };

  render() {
    return (
      <div className="contact-section">
        <div className="inner-width">
          <h1>Get in touch with us</h1>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            rows="1"
            className="message"
            style={this.state.textareaHeight}
            placeholder="Message"
            onChange={this.onTextChange}
          />
          <button>Get in touch</button>
        </div>
      </div>
    );
  }
}

export default ContactSection;
