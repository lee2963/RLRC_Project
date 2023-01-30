import React, { useEffect, useState } from "react";
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



  function getMap() {
    const { kakao } = window;
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.8265, 128.7542),
      level: 3
    }
    const map = new kakao.maps.Map(container, options);
    console.log("debug");
    const markerPosition = new kakao.maps.LatLng(35.8265, 128.7542);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    marker.setMap(map);

    kakao.maps.event.addListener(marker, 'click', function () {
      // 마커 위에 인포윈도우를 표시합니다
      window.open("http://kko.to/j3Y-ZcV2Rn", "", "");
    });
  }

  useEffect(() => {
    getMap();
  }, []);

  return (
    <ScrollContainer>
      <div className={styles.main}>
        <Navbar />
        <ContentBar setShow={setShowContent} />
        {showContent && (
          <ContentIndex setShow={setShowContent} isShow={showContent} />
        )}
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
              ABOUT
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
            marginTop: "50px",
            marginLeft: "24.2%",
            width: "54%",
            height: "auto",
          }}
        />
      </PartnersContainer>
      <InfoContainer>
        <MapWrapper>
          <MapTitle>오시는 길</MapTitle>
          <Map id="map"></Map>
          <AddressInfoWrapper>
            <AddressText>[38541] 경상북도 경산시 대학로 280 영남대학교 기계관 327호</AddressText>
            <TelText>TEL 053-810-1477~1478</TelText>
            <FaxText>FAX 053-810-4741</FaxText>
          </AddressInfoWrapper>
        </MapWrapper>
        <Footer />
      </InfoContainer>

    </ScrollContainer>
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

const ScrollContainer = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;

const CardComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  width: auto;
`;
const Image = styled.img`
  position: relative;
  width: 10vw;
  height: 29vw;
  padding: 10px;
  object-fit: cover;
  transition-duration: 0.25s;
  &:hover {
    width: 17vw;
    height: 29vw;
  }
`;
const StyledLink = styled((props) => <Link {...props} />)`
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
  // margin-top: calc(3 * 135px);
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  
`;

const KeyProjectContainer = styled.div`
  background-color: red;
`;

const Partners = styled.img`
  width: 100vw;
  height: 35vh;
`;

const InfoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  // background-color: green;
  align-items: center;
`;

const MapWrapper = styled.div`
  width: 75vw;
  height: 74vh;

`;

const MapTitle = styled.span`
  font: normal normal bold 33px/39px Roboto;
  color: #191919;
  margin: 40px 0 0 0;
  display: inline-block;
  
`;

const Map = styled.div`
  width: 100%;
  height: 60%;
  background-color: #c8c8c8;
  margin: 23px 0;
  
`;

const AddressInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;`;

const AddressText = styled.span`
  font: normal normal normal 20px/24px Apple SD Gothic Neo ;
  color: #707070;
  margin-bottom: 10px;
`;

const TelText = styled.span`
  font: normal normal normal 16px/24px Noto Sans CJK KR;
  letter-spacing: -0.16px;
  color: #818181;
`;

const FaxText = styled.span`
  font: normal normal normal 16px/24px Noto Sans CJK KR;
  letter-spacing: -0.16px;
  color: #818181;
`;

