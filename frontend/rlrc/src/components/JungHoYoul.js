import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import back from "../static/back.png";
import junghoyoul1 from "../static/images/junghoyoul1.png";
import junghoyoul2 from "../static/images/junghoyoul2.png";
import junghoyoul3 from "../static/images/junghoyoul3.png";
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
function JungHoYoul() {
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
        <img src={back} style={{ height: "36px", width: "36px" }}></img>
      </BackButton>
      <Container>
        <NameContainer>
          <Name>Ho-Youl Jung</Name>
        </NameContainer>
        <TextContainer>
          <Text>
            RESEARCH FIELD
            <Title>
              LiDAR/Camera Sensor Based Advanced Driving <br />
              Environment Recognition Technologies
            </Title>
          </Text>
        </TextContainer>
      </Container>
      <StyledSlider {...settings}>
        <Content>
          <ListNonImage>
            <ListContent>
              Various LiDAR sensors have been commercialized for autonomous
              vehicles. Very recently, solid-state type so-called the third
              generation LiDAR has been introduced. In particular, the emerging
              of multi-beam solid-states will speed up for LiDAR to be equipped
              in autonomous vehicles, due to its small dimension, low power
              consumption, and low costs. Considering camera/LiDAR Two-in-One
              systems as well as various advanced LiDARs, high-performance
              object recognition/detection technologies should be studied.
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <ListNonImage>
            <ListContent>
              In this research, we mainly focus on studying various key
              technologies to improve the driving environment recognition
              performances using camera/LiDAR sensors. The ultimate goal is to
              support the advanced LiDAR/camera sensor-related technologies to
              regional industries so that they can successfully commercialize
              autonomous vehicle-related assemblies. For such purposes, the
              following research items will be studied and developed in this
              project;
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <ListNonImage>
            <ListContent>
              Surveying recent LiDAR sensor technologies Deep-learning based
              object recognition/detection using camera/LiDAR sensors LiDAR to
              Colour/Gray image generation and its applications Integration
              technologies of camera/LiDAR sensors into vehicle assembly parts
              such as the bumper, windshield, headlamp, and rear lamp, etc.
              Installation technologies of camera/LiDAR sensors, such as camera
              and LiDAR relative pose calibration and their alignment
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <Content>
            <Image
              src={junghoyoul1}
              style={{ width: "40%", top: "10%", right: "3%" }}
            ></Image>
          </Content>
        </Content>
        <Content>
          <Image src={junghoyoul2} style={{ top: "13%", right: "7%" }}></Image>
        </Content>
        <Content>
          <Image
            src={junghoyoul3}
            style={{
              top: "25%",
              right: "10%",
              width: "60%",
            }}
          ></Image>
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
  font-family: sans-serif;
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
  width: 70%;
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
export default JungHoYoul;
