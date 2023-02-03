import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAIL_USER
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();

    setSent(true);

    setTimeout(() => setSent(false), 5000);
  }

  const asterisk = <span className="contact_requiredAsterisk">*</span>;

  return (
    <div className="contact">
      <div className="page">
        <div className="container">
          <div className="row position">
            <form className="contact__form" onSubmit={sendEmail}>
              <div className="contact__formContainer">
                <div className="contact__inputLabelContainer">
                  <span className="contact__label first">Name {asterisk}</span>
                  <input
                    className="contact__input"
                    label="Name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="contact__inputLabelContainer">
                  <span className="contact__label">
                    Email address {asterisk}
                  </span>
                  <input
                    className="contact__input"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="contact__inputLabelContainer">
                  <span className="contact__label">Message {asterisk}</span>
                  <textarea
                    className="contact__input textarea"
                    rows={7}
                    type="text"
                    name="message"
                    required
                  />
                </div>
                <div className="contact__inputLabelContainer">
                  <button className="contact__label contact__input button">
                    Send
                  </button>
                  {sent && (
                    <p>
                      Thanks for contacting me! I'll get in touch with you
                      shortly.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
