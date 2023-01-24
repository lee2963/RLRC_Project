import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

import kangseokwon1 from "../static/images/kangseokwon1.png";
import nextArrow from "../static/nextArrow.png";
import prevArrow from "../static/prevArrow.png";
const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <Div className={className} onClick={onClick}>
          <PrevIcon src={prevArrow} />
        </Div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - 1 && (
        <DivPre className={className} onClick={onClick}>
          <NextIcon src={nextArrow} />
        </DivPre>
      )}
    </>
  );
};
function KangSeokWon() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <Body>
      <Container>
        <NameContainer>
          <Name>Seokwon Kang</Name>
        </NameContainer>
        <TextContainer>
          <Text>
            RESEARCH FIELD
            <Title>
              Lateral and Longitudinal Adaptive Control <br />
              Technology for Autonomous Vehicle
              <SubTitle>
                (DMP: Fail-safe Steering and AI-based Control Considering
                Vehicle Status and Road Conditions)
              </SubTitle>
            </Title>
          </Text>
        </TextContainer>
      </Container>
      <StyledSlider {...settings}>
        <Content>
          <ListNonImage
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              left: "15%",
            }}
          >
            <SmallTitleNonImage>Research Target</SmallTitleNonImage>
            <ListContent>
              Currently, autonomous vehicles are not sufficiently capable of
              performing safe steering maneuvers or coping with emergency
              situations under all types of road and vehicle conditions. Thus,
              the main objective of this study is to develop an adaptive control
              system with fail-safe electric power steering (EPS) and artificial
              intelligence (AI)-based lateral/longitudinal adaptive control
              capabilities for autonomous vehicles.
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <ListNonImage
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              left: "15%",
            }}
          >
            <SmallTitleNonImage>
              Novelty and Difficulty of Technical Approach
            </SmallTitleNonImage>
            <ListContent>
              This study requires the development of technologies in both H/W
              and S/W respects for improved safety and efficiency at an actual
              product level. Most importantly, it is challenging to mechanically
              design an EPS structure configured in parallel for equal
              distribution of required torque while simultaneously implementing
              a control algorithm to ensure the total steering angle internally.
              Furthermore, to improve reliability when implementing AI
              technology-based adaptive control algorithms, it is necessary to
              secure a considerable amount of test data; hence, collaboration
              with related organizations is vital.
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <ListNonImage
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              left: "15%",
            }}
          >
            <SmallTitleNonImage>Research Progress</SmallTitleNonImage>
            <ListContent>
              The experimental apparatus for validation of the designed control
              algorithm for the fail-safe steering device has been developed.
              The steering wheel position and torque can be measured based on
              the position control of the EPS system by considering the load
              conditions generated during driving. A lab-scale experiment has
              confirmed that continuous safe steering is possible even if a
              malfunction occurs in the one of two electric power steering (EPS)
              motors during operation in parallel. Currently, we are building a
              hardware-in-the-loop simulation (HILS) system combined with the
              CarMakerTM software program for vehicle dynamics simulation; this
              will enable us to analyze the reliability and safety of the
              developed algorithm in actual driving environments.
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <ListNonImage
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              left: "15%",
            }}
          >
            <SmallTitleNonImage>Research Plan</SmallTitleNonImage>
            <ListContent>
              Stage 1 (Year 1 – 4): Design of a fail-safe control algorithm for
              an EPS for autonomous vehicles
              <br />- 1st year: Concept design of fail-safe structure for an EPS{" "}
              <br />- 2nd year: Implementation of a small demonstration system
              for testing of control algorithms
              <br />- 3rd year: Test-bed setup for validation of the fail-safe
              design <br />- 4th year: Performance evaluation and design
              improvement through lab-scale experiments
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <ListNonImage
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              left: "15%",
            }}
          >
            <SmallTitleNonImage>Research Plan</SmallTitleNonImage>
            <ListContent>
              Stage 2(Year 5 – 7): Development of AI-based lateral/longitudinal
              adaptive control technology <br /> - 5th year: Algorithm design
              for adaptive maneuver control and setup of simulation environment{" "}
              <br /> - 6th year: Development of deep Learning and adaptive
              control algorithms based on real operation-based data <br /> - 7th
              year: Application in a vehicle system and design enhancement
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <Image
            src={kangseokwon1}
            style={{
              top: "10%",
              right: "12%",
              width: "60%",
            }}
          ></Image>
        </Content>
      </StyledSlider>
    </Body>
  );
}

