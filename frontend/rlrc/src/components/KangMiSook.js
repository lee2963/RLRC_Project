import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import axios from "axios";
import back from "../static/backIcon.png";
import image1 from "../static/images/kangmisook1.png";
import nextArrow from "../static/nextArrow.png";
import prevArrow from "../static/prevArrow.png";
const PreviousBtn = (props) => {
  const [thesisPosts, setThesisPosts] = useState(null);
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
function KangMiSook() {
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
      const response = await axios.get(`http://rlrc.co.kr:80/thesis/search/author?name=${encodeURIComponent("강미숙")}`);
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
          <Name>Misook Kang</Name>
        </NameContainer>
        <TextContainer>
          <Text>
            RESEARCH FIELD
            <Title>Energy material development</Title>
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
            <SmallTitleNonImage>
              Stable and efficient electrocatalysts for oxygen evolution
              reaction (OER) and
              <br /> hydrogen evolution reaction (HER)
            </SmallTitleNonImage>
            <ListContent style={{ listStyle: "none" }}>
              Development of highly active and stable bifunctional
              electrocatalysts with high inherent activity, abundant exposed
              <br />
              active sites, rapid mass transfer, and strong structure stability
              for overall water splitting reactions.
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
              Rational design of efficient electrochemical oxygen reduction
              reaction (ORR) catalysts for fuel cells
            </SmallTitleNonImage>
            <ListContent style={{}}>
              - Design of high performance and durable electrocatalysts for fuel
              cell devices in hydrogen powered vehicles
            </ListContent>
            <ListContent>
              - Transition metal alloy based electrocatalysts
            </ListContent>
            <ListContent>
              - Low platinum (Pt) or Pt-free electrocatalysts
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
              Developing large-scale, high-efficient and low-cost lithium-ion
              batteries for automobiles
            </SmallTitleNonImage>
            <ListContent style={{ width: "950px" }}>
              • Nickel rich cathode materials
            </ListContent>
            <ListContent>
              • Anode materials for lithium ion secondary battery
            </ListContent>
            <ListContent>
              • Cathode materials for sodium ion secondary battery
            </ListContent>
          </ListNonImage>
        </Content>
        <Content>
          <Image
            src={image1}
            style={{
              width: "80%",
              top: "30%",
              right: "20%",
            }}
          ></Image>
        </Content>

        <TableContent>
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
                    {thesisPosts.map((PUBLCATION, index) => {
                      return (
                        <TableRow key={PUBLCATION.id}>
                          <TableData>{index + 1}</TableData>
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
        </TableContent>
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

const TableContent = styled.div`
  width: 100 %;
  height: 30vw;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  box-sizing: border-box;
  overflow: auto;
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
  font-size: 22px/36px;
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
  font-size: 22px/36px;
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
  width: 70%;
  white-space: pre-wrap;
  display: block;
  font: normal normal normal 1vw sans-serif;
  letter-spacing: 0px;
  line-height: 1.5vw;
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
export default KangMiSook;
