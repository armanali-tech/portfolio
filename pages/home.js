import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Typical from "react-typical";
import ParticlesBg from "particles-bg";
import Navbar from "../components/navbar";

const MyProfile = () => {
  return (
    <div id="bg-img">
      <Navbar />
      <main id="home">
        <h1 className="lg-heading">
          <p>
            Hello<span className="text-secondary">,</span>
          </p>
          <span className="text-secondary">I'm</span> Arman Ali
          <span className="text-secondary">.</span>
        </h1>
        <h2 className="sm-heading">
          <Typical
            steps={[
              "Full Stack Developer * * * ",
              2000,
              "MERN Stack Developer * * *",
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h2>
        <div className="icons">
          <a
            href="https://twitter.com/CooldudeX18"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="fa-2x" />
          </a>
          <span href="/#">
            <FaFacebook className="fa-2x" />
          </span>
          <a
            href="https://www.linkedin.com/in/arman-ali-15a098208/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="fa-2x" />
          </a>
          <span href="/#">
            <FaGithub className="fa-2x" />
          </span>
        </div>
      </main>
      <ParticlesBg color="#000000" type="cobweb" bg={true} />
      <footer id="main-footer">
        Let’s make something special. Copyright &copy; 2022.
      </footer>
    </div>
  );
};

export default MyProfile;
