import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsloading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsloading(true);

    emailjs
      .sendForm(
        "service_j2q3nxi",
        "template_0vherca",
        form.current,
        "k8BL38mFhkajQwma3",
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
    
    
  };
  return (
    <div>
      <div id="contact" className="contact">
        <div className="ready-to-start">
          <h2>Ready To Start Your Project?</h2>
          <p>
            Have a project in mind, an idea to explore, or simply want to
            connect? Feel free to reach out through any of the contact details
            provided — I'd be happy to hear from you.
          </p>
          <button>Let's Work Together</button>
        </div>
        <div className="comment-form-center">
          <div className="comment-form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                id="email"
                required
              />

              <label htmlFor="message">MESSAGE</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        {/* <div className="contact-details">
          <div className="contact-email">
            <p>
              <FaEnvelope className="contact-icon" />{" "}
              <a href="mailto:damilarefestus12@gmail.com">
                damilarefestus12@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-phone">
            <p>
              <FaPhone className="contact-icon" />{" "}
              <a href="tel:+2349069394606">+234 906 939 4606</a>
            </p>
          </div>
          <div className="contact-location">
            <p>
              <FaMapMarkerAlt className="contact-icon" /> Lagos State, Nigeria
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
