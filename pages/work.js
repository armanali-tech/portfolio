import React, { useState } from "react";
import Footer from "../components/footer";
import admin from "../assets/img/projects/admin.png";
import expertrons from "../assets/img/projects/expertrons.png";
import explogin from "../assets/img/projects/explogin.png";
import mentor from "../assets/img/projects/mentor.png";
import lobby from "../assets/img/projects/lobby.png";
import pocket from "../assets/img/projects/pocket.png";
import profile from "../assets/img/projects/profile.png";
import plancess from "../assets/img/projects/plancess.png";
import cross from "../assets/img/projects/cross.svg";
import Navbar from "../components/navbar";
import Image from "next/image";
import { FaChevronCircleRight, FaEye } from "react-icons/fa";
import Modal from "react-modal";

const WorkProjects = () => {
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
            <Image className="close-cross" src={cross} width={20} height={20} />
          </button>
          <div>
            <Image
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
      <Navbar />
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary"> Work </span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <span
              onClick={() => {
                setModalOpen(true);
                setSelected(1);
              }}
              className="pro-img"
            >
              <Image src={admin} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <span href="?!" className="btn-light">
              Visit Website
              <FaChevronCircleRight className="fa" />
            </span>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(2);
              }}
            >
              <Image src={expertrons} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://app.expertrons.com/"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(3);
              }}
            >
              <Image src={explogin} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://app.expertrons.com/sign-in"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(4);
              }}
            >
              <Image src={mentor} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://app.expertrons.com/"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(5);
              }}
            >
              <Image src={lobby} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://www.pocket52.com/"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(6);
              }}
            >
              <Image src={pocket} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://www.pocket52.com/"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(7);
              }}
            >
              <Image src={profile} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://www.pocket52.com/"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
          <div className="item">
            <span
              className="pro-img"
              onClick={() => {
                setModalOpen(true);
                setSelected(8);
              }}
            >
              <Image src={plancess} alt="Projects" />
              <FaEye className="eye" />
            </span>
            <a
              href="https://www.plancess.com/products"
              className="btn-light"
              target="_blank"
            >
              Visit Website
              <FaChevronCircleRight className="fa" />
            </a>
          </div>
        </div>
      </main>
      {modal()}
      <Footer />
    </div>
  );
};

export default WorkProjects;
