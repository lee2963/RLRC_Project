import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import logo from "../static/logo.png";
import AboutRLRC from "../pages/AboutRLRC";
import Research from "../pages/Research";
import NewNotice from "../pages/NewNotice";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <img
          src={logo}
          style={{
            position: "absolute",
            top: "60px",
            width: "110px",
            height: "38px",
          }}
        />
      </h1>
      <div className={styles.navbar_menu}>
        <Link
          id={styles.navbar_content}
          to="/AboutRLRC"
          style={{ textDecoration: "none" }}
          element={<AboutRLRC />}
        >
          ABOUT RLRC
        </Link>
        <Link
          id={styles.navbar_content}
          className="rearch"
          to="/Research"
          style={{ textDecoration: "none" }}
          element={<Research />}
        >
          RESEARCH
        </Link>
        <Link
          id={styles.navbar_content}
          className="newNotice"
          to="/NewNotice"
          style={{ textDecoration: "none" }}
          element={<NewNotice />}
        >
          NEW & NOTICE
        </Link>
      </div>
    </nav>
  );
}
