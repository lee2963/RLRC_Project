import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/research.module.css";
import styled, { keyframes } from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import smallImage1 from "../static/images/습기제어기술(1).png";
import largeImage1 from "../static/images/습기제어기술(2).png";
import smallImage2 from "../static/images/친환경경량화(1).png";
import largeImage2 from "../static/images/친환경경량화(2).png";
import smallImage3 from "../static/images/열관리(1).png";
import largeImage3 from "../static/images/열관리(2).png";
import smallImage4 from "../static/images/에너지 소재(1).png";
import largeImage4 from "../static/images/에너지 소재(2).png";
import smallImage5 from "../static/images/홀로그램 디스플레이(1).png";
import largeImage5 from "../static/images/홀로그램 디스플레이(2).png";
import smallImage6 from "../static/images/능동차체(1).png";
import largeImage6 from "../static/images/능동차체(2).png";
import smallImage7 from "../static/images/주행환경인식(1).png";
import largeImage7 from "../static/images/주행환경인식(2).png";
import smallImage8 from "../static/images/횡종방향(1).png";
import largeImage8 from "../static/images/횡종방향(2).png";

import introduction1 from "../static/images/주상우교수님.png";
import introduction2 from "../static/images/노준석교수님.png";
import introduction3 from "../static/images/박주현교수님.png";
import introduction4 from "../static/images/전상민교수님.png";
import introduction5 from "../static/images/김해경교수님.png";
import introduction6 from "../static/images/정호열교수님.png";
import introduction7 from "../static/images/강미숙교수님.png";
import introduction8 from "../static/images/강석원교수님.png";

import ContentBar from "../components/ContentBar";
import ContentIndex from "../components/ContentIndex";

export default function Research() {
  const [showContent, setShowContent] = useState(false);
  const [showIntro, setShowIntro] = useState(introduction1);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const navigateTo = (professor) => {
    navigate("/ResearchField", { state: professor });
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <ContentBar setShow={setShowContent} />
      {showContent && (
        <ContentIndex setShow={setShowContent} isShow={showContent} />
      )}
      <>
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
        <Introduction id="field">
          <IntroductionImage src={showIntro} visible={isVisible} />
          <ButtonContainer>
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
          </ButtonContainer>
        </Introduction>
        {/* <OutComes id="outcomes">
          <img src={researchOutcomes} width="1920px" />
          <ThesisButton
            onClick={() => {
              setContent("thesis");
            }}
            content={content}
            id="new_notice"
          >
            THESIS
          </ThesisButton>
          <PatenteButton
            onClick={() => {
              setContent("patent");
            }}
            content={content}
          >
            PATENT
          </PatenteButton>
        </OutComes>
        {content === "thesis" ? (
          <>
            <ThesisContainer>
              <TabList>
                <Tab>
                  전체<Cases>200건</Cases>
                </Tab>
                <Tab>
                  2023<Cases>50건</Cases>
                </Tab>
                <Tab>
                  2022<Cases>50건</Cases>
                </Tab>
                <Tab>
                  2021<Cases>50건</Cases>
                </Tab>
                <Tab>
                  2020<Cases>50건</Cases>
                </Tab>
              </TabList>
              <Search placeholder="검색" onChange={changeSearch} />
              <Icon src={SearchIcon} onClick={handleSubmit}></Icon>
              <Table border={1}>
                <TableTitle>
                  <TableData>No</TableData>
                  <TableData>Year</TableData>
                  <TableData>Title</TableData>
                  <TableData>Authors</TableData>
                  <TableData>Journal</TableData>
                  <TableData>IF</TableData>
                  <TableData>JCI</TableData>
                  <TableData>DOI</TableData>
                </TableTitle>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
              </Table>
            </ThesisContainer>
            {posts && (
              <footer
                style={{
                  position: "relative",
                  right: "50px",
                  top: "2080px",
                }}
              >
                <Pagination
                  total={posts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={posts.size}
                />
              </footer>
            )}
          </>
        ) : (
          <>
            <PatentContainer>
              <TabList>
                <Tab>
                  전체<Cases>200건</Cases>
                </Tab>
                <Tab>
                  2023<Cases>50건</Cases>
                </Tab>
                <Tab>
                  2022<Cases>50건</Cases>
                </Tab>
                <Tab>
                  2021<Cases>50건</Cases>
                </Tab>
                <Tab>
                  2020<Cases>50건</Cases>
                </Tab>
              </TabList>
              <Search placeholder="검색" onChange={changeSearch} />
              <Icon src={SearchIcon} onClick={handleSubmit}></Icon>
              <Table>
                <TableTitle>
                  <TableData>No</TableData>
                  <TableData>Year</TableData>
                  <TableData>Title</TableData>
                  <TableData>Authors</TableData>
                  <TableData>Journal</TableData>
                  <TableData>IF</TableData>
                  <TableData>JCI</TableData>
                  <TableData>DOI</TableData>
                </TableTitle>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
                <TableRow>
                  <TableData>1</TableData>
                  <TableData>2020</TableData>
                  <TableData>titleContent</TableData>
                  <TableData>AuthorsContent</TableData>
                  <TableData>JournalContent</TableData>
                  <TableData>IFContent</TableData>
                  <TableData>JCIContent</TableData>
                  <TableData>DOIContent</TableData>
                </TableRow>
              </Table>
            </PatentContainer>
            {posts && (
              <footer
                style={{
                  position: "relative",
                  right: "50px",
                  top: "2080px",
                }}
              >
                <Pagination
                  total={posts.totalPages}
                  page={page}
                  setPage={setPage}
                  pageSize={posts.size}
                />
              </footer>
            )}
          </>
        )} */}
      </>
    </main>
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

const Image = styled.img`
  position: relative;
  width: 207px;
  height: 723px;
  padding: 10px;
  object-fit: cover;
  transition-duration: 0.25s;
  &:hover {
    width: 345px;
    /* transform: scaleX(1.5); */
    /* justify-content: space-around; */
  }
`;

const CardComponent = styled.div`
  height: 735px;
`;
const Introduction = styled.div`
  position: absolute;
  top: 2642px;
  width: 1920px;
  height: 1150px;
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
  width: 1012px;
  height: 1150px;
  object-fit: cover;
  z-index: 10;
  opacity: ${(props) => (props.visible ? 1 : 0.5)};
  z-index: 15;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 0.5s ease-in-out;
  transition: opacity 0.1s ease;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 651px;
  left: 1192px;
  flex-wrap: wrap;
  width: 800px;
`;
const Button = styled.button`
  left: 300px;
  width: 233px;
  height: 68px;
  margin-left: 42px;
  margin-bottom: 41px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  text-align: center;
  vertical-align: center;
  border-width: 0px;
  font: normal normal bold 22px/25px Roboto;
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
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
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
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal bold 33px/70px Roboto;
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
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 17px/30px Roboto;
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
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-447bf7);
  text-align: center;
  font: normal normal bold 15px/30px Roboto;
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
  font: var(--unnamed-font-style-normal) normal medium 20px /
    var(--unnamed-line-spacing-28) var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal bold 20px/28px Roboto;
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
  &:hover {
    color: #447bf7;
  }
  &:link {
    color: white;
  }
  text-decoration: none;
`;
