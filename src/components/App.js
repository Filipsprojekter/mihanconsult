import React from "react";
import ContactSection from "./contact-section";
import Menubar from "./Menubar";
import ContactInfo from "./contact-info-section";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="content">
         
        <Menubar left1="About" left2="Projects" right2="Manifesto" right1="Contact" />
        <ContactSection/>
        <ContactInfo/>
        
      </div>
    );
  }
}

export default App;
