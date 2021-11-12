import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import About from './about';
import Work from './work';
import Contact from './contact';
import '../assets/styles.scss';

// const element = 

const MyProfile = (props) => {
    // Set initial state of menu
    const [showMenu, setShowMenu] = useState(false)
    const [showHome, setShowHome] = useState(true)
    const [showAbout, setShowAbout] = useState(false)
    const [showWork, setShowWork] = useState(false)
    const [showContact, setShowContact] = useState(false)

    function toggleMenu() {
        // Select DOM Items
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const menuBranding = document.querySelector('.menu-branding');
        const navItem = document.querySelectorAll('.nav-item');

        function hideMenu() {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItem.forEach(item => item.classList.add('show'))

            // Set Menu Sate
            setShowMenu(false);
        }

        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItem.forEach(item => item.classList.add('show'))

            // Set Menu Sate
            setShowMenu(true);

        } else hideMenu()

        setTimeout(hideMenu, 10000);
    }

    const handleRedirect = (val) => {
        let value = val
        // Select DOM Items
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const menuBranding = document.querySelector('.menu-branding');
        const navItem = document.querySelectorAll('.nav-item');
        const bgImg = document.getElementById('bg-img');

        console.log('bgImg-->', menu.classList);
        function hideMenu() {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItem.forEach(item => item.classList.add('show'))

            // Set Menu Sate
            setShowMenu(false);
        }
        setShowHome(false)

        if (value === "A") {
            setShowAbout(true)
            hideMenu()
            return bgImg.style.background = 'none'

        } else if (value === "W") {
            setShowAbout(false)
            setShowContact(false)
            setShowWork(true)
            hideMenu()
            return bgImg.style.background = 'none'

        } else if (value === "C") {
            setShowAbout(false)
            setShowWork(false)
            setShowContact(true)
            hideMenu()
            return bgImg.style.background = 'none'

        } else {
            window.location.reload()
        }
    }

    return (
        <div id="bg-img">
            <header>
                <div className="menu-btn" onClick={toggleMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className="menu">
                    <div className="menu-branding">
                        <div className="portrait"> </div>
                    </div>
                    <ul className="menu-nav">
                        <li className="nav-item current" onClick={() => handleRedirect('H')}>
                            <span className="nav-link">
                                Home
                            </span>
                        </li>
                        <li className="nav-item" onClick={() => handleRedirect('A')}>
                            <span className="nav-link">
                                About Me
                            </span>
                        </li>
                        <li className="nav-item" onClick={() => handleRedirect('W')}>
                            <span className="nav-link">
                                My Work
                            </span>
                        </li>
                        <li className="nav-item" onClick={() => handleRedirect('C')}>
                            <span className="nav-link">
                                Contact
                            </span>
                        </li>
                    </ul>
                </nav>
            </header>
            {showHome ?
                <main id="home">
                    <h1 className="lg-heading">
                        <p>Hi<span className="text-secondary">,</span></p>
                        <span className="text-secondary">I'm</span> Arman <span className="text-secondary">Ali</span>.
                    </h1>
                    <h2 className="sm-heading">
                        MERN Stack Developer * * *
                    </h2>
                    <div className="icons">
                        <a href="/#">
                            <FaTwitter className="fa-2x" />
                        </a>
                        <a href="/#">
                            <FaFacebook className="fa-2x" />
                        </a>
                        <a href="/#">
                            <FaLinkedin className="fa-2x" />
                        </a>
                        <a href="/#">
                            <FaGithub className="fa-2x" />
                        </a>
                    </div>
                </main>
                :
                showAbout ? < About /> : showWork ? <Work /> : showContact && <Contact />
            }
            <footer id="main-footer">
                Let’s make something special. Copyright &copy; 2020 
            </footer>
        </div>
    )
}

export default MyProfile;