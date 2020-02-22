import React from 'react';
import './contact-info-section.css';


class ContactInfo extends React.Component{

    state ={}


    render(){
        return(
            <div className="contact-info">
                <div className="card">
                    <i className="card-icon far fa-envelope"></i>
                    <p>info@mihanelconsult.com</p>
                </div>
                <div className="card">
                    <i className="card-icon fas fa-phone"></i>
                    <p>+45 1234 5678</p>
                </div>
                <div className="card">
                    <i className="card-icon fas fa-map-marker-alt"></i>
                    <p>Copenhagen, Denmark</p>
                </div>
            </div>
        )
    }
}

export default ContactInfo;