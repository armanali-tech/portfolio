import React from 'react';
import '../assets/styles.scss';
import portrait from '../assets/img/system.jpg'

const AboutMe = (props) => {


    return (
        <div>
            <main id="about">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me </span>
                </h1>
                <h2 className="sm-heading">
                    Let me tell you a few things...
                </h2>
                <div className="about-info">
                    <img src={portrait} alt="Arman Ali" className="bio-image" />
                    <div className="bio">
                        <h3 className="text" style={{ fontWeight: 'bold', marginBottom: '1rem' }}>BIO</h3>
                        <p> I'm a versatile MERN Full Stack Web Developer with 5+ years of professional exposure in JavaScript technology such as ReactJs, MongoDB, ExpressJs, and NodeJs.</p>
                        <p> I've good understanding of document object model (DOM) and DOM functions. Extensive use of Node environment using NPM, Yarn, and Mongo DB along with Mongoose to create server-side applications and wrote MapReduce program to sort the words in a file.
                            Expertise in creating user validation forms and using RESTful services for sending the data to the server.
                            Expertise in developing web pages using ReactJs, HTML5, CSS3, SASS, Object-Oriented JavaScript, ES6, JQuery, AJAX, JSON, XML.
                        </p>
                        <p> Highly innovative, passionate, and straight-shooting web developer with high proficiencies in problem-solving, coding, and designing.</p>
                        <p> I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction.</p>
                    </div>
                    <div className="job job-1">
                        <h3>Web Design</h3>
                        <h6> * * * </h6>
                        <p>
                            Designing for the web is not a job it's a lifestyle. As technology changes so does the challenge.
                            I create successful responsive websites that are fast, easy to use, and built with best practices.
                        </p>
                    </div>
                    <div className="job job-2">
                        <h3>Frontend Developer</h3>
                        <h6> * * * </h6>
                        <p>
                            I love bringing designs to life in The front-end using HTML5, CSS3, React JS, jQuery and Bootstrap to build a single page web app that communicate with back-end via RESTful API.
                        </p>
                    </div>
                    <div className="job job-3">
                        <h3>Full Stack Developer</h3>
                        <h6> * * * </h6>
                        <p>
                            I design user friendly, intuitive interfaces allowing users to focus on the task and not the tool.
                            The back-end use of Node JS, Express JS, MongoDB and Mongoose, the complete MERN Stack to provide RESTful API.
                        </p>
                    </div>
                </div>
            </main>
        </div >
    )
}

export default AboutMe;