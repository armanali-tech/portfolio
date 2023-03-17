import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer id="main-footer">
      <div>&copy; 2022 ARMAN ALI</div>
      <div className="footer-menu">
        <span onClick={() => router.push("/about")}>About</span>
        <span onClick={() => router.push("/portfolio")}>Portfolio</span>
        <span onClick={() => router.push("/contact")}>Contact</span>
      </div>
    </footer>
  );
};

export default Footer;
