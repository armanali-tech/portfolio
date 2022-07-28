import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutMe = (props) => {
  return (
    <div>
      <Navbar />
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me </span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="contact-text">
          <h3
            className="text"
            style={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Get In Touch
          </h3>
          <p>
            I’m always open to discussing product development work or
            partnership opportunities, my inbox is always open.
          </p>
          <p>
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </p>
        </div>

        <div className="form-row mr-rem mt-rem">
          <div className="boxes">
            <div>
              <span className="text-secondary"> Email: </span>
              armanali.inno@gmail.com
            </div>
            <div>
              <span className="text-secondary"> Phone: </span>
              +91 8169 567 599
            </div>
            <div>
              <span className="text-secondary"> Address: </span>
              Sion(E), Mumbai 400022
            </div>
          </div>

          <form
            className="form-field"
            action="https://formspree.io/f/mrgrnpnj"
            method="POST"
            target="_blank"
            rel="noreferrer"
          >
            <div className="form-row">
              <input
                className="form-input mr-rem"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="form-input"
                type="email"
                name="_replyto"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="form-input"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="form-input msg"
              type="text"
              name="massage"
              placeholder="Message"
              required
            />
            <button className="form-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
