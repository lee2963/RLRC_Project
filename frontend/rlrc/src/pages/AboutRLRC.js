import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import partners from "../static/images/협력기관.png";
import partnersList from "../static/images/협력기관목록.png";
import styles from "../styles/rlrc.module.css";

import styled from "styled-components";
import ContentBar from "../../src/components/ContentBar";
import ContentIndex from "../../src/components/ContentIndex";

import smallImage6 from "../static/images/능동차체(1).png";
import largeImage6 from "../static/images/능동차체(2).png";
import smallImage1 from "../static/images/습기제어기술(1).png";
import largeImage1 from "../static/images/습기제어기술(2).png";
import smallImage4 from "../static/images/에너지 소재(1).png";
import largeImage4 from "../static/images/에너지 소재(2).png";
import smallImage3 from "../static/images/열관리(1).png";
import largeImage3 from "../static/images/열관리(2).png";
import smallImage7 from "../static/images/주행환경인식(1).png";
import largeImage7 from "../static/images/주행환경인식(2).png";
import smallImage2 from "../static/images/친환경경량화(1).png";
import largeImage2 from "../static/images/친환경경량화(2).png";
import smallImage5 from "../static/images/홀로그램 디스플레이(1).png";
import largeImage5 from "../static/images/홀로그램 디스플레이(2).png";
import smallImage8 from "../static/images/횡종방향(1).png";
import largeImage8 from "../static/images/횡종방향(2).png";

export default function AboutRLRC() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    //autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <div className={styles.main}>
        <SelectionBarCotainer>
          <div className={styles.selection_line_white} />
          <div className={styles.selection_line_grey} />
          <ul className={styles.selectionbar_menu}>
            <StyledLink
              to="/AboutRLRC"
              id={styles.selectbar_content}
              className="select_rlrc"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              ABOUT RLRC
            </StyledLink>
            <StyledLink
              to="/Research"
              id={styles.selectbar_content}
              className="slelect_research"
              style={{
                textDecoration: "none",
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              RESEARCH
            </StyledLink>
            <StyledLink
              to="/ResearchOutcomes"
              id={styles.selectbar_content}
              className="select_research_outcomes"
              style={{
                textDecoration: "none",
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              OUTCOMES
            </StyledLink>
            <StyledLink
              to="/NewNotice"
              id={styles.selectbar_content}
              className="select_new_notice"
              style={{
                textDecoration: "none",
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              NEW & NOTICE
            </StyledLink>
          </ul>
        </SelectionBarCotainer>
      </div>
      <div className={styles.vision_mission} id="vision_mission" />
      <div className={styles.key_project}>
        <h4
          className={styles.key_project_title}
          style={{ color: "black" }}
          id="key_project"
        >
          Key Project
        </h4>
        <div className={styles.key_project_contents}>
          <Card image={smallImage2} largeImage={largeImage2} />
          <Card image={smallImage3} largeImage={largeImage3} />
          <Card image={smallImage1} largeImage={largeImage1} />
          <Card image={smallImage4} largeImage={largeImage4} />
          <Card image={smallImage5} largeImage={largeImage5} />
          <Card image={smallImage6} largeImage={largeImage6} />
          <Card image={smallImage7} largeImage={largeImage7} />
          <Card image={smallImage8} largeImage={largeImage8} />
        </div>
      </div>
      <PartnersContainer id="partners">
        <Partners src={partners} />
        <Partners
          src={partnersList}
          style={{
            marginTop: "135px",
            marginLeft: "15%",
            width: "70%",
            height: "auto",
          }}
        />
      </PartnersContainer>
      <div style={{ marginTop: "135px" }}>
        <Footer />
      </div>
    </>
  );
}
function Card({ image, largeImage }) {
  const [isOver, setIsOver] = useState(false);
  return (
    <CardComponent
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      {isOver ? <Image src={largeImage} /> : <Image src={image} />}
    </CardComponent>
  );
}

const CardComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  width: auto;
`;
const Image = styled.img`
  position: relative;
  width: 10vw;
  height: 40vw;
  padding: 10px;
  object-fit: cover;
  transition-duration: 0.25s;
  &:hover {
    width: 17vw;
    height: 40vw;
  }
`;
const StyledLink = styled((props) => <Link {...props} />)`
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;
const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SelectionBarCotainer = styled.div`
  position: absolute;
  float: left;
  top: 250px;
  left: 200px;
  width: auto;
  height: auto;
`;
const PartnersContainer = styled.div`
  margin-top: calc(3 * 135px);
  width: 100%;
  height: auto;
`;
const Partners = styled.img`
  width: 100%;
  height: auto;
`;
