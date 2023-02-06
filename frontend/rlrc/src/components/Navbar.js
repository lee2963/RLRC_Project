import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AboutRLRC from "../pages/AboutRLRC";
import NewNotice from "../pages/NewNotice";
import Research from "../pages/Research";
import ResearchOutcomes from "../pages/ResearchOutcomes";
import logo from "../static/logo.png";
import styles from "../styles/navbar.module.css";

export default function Navbar(props) {
  const [isClick, setIsClick] = useState(false);
  const contentBar = props;
  const navigate = useNavigate();
  const toAboutRLRC = () => {
    navigate('/AboutRLRC')
  }
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
        <img
          src={logo}
          style={{
            position: "absolute",
            // top: "60px",
            left: "205px",
            width: "310px",
            height: "50px",
          }}
          onClick={toAboutRLRC}
        />
      </h1>
      <div className={styles.navbar_menu}>
        <Link
          id={styles.navbar_content}
          to="/AboutRLRC"
          style={{ textDecoration: "none" }}
          element={<AboutRLRC />}
        >
          <LinkText>ABOUT</LinkText>
        </Link>
        <Link
          id={styles.navbar_content}
          className="research"
          to="/Research"
          style={{ textDecoration: "none" }}
          element={<Research />}
        >
          <LinkText>RESEARCH</LinkText>
        </Link>
        <Link
          id={styles.navbar_content}
          className="researchOutcomes"
          to="/ResearchOutcomes"
          style={{ textDecoration: "none" }}
          element={<ResearchOutcomes />}
        >
          <LinkText> OUTCOMES </LinkText>
        </Link>
        <Link
          id={styles.navbar_content}
          className="newNotice"
          to="/NewNotice"
          style={{ textDecoration: "none" }}
          element={<NewNotice />}
        >
          <LinkText>NEW & NOTICE</LinkText>
        </Link>
      </div>
    </div>
  );
}

const LinkText = styled.span`
  font-size: 22px;
`;


