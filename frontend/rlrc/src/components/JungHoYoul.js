import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrow from "../static/prevArrow.png";
import nextArrow from "../static/nextArrow.png";
import junghoyoul1 from "../static/images/junghoyoul1.png";
import junghoyoul2 from "../static/images/junghoyoul2.png";
import junghoyoul3 from "../static/images/junghoyoul3.png";
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
function JungHoYoul() {
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
        <Name>Ho-Youl Jung</Name>
        <Text>RESEARCH FIELD</Text>
        <Title>
          LiDAR/Camera Sensor Based Advanced Driving <br />
          Environment Recognition Technologies
        </Title>
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
          <ContentText>
            Various LiDAR sensors have been commercialized for autonomous
            vehicles. Very recently, solid-state type so-called the third
            generation LiDAR has been introduced. In particular, the emerging of
            multi-beam solid-states will speed up for LiDAR to be equipped in
            autonomous vehicles, due to its small dimension, low power
            consumption, and low costs. Considering camera/LiDAR Two-in-One
            systems as well as various advanced LiDARs, high-performance object
            recognition/detection technologies should be studied.
          </ContentText>
        </Content>
        <Content>
          <ContentText>
            In this research, we mainly focus on studying various key
            technologies to improve the driving environment recognition
            performances using camera/LiDAR sensors. The ultimate goal is to
            support the advanced LiDAR/camera sensor-related technologies to
            regional industries so that they can successfully commercialize
            autonomous vehicle-related assemblies. For such purposes, the
            following research items will be studied and developed in this
            project;
          </ContentText>
        </Content>
        <Content>
          <ContentText>
            Surveying recent LiDAR sensor technologies Deep-learning based
            object recognition/detection using camera/LiDAR sensors LiDAR to
            Colour/Gray image generation and its applications Integration
            technologies of camera/LiDAR sensors into vehicle assembly parts
            such as the bumper, windshield, headlamp, and rear lamp, etc.
            Installation technologies of camera/LiDAR sensors, such as camera
            and LiDAR relative pose calibration and their alignment
          </ContentText>
        </Content>
        <Content>
          <Image
            src={junghoyoul1}
            style={{
              top: "66px",
              left: "450px",
              width: "540px",
              height: "380px",
            }}
          ></Image>
        </Content>
        <Content>
          <Image
            src={junghoyoul2}
            style={{
              top: "46px",
              left: "300px",
              width: "860px",
              height: "380px",
            }}
          ></Image>
        </Content>
        <Content>
          <Image
            src={junghoyoul3}
            style={{
              top: "46px",
              left: "300px",
              width: "860px",
              height: "380px",
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
  top: 10px;
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
  top: 55px;
  left: 700px;
  width: 1050px;
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

const List = styled.div`
  position: relative;
  top: -80px;
  left: 580px;
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

const ContentText = styled.div`
  position: relative;
  top: 186px;
  left: 127px;
  width: 1250px;
  height: 160px;
  font: normal normal normal 20px/36px Roboto;
  letter-spacing: 0px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #606060;
  opacity: 1;
`;
export default JungHoYoul;
