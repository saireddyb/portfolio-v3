import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const ContactSection = () => {
  return (
    <section className="section contact-section">
      <div className="container">
        <div className="contact__inner">
          <div className="text">
            <h3>Let's Chat</h3>
            <h4>Tell me about your project.</h4>
            <p>Let's create something together</p>
            <a href="mailto:ry6131766@gmail.com" className="point">
              <div className="icon">
                <HiOutlineMail />
              </div>
              <p>
                <span>ry6131766@gmail.com</span>
                <i>Click here</i>
              </p>
            </a>
          </div>
          <div className="form">
            <h4>Send A Message</h4>
            <form action="">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="button mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
