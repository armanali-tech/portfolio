import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import work from "../assets/img/developer.webp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaArrowCircleRight, FaCheckCircle } from "react-icons/fa";

const AboutMe = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me </span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <Image className="bio-image" src={work} />
          <div className="bio">
            <h3
              className="text"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              BIO - Who's this guy?
            </h3>

            <p>
              {" "}
              I’m Arman Ali, a professional and talented Full stack web
              developer from Mumbai, India. I am passionate about leveraging my
              diverse backgrounds to decipher challenging problems and create
              delightful experiences. I specialize in building applications
              specific to the business needs of my clients. I have done work in
              web development, mobile app creation, front-end/back-end web,
              database/server management and AWS services.{" "}
            </p>
            <p>
              {" "}
              Since beginning my journey I've been building stuff on the web
              over 7+ years, I've worked at start-ups, tech companies and
              corporate on a range of different projects, including design
              systems, websites and apps to create digital products for both
              business and consumer use. I've done remote work for clients and
              agencies across various countries and industries.{" "}
            </p>
            <p>
              {" "}
              I'm quietly confident, naturally curious, and perpetually working
              on improving my coding skills, and I enjoy work that challenges me
              to learn something new and stretch in a different direction.
            </p>
          </div>
          <div className="contact-text">
            <h3 className="text">Skills I have</h3>
            <h1>My Experience </h1>
          </div>

          <div className="job job-1">
            <h3>Frontend Development</h3>
            <h6> * * * </h6>
            <div className="experience">
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>HTML5</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>CSS</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>JQuery</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>ReactJs</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="job job-2">
            <h3>Backend Development</h3>
            <h6> * * * </h6>
            <div className="experience">
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>ExpressJs</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Sequelize</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>MySql</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>RESTful API</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="job job-3">
            <h3>AWS services</h3>
            <h6> * * * </h6>
            <div className="experience">
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>EC2</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Lambda</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>AWS S3</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>Route 53</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>RDS</h4>
                  <small>Experienced</small>
                </div>
              </article>
              <article className="detail">
                <FaCheckCircle className="left-icon" />
                <div>
                  <h4>AWS SES</h4>
                  <small>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="work-btn" style={{ margin: "6.5rem 0" }}>
          <button
            className="form-button"
            type="button"
            onClick={() => router.push("/contact")}
          >
            <span>Get in touch</span> <FaArrowCircleRight className="arrow" />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
