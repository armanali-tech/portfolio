import React, { useState } from "react";
// import '../assets/styles.scss';
import admin from "../assets/img/projects/admin.png";
import expertrons from "../assets/img/projects/expertrons.png";
import explogin from "../assets/img/projects/explogin.png";
import mentor from "../assets/img/projects/mentor.png";
import lobby from "../assets/img/projects/lobby.png";
import pocket from "../assets/img/projects/pocket.png";
import profile from "../assets/img/projects/profile.png";
import plancess from "../assets/img/projects/plancess.png";
import cross from "../assets/img/projects/cross.svg";

import Modal from "react-modal";

const Work = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
    },
  };

  const modal = (param) => {
    let img = admin;

    if (selected === 1) {
      img = admin;
    } else if (selected === 2) {
      img = expertrons;
    } else if (selected === 3) {
      img = explogin;
    } else if (selected === 4) {
      img = mentor;
    } else if (selected === 5) {
      img = lobby;
    } else if (selected === 6) {
      img = pocket;
    } else if (selected === 7) {
      img = profile;
    } else if (selected === 8) {
      img = plancess;
    } else img = expertrons;

    return (
      <Modal
        className="dialog"
        style={customStyles}
        isOpen={modalOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalOpen(false)}
        shouldCloseOnEsc={true}
      >
        <div className="modal-area">
          <button className="close-btn" onClick={() => setModalOpen(false)}>
            <img className="close-cross" src={cross} alt="no" />
          </button>
          <div>
            <img
              className="selective-img"
              src={img}
              // onClick={() => setModalOpen(false)}
              alt="no"
            />
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary"> Work </span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <span>
              <img
                src={admin}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(1);
                }}
              />
            </span>
            <span href="?!" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </span>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={expertrons}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(2);
                }}
              />
            </span>
            <a
              href="https://app.expertrons.com/"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={explogin}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(3);
                }}
              />
            </span>
            <a
              href="https://app.expertrons.com/sign-in"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={mentor}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(4);
                }}
              />
            </span>
            <a
              href="https://app.expertrons.com/"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={lobby}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(5);
                }}
              />
            </span>
            <a
              href="https://www.pocket52.com/"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={pocket}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(6);
                }}
              />
            </span>
            <a
              href="https://www.pocket52.com/"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={profile}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(7);
                }}
              />
            </span>
            <a
              href="https://www.pocket52.com/"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
          <div className="item">
            <span>
              <img
                src={plancess}
                alt="Projects"
                onClick={() => {
                  setModalOpen(true);
                  setSelected(8);
                }}
              />
            </span>
            <a
              href="https://www.plancess.com/products"
              className="btn-light"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-eye"></i> Project
            </a>
            <span href="?!" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </span>
          </div>
        </div>
      </main>
      {modal()}
    </div>
  );
};

export default Work;