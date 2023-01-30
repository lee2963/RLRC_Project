import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import styles from "../styles/research.module.css";

import introduction7 from "../static/images/강미숙교수님.png";
import introduction8 from "../static/images/강석원교수님.png";
import introduction5 from "../static/images/김해경교수님.png";
import introduction2 from "../static/images/노준석교수님.png";
import introduction3 from "../static/images/박주현교수님.png";
import introduction4 from "../static/images/전상민교수님.png";
import introduction6 from "../static/images/정호열교수님.png";
import introduction1 from "../static/images/주상우교수님.png";

import slide01 from "../static/images/경량화소재.png";
import slide05 from "../static/images/디스플레이소재.png";
import slide08 from "../static/images/습기제어소자.png";
import slide09 from "../static/images/에너지소자.png";
import slide03 from "../static/images/에너지소재.png";
import slide02 from "../static/images/열관리소재.png";
import slide07 from "../static/images/이중안전기술.png";
import slide04 from "../static/images/헬스케어소재.png";
import slide06 from "../static/images/환경인식기술.png";
import materialIcon from "../static/materialIcon.png";

import Carousel from "../components/Carousel";
import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";

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

export default function Research() {
  const [showContent, setShowContent] = useState(false);
  const [showIntro, setShowIntro] = useState(introduction1);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const navigateTo = (professor) => {
    navigate("/ResearchField", { state: professor });
  };

  return (
    <>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <main className={styles.main}>
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
                color: "rgba(221, 221, 221, 0.674)",
              }}
            >
              ABOUT
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
        <h2
          style={{
            position: "relative",
            left: "150px",
            width: "90%",
            marginTop: "10%",
            textAlign: "center",
            font: "normal normal bold 42px/49px sans-serif",
            letterSpacing: "0px",
            color: "#191919",
            opacity: 1,
          }}
        >
          Research Group
        </h2>
        <div className={styles.material_group} id="material">
          <div className={styles.material_title}>
            <img
              src={materialIcon}
              style={{
                position: "relative",
                left: "100px",
                top: "60px",
                width: "217px",
                height: "220px",
              }}
            />
            소재그룹
          </div>
          <div className={styles.meterial_carousel}>
            <Carousel images={materialImages}></Carousel>
          </div>
        </div>

        <div className={styles.part_group} id="part">
          {/* 여기 부분 이미지로 달라고 하기 => 글씨랑 이미지랑 위치가 고정되어야 하는데 해상도에 따라 위치가 바뀜 */}
          <div className={styles.part_title}>
            <img
              src={materialIcon}
              style={{
                position: "relative",
                left: "100px",
                top: "60px",
                width: "217px",
                height: "220px",
              }}
            />
            부품그룹
          </div>

          <div className={styles.part_carousel}>
            <Carousel images={partImages}></Carousel>
          </div>
        </div>
        <Introduction id="field">
          <IntroductionImage src={showIntro} visible={isVisible} />
          <ButtonContainer>
            <tbody>
              <tr>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction1);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Joo");
                      }}
                    >
                      Joo, Sang Woo
                    </Button>
                  </center>
                </td>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction2);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Rho");
                      }}
                    >
                      Junsuk Rho
                    </Button>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction3);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Park");
                      }}
                    >
                      Ju Hyun Park
                    </Button>
                  </center>
                </td>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction4);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Jeon");
                      }}
                    >
                      Sangmin Jeon
                    </Button>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction5);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Kyoung");
                      }}
                    >
                      Kim. Hae Kyoung
                    </Button>
                  </center>
                </td>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction6);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Youl");
                      }}
                    >
                      Jung Ho-Youl
                    </Button>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction7);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Sook");
                      }}
                    >
                      Kang, Misook
                    </Button>
                  </center>
                </td>
                <td>
                  <center>
                    <Button
                      onMouseOver={() => {
                        setIsVisible(false);
                        setTimeout(() => {
                          setShowIntro(introduction8);
                          setIsVisible(true);
                        }, 300);
                      }}
                      onClick={() => {
                        navigateTo("Won");
                      }}
                    >
                      Seokwon Kang
                    </Button>
                  </center>
                </td>
              </tr>
            </tbody>
          </ButtonContainer>
        </Introduction>
      </main>
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

