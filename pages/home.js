import React, { lazy } from "react";
import Navbar from "../components/navbar";
import Particles from "../components/custom/Particles";
import AboutMe from "../components/custom/AboutMe";
import Projects from "../components/custom/Projects";
import ContactUs from "../components/custom/ContactUs";

const MyProfile = () => {
  return (
    <main>
      <Navbar />
      <Particles />
      <AboutMe />
      <Projects />
      <ContactUs />
    </main>
  );
};

export default MyProfile;
