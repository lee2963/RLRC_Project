import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrow from "../static/prevArrow.png";
import nextArrow from "../static/nextArrow.png";
import jeonsangmin1 from "../static/images/jeonsangmin1.png";
import jeonsangmin2 from "../static/images/jeonsangmin2.png";
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

function JeonSangMin() {
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
        <Name>Sangmin Jeon</Name>
        <Text>RESEARCH FIELD</Text>
        <Title>
          Development of Eco-friendly, Light-weight and
          <br /> Strong Nanocellulose Composite Materials
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
          <ListNonImage
            style={{
              listStyle: "none",
              left: "120px",
              top: "180px",
              width: "1250px",
            }}
          >
            <ListContent>
              Since autonomous vehicles contain heavy batteries and many
              sensors, it is important to reduce the weight of the vehicle frame
              to increase energy efficiency. Carbon fiber and glass fiber are
              widely used in fiber-reinforced composite materials to replace
              steel, but they are expensive to manufacture and emit a large
              amount of hazardous dusts when damaged in the manufacturing
              process or accident. In contrast, nature-derived nanocellulose is
              environmentally friendly​​ and light, and has a tensile modulus
              similar to that of high-strength steel.
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <Image
            src={jeonsangmin1}
            style={{ top: "110px", width: "374px", height: "281px" }}
          ></Image>
          <List
            style={{
              top: "-100px",
              left: "540px",
              listStyle: "none",
              width: "770px",
            }}
          >
            <ListContent>
              We are developing eco-friendly, lightweight and strong
              nanocellulose composite materials in two ways. A bottom-up
              approach is to extract nanocellulose from various materials such
              as wood and seaweed to fabricate nanocellulose composites. The
              composites are obtained by electrospinning, resin impregnation, or
              high-pressure extrusion processes.
            </ListContent>
          </List>
        </Content>
        <Content>
          <Image
            src={jeonsangmin2}
            style={{
              top: "110px",
              left: "170px",
              width: "384px",
              height: "243px",
            }}
          ></Image>
          <List
            style={{
              top: "-100px",
              left: "640px",
              listStyle: "none",
              width: "700px",
            }}
          >
            <ListContent>
              The top-down approach is to directly use wood containing aligned
              nanocelluloses. The mechanical strength of wood is improved by
              chemical delignification that removes the amorphous content of
              wood and resin impregnation that increases the fiber-fiber
              interactions. <br />
              With these studies, we aim to replace current automobile metal
              frames with environmentally friendly, lightweight and strong
              nanocellulose composites.
            </ListContent>
          </List>
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
  top: 5px;
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
  top: 50px;
  left: 700px;
  width: 1100px;
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
export default JeonSangMin;