const SelectionBarCotainer = styled.div`
  position: absolute;
  float: left;
  top: 250px;
  left: 200px;
  width: auto;
  height: auto;
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

const CardComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  width: auto;
`;
const Introduction = styled.div`
  position: relative;
  top: 405px;
  width: 100%;
  background: #f0f0f0 0% 0% no-repeat padding-box;
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const IntroductionImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  opacity: ${(props) => (props.visible ? 1 : 0.5)};
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: opacity 0.1s ease;
`;
const ButtonContainer = styled.table`
  position: absolute;
  margin-left: 3%;
  left: 50%;
  top: 50%;
  width: 45%;
  height: 27vw;
`;
const Button = styled.button`
  width: 80%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  text-align: center;
  vertical-align: center;
  border-width: 0px;
  font: normal normal bold 1.3vw sans-serif;
  letter-spacing: 0px;
  color: black;
  opacity: 1;
  &:hover {
    background-color: #3561f5;
    color: white;
  }
`;
const OutComes = styled.div`
  position: absolute;
  top: 4000px;
  width: 1920px;
  height: 1150px;
`;
const ThesisButton = styled.button`
  position: absolute;
  top: 620px;
  left: 0px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "thesis" ? "#ffffff" : "#447bfb"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "thesis" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;
const PatenteButton = styled.button`
  position: absolute;
  top: 620px;
  left: 960px;
  width: 960px;
  height: 186px;
  background: 0% 0% no-repeat padding-box;
  background-color: ${(props) =>
    props.content === "thesis" ? "#447bfb" : "#ffffff"};
  opacity: 1;

  font: var(--unnamed-font-style-normal) normal bold 33px/70px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px sans-serif;
  letter-spacing: 0px;
  color: ${(props) => (props.content === "patent" ? "#447bfb" : "#ffffff")};
  text-transform: uppercase;
  opacity: 1;
  text-align: center;
  border-style: none;
`;

const ThesisContainer = styled.div`
  position: absolute;
  top: 5000px;
  left: 335px;
  height: 1400px;
  width: 1250px;
`;
const PatentContainer = styled.div`
  position: absolute;
  top: 5000px;
  left: 335px;
  height: 1400px;
  width: 1250px;
`;

const TabList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 750px;
`;
const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 125px;
  height: 46px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 17px/30px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 17px/30px sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: var(--unnamed-color-447bf7) 0% 0% no-repeat padding-box;
  background: #447bf7 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 10px;
`;
const Cases = styled.div`
  width: 53px;
  height: 28px;
  border-radius: 10px;
  font: var(--unnamed-font-style-normal) normal bold 15px/30px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: center;
  font: normal normal bold 15px/30px sans-serif;
  letter-spacing: 0px;
  color: #447bf7;
  opacity: 1;
  background-color: white;
`;
const Search = styled.input`
  position: relative;
  top: -47px;
  left: 756px;
  width: 472px;
  height: 46px;
  background: #d3d3d35c 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  padding-left: 20px;
`;
const Icon = styled.img`
  position: relative;
  top: -38px;
  left: 718px;
  width: 25px;
  height: 25px;
`;
const Table = styled.table`
  position: absolute;
  width: 1250px;
  height: 84px;
  opacity: 1;
  border-spacing: 0px;
  border-top: 2px solid #414ffd;
  border-bottom: 2px solid #447bf7;
`;
const TableTitle = styled.tr`
  height: 84px;
  text-align: center;
  vertical-align: middle;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  opacity: 1;
  text-align: center;
  font: normal normal bold 20px/28px sans-serif;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const TableRow = styled.tr`
  background-color: white;
  text-align: center;
  vertical-align: middle;
  height: 117px;
`;
const TableData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  border-right: none;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  &:link {
    color: white;
  }
  text-decoration: none;
`;