const Body = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: inline-block;
  /* UI Properties */
  background: #f0f0f0;
  opacity: 1;
`;
const Container = styled.div`
  position: relative;
  top: 196px;
  width: 100%;
  height: 160px;
  display: flex;
`;
const NameContainer = styled.span`
  background: #447bf7 0% 0% no-repeat padding-box;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  opacity: 1;
  width: 650px;
  height: 100%;
  display: table;
  table-layout: fixed;
`;
const TextContainer = styled.div`
  width: 70%;
  height: 100%;
  display: table;
  table-layout: fixed;
`;
const Name = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font: normal normal bold 2.5em sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const Text = styled.p`
  position: relative;
  width: auto;
  height: auto;
  white-space: nowrap;
  vertical-align: middle;
  display: table-cell;
  padding-left: 5%;
  /* UI Properties */
  font: normal normal medium 1vw sans-serif;
  letter-spacing: 0px;
  color: #818181;
`;
const Title = styled.p`
  /* Layout Properties */
  position: relative;
  display: table-cell;
  white-space: nowrap;
  vertical-align: middle;
  width: auto;
  height: 0;
  padding-top: 2%;
  /* UI Properties */
  font: normal normal bold 2.3em sans-serif;
  letter-spacing: 0px;
  color: #447bf7;
  opacity: 1;
`;

const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const SubTitle = styled.div`
  position: relative;
  top: 10px;
  display: table-cell;
  white-space: nowrap;
  vertical-align: bottom;
  font-size: 25px;
  font-weight: 400;
  color: #447bf7;
`;

const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 99;
  text-align: left;
  line-height: 30px;
  clear: both;
  display: block;
  right: 40px;
  float: right;
`;
const StyledSlider = styled((props) => <Slider {...props} />)`
  position: relative;
  width: 90%;
  top: 23%;
  left: 5%;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
  .slick-slide img {
    display: inline;
  }
`;

const PrevIcon = styled.img`
  position: relative;
  width: 51px;
  left: 50px;
  height: 51px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
`;
const NextIcon = styled.img`
  position: relative;
  display: block;
  width: 51px;
  height: 51px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
  margin-left: auto;
  display: block;
`;

const Content = styled.div`
  height: 30vw;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Image = styled.img`
  /* Layout Properties */
  position: relative;
  width: 50%;
  padding-left: 30%;
  height: auto;
  margin: 0px;
  /* UI Properties */
  opacity: 1;
`;
const SmallTitleNonImage = styled.h2`
  position: relative;
  /* UI Properties */
  text-align: left;
  letter-spacing: var(--unnamed-character-spacing-0);
  font-size: 1.1vw;
  font-family: sans-serif;
  text-align: left;
  letter-spacing: 0px;
  color: #1a1a1a;
  opacity: 1;
`;

const SmallTitle = styled.h2`
  position: relative;
  width: 100%;
  /* UI Properties */
  text-align: left;
  letter-spacing: var(--unnamed-character-spacing-0);
  font-size: 1.1vw;
  font-family: sans-serif;
  text-align: left;
  letter-spacing: 0px;
  color: #1a1a1a;
  opacity: 1;
`;

const List = styled.div`
  position: relative;
  top: 28%;
  width: 100%;
  white-space: nowrap;
  column-count: 2;
  column-gap: 0;
`;
const ListNonImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const ListContent = styled.li`
  width: 70%;
  white-space: pre-wrap;
  display: block;
  font: normal normal normal 0.9vw sans-serif;
  letter-spacing: 0px;
  line-height: 1.5vw;
  color: #606060;
  opacity: 1;
`;

export default KangSeokWon;
