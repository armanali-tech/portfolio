import React, { useState } from 'react';
import '../assets/styles.scss';
import pocket from '../assets/img/projects/pocket.png';
import Modal from 'react-modal';

const Work = (props) => {
    const [modalOpen, setModalOpen] = useState(false)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        },
    };

    console.log('-->', modalOpen);
    return (
        <div>
            <main id="work">
                <h1 className="lg-heading">
                    My <span className="text-secondary"> Work </span>
                </h1>
                <h2 className="sm-heading">
                    Check out some of my projects...
                </h2>
                <div className="projects">
                    <div className="item">
                        <span>
                            <img src={pocket} alt="Projects" onClick={() => setModalOpen(true)} />
                        </span>
                        <span href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </span>
                        <span href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </span>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src={pocket} alt="Projects" />
                        </a>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"></i> Project
                        </a>
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"></i> Github
                        </a>
                    </div>

                    <div>
                        <Modal
                            className="dialog"
                            style={customStyles}
                            isOpen={modalOpen}
                            ariaHideApp={false}
                            onRequestClose={() => setModalOpen(false)}
                        >
                            <img
                                className="selective-img"
                                src={pocket}
                                // onClick={() => setModalOpen(false)}
                                alt="no"
                            />
                        </Modal>
                    </div>

                </div>
            </main>
        </div >
    )
}

export default Work;