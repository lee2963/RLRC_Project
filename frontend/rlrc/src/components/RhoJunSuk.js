import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import prevArrow from "../static/prevArrow.png";
import nextArrow from "../static/nextArrow.png";
import rhojunsuk1 from "../static/images/rhojunsuk1.png";
import rhojunsuk2 from "../static/images/rhojunsuk2.png";
import rhojunsuk3 from "../static/images/rhojunsuk4.png";
import rhojunsuk4 from "../static/images/rhojunsuk3.png";
import rhojunsuk5 from "../static/images/rhojunsuk5.png";
import rhojunsuk6 from "../static/images/rhojunsuk6.png";
import rhojunsuk7 from "../static/images/rhojunsuk7.png";
import rhojunsuk8 from "../static/images/rhojunsuk8.png";
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
function RhoJunSuk() {
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
        <Name>Junsuk Rho</Name>
        <Text>RESEARCH FIELD</Text>
        <Title>Hologram display for vehicle</Title>
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
          <Image
            src={rhojunsuk1}
            style={{
              left: "200px",
              top: "50px",
              width: "330px",
              height: "180px",
            }}
          ></Image>
          <Image
            src={rhojunsuk2}
            style={{
              left: "200px",
              top: "70px",
              width: "330px",
              height: "180px",
            }}
          ></Image>
          <SmallTitle style={{ top: "-230px", left: "580px" }}>
            Multi-hologram development
          </SmallTitle>
          <List
            style={{
              top: "-220px",
              left: "580px",
              width: "850px",
              listStyle: "none",
            }}
          >
            <ListContent>
              1) Development of a metasurface that can independently adjust the
              wavelength (Nature Communications, 2019.)
              <br /> Exploring metasurface structures that can obtain clear
              images by controlling the dispersion of metasurfaces
            </ListContent>
          </List>
        </Content>
        <Content>
          <Image
            src={rhojunsuk3}
            style={{
              left: "200px",
              top: "140px",
              width: "202px",
              height: "220px",
            }}
          ></Image>
          <Image
            src={rhojunsuk4}
            style={{
              top: "-80px",
              left: "415px",
              width: "202px",
              height: "220px",
            }}
          ></Image>
          <List
            style={{
              top: "-270px",
              left: "650px",
              width: "700px",
            }}
          >
            <ListContent style={{ listStyle: "none" }}>
              2) Development of a device that generates multi-holographic images
              (Nanoscale Horizons, 2020.) One type of metasurface is charged
              with phase information encoded when light travels forward, while
              another type of metasurface works when light travels backwards.
              Then different holographic images are generated in both directions
              according to the direction.
            </ListContent>
          </List>
        </Content>
        <Content>
          <Image
            src={rhojunsuk5}
            style={{
              top: "70px",
              left: "220px",
              width: "250px",
              height: "370px",
            }}
          ></Image>
          <List
            style={{
              top: "-180px",
              left: "500px",
              width: "700px",
            }}
          >
            <ListContent style={{ listStyle: "none", width: "850px" }}>
              3) Developing an active hologram that responds to voltage,
              temperature and touch (Advanced Materials, 2020) An active
              holographic optical device combined with a liquid crystal-based
              optical modulator was developed. Depending on the type of liquid
              crystal modulator used, it is possible to implement a system that
              responds to various external stimuli.
            </ListContent>
          </List>
        </Content>
        <Content>
          <Image
            src={rhojunsuk6}
            style={{
              top: "60px",
              left: "200px",
              width: "250px",
              height: "370px",
            }}
          ></Image>
          <List
            style={{
              top: "-220px",
              left: "500px",
              width: "700px",
            }}
          >
            <ListContent style={{ listStyle: "none", width: "800px" }}>
              4) Development of a meta-hologram device that works simultaneously
              in visible and near infrared light (Advanced Optical Materials,
              2021) By grouping metasurfaces using heterogeneous meta-atoms of
              different materials, functional pixels operate simultaneously in
              visible and near-infrared (NIR) bands. When visible and NIR lasers
              are simply illuminated on the metasurface device, a green
              holographic image that can be observed with the naked eye and a
              NIR hologram image that cannot be seen.
            </ListContent>
          </List>
        </Content>
        <Content>
          <Image
            src={rhojunsuk7}
            style={{
              width: "354px",
              height: "190px",
              left: "200px",
            }}
          ></Image>
          <SmallTitle style={{ left: "600px", top: "-85px" }}>
            2. Development of hologram production technology
          </SmallTitle>
          <List
            style={{
              listStyle: "none",
              left: "600px",
              top: "-65px",
              width: "750px",
            }}
          >
            <ListContent>
              1) Development of high-efficiency metasurface mass production
              technology using nanoimprint (Nature Communications, 2020)
              One-step nanoimprinting technology for mass production of metalens
              was developed. The effectiveness of fabrication was maximized by
              directly forming a polymer in which nanoparticles are uniformly
              mixed, without the existing semiconductor processes such as thin
              film deposition and etching.
            </ListContent>
          </List>
        </Content>
        <Content>
          <Image
            src={rhojunsuk8}
            style={{
              top: "60px",
              left: "200px",
              width: "250px",
              height: "370px",
            }}
          ></Image>
          <List
            style={{
              top: "-220px",
              left: "500px",
              width: "700px",
            }}
          >
            <ListContent style={{ listStyle: "none", width: "800px" }}>
              2) Identification of structural disorder of hydrogenated amorphous
              silicon for fabrication of photonic platform with low loss at
              visible light frequency (Nature Nanotechnology, 2020) By lowering
              the extinction coefficient, the Si:H bonding configuration was
              investigated to synthesize an optical material that is competitive
              even compared to conventional transparent materials such as
              titanium dioxide and gallium nitride. The high refractive index of
              hydrogenated amorphous silicon (a-Si:H) at optical frequencies is
              an essential property for efficiently modulating the phase and
              amplitude of light.
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
  top: 15px;
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
export default RhoJunSuk;
