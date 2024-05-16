import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  // validation
const validateInput = (name, value) => {
  if (!value) {
    return 'Input required.';
  } else if (name === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info)$/.test(value)) {
    return 'Please enter a valid email address.';
  }
  return '';
};
  // handles form submission for each step
const handleStepSubmit = (e) => {
e.preventDefault();
// 
const currentField = currentStep === 1 ? 'name' : currentStep === 2 ? 'email' : 'message';
const errorMessage = validateInput(currentField, formData[currentField]);

if (errorMessage) {
  setFormErrors({
    ...formErrors,// creates a new object that includes all form error messages using a spread operator
    [currentField]: errorMessage
  });
} else {
  if (currentStep < 3) {
    setCurrentStep(currentStep + 1);
  } else {
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
//using a step system to utilize usestate     
//every time the user clicks submit          
//we do validation, then move to the next step by adding +1
      setSuccessMessage("Message sent! We'll be in touch!");//no email is actually sent, i get enough spam
      setCurrentStep(1);
      }, 500);
    }
  }
};

  return (
    <section>
      <h2>Get in touch!</h2>
      <h3>Enter your information below and I will be in contact with you shortly!</h3>
      <form onSubmit={handleStepSubmit}>
        {currentStep === 1 && (
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
        )}
        {currentStep === 2 && (
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
        )}
        {currentStep === 3 && (
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <p className="error">{formErrors.message}</p>}
          </div>
        )}
        <button type="submit">Next</button>
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;

// ez ref zone
// https://www.w3schools.com/react/react_es6_spread.asp
//did not remove labels