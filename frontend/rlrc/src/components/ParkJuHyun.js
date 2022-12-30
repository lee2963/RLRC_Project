import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrow from "../static/prevArrow.png";
import nextArrow from "../static/nextArrow.png";
import parkjuhyun1 from "../static/images/parkjuhyun1.png";
import parkjuhyun2 from "../static/images/parkjuhyun2.png";
import parkjuhyun3 from "../static/images/parkjuhyun3.png";
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
        <Name>Ju Hyun Park</Name>
        <Text>RESEARCH FIELD</Text>
        <Title>Control of Autonomous Intelligent Vehicles</Title>
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
          <Image src={parkjuhyun1}></Image>
          <SmallTitle>
            Control of Active Suspension Systems (ASS) by New Control Algorithms
          </SmallTitle>
          <List>
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
          <Image src={parkjuhyun2}></Image>
          <SmallTitle>Vehicular Platooning</SmallTitle>
          <List>
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
          <SmallTitleNonImage>
            Artificial Intelligence for Vehicle Systems
          </SmallTitleNonImage>
          <ListNonImage>
            <ListContent>Analysis of models of neural networks</ListContent>
            <ListContent>Fuzzy-Neuro control systems</ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <Image
            src={parkjuhyun3}
            style={{ top: "63px", width: "336px", height: "353px" }}
          ></Image>
          <SmallTitle style={{ top: "-230px" }}>
            Cyber-Physical Systems (CPS) for Vehicles
          </SmallTitle>
          <List style={{ top: "-220px" }}>
            <ListContent>Analysis of cyber-physical systems</ListContent>
            <ListContent>Cyber security</ListContent>
            <ListContent>
              Control and applications of CPS for vehicle systems
            </ListContent>
          </List>
        </Content>
        <Content>
          <SmallTitleNonImage style={{ top: "167px" }}>
            Complex Networks
          </SmallTitleNonImage>
          <ListNonImage style={{ top: "177px" }}>
            <ListContent>
              Analysis of models of complex networks for vehicle systems
            </ListContent>
            <ListContent>Synchronization</ListContent>
          </ListNonImage>
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
  width: 260px;
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
  top: 30px;
  left: 703px;
  width: 157px;
  height: 24px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/24px Roboto;
  letter-spacing: 0px;
  color: #818181;
  opacity: 0.69;
`;
const Title = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 60px;
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
  width: 796px;
  height: 199px;
  text-align: left;
`;

const ListContent = styled.li`
  font: normal normal normal 20px/36px Roboto;
  letter-spacing: 0px;
  color: #606060;
  opacity: 1;
`;
export default ParkJuHyun;
