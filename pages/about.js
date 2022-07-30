import React from "react";
import Image from "next/image";
import work from "../assets/img/developer.webp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const AboutMe = (props) => {
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
              delightful experiences. I honed my skills at web development,
              backend and AWS services.{" "}
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
          <div className="job job-1">
            <h3>Web Design</h3>
            <h6> * * * </h6>
            <p>
              Designing for the web is not a job it's a lifestyle. As technology
              changes so does the challenge. I create successful responsive
              websites that are fast, easy to use, and built with best
              practices.
            </p>
          </div>
          <div className="job job-2">
            <h3>Frontend Developer</h3>
            <h6> * * * </h6>
            <p>
              I love bringing designs to life in The front-end using HTML5,
              CSS3, React JS, jQuery and Bootstrap to build a single page web
              app that communicate with back-end via RESTful API.
            </p>
          </div>
          <div className="job job-3">
            <h3>Full Stack Developer</h3>
            <h6> * * * </h6>
            <p>
              I design user friendly, intuitive interfaces allowing users to
              focus on the task and not the tool. The back-end use of Node JS,
              Express JS, MongoDB and Mongoose, the complete MERN Stack to
              provide RESTful API.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
