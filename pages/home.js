import React, { lazy } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Particles from "../components/custom/Particles";
import AboutMe from "../components/custom/AboutMe";
import Projects from "../components/custom/Projects";
import ContactUs from "../components/custom/ContactUs";

const MyProfile = () => {
  const metaData = {
    title:
      "Expert Web Designer & Developer | Crafting User-Centered Experiences",
    description:
      "Check out my portfolio for innovative websites that prioritize your audience's needs. With a passion for user-centric design and cutting-edge technology, I bring your ideas to life. Discover how I can help you achieve your digital goals.",
    url: "https://www.armanali.tech/",
    image: "",
    keywords:
      "Digital Solutions, User-Centric Design, Portfolio, Web Development, UI/UX Design, Responsive Websites, People-First Approach, Customized Solutions, Innovative Designs, Client Satisfaction, JavaScript, ReactJS, NextJS, NodeJS, AWS Amplify, AWS EC2, HTML5/CSS3, Redux, RESTful APIs, Git and GitHub",
    type: "website",
  };

  return (
    <main>
      <Head>
        <title>Arman Ali | {metaData.title}</title>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta name="title" content={metaData.title} />
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />

        <meta name="type" property="og:type" content="website" />
        <meta
          name="url"
          property="og:url"
          content="https://www.kaarwan.com/blog/homepage"
        />
        <meta name="title" property="og:title" content={metaData.title} />
        <meta
          name="description"
          property="og:description"
          content={metaData.description}
        />
        {/* <meta name="image" property="og:image" content={metaData.image} /> */}
        {/* <meta property="og:image:width" content="1200" /> */}
        {/* <meta property="og:image:height" content="630" /> */}
        <meta
          name="site_name"
          property="og:site_name"
          content="Arman Ali - Portfolio"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.armanali.tech/" />
        <meta property="twitter:title" content={metaData.title} />
        <meta property="twitter:description" content={metaData.description} />
        {/* <meta property="twitter:image" content={metaData.image} /> */}

        <link rel="canonical" href="https://www.armanali.tech/" />
        {/* <link rel="image_src" href={metaData.image} /> */}
      </Head>
      <Navbar />
      <Particles />
      <AboutMe />
      <Projects />
      <ContactUs />
    </main>
  );
};

export default MyProfile;
