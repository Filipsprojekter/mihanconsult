import React from "react";
import ContactSection from "./contact-section";
import Menubar from "./Menubar";
import ContactInfo from "./contact-info-section";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="content">
         
        <ContactSection />
        <ContactInfo />
        
      </div>
    );
  }
}

export default App;
