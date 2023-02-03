import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import axios from "axios";
import back from "../static/backIcon.png";
import rhojunsuk1 from "../static/images/rhojunsuk1.png";
import rhojunsuk3 from "../static/images/rhojunsuk3.png";
import rhojunsuk5 from "../static/images/rhojunsuk5.png";
import rhojunsuk6 from "../static/images/rhojunsuk6.png";
import rhojunsuk7 from "../static/images/rhojunsuk7.png";
import rhojunsuk8 from "../static/images/rhojunsuk8.png";
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
function RhoJunSuk() {
  const [thesisPosts, setThesisPosts] = useState(null);

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

  const getThesisPosts = async () => {
    try {
      const response = await axios.get(`http://rlrc.co.kr:80/thesis/search/author?name=${encodeURIComponent("주상우")}`);
      setThesisPosts(response.data)
    } catch (error) {
      switch (error.response.status) {
        default:
          console.log(error);
      }
    }
  };

  useEffect(() => {
    getThesisPosts();
  }, []);

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
          <Name>Junsuk Rho</Name>
        </NameContainer>
        <TextContainer>
          <Text>
            RESEARCH FIELD
            <Title>Hologram display for vehicle</Title>
          </Text>
        </TextContainer>
      </Container>
      <StyledSlider {...settings}>
        <Content>
          <List>
            <Image src={rhojunsuk1}></Image>
            <SmallTitle style={{ right: "35%" }}>
              Multi-hologram development
            </SmallTitle>
            <ListContent
              style={{ right: "35%", width: "85%", lineHeight: "1.8" }}
            >
              1) Development of a metasurface that can independently adjust the
              wavelength (Nature Communications, 2019.)
              <br /> Exploring metasurface structures that can obtain clear
              images by controlling the dispersion of metasurfaces
            </ListContent>
          </List>
        </Content>
        <Content>
          <List style={{ top: "30%" }}>
            <Image src={rhojunsuk3} style={{ width: "50%" }}></Image>
            <ListContent
              style={{ right: "16%", width: "85%", lineHeight: "1.8" }}
            >
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
          <List style={{ top: "20%" }}>
            <Image
              src={rhojunsuk5}
              style={{ width: "30%", left: "5%" }}
            ></Image>
            <ListContent
              style={{
                listStyle: "none",
                width: "85%",
                lineHeight: "1.8",
                top: "35%",
              }}
            >
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
          <List style={{ top: "15%" }}>
            <Image src={rhojunsuk6}></Image>
            <ListContent
              style={{
                right: "35%",
                listStyle: "none",
                width: "85%",
                lineHeight: "1.8",
              }}
            >
              4) Development of a meta-hologram device that works simultaneously
              in visible and near infrared light (Advanced Optical Materials,
              2021) <br />
              By grouping metasurfaces using heterogeneous meta-atoms of
              different materials, functional pixels operate simultaneously in
              visible and near-infrared (NIR) bands. When visible and NIR lasers
              are simply illuminated on the metasurface device, a green
              holographic image that can be observed with the naked eye and a
              NIR hologram image that cannot be seen.
            </ListContent>
          </List>
        </Content>
        <Content>
          <List style={{ top: "30%" }}>
            <Image src={rhojunsuk7} style={{ top: "30%" }}></Image>
            <SmallTitle>
              2. Development of hologram production technology
            </SmallTitle>
            <ListContent
              style={{
                top: "30%",
                listStyle: "none",
                lineHeight: "1.5",
              }}
            >
              1) Development of high-efficiency metasurface mass production
              technology using nanoimprint (Nature Communications, 2020) <br />
              One-step nanoimprinting technology for mass production of metalens
              was developed. The effectiveness of fabrication was maximized by
              directly forming a polymer in which nanoparticles are uniformly
              mixed, without the existing semiconductor processes such as thin
              film deposition and etching.
            </ListContent>
          </List>
        </Content>
        <Content>
          <List style={{ top: "20%" }}>
            <Image src={rhojunsuk8}></Image>
            <ListContent
              style={{
                listStyle: "none",
                top: "30%",
                lineHeight: "1.8",
                width: "90%",
              }}
            >
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
        <Content>
          <TableContainer>
            <Table border={1}>
              <tbody>
                <TableTitle>
                  <TableTitleData style={{ width: "5%" }}>No</TableTitleData>
                  <TableTitleData style={{ width: "6%" }}>Year</TableTitleData>
                  <TableTitleData style={{ width: "30%" }}> Title</TableTitleData>
                  <TableTitleData style={{ width: "16%" }}>Authors</TableTitleData>
                  <TableTitleData style={{ width: "16%" }}>Journal</TableTitleData>
                  <TableTitleData style={{ width: "8%" }}>IF</TableTitleData>
                  <TableTitleData style={{ width: "8%" }}>JCR</TableTitleData>
                  <TableTitleData style={{ width: "8%" }}>DOI</TableTitleData>
                </TableTitle>
                {thesisPosts && (
                  <>
                    {thesisPosts.content.map((PUBLCATION) => {
                      return (
                        <TableRow key={PUBLCATION.id}>
                          <TableData>{PUBLCATION.id}</TableData>
                          <TableData>{PUBLCATION.year}</TableData>
                          <TableData style={{ maxWidth: "300px" }}>
                            {PUBLCATION.title}
                          </TableData>
                          <TableData>{PUBLCATION.authors}</TableData>
                          <TableData>{PUBLCATION.journal}</TableData>
                          <TableData>{PUBLCATION.iif}</TableData>
                          <TableData>{PUBLCATION.jcr}</TableData>
                          <TableData><a href={PUBLCATION.doi}>{PUBLCATION.doi}</a></TableData>
                        </TableRow>
                      );
                    })}
                  </>
                )}
              </tbody>
            </Table>
          </TableContainer>
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
  font: normal normal bold 2.5em sans-serif;
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
  width: 30%;
  padding-left: 30%;
  height: auto;
  margin: 0px;
  /* UI Properties */
  opacity: 1;
