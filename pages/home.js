import React from "react";
import { useRouter } from "next/router";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaArrowCircleRight,
} from "react-icons/fa";
import Typical from "react-typical";
import ParticlesBg from "particles-bg";
import Navbar from "../components/navbar";

const MyProfile = () => {
  const router = useRouter();

  return (
    <div id="container">
      <Navbar />
      <main id="home">
        <h1 className="lg-heading">
          <p>
            Hello<span className="text-secondary">,</span>
          </p>
          <span className="text-secondary">I'm</span> Arman Ali
          <span className="text-secondary">.</span>
        </h1>
        <h3 className="sm-heading">
          <Typical
            steps={[
              "Full Stack Developer ***",
              2000,
              "MERN Stack Developer ***",
              2000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h3>
        <div className="icons">
          <a href="https://twitter.com/CooldudeX18" target="_blank">
            <FaTwitter className="fa-2x" />
          </a>
          <span href="/#">
            <FaFacebook className="fa-2x" />
          </span>
          <a
            href="https://www.linkedin.com/in/arman-ali-15a098208/"
            target="_blank"
          >
            <FaLinkedin className="fa-2x" />
          </a>
          <span href="/#">
            <FaGithub className="fa-2x" />
          </span>
        </div>
        <div className="work-btn">
          <button
            className="form-button"
            type="button"
            onClick={() => router.push("/work")}
          >
            <span>View my portfolio</span>{" "}
            <FaArrowCircleRight className="arrow" />
          </button>
        </div>
      </main>
      <ParticlesBg color="#ccd6f6" type="cobweb" bg={true} />
    </div>
  );
};

export default MyProfile;
