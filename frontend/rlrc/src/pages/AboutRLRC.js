import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/rlrc.module.css";
import Navbar from "../../src/components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../../src/components/Carousel";
import VISIONMISSION from "../static/images/VISIONMISSION.png";
import slide01 from "../static/images/경량화소재.png";
import slide02 from "../static/images/열관리소재.png";
import slide03 from "../static/images/에너지소재.png";
import slide04 from "../static/images/헬스케어소재.png";
import slide05 from "../static/images/디스플레이소재.png";
import slide06 from "../static/images/환경인식기술.png";
import slide07 from "../static/images/이중안전기술.png";
import slide08 from "../static/images/습기제어소자.png";
import slide09 from "../static/images/에너지소자.png";
import materialIcon from "../static/materialIcon.png";

import ContentBar from "../../src/components/ContentBar";
import ContentIndex from "../../src/components/ContentIndex";
import styled from "styled-components";

const materialImages = [
  {
    id: 1,
    src: slide01,
  },
  {
    id: 2,
    src: slide02,
  },
  {
    id: 3,
    src: slide03,
  },
  {
    id: 4,
    src: slide04,
  },
  {
    id: 5,
    src: slide05,
  },
];

const partImages = [
  {
    id: 1,
    src: slide06,
  },
  {
    id: 2,
    src: slide07,
  },
  {
    id: 3,
    src: slide08,
  },
  {
    id: 4,
    src: slide09,
  },
  {
    id: 5,
    src: slide05,
  },
];

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
      <main className={styles.main}>
        <Navbar />
        <ContentBar setShow={setShowContent} />
        {showContent && (
          <ContentIndex setShow={setShowContent} isShow={showContent} />
        )}
        <div className={styles.selectionbar}>
          <div className={styles.selection_line_white} />
          <div className={styles.selection_line_grey} />
          <ul className={styles.selectionbar_menu}>
            <StyledLink
              to="/AboutRLRC"
              id={styles.selectbar_content}
              className="select_rlrc"
              style={{
                textDecoration: "none",
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
              }}
            >
              RESEARCH
            </StyledLink>
            <StyledLink
              to="/NewNotice"
              id={styles.selectbar_content}
              className="select_new_notice"
              style={{
                textDecoration: "none",
              }}
            >
              NEW & NOTICE
            </StyledLink>
          </ul>
        </div>
        <div className={styles.vision_mission} id="vision_mission">
          <img
            src={VISIONMISSION}
            style={{ width: "1920px", height: "1101px" }}
          />
        </div>
        <div className={styles.material_group} id="material">
          <img
            src={materialIcon}
            style={{
              position: "absolute",
              top: "80px",
              left: "750px",
              width: "217px",
              height: "216px",
            }}
          />
          <h4 className={styles.material_title}>소재그룹</h4>
          <div className={styles.meterial_carousel}>
            <Carousel images={materialImages}></Carousel>
          </div>
        </div>
        <div className={styles.part_group} id="part">
          <p className={styles.part_title}>부품그룹</p>
          <img
            src={materialIcon}
            style={{
              position: "absolute",
              top: "-70px",
              left: "750px",
              width: "217px",
              height: "216px",
            }}
          />

          <div className={styles.part_contents}></div>
          <div className={styles.part_carousel}>
            <Carousel images={partImages}></Carousel>
          </div>
        </div>
      </main>
      <footer
        style={{
          position: "relative",
          top: "4000px",
        }}
      >
        <Footer />
      </footer>
    </>
  );
}
const StyledLink = styled((props) => <Link {...props} />)`
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;
