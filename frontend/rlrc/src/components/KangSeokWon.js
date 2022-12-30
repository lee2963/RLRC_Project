import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrow from "../static/prevArrow.png";
import nextArrow from "../static/nextArrow.png";
import kangseokwon1 from "../static/images/kangseokwon1.png";
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
        <Name>Seokwon Kang</Name>
        <Text>RESEARCH FIELD</Text>
        <Title>
          Lateral and Longitudinal Adaptive Control <br />
          Technology for Autonomous Vehicle
        </Title>
        <SubTitle>
          (DMP: Fail-safe Steering and AI-based Control Considering Vehicle
          Status and Road Conditions)
        </SubTitle>
      </Container>
      <StyledSlider
        {...settings}
        style={{
          position: "absolute",
          top: "500px",
          left: "200px",
          width: "1508px",
          height: "480px",
          opacity: 1,
          backgroundColor: "white",
        }}
      >
        <Content>
          <SmallTitleNonImage style={{ top: "120px" }}>
            Research Target
          </SmallTitleNonImage>
          <ListNonImage style={{ top: "125px", listStyle: "none" }}>
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
          <SmallTitleNonImage style={{ top: "100px" }}>
            Novelty and Difficulty of Technical Approach
          </SmallTitleNonImage>
          <ListNonImage
            style={{ top: "105px", width: "1000px", listStyle: "none" }}
          >
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
          <SmallTitleNonImage style={{ top: "80px" }}>
            Research Progress
          </SmallTitleNonImage>
          <ListNonImage
            style={{ top: "85px", width: "1000px", listStyle: "none" }}
          >
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
          <SmallTitleNonImage style={{ top: "100px" }}>
            Research Plan
          </SmallTitleNonImage>
          <ListNonImage
            style={{ top: "105px", width: "1000px", listStyle: "none" }}
          >
            <ListContent>
              Stage 1 (Year 1 – 4): Design of a fail-safe control algorithm for
              an EPS for autonomous vehicles
              <br /> - 1st year: Concept design of fail-safe structure for an
              EPS <br />- 2nd year: Implementation of a small demonstration
              system for testing of control algorithms
              <br /> - 3rd year: Test-bed setup for validation of the fail-safe
              design <br /> - 4th year: Performance evaluation and design
              improvement through lab-scale experiments
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <SmallTitleNonImage style={{ top: "110px" }}>
            Research Plan
          </SmallTitleNonImage>
          <ListNonImage
            style={{ top: "115px", width: "1000px", listStyle: "none" }}
          >
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
              top: "50px",
              left: "290px",
              width: "887px",
              height: "374px",
            }}
          ></Image>
        </Content>
      </StyledSlider>
    </Body>
  );
}

const Body = styled.main`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1149px;
  /* UI Properties */
  background: #f0f0f0 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Container = styled.div`
  position: absolute;
  top: 196px;
  left: -68px;
  width: 643px;
  height: 160px;

  /* UI Properties */
  background: #447bf7 0% 0% no-repeat padding-box;
  border-radius: 80px;
  opacity: 1;
`;
const Name = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 60px;
  left: 280px;
  width: 280px;
  height: 47px;
  /* UI Properties */
  text-align: left;
  font: normal normal bold 40px/47px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const Text = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 0px;
  left: 703px;
  width: 190px;
  height: 24px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium Roboto;
  font-size: 25px;
  letter-spacing: 0px;
  color: #818181;
  opacity: 0.69;
`;
const Title = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 30px;
  left: 700px;
  width: 967px;
  height: 58px;
  /* UI Properties */
  text-align: left;
  font: normal normal bold 50px/58px Roboto;
  letter-spacing: 0px;
  color: #447bf7;
  opacity: 1;
`;
const SubTitle = styled.div`
  position: absolute;
  top: 150px;
  left: 700px;
  width: 1078px;
  height: 48px;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal Roboto;
  font-size: 25px;
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
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;
const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
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
  position: absolute;
  left: 1410px;
  width: 51px;
  height: 51px;
  background: 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
`;

const Content = styled.div`
  width: 1508px;
  height: 480px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Image = styled.img`
  /* Layout Properties */
  position: relative;
  top: 140px;
  left: 121px;
  width: 404px;
  height: 213px;
  /* UI Properties */
  opacity: 1;
`;
const SmallTitleNonImage = styled.h2`
  position: relative;
  top: 196px;
  left: 228px;
  width: 768px;
  height: 25px;
  /* UI Properties */
  text-align: left;
  letter-spacing: var(--unnamed-character-spacing-0);
  font-size: 22px/36px;
  font-family: Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #1a1a1a;
  opacity: 1;
`;

const SmallTitle = styled.h2`
  position: relative;
  top: -100px;
  left: 580px;
  width: 768px;
  height: 25px;
  /* UI Properties */
  text-align: left;
  letter-spacing: var(--unnamed-character-spacing-0);
  font-size: 22px/36px;
  font-family: Roboto;
  text-align: left;
  letter-spacing: 0px;
  color: #1a1a1a;
  opacity: 1;
`;

const List = styled.div`
  position: relative;
  top: -80px;
  left: 580px;
  width: 796px;
  height: 199px;
  text-align: left;
`;
const ListNonImage = styled.div`
  position: relative;
  top: 205px;
  left: 228px;
  width: 950px;
  height: 199px;
  text-align: left;
`;

const ListContent = styled.li`
  font: normal normal normal 20px/36px Roboto;
  letter-spacing: 0px;
  color: #606060;
  opacity: 1;
`;
export default KangSeokWon;
