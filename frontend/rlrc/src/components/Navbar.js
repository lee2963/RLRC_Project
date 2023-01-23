import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutRLRC from "../pages/AboutRLRC";
import NewNotice from "../pages/NewNotice";
import Research from "../pages/Research";
import ResearchOutcomes from "../pages/ResearchOutcomes";
import logo from "../static/logo.png";
import styles from "../styles/navbar.module.css";

export default function Navbar(props) {
  const [isClick, setIsClick] = useState(false);
  const contentBar = props;
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
        <img
          src={logo}
          style={{
            position: "absolute",
            // top: "60px",
            left: "205px",
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
          className="research"
          to="/Research"
          style={{ textDecoration: "none" }}
          element={<Research />}
        >
          RESEARCH
        </Link>
        <Link
          id={styles.navbar_content}
          className="researchOutcomes"
          to="/ResearchOutcomes"
          style={{ textDecoration: "none" }}
          element={<ResearchOutcomes />}
        >
          OUTCOMES
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
    </div>
  );
}
