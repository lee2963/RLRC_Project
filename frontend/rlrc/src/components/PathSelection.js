import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pathSelectionImage from "../static/images/pathSelection.png";

import rightArrow from "../static/rightArrowWhite.png";
function PathSelection() {
  const navigate = useNavigate();
  return (
    <MainContaniner>
      <Container>
        <PathContainer src={pathSelectionImage}>
          <ButtonContainer>
            <Button
              style={{ width: "358px" }}
              onClick={() => {
                navigate("/ResearchOutcomesAdmin");
              }}
            >
              <Text style={{ whiteSpace: "nowrap" }}>RESEARCH OUTCOMES </Text>
              <img
                src={rightArrow}
                style={{
                  position: "relative",
                  top: "36px",
                  left: "3em",
                  width: "10px",
                  height: "18px",
                }}
              ></img>
            </Button>
            <Button
              style={{ width: "322px" }}
              onClick={() => {
                navigate("/NewNoticeAdmin");
              }}
            >
              <Text style={{ width: "169px", left: "55px", whiteSpace: "nowrap" }}>NEWS & NOTICE</Text>
              <img
                src={rightArrow}
                style={{
                  position: "relative",
                  top: "36px",
                  left: "4.3em",
                  width: "10px",
                  height: "18px",
                }}
              ></img>
            </Button>
          </ButtonContainer>
        </PathContainer>
      </Container>
    </MainContaniner>
  );
}

const MainContaniner = styled.div`

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PathContainer = styled.div`
  width: 1190px;
  height: 738px;
  /* background: #2680eb 0% 0% no-repeat padding-box; */
  background-image: url(${(props) => props.src});
  opacity: 1;
`;
const ButtonContainer = styled.div`
  position: relative;
  top: 552px;
  left: 353px;
  width: 725px;
  height: 86px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 322px;
  height: 86px;
  background: #64a3eb 0% 0% no-repeat padding-box;
  opacity: 0.34;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: none;
  font: normal normal 23px sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  display: flex;
  flex-direction: row;
`;
const Text = styled.span`
  position: relative;
  top: 27px;
  left: 37px;
  width: 243px;
  height: 27px;
  font: var(--unnamed-font-style-normal) normal 23px
    var(--unnamed-font-family-sans-serif);
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  font-weight: bold;
`;
export default PathSelection;
