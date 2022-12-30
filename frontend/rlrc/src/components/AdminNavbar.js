import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import logo from "../static/logo.png";
import AboutRLRC from "../pages/AboutRLRC";
import ResearchOutcomesAdmin from "../pages/ResearchOutcomesAdmin";
import NewNoticeAdmin from "../pages/NewNoticeAdmin";

export default function AdminNavbar() {
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
          HOME
        </Link>
        <Link
          id={styles.navbar_content}
          className="rearch"
          to="/ResearchOutcomesAdmin"
          style={{ textDecoration: "none" }}
          element={<ResearchOutcomesAdmin />}
        >
          RESEARCH OUTCOMES
        </Link>
        <Link
          id={styles.navbar_content}
          className="newNotice"
          to="/NewNoticeAdmin"
          style={{ textDecoration: "none" }}
          element={<NewNoticeAdmin />}
        >
          NEW & NOTICE
        </Link>
      </div>
    </nav>
  );
}
