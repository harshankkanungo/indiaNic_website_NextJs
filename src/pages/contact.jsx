import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-container">
      <Navbar />
      <main className="contact-main">
        <section className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Feel free to reach out to us through the form below or contact us
            directly via email or phone.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <h2>Email</h2>
              <p>hello@indianic.com</p>
            </div>
            <div className="contact-detail">
              <h2>Call</h2>
              <p>+91 79 6191 6000 - India</p>
              <p>+971 4 834 2243 - UAE</p>
              <p>+1 (424) 283 4679 - USA</p>
              <p>+61 (02) 8317 1138 - Australia</p>
            </div>
          </div>
          <a href="#contact-form" className="cta-button">
            Get Free Estimation
          </a>
        </section>
        <section id="contact-form" className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
          {submitted && (
            <div className="confirmation-message">
              <p>Your message has been submitted!</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