`;

const SmallTitle = styled.h2`
  position: relative;
  right: 30%;
  top: 25%;
  padding: 0;
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
const List = styled.div`
  position: relative;
  top: 28%;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  column-count: 2;
  column-gap: 0;
`;

const ListContent = styled.li`
  position: relative;
  right: 30%;
  top: 25%;
  width: auto;
  white-space: pre-wrap;
  display: block;
  padding-bottom: 10px;
  font: normal normal normal 0.9vw sans-serif;
  letter-spacing: 0px;
  color: #606060;
  opacity: 1;
`;

const TableContainer = styled.div`
  width: 80%;
  height: 80%;
  box-sizing: border-box;
  margin-top: 3.8%;
  margin-left: 12%;
`;

const Table = styled.table`
  width: 100%;
  height: auto;
  opacity: 1;
  border-spacing: 0px;
  border: 0px;
  table-layout: fixed;
  word-break : break-all; 
`;
const TableTitle = styled.tr`
  height: 84px;
  text-align: center;
  vertical-align: middle;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  opacity: 1;
  font: var(--unnamed-font-style-normal) normal medium 20px /
    var(--unnamed-line-spacing-28) var(--unnamed-font-family-sans-serif);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal bold 20px/28px sans-serif;
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
const TableTitleData = styled.td`
  // border-bottom: 1px solid #b4b4b4;
  // border-left: 1px solid #dfdcdc;
  // border-right: 1px solid #dfdcdc;
  white-space: pre-line;
  // padding: 10px;
`;
const TableData = styled.td`
  border-bottom: 1px solid #b4b4b4;
  padding: 10px;
  border-right: none;
  white-space: pre-line;

  & > a:visited {
    color: blueviolet;
  }
`;
export default RhoJunSuk;
