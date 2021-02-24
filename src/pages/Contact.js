import ContactForm from '../components/contact/ContactForm';
import React, { Component } from 'react';


const showResults = (values) => {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};

class Contact extends Component {
    render() {
        return (
            <div style={{ padding: 15 }}> 
            <h2 style={{ textAlign: 'center'}}>Contact us</h2>
                <ContactForm onSubmit={showResults} />
            </div>
        );
    }
}

export default Contact;