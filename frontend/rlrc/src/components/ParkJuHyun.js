import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import back from "../static/backIcon.png";
import parkjuhyun1 from "../static/images/parkjuhyun1.png";
import parkjuhyun2 from "../static/images/parkjuhyun2.png";
import parkjuhyun3 from "../static/images/parkjuhyun3.png";
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
function ParkJuHyun() {
  const navigate = useNavigate();
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
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={back} style={{ height: "30px", width: "20px" }}></img>
      </BackButton>
      <Container>
        <NameContainer>
          <Name>Ju Hyun Park</Name>
        </NameContainer>
        <TextContainer>
          <Text>
            RESEARCH FIELD
            <Title>Control of Autonomous Intelligent Vehicles</Title>
          </Text>
        </TextContainer>
      </Container>
      <StyledSlider {...settings}>
        <Content>
          <List>
            <Image src={parkjuhyun1} style={{ width: "70%" }}></Image>
            <SmallTitle>
              Control of Active Suspension Systems (ASS) by New Control
              Algorithms
            </SmallTitle>
            <ListContent>New models of ASS</ListContent>
            <ListContent>
              Varying vehicle load and frequency-domain constraint,
              <br /> (NonlinearDynamics, Vol. 105, 2021).
            </ListContent>
            <ListContent>
              Sliding mode control and event-triggered control, (Nonlinear
              Dynamics, Vol. 103, 2021).
            </ListContent>
            <ListContent>
              Nonfragile fault-tolerant control, (Int. J. Robust Nonl. Contr.,
              Vol. 30, 2020).
            </ListContent>
          </List>
        </Content>
        <Content>
          <List style={{ top: "35%" }}>
            <Image src={parkjuhyun2} style={{ width: "70%" }}></Image>
            <SmallTitle>Vehicular Platooning</SmallTitle>
            <ListContent>Leader-followers consensus problem.</ListContent>
            <ListContent>
              Neuroadaptive fault-tolerant control, (IEEETr.
              IntelligentTransport. Sys., Accepted, 2021).
            </ListContent>
            <ListContent>
              Sliding mode control and event-triggered control, (Nonlinear
              Dynamics, Vol. 103, 2021).
            </ListContent>
            <ListContent>
              SMC control for spacing constraints and unknown direction faults,
              <br />
              (Automatica, Vol. 129, 2021).
            </ListContent>
          </List>
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
              Artificial Intelligence for Vehicle Systems
            </SmallTitleNonImage>
            <ListContent style={{ top: "-1%" }}>
              Analysis of models of neural networks
            </ListContent>
            <ListContent style={{ top: "-1%" }}>
              Fuzzy-Neuro control systems
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <List style={{ top: "10%", left: "8%" }}>
            <Image src={parkjuhyun3} style={{ width: "50%" }}></Image>
            <SmallTitle style={{ top: "32%", right: "10%" }}>
              Cyber-Physical Systems (CPS) for Vehicles
            </SmallTitle>
            <ListContent style={{ top: "32%", right: "10%" }}>
              Analysis of cyber-physical systems
            </ListContent>
            <ListContent style={{ top: "32%", right: "10%" }}>
              Cyber security
            </ListContent>
            <ListContent style={{ top: "32%", right: "10%" }}>
              Control and applications of CPS for vehicle systems
            </ListContent>
          </List>
        </Content>
        <Content>
          <ListNonImage
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              left: "15%",
            }}
          >
            <SmallTitleNonImage>Complex Networks</SmallTitleNonImage>
            <ListContent style={{ top: "-1%" }}>
              Analysis of models of complex networks for vehicle systems
            </ListContent>
            <ListContent style={{ top: "-1%" }}>Synchronization</ListContent>
          </ListNonImage>
        </Content>
      </StyledSlider>
    </Body>
  );
}
const BackButton = styled.button`
  position: absolute;
  top: 86px;
  left: 150px;
  background-color: transparent;
  border-width: 0px;
`;
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
  font: normal normal normal 1.5rem sans-serif;
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
  font: normal normal bold 3rem sans-serif;
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
  width: 60%;
  padding-left: 20%;
  height: auto;
  margin: 0px;
  /* UI Properties */
  opacity: 1;
`;

const SmallTitle = styled.h2`
  position: relative;
  top: 5%;
  width: auto;
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

const List = styled.div`
  position: relative;
  top: 28%;
  width: 100%;
  white-space: nowrap;
  column-count: 2;
  column-gap: 0;
`;

const ListContent = styled.li`
  position: relative;
  top: 5%;
  width: auto;
  white-space: pre-wrap;
  padding-bottom: 10px;
  font: normal normal normal 0.9vw sans-serif;
  letter-spacing: 0px;
  color: #606060;
  opacity: 1;
`;

const ListContentWithImage = styled.li`
  position: relative;
  width: 85%;
  right: 10%;
  top: 30%;
  height: auto;
  white-space: pre-wrap;
  display: block;
  font: normal normal normal 1vw sans-serif;
  letter-spacing: 0px;
  line-height: 1.5vw;
  color: #606060;
  opacity: 1;
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
export default ParkJuHyun;
